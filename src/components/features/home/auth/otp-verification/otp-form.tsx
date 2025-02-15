'use client';
import { Button, Input, Spinner, Text } from '@/components/ui';
import { config } from '@/config/env';
import { AuthContext } from '@/contexts';
import { useCreateUser } from '@/lib/hooks';
import { encrypt, fetcher } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useCallback, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const OtpForm: React.FC = () => {
  const router = useRouter();
  const [createUser] = useCreateUser();
  const authContext = useContext(AuthContext);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [resendCountDown, setResendCountDown] = useState<number>(
    config.otpResendTime
  );
  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(''));
  const [isResending, setIsResending] = useState<boolean>(false);

  useEffect(() => {
    if (resendCountDown > 0) {
      const timer = setInterval(
        () => setResendCountDown((prev) => prev - 1),
        1000
      );
      return () => clearInterval(timer);
    }
  }, [resendCountDown]);

  const handleInputChange = useCallback(
    (index: number, value: string) => {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 1) value = value[0];

      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      if (value && index < 5) {
        const nextInput = document.getElementById(
          `otp-${index + 1}`
        ) as HTMLInputElement;
        nextInput?.focus();
      }

      const newOtp = newOtpValues.join('');
      setDisabled(newOtp.length !== 6);
    },
    [otpValues]
  );

  const handlePaste = useCallback(
    (event: React.ClipboardEvent<HTMLInputElement>) => {
      event.preventDefault();
      const pastedText = event.clipboardData.getData('text').trim();
      const digits = pastedText.split('').slice(0, 6);

      const newOtpValues = [...otpValues];
      digits.forEach((digit, i) => {
        newOtpValues[i] = digit;
      });
      setOtpValues(newOtpValues);

      if (digits.length === 6) {
        const lastInput = document.getElementById(`otp-5`) as HTMLInputElement;
        lastInput?.focus();
      }

      const newOtp = newOtpValues.join('');
      setDisabled(newOtp.length !== 6);
    },
    [otpValues]
  );

  const verifyOtp = useCallback(async () => {
    try {
      const otp = otpValues.join('');
      const res: { data: string[] } = await fetcher(
        'POST',
        `${config.apiCommunicationBaseUrl}/otp/verify`,
        {
          email: authContext!.userInfo.email,
          otpCode: parseInt(otp)
        }
      );
      toast.success(res.data[0]);
      return true;
    } catch (error) {
      console.log({ error });
      if (error instanceof Error) toast.error(error.message);
      return false;
    }
  }, [authContext, otpValues]);

  const createNewUser = useCallback(async () => {
    try {
      const res = await createUser({
        variables: {
          createUserInput: {
            email: authContext!.userInfo.email,
            fullName: authContext!.userInfo.fullName,
            password: authContext!.userInfo.password,
            isEmailVerified: true
          }
        }
      });
      return res.data?.createUser;
    } catch (error) {
      console.log({ error });
      if (error instanceof Error)
        toast.error(`User creation failed: ${error.message}`);
      return null;
    }
  }, [authContext, createUser]);

  const handleVerifyOtp = useCallback(async () => {
    try {
      authContext!.setLoading(true);

      const isOtpValid = await verifyOtp();
      if (!isOtpValid) return;

      const user = await createNewUser();
      if (!user) return;

      router.push(
        `/setup-profile?ref=${encrypt({ _id: user._id, email: user.email }, 32)}`
      );
    } catch (error) {
      console.log({ error });
      if (error instanceof Error) toast.error(error.message);
    } finally {
      authContext!.setLoading(false);
    }
  }, [authContext, verifyOtp, createNewUser, router]);

  const handleResendOtp = useCallback(async () => {
    if (isResending) return;

    try {
      setIsResending(true);
      const res: { data: string[] } = await fetcher(
        'POST',
        `${config.apiCommunicationBaseUrl}/otp/resend`,
        {
          email: authContext!.userInfo.email,
          fullName: authContext!.userInfo.fullName
        }
      );
      toast.success(res.data[0]);
      setResendCountDown(config.otpResendTime);
    } catch (error) {
      console.log({ error });
      if (error instanceof Error) toast.error(error.message);
    } finally {
      setIsResending(false);
    }
  }, [authContext, isResending]);

  return (
    <>
      <fieldset className="flex gap-x-3 py-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Input
            id={`otp-${index}`}
            key={index}
            className="h-14 w-14 text-center bg-secondary"
            type="number"
            max={1}
            min={0}
            value={otpValues[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onPaste={handlePaste}
            onKeyDown={(e) => {
              if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
                const prevInput = document.getElementById(
                  `otp-${index - 1}`
                ) as HTMLInputElement;
                prevInput?.focus();
              }
            }}
          />
        ))}
      </fieldset>
      <div className="flex py-3 justify-between items-center">
        {resendCountDown > 0 ? (
          <Text
            text={`Resend in ${resendCountDown}s`}
            className="text-secondary-text text-sm font-medium leading-normal"
          />
        ) : (
          <Button
            className="text-sm text-secondary-text font-medium leading-normal hover:underline"
            onClick={handleResendOtp}
            disabled={isResending}
          >
            {isResending ? 'Resending...' : 'Resend code'}
          </Button>
        )}

        <Button
          variant="primary"
          className="h-10"
          disabled={disabled || authContext!.loading}
          onClick={handleVerifyOtp}
        >
          {authContext!.loading ? (
            <Spinner className="w-6 h-6 border-2 border-white animate-spin" />
          ) : (
            'Verify'
          )}
        </Button>
      </div>
    </>
  );
};
