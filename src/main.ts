import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { CharacterModelComponent } from './app/components/character-model/character-model.component';
bootstrapApplication(CharacterModelComponent, {
  providers: [
    provideRouter(routes)
  ]
})
.catch(err => console.error(err));
