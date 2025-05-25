import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValorantApiService } from '../services/valorant-api.service';

@Component({
  selector: 'app-detalhes-armas',
  templateUrl: './detalhes-armas.page.html',
  styleUrls: ['./detalhes-armas.page.scss'],
  standalone: false
})
export class DetalhesArmasPage implements OnInit {

  arma: any;
  slides = {
    slidesPerView: 2.5,
    spaceBetween: 10,
    freeMode: true
  };
  slideOpts: any;

  constructor(private route: ActivatedRoute, private valorantService: ValorantApiService) { }

  carregarArma(id: string) {
    this.valorantService.buscarArmaPorId(id).subscribe((dados: any) => this.arma = dados.data)
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      const armaId = params.get('id');
      this.carregarArma(armaId);
    })

  }

}
