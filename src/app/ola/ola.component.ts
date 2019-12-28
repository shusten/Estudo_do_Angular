import { Component, OnInit, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-ola',
  templateUrl: './ola.component.html',
  styleUrls: ['./ola.component.css']
})
export class OlaComponent implements OnInit {
  teste = 'Olá Mundo';

  constructor() { }

  ngOnInit() {

  }
 
}


