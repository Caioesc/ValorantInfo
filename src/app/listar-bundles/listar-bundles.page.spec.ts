import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarBundlesPage } from './listar-bundles.page';

describe('ListarBundlesPage', () => {
  let component: ListarBundlesPage;
  let fixture: ComponentFixture<ListarBundlesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBundlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
