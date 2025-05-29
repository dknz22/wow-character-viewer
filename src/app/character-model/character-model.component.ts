import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateModels } from 'wow-model-viewer';
import { CharacterService, Character } from './character.service';
import { InventoryService, ItemSlot } from './inventory.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-model.component.html',
  styleUrls: ['./character-model.component.css']
})
export class CharacterModelComponent implements OnInit, OnDestroy {
  isLoading = true;
  error: string | null = null;
  character!: Character;
  private subscription: Subscription;

  leftArmorSlots: ItemSlot[] = [];
  rightArmorSlots: ItemSlot[] = [];
  weapons: ItemSlot[] = [];

  constructor(
    private characterService: CharacterService,
    private inventoryService: InventoryService
  ) {
    this.subscription = this.characterService.character$.subscribe(character => {
      this.character = character;
      this.updateModel();
    });
  }

  ngOnInit(): void {
    this.leftArmorSlots = this.inventoryService.getLeftArmorSlots();
    this.rightArmorSlots = this.inventoryService.getRightArmorSlots();
    this.weapons = this.inventoryService.getWeapons();

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private updateModel(): void {
    if (!this.character) {
      return;
    }

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
