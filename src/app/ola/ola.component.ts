import { Component, Input,  OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-ola',
  templateUrl: './ola.component.html',
  styleUrls: ['./ola.component.css']
})
export class OlaComponent implements OnChanges {


  @Input() nome: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.nome);
  }

}


