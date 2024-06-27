import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageadataComponent } from './packageadata.component';

describe('PackageadataComponent', () => {
  let component: PackageadataComponent;
  let fixture: ComponentFixture<PackageadataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageadataComponent]
    });
    fixture = TestBed.createComponent(PackageadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
