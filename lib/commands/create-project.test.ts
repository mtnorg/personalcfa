import 'jest';
import { createProject } from './create-project';
import { GeneratorInput } from '../models';
import * as directories from '../utils/directories';
import * as fileTemplating from '../utils/file-templating';

jest.mock('../utils/directories', () => ({
  createProjectDir: jest.fn(),
  getFullAppDirectory: jest.fn((targetDir, name) => `/${targetDir}/${name}`),
}));

jest.mock('../utils/file-templating', () => ({
  copyTemplateFiles: jest.fn(),
  processTemplates: jest.fn(),
}));

describe('createProject', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls createProjectDir, copyTemplateFiles, and processTemplates with the correct arguments', async () => {
    // Arrange
    const input: GeneratorInput = {
      targetDirectory: 'my-directory',
      name: 'my-app',
      author: 'KENTE',
      title: 'KENTE',
      semanticRelease: true,
      semanticReleaseBranch: 'master',
      skipInstall: true,
      skipRegisterApp: true,
      appStoreToken: 'appStoreToken',
      devBranchName: 'develop',
      apiGateway: false,
      dependabot: false,
      dryRun: true,
      template: 'fa-template',
      microfrontend: true,
      microservices: false,
    };

    // Act
    await createProject(input);

    // Assert
    expect(directories.createProjectDir).toHaveBeenCalledWith('/my-directory/my-app');
    expect(fileTemplating.copyTemplateFiles).toHaveBeenCalledWith('/my-directory/my-app', input);
    expect(fileTemplating.processTemplates).toHaveBeenCalledWith(input);
  });
});
