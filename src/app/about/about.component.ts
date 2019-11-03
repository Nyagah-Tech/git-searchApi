import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  submit(){
    alert("your response has been received.We shall respond to your respective email")
    
  }

  constructor() { }

  ngOnInit() {
  }

}
