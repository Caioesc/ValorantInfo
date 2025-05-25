import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesPersonagensPage } from './detalhes-personagens.page';

describe('DetalhesPersonagensPage', () => {
  let component: DetalhesPersonagensPage;
  let fixture: ComponentFixture<DetalhesPersonagensPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPersonagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
