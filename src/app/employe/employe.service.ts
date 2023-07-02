import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employe } from './employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  API_URL = 'http://localhost:3000/employes';

  constructor(private http : HttpClient) { }

  //Liste des employés
  getAll(){
    return this.http.get<Employe[]>(this.API_URL);
  }

  //Ajout d'un employé
  add(data : Employe){
    return this.http.post(this.API_URL, data);
  }

  //Récupérer un employé via son ID
  getById(id : number){
    return this.http.get<Employe>(this.API_URL + `/${id}`);
  }

  //Modifier un employé
  update(data : Employe){
    return this.http.put(this.API_URL + `/${data.id}`, data);
  }

  //Supprimer un employé
  delete(id : number){
    return this.http.delete(this.API_URL + `/${id}`);
  }
}
