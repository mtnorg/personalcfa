import { createInput } from './create-input';

describe('createInput', () => {
  it('creates GeneratorInput with default values', () => {
    // Arrange
    const projectName = 'my-app';
    const options = {};

    // Act
    const result = createInput(projectName, options);

    // Assert
    expect(result).toEqual({
      name: 'my-app',
      title: '',
      targetDirectory: './',
      template: '',
      skipInstall: false,
      skipRegisterApp: false,
      apiGateway: false,
      dependabot: false,
      semanticRelease: false,
      semanticReleaseBranch: 'release',
      author: 'MTN-Kente',
      appStoreToken: '',
      devBranchName: 'main',
      dryRun: false,
      microfrontend: false,
      microservices: false,
    });
  });

  it('creates GeneratorInput with provided values', () => {
    // Arrange
    const projectName = 'my-app';
    const options = {
      title: 'My App Title',
      targetDirectory: './my-directory',
      skipInstall: true,
      microfrontend: true,
    };

    // Act
    const result = createInput(projectName, options);

    // Assert
    expect(result).toEqual({
      name: 'my-app',
      title: 'My App Title',
      targetDirectory: './my-directory',
      template: 'fa-template', // Assuming options.microfrontend is true
      skipInstall: true,
      skipRegisterApp: false,
      apiGateway: false,
      dependabot: false,
      semanticRelease: false,
      semanticReleaseBranch: 'release',
      author: 'MTN-Kente',
      appStoreToken: '',
      devBranchName: 'main',
      dryRun: false,
      microfrontend: true,
      microservices: false,
    });
  });
});
