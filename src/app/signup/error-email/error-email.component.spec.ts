import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorEmailComponent } from './error-email.component';

describe('ErrorEmailComponent', () => {
  let component: ErrorEmailComponent;
  let fixture: ComponentFixture<ErrorEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
