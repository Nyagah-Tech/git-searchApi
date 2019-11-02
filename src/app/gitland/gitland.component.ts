import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { RepoServiceService } from '../repo-service.service';
import { GitserviceService } from '../gitservice.service';


@Component({
  selector: 'app-gitland',
  templateUrl: './gitland.component.html',
  styleUrls: ['./gitland.component.css']
})
export class GitlandComponent implements OnInit {
  constructor(private userServ:GitserviceService) { 

  }

  ngOnInit() {
    // this.userServ.userFuction()
    // this.user = this.userServ.user
    // console.log(this.user)

 }
searchGit(searchTerm){
  this.userServ.searchGit(searchTerm)
}
}
