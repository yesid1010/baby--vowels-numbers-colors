import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  colores: any   = [
    {nombre :'amarillo', ruta : 'assets/img/colores/amarillo.png', repro : 'assets/rep/colores/amarillo.mp3'},
    {nombre :'azul', ruta : 'assets/img/colores/azul.png', repro : 'assets/rep/colores/azul.mp3'},
    {nombre :'rojo', ruta : 'assets/img/colores/rojo.png', repro : 'assets/rep/colores/rojo.mp3'},
    {nombre :'verde', ruta : 'assets/img/colores/verde.png', repro : 'assets/rep/colores/verde.mp3'},
    {nombre :'negro', ruta : 'assets/img/colores/negro.png', repro : 'assets/rep/colores/negro.mp3'},
    {nombre :'rosa', ruta : 'assets/img/colores/rosa.png', repro : 'assets/rep/colores/rosa.mp3'},
    {nombre :'naranja', ruta : 'assets/img/colores/naranja.png', repro : 'assets/rep/colores/naranja.mp3'},
    {nombre :'blanco', ruta : 'assets/img/colores/blanco.png', repro : 'assets/rep/colores/blanco.mp3'},
    {nombre :'violeta', ruta : 'assets/img/colores/violeta.png', repro : 'assets/rep/colores/violeta.mp3'},
    {nombre :'gris', ruta : 'assets/img/colores/gris.png', repro : 'assets/rep/colores/gris.mp3'}
  ]

  reproducir(col){
    let sonido = new Audio();
    sonido.src = col.repro;
    sonido.load();
    sonido.play();
  }

}
