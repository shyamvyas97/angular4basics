import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcmpComponent } from './newcmp.component';

describe('NewcmpComponent', () => {
  let component: NewcmpComponent;
  let fixture: ComponentFixture<NewcmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
