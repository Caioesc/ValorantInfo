import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoAgente',
  standalone: false
})
export class TipoAgentePipe implements PipeTransform {

  transform(funcao: string): string {
    const funcoes: any = {
      'Controlador': '🛡️ Controlador',
      'Duelista': '🔫 Duelista',
      'Iniciador': '🎯 Iniciador',
      'Sentinela': '🛠️ Sentinela'
    };

    return funcoes[funcao];
  }

}
