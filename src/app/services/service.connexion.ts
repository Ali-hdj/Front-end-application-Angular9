import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class connexionService
{
   tocken='non_valable';
   att=0;
   long=0;
   id_compte=0;
    constructor(private route :Router,private httpclient : HttpClient)
    {
        
    }
    profile={
        nom :"Ali",
        prenom :"hadj-said",
        adresse :"65 rue paul masson",
        code_postale :29200
    }

    base_url='http://localhost:3000';

    isWaitingSomting =false ;
    areReady=[true,false,false,false,false,false,false];

    isSuccess=false;

    isReady(id)
    {
        return this.areReady[id];
    }

    success()
    {
        this.isSuccess=true;
        setTimeout(()=>this.isSuccess=false,2500);
    }
/************************************Actions********************** */

supprimerAnnonce(id)
{
    this.isWaitingSomting=true;
    setTimeout(()=>{
        this.annonces=this.annonces.filter(x=>x.id!=id);this.isWaitingSomting=false;
        this.isSuccess=true;
        setTimeout(()=>this.isSuccess=false,1000);
    
    },200)
}

    /***************************profile************** */
    getProfile()
    {
        this.areReady[1]=false;
setTimeout(()=>this.areReady[1]=true,300);
    }
/*******************************************MESSAGES************************* */
    messagerie :Promise<Object>

getMessages()
{
    this.areReady[2]=false;
    this.httpclient.get(this.base_url+'/messages/'+this.id_compte).subscribe((pub :any[])=>
    {if(pub){
        this.messagerie=Promise.resolve(pub);
        this.areReady[2]=true;
   }},
    (err)=>console.log(err));

    

}

getMessagesR()
{
    this.areReady[2]=false;
    this.httpclient.get(this.base_url+'/messagesR/'+this.id_compte).subscribe((pub :any[])=>
    {if(pub){
        this.messagerie=Promise.resolve(pub);
        this.areReady[2]=true;
   }},
    (err)=>console.log(err));
}
addMessage(message)
{
    this.httpclient.post(this.base_url+'/add/message/',message).subscribe((pub)=>
    {if(pub){
        this.isSuccess=true
        setTimeout(()=>{this.isSuccess=false},1000)
   }},
    (err)=>{console.log(err);alert("une erreur est produite")});

}

/*********************************************RENDEZ VOUS ********************************** */

rendez_vous=[
    {
        nom_1:"Ali",
        nom_2:"ziri",
        date :"21-12-2012",
        heure : "9:55",
        adresse : "65 rue jean jaures"
    },
    {
        nom_1:"Ali",
        nom_2:"ziri",
        date :"21-12-2012",
        heure : "9:55",
        adresse : "65 rue jean jaures"
    },
    {
        nom_1:"Ali",
        nom_2:"ziri",
        date :"21-12-2012",
        heure : "9:55",
        adresse : "65 rue jean jaures"
    }
]

getRendez_vous()
{
    this.areReady[3]=false;
    setTimeout(()=>this.areReady[3]=true,300);
}
/************************************************VOISINS*********************************** */

voisins :Promise<any[]>;

mesVoisins :any[];
getVoisins()
{
    this.areReady[5]=false;

this.httpclient.get(this.base_url+'/voisins/10').subscribe((v :any[])=>
{if(v){
    this.voisins=Promise.resolve(v)
    this.voisins.then((val)=>{this.mesVoisins=val;});
    this.areReady[5]=true;
}},
(err)=>console.log(err));

return this.voisins;

}

/*************************************************CONTRATS************************************ */

contrats=[
    {
        nom_1:"Ali",
        nom_2:"ziri",
        date :"21-12-2012",
       montant : 200,
       duree:60
    },
    {
        nom_1:"Ali",
        nom_2:"ziri",
        date :"21-12-2012",
       montant : 200,
       duree:60
    },
    {
        nom_1:"Ali",
        nom_2:"ziri",
        date :"21-12-2012",
       montant : 200,
       duree:60
    },
]



getContrats()
{
this.areReady[6]=false;
setTimeout(()=>this.areReady[6]=true,300);
}


/*************************************************Mes ANNONCES************************************ */

annonces=[
    {   
        id :0,
        nom :"salim",
        titre :"location d'une perceuse",
        date :"12-10-2020",
        prix : 200,
        contenu :"voila mon nom est ali je loue des appareils electroniques avec un tarif resonable"
    },
    {    id :1,
        nom :"salim",
        titre :"location d'une perceuse",
        date :"12-10-2020",
        prix : 200,
        contenu :"voila mon nom est ali je loue des appareils electroniques avec un tarif resonable"
    },
    {    id :2,
        nom :"salim",
        titre :"location d'une perceuse",
        date :"12-10-2020",
        prix : 200,
        contenu :"voila mon nom est ali je loue des appareils electroniques avec un tarif resonable"
    },
] 
getPublication()
{  
     this.areReady[4]=false;
     this.httpclient.get(this.base_url+'/annonces/').subscribe((pub :any[])=>
     {if(pub){
         this.annonces=pub;
         this.areReady[4]=true;
    }},
     (err)=>console.log(err));

     return this.annonces;
}

addPublication(newPub)
{
    newPub.tocken=this.tocken;
    this.httpclient.post(this.base_url+'/add/annonce/',newPub).subscribe((stat)=>{console.log(stat);this.success()},(err)=>{alert(err)});

}
/************************************************************ */
    template;
    connecte=false;
    wait=false;
    seConnecter(connexionInfo)
    {
       this. wait=true;
       this.httpclient.post(this.base_url+'/connexion/',connexionInfo)
       .subscribe((stat:any)=>{this.connecte=true;this.id_compte=stat.id;this.att=stat.att;this.long=stat.long;this.tocken=stat.tocken;this.route.navigate(['accueil-utilisateur']);this.wait=false;}
       ,(err)=>{alert('echec d\'autenfication');this.wait=false;});
        
            
       

    }

    seDeconecter()
    {
        this.connecte=false;
        this.tocken='invalid';
        this.route.navigate(['/']);
    }

    isConnected()
    {
        return this.connecte;
    }

    isWait()
    {
        return this.wait;
    }


    /****************************sinscrir*************** */

    creerCompte(inscription)
    {
        
        this.httpclient.post(this.base_url+'/add/compte_complet/',inscription).subscribe(
            (res)=>{alert('creation compte reussi')},
            (erreur)=>{alert("erreur l'ors de la crécation du compte , email deja utilisé")});
        return;
    }
}