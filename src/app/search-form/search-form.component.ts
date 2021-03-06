import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
@Output() emitSearch = new EventEmitter<any>()
@Output() isRepo= new EventEmitter<any>()

username="";

searchTerm:string;

  constructor() { }
search(event:any){
  this.username = event.target.value
  this.emitSearch.emit(this.username)
  console.log(this.username)
}
  ngOnInit() {
  }

}
