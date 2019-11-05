import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitlandComponent } from './gitland/gitland.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { AboutComponent } from './about/about.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';
import { FormRepoComponent } from './form-repo/form-repo.component';
import { HighlightDirective } from './highlight.directive';
// import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    GitlandComponent,
    NavbarComponent,
    NotFoundComponent,
    SearchFormComponent,
    AboutComponent,
    SearchRepoComponent,
    FormRepoComponent,
    HighlightDirective,
    // ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
