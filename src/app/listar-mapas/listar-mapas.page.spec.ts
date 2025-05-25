import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarMapasPage } from './listar-mapas.page';

describe('ListarMapasPage', () => {
  let component: ListarMapasPage;
  let fixture: ComponentFixture<ListarMapasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMapasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
