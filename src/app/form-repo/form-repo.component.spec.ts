import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRepoComponent } from './form-repo.component';

describe('FormRepoComponent', () => {
  let component: FormRepoComponent;
  let fixture: ComponentFixture<FormRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
