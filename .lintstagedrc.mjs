export const lintStagedConfig = {
  '**/*.(ts|tsx|js)': ['yarn eslint --cache --fix', 'yarn prettier --write'],
  '**/*.(md|json)': 'yarn prettier --write',
  '**/*.(ts|tsx)': 'yarn tsc --noEmit'
};
