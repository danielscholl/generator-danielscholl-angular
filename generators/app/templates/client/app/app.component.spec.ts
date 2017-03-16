import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeService } from './home';
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './shared';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, HeaderComponent, FooterComponent],
      providers: [HomeService, provideRoutes([])]
    });
  });

  it('should have a title property', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.componentInstance.title).toEqual('ui');
  });

});
