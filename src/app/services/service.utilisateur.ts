export class utilisateurService
{
   posts= [{utilisateur:"Ali",ville:"brest",prix:"120 €",contenu:"voila contenu de mon post je cherche un jeune devloppeur d'applications web pour me devlopper des sites internet alors moi j'habite a brest centre ville ....",image:"/../../assets/images/homme_user.png"},
{note:5,utilisateur:"Ali",ville:"brest",prix:"120 €",contenu:"voila contenu de mon post",image:"/../assets/images/homme_user.png"},
{note:4,utilisateur:"Ali",ville:"brest",prix:"120 €",contenu:"voila contenu de mon post",image:"/../assets/images/homme_user.png"},
{note:1,utilisateur:"Ali",ville:"brest",prix:"120 €",contenu:"voila contenu de mon post",image:"/../assets/images/homme_user.png"},
{note:3,utilisateur:"Ali",ville:"brest",prix:"120 €",contenu:"voila contenu de mon post",image:"/../assets/images/homme_user.png"}
];

getPosts()
{
    return this.posts;
}
}