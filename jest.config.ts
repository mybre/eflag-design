const { readdirSync } = require('fs');
const { join } = require('path');

const pkgList = readdirSync(join(__dirname, './packages')).filter(
  (pkg: string) => pkg.charAt(0) !== '.'
);

const moduleNameMapper = {
  '^react$': require.resolve('react'),
  '\\.(css|less|sass|scss)$': require.resolve('identity-obj-proxy'),
};

pkgList.forEach((shortName: string) => {
  const name = `@eflag/${shortName}`;
  moduleNameMapper[name] = join(__dirname, `./packages/${shortName}/src`);
});

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: [`/node_modules/(?!${[].join('|')})`],
  moduleNameMapper,
  setupFilesAfterEnv: ['./tests/setupTests.ts'],
};
