import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';
import { Repo } from './repo';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
url = "https://api.github.com/users/";
token= "?access_token=fde297391e1f20011a46234d1aba962ba370036f";
Repos:Repo[]=[];


constructor (private http:HttpClient) { }
findRepo(repoTerm:string): Observable<any>{
return this.http.get(this.url + repoTerm + "/repos" + this.token )
};



// searchRepos(repoTerm:string){
//   interface repoInterface{
//     name:string,
//     description:string,
//     html_url:any,
//     created_at:Date,
//   }

//   let urlUser = "https://api.github.com/users/"+ repoTerm +"/repos"+"?access_token="+environment.accessToken;

//   let promise = new Promise((resolve,reject)=>{
//     this.http.get<repoInterface[]>(urlUser).toPromise().then(
//       (results)=>{

//         this.Repos= [];
//         for (let i=0; i<results.length;i++){
//           var repo = new Repo(results[i].name,results[i].description,results[i].html_url,results[i].created_at)
//           this.Repos.push(repo);
//         }
//         console.log(this.Repos);
//         resolve()
//       },
//       (error)=>{
//         alert('this is an error')
//         reject()
//       }
//     )
//   })
//   return promise
// }
}

