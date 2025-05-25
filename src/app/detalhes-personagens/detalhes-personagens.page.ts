import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValorantApiService } from '../services/valorant-api.service';

@Component({
  selector: 'app-detalhes-personagens',
  templateUrl: './detalhes-personagens.page.html',
  styleUrls: ['./detalhes-personagens.page.scss'],
  standalone: false
})
export class DetalhesPersonagensPage implements OnInit {
  agente: any;
  constructor(private route: ActivatedRoute, private valorantService: ValorantApiService) { }

  carregarAgente(id: string) {
    this.valorantService.buscarAgentePorId(id).subscribe((dados: any) => this.agente = dados.data)
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      const agenteId = params.get('id')
      this.carregarAgente(agenteId);
    })


  }

}
