'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the legendary ' + chalk.red('generator-dfwtalent-angular') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'docker',
      message: 'Would you like to include docker?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(this.templatePath('_dockerignore'), this.destinationPath('.dockerignore'));
    this.fs.copy(this.templatePath('_editorconfig'), this.destinationPath('.editorconfig'));
    this.fs.copy(this.templatePath('_editorconfig'), this.destinationPath('.editorconfig'));
    this.fs.copy(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));
    if (this.props.docker) {
      this.fs.copy(this.templatePath('Dockerfile'), this.destinationPath('Dockerfile'));
    }
    this.fs.copy(this.templatePath('karma-shim.js'), this.destinationPath('karma-shim.js'));
    this.fs.copy(this.templatePath('karma.conf.js'), this.destinationPath('karma.conf.js'));
    this.fs.copy(this.templatePath('LICENSE'), this.destinationPath('LICENSE'));
    this.fs.copy(this.templatePath('node-version'), this.destinationPath('node-version'));
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {appname: this.props.appname, docker: this.props.docker}
    );
    this.fs.copy(this.templatePath('protractor.conf.js'), this.destinationPath('protractor.conf.js'));
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'), {appname: this.props.appname}
    );
    this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'));
    this.fs.copy(this.templatePath('tslint.json'), this.destinationPath('tslint.json'));
    this.fs.copy(this.templatePath('tslint.json'), this.destinationPath('tslint.json'));
    this.fs.copy(this.templatePath('typedoc.json'), this.destinationPath('typedoc.json'));
    this.fs.copy(this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js'));
    this.fs.copy(this.templatePath('yarn.lock'), this.destinationPath('yarn.lock'));
    this.fs.copy(this.templatePath('client/**/*'), this.destinationPath('client'));
    this.fs.copyTpl(
      this.templatePath('client/public/index.html'),
      this.destinationPath('client/public/index.html'), {appname: this.props.appname}
    );
    this.fs.copyTpl(
      this.templatePath('client/app/shared/header/header.component.html'),
      this.destinationPath('client/app/shared/header/header.component.html'), {appname: this.props.appname}
    );
    this.fs.copy(this.templatePath('e2e/**/*'), this.destinationPath('e2e'));
    this.fs.copy(this.templatePath('server/**/*'), this.destinationPath('server'));
  },

  install: function () {
    this.installDependencies({
      bower: false,
      npm: false,
      yarn: true
    });
  }
});
