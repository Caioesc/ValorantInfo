import { Component, OnInit } from '@angular/core';
import { ValorantApiService } from '../services/valorant-api.service';

@Component({
  selector: 'app-listar-armas',
  templateUrl: './listar-armas.page.html',
  styleUrls: ['./listar-armas.page.scss'],
  standalone: false
})
export class ListarArmasPage implements OnInit {

  constructor(private valorantService: ValorantApiService) { }
  armas: any[] = [];

  ngOnInit() {
    this.valorantService.buscarTodasArmas().subscribe((dados: any) => this.armas = dados.data)
  }

}
