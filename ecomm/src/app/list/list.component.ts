import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  lista= [{
    computadora: "Asus 4gb ram"

  }

];
  

  constructor(private Router:Router) { }

  ngOnInit(): void {
  }
  

  addList(){
    this.lista.push({computadora:"info"}).toString
    console.log(this.lista)
  }

}
