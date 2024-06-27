import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecoponetComponent } from './homecoponet.component';

describe('HomecoponetComponent', () => {
  let component: HomecoponetComponent;
  let fixture: ComponentFixture<HomecoponetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomecoponetComponent]
    });
    fixture = TestBed.createComponent(HomecoponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
