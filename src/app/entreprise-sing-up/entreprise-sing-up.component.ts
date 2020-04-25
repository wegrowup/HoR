import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EntrepriseService } from '../services/entreprise.service';
import { Entreprise } from '../model/entreprise.model';

@Component({
  selector: 'app-entreprise-sing-up',
  templateUrl: './entreprise-sing-up.component.html',
  styleUrls: ['./entreprise-sing-up.component.css']
})
export class EntrepriseSingUpComponent implements OnInit {
  entrepriseForm: FormGroup;

  constructor(private entrepriseService: EntrepriseService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    this.addEntreprise();
  }
  addEntreprise() {
    const entrepriseToAdd = new Entreprise(this.entrepriseForm.value.name as string,
      this.entrepriseForm.value.city as string, this.entrepriseForm.value.activity as string,
      this.entrepriseForm.value.websiteUrl as string, this.entrepriseForm.value.phoneNumber as string,
      this.entrepriseForm.value.email as string, this.entrepriseForm.value.logo as string,
      this.entrepriseForm.value.adresse as string, this.entrepriseForm.value.description as string);
    this.entrepriseService.addEntreprise(entrepriseToAdd);
  }
  initForm() {
    this.entrepriseForm = new FormGroup({
      logo: new FormControl(),
      name: new FormControl(),
      city: new FormControl(),
      email: new FormControl(),
      phoneNumber: new FormControl(),
      activity: new FormControl(),
      adresse: new FormControl(),
      websiteUrl: new FormControl(),
      description: new FormControl()
    })

  }

}
