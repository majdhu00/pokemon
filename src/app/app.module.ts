import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
const appRouting: Routes = [
  {path: "", component: HomeComponent},
  {path: "pokemon", component:PokemonComponent},
 
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    HomeComponent

  ],
  
  imports: [
    RouterModule.forRoot(appRouting),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
