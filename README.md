## NG-write [![Build Status](https://travis-ci.org/ekarudianto/NG-write.svg?branch=master)](https://travis-ci.org/ekarudianto/NG-write)

A starter angularjs template project using the compilation of several tools and frameworks which are Angularjs, HTML 5 Boilerplate, Twitter bootsrap, Jade template engine, Gulp, Webpack, Karma, Protractor and many others !

### Table of contents
    
* [Installation](#installation)
* [Gulp tasks](#gulp-tasks)
* [Testing](#testing)
* [Credits](#credits)
* [File structure](#file-structure)

### Installation

- Please make sure that nodejs is installed in your system. Check nodejs [Here](https://nodejs.org/en/).
- Please install **Gulp** and **Bower** for managing your task runners and dependency management globally by running this command on your command line interface.

  ```
  npm install -g gulp-cli bower
  ```
- Clone the repository by running this command on your command line interface  
  
  ```
  git clone https://github.com/ekarudianto/binding-angular.git
  ```  
- Go to the project directories and run these command for fetching the **Node dependencies** and **bower libraries**
 
  ```
  npm install && bower install
  ```
- Project should be ready to run, please run below command and open the project on ```http://localhost:9010```

  ```
  gulp server
  ```  

### Gulp tasks

Below are several main tasks that this project has :

* ```default```
    * It will run a ```build``` gulp task.
* ```server```
    * Start a dev server using ```gulp-connect```, serving the app folder.
* ```server:dist```
    * Start a dev server using ```gulp-connect```, serving the distribution folder.
* ```build```
    * Build a distribution package. All of the packages are stored on distribution folder.        
* ```test:unit```
    * Start a unit testing using ```Karma```.
* ```test:end```
    * Start an end to end testing using ```Protractor```.    
 
### Testing
    
NG-write using [Karma](https://karma-runner.github.io/0.13/index.html) for unit testing, and [Protractor](http://www.protractortest.org/#/) for end 2 end testing. Since NG-write is using protractor version 3, only nodejs v4 or newer version that only supporting protractor, be sure to installed the correct version.

All of the testcases file are included on ```test``` folder on the root directory

### Credits

This starter template project is done using several tools and frameworks such as :

- HTML 5 Boilerplate
- Jade template language
- Angularjs
- Sass
- Karma
- Protractor
- Gulp
- Twitter bootstrap
- jQuery
- json3
- Es5-shim
- Modernizr

### File structure

```
.
 +-- app
 |   +-- scripts
 |       +-- controllers
 |           +-- controllers.js //collections of controller are registered here
 |           +-- home-controller.js
 |           +-- how-to-use-controller.js
 |       +-- directives
 |           +-- directives.js //collections of directive are registered here
 |           +-- version-directive.js
 |       +-- filters
 |           +-- filters.js //collections of filter are registered here
 |           +-- reverse-filter.js
 |       +-- services
 |           +-- services.js //collections of service are registered here
 |           +-- creator-service.js
 |       +-- app.bootstrap.js //application bootstrap module
 |       +-- app.config.js //application configuration constants
 |       +-- app.js // initialization of application
 |       +-- app.routes.js //application routes
 |       +-- app.run.js //application run method
 |       +-- index.js //application index
 |   +-- styles
 |       +-- _custom.scss //custom styling
 |       +-- _mixins.scss //collections of mixin for styling
 |       +-- style.scss //index styling
 |   +-- vendors
 |   +-- views
 |       +-- home.jade
 |       +-- how.jade
 |   +-- index.jade
 |___+-- layout.jade
```

