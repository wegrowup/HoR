import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'app-ttoffres',
  templateUrl: './ttoffres.component.html',
  styleUrls: ['./ttoffres.component.css']
})
export class TtoffresComponent implements OnInit {



  info:any
  comments=[];
  commentaire={date:null ,titre:"" ,missions:"" ,profil:"" ,inffos:""};


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
