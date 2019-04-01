import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {
  vocales: any   = [
    {nombre :'a', ruta : 'assets/img/vocales/a.png', repro : 'assets/rep/vocales/a.mp3'},
    {nombre :'e', ruta : 'assets/img/vocales/e.png', repro : 'assets/rep/vocales/e.mp3'},
    {nombre :'i', ruta : 'assets/img/vocales/i.png', repro : 'assets/rep/vocales/i.mp3'},
    {nombre :'o', ruta : 'assets/img/vocales/o.png', repro : 'assets/rep/vocales/o.mp3'},
    {nombre :'u', ruta : 'assets/img/vocales/u.png', repro : 'assets/rep/vocales/u.mp3'}
  ]

  reproducir(voc){
    let sonido = new Audio();
    sonido.src = voc.repro;
    sonido.load();
    sonido.play();
  }
}
