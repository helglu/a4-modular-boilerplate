import {
  enableDebugTools,
  disableDebugTools
} from '@angular/platform-browser';
import {
  ApplicationRef,
  enableProdMode
} from '@angular/core';

import {A_PROVIDERS} from './settings.providers/a.providers'
import {B_PROVIDERS} from './settings.providers/b.providers'


/**
 * Environment Providers
 */
let PROVIDERS:any[] = [
  /**
   * Common env directives
   */
];

/**
 * Angular debug tools in the dev console
 * https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
 */
let _decorateModuleRef = <T>(value:T):T => {
  return value;
};


if ('production-a' === ENV) { //TODO finish
  console.log("a production settings applied");
  enableProdMode();

  // Production
  _decorateModuleRef = (modRef:any) => {
    disableDebugTools();

    return modRef;
  };

  PROVIDERS = [
    ...PROVIDERS,
    ...A_PROVIDERS,
    // custom providers in production
  ];

} else if ('production-b' === ENV) { //TODO check
  console.log("b production settings applied");

  enableProdMode();

  // Production
  _decorateModuleRef = (modRef:any) => {
    disableDebugTools();

    return modRef;
  };

  PROVIDERS = [
    ...PROVIDERS,
    ...B_PROVIDERS,
    // custom providers in production
  ];

} else {
  console.log('development setings applied');
  _decorateModuleRef = (modRef:any) => {
    const appRef = modRef.injector.get(ApplicationRef);
    const cmpRef = appRef.components[0];

    let _ng = (<any> window).ng;
    enableDebugTools(cmpRef);
    (<any> window).ng.probe = _ng.probe;
    (<any> window).ng.coreTokens = _ng.coreTokens;
    return modRef;
  };

  // Development - all global services for all modules should be present here!!
  PROVIDERS = [
    ...PROVIDERS,
    ...A_PROVIDERS,
    ...B_PROVIDERS,
    // custom providers in development
  ];

}


export const decorateModuleRef = _decorateModuleRef;

export const ENV_PROVIDERS = [
  ...PROVIDERS
];
