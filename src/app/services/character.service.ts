import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map, catchError, filter, switchMap } from 'rxjs/operators';

export interface CharacterItem {
  slot: number;
  itemId: number;
}

export interface Character {
  race: number;
  gender: number;
  skin: number;
  face: number;
  hairStyle: number;
  hairColor: number;
  facialStyle: number;
  items: CharacterItem[];
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characterSubject = new BehaviorSubject<Character | null>(null);
  character$: Observable<Character> = this.characterSubject.asObservable().pipe(
    filter((character): character is Character => character !== null)
  );

  constructor() {
    this.loadCharacter();
  }

  private loadCharacter(): void {
    from(fetch('/character.json'))
      .pipe(
        switchMap(response => response.json()),
        catchError(error => {
          console.error('Error loading character data:', error);
          throw error;
        })
      )
      .subscribe({
        next: (character: Character) => {
          this.characterSubject.next(character);
        },
        error: (error) => {
          console.error('Failed to load character:', error);
        }
      });
  }

  updateCharacter(updates: Partial<Character>): void {
    const currentCharacter = this.characterSubject.value;
    if (currentCharacter) {
      this.characterSubject.next({
        ...currentCharacter,
        ...updates
      });
    }
  }

  updateItem(slot: number, itemId: number): void {
    const currentCharacter = this.characterSubject.value;
    if (currentCharacter) {
      const updatedItems = currentCharacter.items.map(item =>
        item.slot === slot ? { ...item, itemId } : item
      );
      this.updateCharacter({ items: updatedItems });
    }
  }
} 