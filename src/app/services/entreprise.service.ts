import { Injectable } from '@angular/core';
import { Entreprise } from '../model/entreprise.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http: HttpClient) { }

  addEntreprise(entreprise: Entreprise) {
    this.http.post<Entreprise>('https://horplanet.firebaseio.com/entreprise.json', entreprise)
      .subscribe(response => {
        console.log(response);
      });
  }
}
