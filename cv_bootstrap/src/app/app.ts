import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnteteComponent } from './entete/entete';
import { Infos } from './infos/infos';
import { Competences } from './competences/competences';
import { Experiences } from './experiences/experiences';
import { Formation } from './formation/formation';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EnteteComponent,Infos,Competences,Experiences,Formation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cv_bootstrap');
}
