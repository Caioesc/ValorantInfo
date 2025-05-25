import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesArmasPage } from './detalhes-armas.page';

describe('DetalhesArmasPage', () => {
  let component: DetalhesArmasPage;
  let fixture: ComponentFixture<DetalhesArmasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesArmasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
