import { Injectable } from '@angular/core';
@Injectable()

export class ContactService{


	  info={
    nom: "Ahmed CHAKIB",
    email: "a.chakib@outlook.fr",
    tel: "0665223917",
  }

  comments=[

  ];

addComments(c){
	    c.date=new Date();
		this.comments.push(c);
	}

getAllComments(){
return this.comments;

	}

	getInfo(){
		return this.info;

	}

}