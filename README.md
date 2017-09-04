NOTE!: This is work in progress!

# a4-modular-boilerplate
Boilerplate based on @Angularclass webpack starter modified to allow develop all-in-one a set of applications with common 
component base and build for deploy separately.

# Technologies
* Angular 4.3.1
* Bootstrap 4.0.0.-alpha 6 on sass
* Webpack 2.6.1
* Ng2 Translate 5.0.0

More features from original boilerplate:
* Karma, 
* Protractor, 
* Jasmine, 
* Istanbul, 
* TypeScript

# Usage
* build for development npm start
* build for production npm run build:production-a (production-b for second application) 

# Features
* develop all-in-one - in the develop mode (npm start) all modules are available for change, all applications are running 
and accessible (when modifying common packages, no need to update npm) 
* maintain once, customize separately - all applications share boilerplate (one set of npm 
 libraries, plugins and common settings to maintain) build process share common part, but can be customized via separate 
 webpack configs
* build for production individually and fully automated - build:production-* allow to automaticaly build packages for deploy (these 
packages does not initialize providers, routes and declarations from different applications)
* create new application with minimum effort and maximum reuse - you need only to create new application directory, state routes, add custom providers, 
configuration and components, reuse whatever you want from common and the application i ready

# Common functionality already implemented in this boilerplate
* REST client with interceptor
* User messaging
* Loader indicator
* Configuration service
* Modal window
* i18 localization

# Motivation
I come up with this idea when I was developing for a startup company, that used Java BPMN framework 
at the backend and ready made Angular 2 application on the front end. Within one year there was 
established 6 similar front end applications and it was not a final number. All the applications were not only similar 
regarding backend communication and data structures but also regarding design because they were all intended for operators 
and therefore maintained same look and feel. 

My idea was to come up with a structure that provide possibility to derive new application very fast with maximum 
reusability and minimum maintenance demand. Communication between teams was quite difficult and not well organized so I 
considered modularization into separate npm packages not applicable in this case. 
 

# Issues I am aware of and issues not solved yet
* by design the repository will grow, not an issue in the use case targeted by this design
* TREE SHAKING - issue number one to solve - for the production deploy I want to reduce the unreachable code of 
other applications budnled in the package
on
# Thanks 
I would like to thank to @fojt for his contribution to the loader and user messages and all the discussion we have made regarding Angular troughout the years.
