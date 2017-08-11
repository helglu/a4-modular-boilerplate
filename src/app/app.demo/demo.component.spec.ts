import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { DemoComponent } from './demo.component';

describe(`Demo`, () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      // provide a better mock
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      DemoComponent
    ]
  }));

  it('should log ngOnInit', inject([DemoComponent], (demoComponent: DemoComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    demoComponent.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
