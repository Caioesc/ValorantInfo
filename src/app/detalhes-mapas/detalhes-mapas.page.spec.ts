import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesMapasPage } from './detalhes-mapas.page';

describe('DetalhesMapasPage', () => {
  let component: DetalhesMapasPage;
  let fixture: ComponentFixture<DetalhesMapasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesMapasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
