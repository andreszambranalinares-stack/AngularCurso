import { Service } from '@angular/core';

@Service()
export class ViajesService {
    public planetas = [
        {id: 1, nombre: "Jupiter", emoji: "🪐", distancia: 1000, precio:10000},
        {id: 2, nombre: "Marte", emoji: "🌎", distancia: 1000, precio:10000},
        {id: 3, nombre: "Titan", emoji: "🪐", distancia: 1000, precio:10000},
        {id: 4, nombre: "Kepler-22b", emoji: "🪐", distancia: 1000, precio:10000}  
    ]


}
