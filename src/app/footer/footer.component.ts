import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  config: {[key: string]: string} = null;

  constructor(){


    setTimeout( () => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Najlpesze Cytaty by Key Studio!',
        date: new Date().toDateString(),
      };
    },)
    ;}

}
