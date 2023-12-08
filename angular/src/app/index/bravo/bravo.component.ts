import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bravo',
  templateUrl: './bravo.component.html',
  styleUrl: './bravo.component.css'
})
export class BravoComponent {

  reponses : any[] = [
    {question:"Comment je m'appelle ?"},
    {question:"Pourquoi y'a plus de gateau?"},
    {question:"WSL ?"},
    {question:"Merci pour le saucisson ?"},
    {question:"Tailwind ?"},
    {question:"Rémy Gineste au toilette ?"},
  ] 

  popup: boolean = false
  selectedReponse: any = null

  onSelectReponse(reponse: any){
    this.popup = true
    this.selectedReponse = reponse
  }

}
