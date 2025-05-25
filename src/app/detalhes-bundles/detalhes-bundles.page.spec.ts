import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesBundlesPage } from './detalhes-bundles.page';

describe('DetalhesBundlesPage', () => {
  let component: DetalhesBundlesPage;
  let fixture: ComponentFixture<DetalhesBundlesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesBundlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
