import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {ListCategoryComponent} from './list-category/list-category.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoryComponent, ListCategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App-Budget-Fronts';
}
