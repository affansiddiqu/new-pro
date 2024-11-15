import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [UpperCasePipe,TitleCasePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  MyPost:any[]=[];
  constructor(private http:HttpClient){
    this.Getmedicines();

  }
  Getmedicines(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((result:any) => {
      this.MyPost=result;
      console.log(result)
  })
  }

}
