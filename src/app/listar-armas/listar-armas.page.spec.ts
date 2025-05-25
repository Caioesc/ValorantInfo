import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarArmasPage } from './listar-armas.page';

describe('ListarArmasPage', () => {
  let component: ListarArmasPage;
  let fixture: ComponentFixture<ListarArmasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarArmasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
