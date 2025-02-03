import { ComponentProps } from 'react';

export const Logo = (props: ComponentProps<'svg'>) => (
  <svg
    role="img"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1_7)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2H14L12 8L14 14H2L4 8L2 2Z"
        fill="#121417"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_7">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
