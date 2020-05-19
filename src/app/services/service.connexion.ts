import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class connexionService
{
   
    constructor(private route :Router)
    {
        
    }
    profile={
        nom :"Ali",
        prenom :"hadj-said",
        adresse :"65 rue paul masson",
        code_postale :29200
    }


    areReady=[true,false,false,false,false,false,false];

    isReady(id)
    {
        return this.areReady[id];
    }


    /***************************profile************** */
    getProfile()
    {
        this.areReady[1]=false;
setTimeout(()=>this.areReady[1]=true,2000);
    }
/*******************************************MESSAGES************************* */
    messagerie=[
    {
        message:"bonjour monsieur je souaite louer votre appareil",
        date :"21-12-2020",

    },
    {
        message:"bonjour monsieur je souaite louer votre appareil",
        date :"21-12-2020",

    },
    {
        message:"bonjour monsieur je souaite louer votre appareil",
        date :"21-12-2020",

    },
    {
        message:"bonjour monsieur je souaite louer votre appareil",
        date :"21-12-2020",

    }
    ]

getMessages()
{
    this.areReady[2]=false;
    setTimeout(()=>this.areReady[2]=true,2000);
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
    setTimeout(()=>this.areReady[3]=true,2000);
}
/************************************************VOISINS*********************************** */

voisins=[
    {
        nom :"salim",
        prenom :"chebbalah",      
        adresse : "65 rue jean jaures",
        note :1
    },
    {
        nom :"salim",
        prenom :"chebbalah",      
        adresse : "65 rue jean jaures",
        note :5
    },
    {
        nom :"salim",
        prenom :"chebbalah",      
        adresse : "65 rue jean jaures",
        note :4
    }
]

getVoisins()
{
    this.areReady[5]=false;
setTimeout(()=>this.areReady[5]=true,2000);
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
setTimeout(()=>this.areReady[6]=true,2000);
}


/*************************************************Mes ANNONCES************************************ */

annonces=[
    {
        nom :"salim",
        titre :"location d'une perceuse",
        date :"12-10-2020",
        prix : 200,
        contenu :"voila mon nom est ali je loue des appareils electroniques avec un tarif resonable"
    },
    {
        nom :"salim",
        titre :"location d'une perceuse",
        date :"12-10-2020",
        prix : 200,
        contenu :"voila mon nom est ali je loue des appareils electroniques avec un tarif resonable"
    },
    {
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
    setTimeout(
    
    ()=>{
     let feed = {nom :"salim",
     titre :"location d\'une perceuse",
      date :"12-10-2020",
      prix : 200,
     contenu :"voila mon nom est ali je loue des appareils electroniques avec un tarif resonable"
    };   
    this.annonces.push(feed);
     this.areReady[4]=true},
    3000
    )
}
/************************************************************ */
    template;
    connecte=true;
    wait=false;
    seConnecter()
    {
       this. wait=true;
        setTimeout(()=>{
            this.connecte=true;
            this.wait=false;
            this.route.navigate(['accueil-utilisateur']);
        },1000);

    }

    seDeconecter()
    {
        this.connecte=false;
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
}