import { Component, OnInit } from '@angular/core';
import { generateModels } from 'wow-model-viewer';
import { CommonModule } from '@angular/common';

interface CharacterItem {
  slot: number;
  itemId: number;
}

interface Character {
  race: number;
  gender: number;
  skin: number;
  face: number;
  hairStyle: number;
  hairColor: number;
  facialStyle: number;
  items: CharacterItem[];
}

@Component({
  selector: 'app-character-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-model.component.html',
  styleUrls: ['./character-model.component.css']
})
export class CharacterModelComponent implements OnInit {
  isLoading = true;
  error: string | null = null;
  character: Character = {
    race: 7,
    gender: 1,
    skin: 4,
    face: 0,
    hairStyle: 5,
    hairColor: 5,
    facialStyle: 5,
    items: [
      { slot: 1, itemId: 1170 },
      { slot: 3, itemId: 4925 },
      { slot: 5, itemId: 9575 },
      { slot: 6, itemId: 25235 },
      { slot: 7, itemId: 2311 },
      { slot: 8, itemId: 21154 },
      { slot: 9, itemId: 14618 },
      { slot: 10, itemId: 9534 },
      { slot: 15, itemId: 0 },
      { slot: 21, itemId: 20379 },
      { slot: 22, itemId: 28787 }
    ]
  };

  ngOnInit(): void {
    try {
      this.isLoading = true;
      const itemsArray = this.character.items.map(item => [item.slot, item.itemId]);
      generateModels(1, '#model_3d', { ...this.character, items: itemsArray });
    } catch (err) {
      this.error = 'Failed to load character model';
      console.error('Error loading character model:', err);
    } finally {
      this.isLoading = false;
    }
  }
}
