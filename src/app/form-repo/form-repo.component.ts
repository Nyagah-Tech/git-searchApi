import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-repo',
  templateUrl: './form-repo.component.html',
  styleUrls: ['./form-repo.component.css']
})
export class FormRepoComponent implements OnInit {
  @Output() emitSearchrepo = new EventEmitter<any>()
repoTerm:string;
searchrepos(){
  this.emitSearchrepo.emit(this.repoTerm);
}
  constructor() { }

  ngOnInit() {
  }

}
