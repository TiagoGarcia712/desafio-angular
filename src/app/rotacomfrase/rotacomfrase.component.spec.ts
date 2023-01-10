import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotacomfraseComponent } from './rotacomfrase.component';

describe('RotacomfraseComponent', () => {
  let component: RotacomfraseComponent;
  let fixture: ComponentFixture<RotacomfraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotacomfraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotacomfraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
