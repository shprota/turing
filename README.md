# Turing test

This is a very quick and dirty take on the suggested task.
Angular 7 and Boostrap 4 are used as a base.

Inspiration and copy-paste parts are taken from various sources on the Net.

I really suck in designing the UI, so I have kept it as minimalistic as possible.

Time spent: approx 8 hours (didn't have more time this week)

Implemented:
* 3 columns of tweets by  @MakeSchool, @newsycombinator and @ycombinator. The names can be changed in the Settings service.
* Settings panel with drag and drop column ordering, tweets number setting and a nice green Refresh button.
* Storing the settings in LocalStorage

Didn't have time to implement:
* Smart logic for tweets number setting to not load the tweets again when the requested number is less than previously loaded.
* Mentions tooltips with user information
* Image popup, support for multiple images
* Unit tests
 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
