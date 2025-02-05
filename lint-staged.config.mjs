export const lintStagedConfig = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
    'tsc-files --noEmit'
  ],
  '*.{md,json}': 'prettier --write'
};
