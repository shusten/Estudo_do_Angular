import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  nomeUsuario = 'Dom Mattrick';
 
  public changeUser(){
    this.nomeUsuario = 'Phil Spencer';
  }
 
}
