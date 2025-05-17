import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../services/category.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent  implements OnInit {
  categoryLista: any[] = []
  category = {
    nom: '',
    type: '',
    data: new Date()
  }

  constructor(private ServiceCategory: CategoryService, private router: Router) {
  }

  ngOnInit(): void {
    this.afiicheCategory()
  }

  afiicheCategory() {
    this.ServiceCategory.AfficherCategory().subscribe(Data => {
      this.categoryLista = Data
      console.log(Data)
    })
  }


  AjouteCategory() {
    this.ServiceCategory.AddCategor(this.category).subscribe(categoryAdd => {
      this.categoryLista = categoryAdd
      console.log(categoryAdd)
    })
  }
}
