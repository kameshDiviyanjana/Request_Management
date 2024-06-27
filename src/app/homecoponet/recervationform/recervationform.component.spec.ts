import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecervationformComponent } from './recervationform.component';

describe('RecervationformComponent', () => {
  let component: RecervationformComponent;
  let fixture: ComponentFixture<RecervationformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecervationformComponent]
    });
    fixture = TestBed.createComponent(RecervationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
