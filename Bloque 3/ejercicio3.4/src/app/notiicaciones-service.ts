import { Injectable, Service } from '@angular/core';


@Injectable({providedIn: 'root'})
export class NotiicacionesService {
    private _mensajes: string[] = []

    anadir(m: string){this._mensajes = [...this._mensajes, m];}

    get mensajes(){ return this._mensajes}
}
