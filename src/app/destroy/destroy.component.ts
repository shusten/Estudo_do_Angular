import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-destroy',
  templateUrl: './destroy.component.html',
  styleUrls: ['./destroy.component.css']
})
export class DestroyComponent implements OnDestroy {

  constructor() { }

  ngOnDestroy() {
    console.log('componente finalizado');
  }

}
