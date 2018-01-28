import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoclistComponent } from './doclist/doclist.component';
import { DocuploadComponent } from './docupload/docupload.component';
import {AdddocComponent } from './adddoc/adddoc.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {CatelistComponent} from './catelist/catelist.component';
import { CateaddComponent } from './cateadd/cateadd.component';

const routes: Routes = [
  {path: "", redirectTo: "/catelist", pathMatch: "full"},
  {path:'catelist', component:CatelistComponent},
  {path: "cateadd", component:CateaddComponent},
  {path:'login', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path: 'doclist',component:DoclistComponent},
  {path: "adddoc", component:AdddocComponent},
  {path: "docupload", component:DocuploadComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
