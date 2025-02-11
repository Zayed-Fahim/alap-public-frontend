'use client';
import {
  Button,
  CustomLink,
  Input,
  Label,
  ResponseMessage,
  Spinner,
  Text
} from '@/components/ui';
import { emailRegex, EyeOn, EyeOff, passwordRegex } from '@/constants';
import { useCreateUser } from '@/hooks';
import { IRegisterProps } from '@/types/input';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const schema = Joi.object({
  fullName: Joi.string().required().messages({
    'string.empty': 'Full name is required.'
  }),
  email: Joi.string()
    .regex(emailRegex)
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'string.email': 'Enter a valid email.',
      'string.empty': 'Email is required.'
    }),
  password: Joi.string()
    .regex(passwordRegex)
    .min(6)
    .max(12)
    .required()
    .messages({
      'string.min': 'Password must be at least 6 characters long.',
      'string.max': 'Password must be at most 12 characters long.',
      'string.pattern.base':
        'Password must contain at least one uppercase letter, one number, and one special character.',
      'string.empty': 'Password is required.'
    }),
  cPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'string.empty': 'Confirm Password is required.',
    'any.only': 'Confirm Password does not match.'
  })
});

export const RegisterForm: React.FC = () => {
  const [createUser, { data, loading, error }] = useCreateUser();
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    cPassword: false
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm<IRegisterProps>({
    resolver: joiResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      cPassword: ''
    }
  });

  const togglePasswordVisibility = (field: 'password' | 'cPassword') => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const onSubmit: SubmitHandler<IRegisterProps> = async (
    data: IRegisterProps
  ) => {
    try {
      const newData = {
        fullName: data.fullName,
        email: data.email,
        password: data.password
      };
      await createUser({
        variables: {
          createUserInput: {
            ...newData
          }
        }
      });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  console.log({ data, error });
  return (
    <form
      className="flex flex-col w-full max-w-[550px] items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full py-3">
        <Label htmlFor="name" className="flex flex-col w-full">
          <Text text="Full Name" className="pb-1 font-medium" />
          <Input
            id="text"
            type="text"
            placeholder="John Doe"
            className="w-full h-12"
            {...register('fullName')}
            error={!!errors.fullName}
          />
        </Label>
        {errors.fullName && (
          <ResponseMessage
            message={errors?.fullName?.message as string}
            type="error"
            className="pl-2 pt-1"
          />
        )}
      </div>
      <div className="w-full py-3">
        <Label htmlFor="email" className="flex flex-col w-full">
          <Text text="Email" className="pb-1 font-medium" />
          <Input
            id="email"
            type="email"
            placeholder="example@domain.com"
            className="w-full h-12"
            {...register('email')}
            error={!!errors.email}
          />
        </Label>
        {errors.email && (
          <ResponseMessage
            message={errors?.email?.message as string}
            type="error"
            className="pl-2 pt-1"
          />
        )}
      </div>

      <div className="w-full py-3">
        <Label htmlFor="password" className="flex flex-col w-full">
          <Text text="Password" className="pb-1 font-medium" />
          <div className="relative">
            <Input
              id="password"
              type={passwordVisibility.password ? 'text' : 'password'}
              placeholder="Enter your password"
              className="w-full h-12"
              {...register('password')}
              error={!!errors.password}
            />
            {passwordVisibility.password ? (
              <EyeOn
                onClick={() => togglePasswordVisibility('password')}
                className="w-6 h-6 text-secondary-text absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              />
            ) : (
              <EyeOff
                onClick={() => togglePasswordVisibility('password')}
                className="w-6 h-6 text-secondary-text absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              />
            )}
          </div>
        </Label>
        {errors.password && (
          <ResponseMessage
            message={errors?.password?.message as string}
            type="error"
            className="pl-2 pt-1"
          />
        )}
      </div>
      <div className="w-full py-3">
        <Label htmlFor="cPassword" className="flex flex-col w-full">
          <Text text="Confrim Password" className="pb-1 font-medium" />
          <div className="relative">
            <Input
              id="cPassword"
              type={passwordVisibility.cPassword ? 'text' : 'password'}
              placeholder="Enter confirm password"
              className="w-full h-12"
              {...register('cPassword')}
              error={!!errors.cPassword}
            />
            {passwordVisibility.cPassword ? (
              <EyeOn
                onClick={() => togglePasswordVisibility('cPassword')}
                className="w-6 h-6 text-secondary-text absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              />
            ) : (
              <EyeOff
                onClick={() => togglePasswordVisibility('cPassword')}
                className="w-6 h-6 text-secondary-text absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              />
            )}
          </div>
        </Label>
        {errors.cPassword && (
          <ResponseMessage
            message={errors?.cPassword?.message as string}
            type="error"
            className="pl-2 pt-1"
          />
        )}
      </div>

      <div className="w-full h-12 my-3">
        <Button variant="primary" className="w-full h-full" disabled={loading}>
          {loading ? (
            <Spinner className="w-6 h-6 border-2 border-white" />
          ) : (
            'Sign up'
          )}
        </Button>
      </div>

      <div className="text-sm text-secondary-text pt-4">
        <span>Already have an account?</span>{' '}
        <CustomLink href="/login" className="underline">
          Sign in
        </CustomLink>
      </div>

      <Text
        text="Or sign up with"
        className="text-secondary-text text-sm pt-4 text-center"
      />
    </form>
  );
};
