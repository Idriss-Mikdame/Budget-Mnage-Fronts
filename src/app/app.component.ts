import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {ListCategoryComponent} from './list-category/list-category.component';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoryComponent, ListCategoryComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App-Budget-Fronts';
}
