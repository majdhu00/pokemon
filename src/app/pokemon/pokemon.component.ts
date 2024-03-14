import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  

  onSubmit = (form:NgForm) => {
    console.log(form)
    alert('payment done succsessfully');
  }
}
