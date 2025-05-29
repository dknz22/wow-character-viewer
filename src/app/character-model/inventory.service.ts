import { Injectable } from '@angular/core';

export interface ItemSlot {
  name: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private readonly leftArmorSlots: ItemSlot[] = [
    { name: 'Head', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_head.jpg' },
    { name: 'Neck', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_neck.jpg' },
    { name: 'Shoulder', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_shoulder.jpg' },
    { name: 'Back', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_empty.jpg' },
    { name: 'Chest', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_chest.jpg' },
    { name: 'Shirt', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_shirt.jpg' },
    { name: 'Tabard', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_tabard.jpg' },
    { name: 'Wrist', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_wrists.jpg' }
  ];

  private readonly rightArmorSlots: ItemSlot[] = [
    { name: 'Hands', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_hands.jpg' },
    { name: 'Waist', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_waist.jpg' },
    { name: 'Legs', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_legs.jpg' },
    { name: 'Feet', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_feet.jpg' },
    { name: 'Ring1', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_finger.jpg' },
    { name: 'Ring2', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_finger.jpg' },
    { name: 'Trinket1', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_trinket.jpg' },
    { name: 'Trinket2', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_trinket.jpg' }
  ];

  private readonly weapons: ItemSlot[] = [
    { name: 'MainHand', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_mainhand.jpg' },
    { name: 'OffHand', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_offhand.jpg' },
    { name: 'Ranged', icon: 'https://wow.zamimg.com/images/wow/icons/large/inventoryslot_ranged.jpg' }
  ];

  getLeftArmorSlots(): ItemSlot[] {
    return this.leftArmorSlots;
  }

  getRightArmorSlots(): ItemSlot[] {
    return this.rightArmorSlots;
  }

  getWeapons(): ItemSlot[] {
    return this.weapons;
  }
} 