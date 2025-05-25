import { Component, OnInit } from '@angular/core';
import { ValorantApiService } from '../services/valorant-api.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
  standalone: false
})
export class ListarPage implements OnInit {

  constructor(private valorantService: ValorantApiService) { }
  personagens: any[] = []

  ngOnInit() {
    this.valorantService.buscarTodosAgentes().subscribe((dados:any) => {
      this.personagens = dados.data
    })
  }


}
