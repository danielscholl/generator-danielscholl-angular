import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { HomeService } from './home.service';

describe('Home Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        HomeService
      ],
      imports: [
        HttpModule
      ]
    });

    TestBed.compileComponents();
  });

  it('should be defined', inject([HomeService], (api) => {
    expect(api).toBeDefined();
    // expect(api.getData()).toBe('Angular 2');
  }));
});
