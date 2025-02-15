export const maskEmail = (email: string) => {
  if (!email) return '';

  const [localPart, domain] = email.split('@');

  if (!domain) return email;

  let maskedLocal;
  if (localPart.length <= 1) {
    maskedLocal = localPart;
  } else {
    maskedLocal = `${localPart[0]}${'*'.repeat(localPart.length - 1)}`;
  }

  const maskedDomain = `${domain[0]}${'*'.repeat(domain.length - 1)}`;

  return `${maskedLocal}@${maskedDomain}`;
};
