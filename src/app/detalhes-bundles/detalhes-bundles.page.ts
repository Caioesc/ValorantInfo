import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValorantApiService } from '../services/valorant-api.service';

@Component({
  selector: 'app-detalhes-bundles',
  templateUrl: './detalhes-bundles.page.html',
  styleUrls: ['./detalhes-bundles.page.scss'],
  standalone: false
})
export class DetalhesBundlesPage implements OnInit {

  bundle: any;

  constructor(private route: ActivatedRoute, private valorantService: ValorantApiService) { }

  carregarBundle(id: string){
    this.valorantService.buscarBundlePorId(id).subscribe((dados: any) => this.bundle = dados.data)
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) =>{
      const bundleId = params.get('id');
      this.carregarBundle(bundleId);
    })
  }

}
