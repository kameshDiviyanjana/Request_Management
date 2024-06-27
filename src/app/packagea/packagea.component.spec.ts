import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageaComponent } from './packagea.component';

describe('PackageaComponent', () => {
  let component: PackageaComponent;
  let fixture: ComponentFixture<PackageaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageaComponent]
    });
    fixture = TestBed.createComponent(PackageaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
