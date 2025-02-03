const commitTypes = Object.freeze([
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test',
  'translation',
  'security',
  'changeset'
]);

const Configuration = Object.freeze({
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'], // Enforce blank line before body
    'body-max-line-length': [2, 'always', 100], // Enforce max length of 100
    'footer-leading-blank': [2, 'always'], // Enforce blank line before footer
    'footer-max-line-length': [2, 'always', 100], // Enforce footer max length
    'header-max-length': [2, 'always', 100], // Limit commit header to 100 chars
    'scope-case': [2, 'always', 'lower-case'], // Ensure scope is lowercase
    'subject-case': [2, 'always', 'lower-case'], // Enforce lowercase subject
    'subject-empty': [2, 'never'], // Prevent empty commit messages
    'subject-full-stop': [2, 'never', '.'], // No full stops at the end
    'type-case': [2, 'always', 'lower-case'], // Ensure type is lowercase
    'type-empty': [2, 'never'], // Prevent empty commit type
    'type-enum': [2, 'always', commitTypes] // Restrict commit types to predefined list
  }
});

export default Configuration;
