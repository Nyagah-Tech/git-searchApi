import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';
import { Repo } from './repo';


@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  repo:Repo;
  constructor(private http:HttpClient) {
    this.repo = new Repo("","","","","","","");
   };
   repofunction(){
     interface repoResponse{
       full_name:string;
       html_url:string;
       description:string;
       homepage:any;
       language:string;
       create_at:any;
     }
     let promise = new Promise((resolve,reject)=>{
       let urlRepo = `https://api.github.com/users/Nyagah-Tech/repos?access_token=${environment.accessToken}`
       this.http.get<repoResponse>(urlRepo).toPromise().then(Response=>{
         this.repo.fullname = Response.full_name
         this.repo.html_url = Response.html_url
         this.repo.description = Response.description
         this.repo.hompage = Response.homepage
         this.repo.language = Response.language
         this.repo.created_at = Response.create_at
         resolve()
       },
       error=>{
        this.repo.fullname ="invalid option"
        this.repo.html_url =""
        this.repo.description = "invalid repository name or the repository name doesnt exist"
        this.repo.hompage = ""
        this.repo.language =""
        this.repo.created_at="" 

        reject(error)
       })
     })

     return promise
   }
}
