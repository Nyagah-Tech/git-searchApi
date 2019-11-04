import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RepoServiceService } from '../repo-service.service';
import { Repo } from '../repo';
// import { GitserviceService } from '../gitservice.service';


@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {
  Repos:Repo[]=[]
 

  constructor(public gitRepoService:RepoServiceService) {}
  findRepo(repoTerm){
    this.gitRepoService.findRepo(repoTerm).subscribe(
      (success)=>{
        this.Repos=success
        return (this.Repos);      }
    )
    
  }

  ngOnInit() {
    this.findRepo("Nyagah-Tech")
  }

}


   