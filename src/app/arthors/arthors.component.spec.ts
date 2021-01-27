import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArthorsComponent } from './arthors.component';

describe('ArthorsComponent', () => {
  let component: ArthorsComponent;
  let fixture: ComponentFixture<ArthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
