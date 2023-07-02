import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from '../employe';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private empService : EmployeService,
    private router : Router,
    private route : ActivatedRoute
    ){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'))
      this.getById(id)
    })
  }

  employe : Employe = {
    id : 0,
    nom : '',
    prenom : '',
    salaire : 0
  }

  getById(id : number){
    this.empService.getById(id).subscribe((data) => {
      this.employe = data
    })
  }

  update(){
    this.empService.update(this.employe).subscribe({
      next : (data) => {
        this.router.navigate(["/employe/list"])
      },
      error : (err) => {
        console.log(err)
      }
    })
  }
}

