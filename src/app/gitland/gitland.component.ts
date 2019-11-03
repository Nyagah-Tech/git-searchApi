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
  Users:User[];
final=[];
  constructor(public userHttpService:GitserviceService) { 

  }

  ngOnInit() {
    this.searchGit("Nyagah-Tech")
    // this.userServ.userFuction()
    // this.user = this.userServ.user
    // console.log(this.user)

 }
searchGit(searchTerm){
  this.userHttpService.searchGits(searchTerm).then(
    ()=>{
      this.Users = this.userHttpService.Users;
      console.log(this.Users.login)
    },
    (error)=>{
      console.log(error)
    }
  )
}
}
