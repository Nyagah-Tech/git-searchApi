import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';
import { resolve, reject } from 'q';


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




Users:User[];
final=[]

constructor (private http:HttpClient) { }
searchGits(searchTerm:string){
  let urlUser = "https://api.github.com/users/Nyagah-Tech?access_token="+environment.accessToken;
  urlUser+="&q"+searchTerm;
  let promise = new Promise((resolve,reject)=>{
    this.http.get(urlUser).toPromise().then(
      (result)=>{
        this.Users= [];
           this.Users.login = result.login,
           this.Users.avatar_url =result.avatar_url
           this.Users.bio =result.bio
           this.Users.email = result.email
           this.Users.location = result.location
           this.Users.html_url = result.html_url
           let final = this.Users;
       
        console.log(final.login);
        
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
