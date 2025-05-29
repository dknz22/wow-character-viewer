import { Routes } from '@angular/router';
import { CharacterModelComponent } from './components/character-model/character-model.component';

export const routes: Routes = [
  {
    path: '',
    component: CharacterModelComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
