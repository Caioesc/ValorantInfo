import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValorantApiService } from '../services/valorant-api.service';

@Component({
  selector: 'app-detalhes-mapas',
  templateUrl: './detalhes-mapas.page.html',
  styleUrls: ['./detalhes-mapas.page.scss'],
  standalone: false
})
export class DetalhesMapasPage implements OnInit {

  mapa: any;

  constructor(private route: ActivatedRoute, private valorantService: ValorantApiService) { }

  carregarMapa(id: string){
    this.valorantService.buscarMapaPorId(id).subscribe((dados: any) => this.mapa = dados.data)
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      const mapaId = params.get('id');
      this.carregarMapa(mapaId);
    })
  }

}
