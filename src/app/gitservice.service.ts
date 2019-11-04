import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';
import { Repo } from './repo';


@Injectable({
  providedIn: 'root'
})
export class GitserviceService {
// user:User;
//   constructor(private http:HttpClient) {
//     this.user= new User("","","","","","");
//    };
//    userFuction(){
//      interface userResponse{
//       login:string,
//       avatar_url:any,
//       bio:string,
//       email:any,
//       location:any,
//       html_url:string,

//      }
//      let promise = new Promise((resolve, reject)=>{
//        let urlUser = `https://api.github.com/users/Nyagah-Tech?access_token=${environment.accessToken}`
//        this.http.get<userResponse>(urlUser).toPromise().then(
//          Response =>{
//            this.user.login = Response.login
//            this.user.avatar_url = Response.avatar_url
//            this.user.bio = Response.bio
//            this.user.email = Response.email
//            this.user.location = Response.location
//            this.user.html_url = Response.html_url
          
//            resolve()
//          },
//          error=>{
//           this.user.login= "Invalid username"
//           this.user.avatar_url = ""
//           this.user.bio = ""
//           this.user.email ="" 
//           this.user.location =""
//           this.user.html_url ="Check the the spelling of your username" 

//           reject(error)
//          })
//      })
//      console.log(this.user.login)
//      return promise
     
//    }
//   }




Users:User
Repos:Repo[]=[]

constructor (private http:HttpClient) { }
searchGits(searchTerm:string){
  interface userInterface{
    login:string,
    avatar_url:any,
    bio:string,
    email:any,
    followers:any,
    following:any,
    public_repos,
    location:any,
   html_url:any
  }
  let urlUser = "https://api.github.com/users/"+searchTerm+"?access_token="+environment.accessToken;
  
  let promise = new Promise((resolve,reject)=>{
    this.http.get<userInterface>(urlUser).toPromise().then(
      (result)=>{
        
       this.Users=result
        console.log(this.Users);
        
        resolve()
      },
      (error)=>{
        console.log(error)
        reject()
      }
    )
  })
  return promise
}
searchRepos(searchTerm:string){
  interface repoInterface{
    name:string,
    description:string,
    html_url:any,
    created_at:Date,
  }

  let urlUser = "https://api.github.com/users/"+ searchTerm +"/repos"+"?access_token=fde297391e1f20011a46234d1aba962ba370036f";

  let promise = new Promise((resolve,reject)=>{
    this.http.get<repoInterface[]>(urlUser).toPromise().then(
      (results)=>{

        this.Repos= [];
        for (let i=0; i<results.length;i++){
          let repo = new Repo(results[i].name,results[i].description,results[i].html_url,results[i].created_at)
          this.Repos.push(repo);
        }
        console.log(results);
        resolve()
      },
      (error)=>{
        console.log(error)
        reject()
      }
    )
  })
  return promise
}
}
