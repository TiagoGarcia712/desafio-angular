import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessofraseComponent } from './acessofrase.component';

describe('AcessofraseComponent', () => {
  let component: AcessofraseComponent;
  let fixture: ComponentFixture<AcessofraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessofraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessofraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
