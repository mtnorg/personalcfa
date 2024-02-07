import 'jest';
import { buildTemplate, renderTemplate, moveTemplate } from './template-handler';
import { GeneratorConfig } from '../models';
import * as fileTemplating from '../utils/file-templating';
import * as templateUtils from './template-handler';
import * as fs from 'fs/promises';
import path from 'path';

jest.mock('../utils/file-templating', () => ({
  readTemplateFile: jest.fn(),
  writeTemplateFile: jest.fn(),
}));

jest.mock('fs/promises', () => ({
  rm: jest.fn(),
}));

describe('template-utils', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('buildTemplate', () => {
    it('renders handlebars template and writes to file', async () => {
      // Arrange
      const templateFile = 'templates/templateName/template-files/file.handlebars';
      const data: GeneratorConfig = {
        project: {
          name: 'my-app',
          template: 'templateName',
          title: 'title',
          nameCamelCase: 'nameCamelCase',
          version: '0.0.1',
          features: {
            semanticRelease: true,
            semanticReleaseBranch: 'develop',
            dependabot: true,
            registeredInAppStore: false,
          },
          appId: 'appId',
          // ... other properties needed for input
        },
        runtime: {
          cli: 'cli',
          node: 'node',
          path: 'path',
        },
        // ... other properties needed for input
      };

      const templateFileContent = 'template content';
      const renderedContent = 'rendered content';

      jest.spyOn(fileTemplating, 'readTemplateFile').mockResolvedValue(templateFileContent);
      jest.spyOn(fileTemplating, 'writeTemplateFile').mockResolvedValue();

      jest.spyOn(templateUtils, 'renderTemplate').mockResolvedValue(renderedContent);

      // Act
      await buildTemplate(templateFile, data);

      // Assert
      expect(fileTemplating.readTemplateFile).toHaveBeenCalledWith(templateFile);
      expect(templateUtils.renderTemplate).toHaveBeenCalledWith(templateFileContent, data);
      expect(fileTemplating.writeTemplateFile).toHaveBeenCalledWith('my-app/file', renderedContent);
    });
  });

  //   describe('renderTemplate', () => {
  //     it('compiles handlebars template with data', async () => {
  //       // Arrange
  //       const content = 'template content';
  //       const data: GeneratorConfig = {
  //         name: 'my-app',
  //         author: 'KENTE',
  //         title: 'KENTE',
  //         semanticRelease: true,
  //         semanticReleaseBranch: 'master',
  //         skipInstall: true,
  //         skipRegisterApp: true,
  //         appStoreToken: 'appStoreToken',
  //         devBranchName: 'develop',
  //         apiGateway: false,
  //         dependabot: false,
  //         dryRun: true,
  //         template: 'fa-template',
  //         microfrontend: true,
  //         microservices: false,
  //       };

  //       jest.spyOn(handlebars, 'compile').mockReturnValue(jest.fn());

  //       // Act
  //       await renderTemplate(content, data);

  //       // Assert
  //       expect(handlebars.compile).toHaveBeenCalledWith(content);
  //     });
  //   });

  describe('moveTemplate', () => {
    it('moves handlebars template to the destination directory', async () => {
      // Arrange
      const templateDirectory = 'templates/templateName/template-files';
      const templateFile = 'file.handlebars';
      const sourcePath = 'file';
      const destinationPath = 'destination/file';

      // Act
      await moveTemplate(templateDirectory, templateFile);

      // Assert
      expect(fs.rm).toHaveBeenCalledWith(destinationPath);
      expect(fs.rename).toHaveBeenCalledWith(sourcePath, destinationPath);
    });
  });
});
