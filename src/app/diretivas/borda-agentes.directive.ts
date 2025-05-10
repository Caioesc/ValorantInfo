import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBordaAgentes]',
  standalone: false
})
export class BordaAgentesDirective {
  @Input() appBordaAgentes = ''

  @HostBinding('style.border') border!: string

  constructor() { }

  ngOnInit(){
     switch (this.appBordaAgentes) {
      case 'Duelista':
        this.border = '3px solid #ff4757';
        break;
      case 'Controlador':
        this.border = '3px solid #3498db'; 
        break;
      case 'Iniciador':
        this.border = '3px solid #f39c12'; 
        break;
      case 'Sentinela':
        this.border = '3px solid #2ecc71';
        break;
      default:
        this.border = '3px solid #7f8c8d';
    }
  }
}
