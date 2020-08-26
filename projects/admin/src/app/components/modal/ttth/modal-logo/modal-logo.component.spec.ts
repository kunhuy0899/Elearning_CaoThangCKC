import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLogoComponent } from './modal-logo.component';

describe('ModalLogoComponent', () => {
  let component: ModalLogoComponent;
  let fixture: ComponentFixture<ModalLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
