import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSellingComponent } from './type-selling.component';

describe('TypeSellingComponent', () => {
  let component: TypeSellingComponent;
  let fixture: ComponentFixture<TypeSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
