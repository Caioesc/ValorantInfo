import { Component, OnInit } from '@angular/core';
import { ValorantApiService } from '../services/valorant-api.service';

@Component({
  selector: 'app-listar-bundles',
  templateUrl: './listar-bundles.page.html',
  styleUrls: ['./listar-bundles.page.scss'],
  standalone: false
})
export class ListarBundlesPage implements OnInit {

  constructor(private valorantService: ValorantApiService) { }
  bundles: any[] = []

  ngOnInit() {
    this.valorantService.buscarTodosBundles().subscribe((dados: any) => this.bundles = dados.data)
  }

}
