import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {
  itensMenu = [
    { 
      title: 'Agentes', 
      route: '/listar', 
      icon: 'people', 
      color: '#ff4757' 
    },
    { 
      title: 'Armas', 
      route: '/listar-armas', 
      icon: 'skull', 
      color: '#3498db' 
    },
    { 
      title: 'Mapas', 
      route: '/listar-mapas', 
      icon: 'map', 
      color: '#2ecc71' 
    },
    { 
      title: 'Bundles', 
      route: '/listar-bundles', 
      icon: 'cube', 
      color: '#9b59b6' 
    }
  ];

  constructor() {}
}
