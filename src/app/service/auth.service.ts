import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl='http://localhost:3000/admin';
  constructor(private http:HttpClient) {

   }
   ProceedLogin(UserCred:any){
     return this.http.post(this.apiurl,UserCred);
   }
   IsLoggedIn(){
     return localStorage.getItem('token')!=null;
   }
   GetToken(){
    return localStorage.getItem('token')||'';
   }
   HaveAccess(){
     var loggintoken=localStorage.getItem('token')||'';
     var _extractedtoken=loggintoken.split('.')[1];
     var _atobdata=atob(_extractedtoken);
     var _finaldata=JSON.parse(_atobdata);
     if(_finaldata.role=='admin'){
      console.log(_finaldata);
       return true;
     }else{
       alert('you are not having access');
       return false
     }
   }
}
