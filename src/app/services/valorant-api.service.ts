import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValorantApiService {

  constructor(private http: HttpClient) { }

  buscarTodosAgentes() {
    return this.http.get('https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true')
  }

  buscarAgentePorId(id: string) {
    return this.http.get(`https://valorant-api.com/v1/agents/${id}?language=pt-BR&isPlayableCharacter=true`)
  }

  buscarTodasArmas() {
    return this.http.get('https://valorant-api.com/v1/weapons?language=pt-BR')
  }

  buscarArmaPorId(id: string) {
    return this.http.get(`https://valorant-api.com/v1/weapons/${id}?language=pt-BR`)
  }

  buscarTodosMapas(){
    return this.http.get('https://valorant-api.com/v1/maps?language=pt-BR')
  }

  buscarMapaPorId(id: string){
    return this.http.get(`https://valorant-api.com/v1/maps/${id}?language=pt-BR`)
  }

  buscarTodosBundles(){
    return this.http.get('https://valorant-api.com/v1/bundles?language=pt-BR')
  }

  buscarBundlePorId(id: string){
    return this.http.get(`https://valorant-api.com/v1/bundles/${id}?language=pt-BR`)
  }
}
