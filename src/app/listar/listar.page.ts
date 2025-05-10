import { Component, OnInit } from '@angular/core';
import { ValorantApiService } from '../services/valorant-api.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
  standalone: false
})
export class ListarPage implements OnInit {

  constructor(private valorant: ValorantApiService) { }
  personagens: any[] = []
  ngOnInit() {
    this.valorant.buscarTodosAgentes().subscribe((dados:any) => {
      console.log(dados)
      this.personagens = dados.data
    })
  }

}
