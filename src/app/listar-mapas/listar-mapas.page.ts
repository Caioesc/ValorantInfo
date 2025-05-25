import { Component, OnInit } from '@angular/core';
import { ValorantApiService } from '../services/valorant-api.service';

@Component({
  selector: 'app-listar-mapas',
  templateUrl: './listar-mapas.page.html',
  styleUrls: ['./listar-mapas.page.scss'],
  standalone: false
})
export class ListarMapasPage implements OnInit {

  constructor(private valorantService: ValorantApiService) { }
  mapas: any[] = []

  ngOnInit() {
    this.valorantService.buscarTodosMapas().subscribe((dados:any) => this.mapas = dados.data)
  }

}
