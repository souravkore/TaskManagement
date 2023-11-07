import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'add', component: ItemCreateComponent },
  { path: 'edit/:id', component: ItemEditComponent },
  { path: 'create', component: ItemCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
