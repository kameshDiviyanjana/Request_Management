import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservetionComponent } from './reservetion.component';

describe('ReservetionComponent', () => {
  let component: ReservetionComponent;
  let fixture: ComponentFixture<ReservetionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservetionComponent]
    });
    fixture = TestBed.createComponent(ReservetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
