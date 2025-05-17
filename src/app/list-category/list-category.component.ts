import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../services/category.service';
import {Router, RouterLink} from '@angular/router';
import {DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-list-category',
  standalone: true,
  imports: [
    RouterLink,
    DatePipe,
    NgForOf
  ],
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.css'
})
export class ListCategoryComponent implements OnInit{

  categoryLista: any[] = []


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


  deleteCategory(id:any) {
    console.log("ok")
    let conf = confirm("'Voulez-vous le supprimer Category?")
    if (conf){
      this.ServiceCategory.supprimercategory(id).subscribe(supprime=>{
        if (supprime){
          this.afiicheCategory()
        }
      })
    }

  }
}
