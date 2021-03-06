import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitlandComponent } from './gitland/gitland.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AboutComponent } from './about/about.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';


const routes: Routes = [
  {"pathMatch":"full","redirectTo":"home","path":""},
  {"path":"home","component":GitlandComponent},
  {"path":"repos","component":SearchRepoComponent},
  {path: "", redirectTo:"/home", pathMatch:"full"},
  
  {"path":"about","component":AboutComponent},
  
  {"path":"**","component":NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
