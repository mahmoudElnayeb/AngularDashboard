import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangLangComponent } from './chang-lang.component';

describe('ChangLangComponent', () => {
  let component: ChangLangComponent;
  let fixture: ComponentFixture<ChangLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangLangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
