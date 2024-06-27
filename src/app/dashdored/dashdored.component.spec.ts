import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashdoredComponent } from './dashdored.component';

describe('DashdoredComponent', () => {
  let component: DashdoredComponent;
  let fixture: ComponentFixture<DashdoredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashdoredComponent]
    });
    fixture = TestBed.createComponent(DashdoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
