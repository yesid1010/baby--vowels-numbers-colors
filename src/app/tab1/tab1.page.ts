import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  imagenes: any   = [
    {nombre :'uno', ruta : 'assets/img/numeros/1.png', repro : 'assets/rep/numeros/uno.mp3'},
    {nombre :'dos', ruta : 'assets/img/numeros/2.png',repro : 'assets/rep/numeros/dos.mp3'},
    {nombre :'tres', ruta : 'assets/img/numeros/3.png',repro : 'assets/rep/numeros/tres.mp3'},
    {nombre :'cuatro', ruta : 'assets/img/numeros/4.png',repro : 'assets/rep/numeros/cuatro.mp3'},
    {nombre :'cinco', ruta : 'assets/img/numeros/5.png',repro : 'assets/rep/numeros/cinco.mp3'},
    {nombre :'seis', ruta : 'assets/img/numeros/6.png',repro : 'assets/rep/numeros/seis.mp3'},
    {nombre :'siete', ruta : 'assets/img/numeros/7.png',repro : 'assets/rep/numeros/siete.mp3'},
    {nombre :'ocho', ruta : 'assets/img/numeros/8.png',repro : 'assets/rep/numeros/ocho.mp3'},
    {nombre :'nueve', ruta : 'assets/img/numeros/9.png',repro : 'assets/rep/numeros/nueve.mp3'},
    {nombre :'diez', ruta : 'assets/img/numeros/10.png',repro : 'assets/rep/numeros/diez.mp3'}
  ]


  reproducir(img){
    let sonido = new Audio();
    sonido.src = img.repro;
    sonido.load();
    sonido.play();
  }
}
