import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitalizeComponent } from './initalize.component';

describe('InitalizeComponent', () => {
  let component: InitalizeComponent;
  let fixture: ComponentFixture<InitalizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitalizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
