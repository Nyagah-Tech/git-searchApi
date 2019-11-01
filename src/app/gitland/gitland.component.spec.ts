import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitlandComponent } from './gitland.component';

describe('GitlandComponent', () => {
  let component: GitlandComponent;
  let fixture: ComponentFixture<GitlandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitlandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
