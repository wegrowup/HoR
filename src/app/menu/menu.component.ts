import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  info:any
  comments=[];
  commentaire={date:null ,titre:"" ,missions:"" ,profil:"" ,inffos:"" ,upim:""};


  constructor(private contactService:ContactService) { 
    this.comments=this.contactService.getAllComments();
        this.info=this.contactService.getInfo();


  }

  ngOnInit(): void {

  }

  onAddCommentaire(c){
this.contactService.addComments(c);
this.commentaire.titre="";   
this.comments=this.contactService.getAllComments();
  }

}
