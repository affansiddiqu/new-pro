import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  isDivisble:boolean=true;
  products:any[]=[
    {
      name :"Porsche 9132",
      image:"./img/y.webp",
      descripition:"Bhut achi ha lelo",
      Price : 98000
    },
    {
      name :"Porsche 9111",
      image:"./img/q.webp",
      descripition:"Satement that tells you how something or someone by porscha  etc. ",
      Price : 98000
    },
    {
      name :"Porsche 9121",
      image:"./img/2.webp",
      descripition:"Bhut achi ha lelo",
      Price : 98000
    }
    

  ]

  removecard(){
    this.isDivisble=false;
  }
  
  addcard(){
    this.isDivisble=true;
  }
togglecard(){
  this.isDivisble=!this.isDivisble;
}

}
