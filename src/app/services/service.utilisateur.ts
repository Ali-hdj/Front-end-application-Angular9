import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs';
import * as Rx from 'Rxjs/Rx';

@Injectable()
export class utilisateurService
{


base_url='http://localhost:3000'
   posts :Promise<Object>;
   stop=false;
constructor(private httpclient:HttpClient)
{
   this.posts = new Promise((resolve, reject) => {
    
      this.httpclient.get(this.base_url+/annonces/).subscribe((p)=>
      {
         resolve(p);
      });
    });

    var source = Rx.Observable
    .interval(1000 /* ms */)

var subscription = source.subscribe(
     (x)=>{
      this.httpclient.get(this.base_url+/annonces/).subscribe((p)=>
     {  
         if(!this.stop)
        this.posts=Promise.resolve(p);
     })

     console.log(this.posts)
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    });
  
    
};






getPosts()
{
  
    return this.posts ;
}
}