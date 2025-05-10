import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValorantApiService {

  constructor(private http: HttpClient) { }

  buscarTodosAgentes(){
    return this.http.get('https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true')
  }
}
