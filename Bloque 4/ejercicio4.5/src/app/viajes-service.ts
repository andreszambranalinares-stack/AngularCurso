import { Service } from '@angular/core';


    export interface Planeta{
     id:number, nombre: string , emoji: string, distancia: number, precio: number    
    }
@Service()
export class ViajesService {


    planetas: Planeta[] = [
        {id: 1, nombre: "Jupiter", emoji: "🪐", distancia: 1000, precio:10000},
        {id: 2, nombre: "Marte", emoji: "🌎", distancia: 1000, precio:10000},
        {id: 3, nombre: "Titan", emoji: "🪐", distancia: 1000, precio:10000},
        {id: 4, nombre: "Kepler-22b", emoji: "🪐", distancia: 1000, precio:10000}  
    ]

    buscarPorId(id: number){
        return this.planetas.find(x => x.id)
    }
    
    reservar(planeta: Planeta){

    }
    cancelar(){

    }

    tieneBillete(): boolean{
        return true
    }
    billete(){
        
    }

}
