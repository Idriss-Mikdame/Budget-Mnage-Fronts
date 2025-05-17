import { Routes } from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {TransactionComponent} from './transaction/transaction.component';

export const routes: Routes = [
  {path:'category',component:CategoryComponent},
  {path:'transaction',component:TransactionComponent}
];
