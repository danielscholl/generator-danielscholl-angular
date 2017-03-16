// // This shows a different way of testing a component, check about for a simpler one
// import { Component } from '@angular/core';

// import { TestBed } from '@angular/core/testing';

// import { HomeComponent } from './home.component';
// import { HomeService } from './home.service';

// describe('Home Component', () => {
//   const html = '<ui-home></ui-home>';

//   beforeEach(() => {
//     TestBed.configureTestingModule({declarations: [HomeComponent, TestComponent], providers: [HomeService]});
//     TestBed.overrideComponent(TestComponent, { set: { template: html }});
//   });

//   it('should ...', () => {
//     const fixture = TestBed.createComponent(TestComponent);
//     fixture.detectChanges();
//     expect(fixture.nativeElement.children[0].textContent).toContain('DFW Top Talent');
//   });

// });

// @Component({selector: 'my-test', template: ''})
// class TestComponent { }
