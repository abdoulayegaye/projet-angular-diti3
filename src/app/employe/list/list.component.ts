import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employes : Employe[] = [];

  constructor(private empService : EmployeService){}

  ngOnInit(): void {
    this.empService.getAll().subscribe(data => 
      {
        this.employes = data
      }
    );
  }

  delete(id : number){
    let conf = confirm("Voulez-vous supprimer cet employe d'ID : " + id);
    if(conf){
      this.empService.delete(id).subscribe({
        next : (data) => {
          this.employes = this.employes.filter(e => e.id != id)
        }
      });
    }
  }

}
