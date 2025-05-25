module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'body-min-length': [2, 'always', 20],
    'body-max-line-length': [2, 'always', 72],
    'header-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
    'subject-case': [
      2,
      'always',
      ['sentence-case', 'start-case', 'pascal-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'perf',
        'ci',
        'revert'
      ]
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'footer-leading-blank': [1, 'always']
  },
  helpUrl:
    'Please follow the commit message format:\n' +
    'Type(scope?): Subject\n\n' +
    'Body (min 20 chars)\n\n' +
    'Allowed Types: feat, fix, docs, style, refactor, test, chore, perf, ci, revert\n' +
    'Example: feat(auth): Add user authentication\n\n' +
    'This is a more detailed explanation of the changes made in this commit.'
};
