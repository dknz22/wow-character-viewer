import { Component, OnInit } from '@angular/core';
import { generateModels } from 'wow-model-viewer';

@Component({
  selector: 'app-character-model',
  standalone: true,
  templateUrl: './character-model.component.html'
  // styleUrls: ['./character-model.component.css']
})
export class CharacterModelComponent implements OnInit {
  ngOnInit(): void {
    const character = {
      race: 7,
      gender: 1,
      skin: 4,
      face: 0,
      hairStyle: 5,
      hairColor: 5,
      facialStyle: 5,
      items: [[1, 1170], [3, 4925], [5, 9575], [6, 25235], [7, 2311], [8, 21154], [9, 14618], [10, 9534], [15, 0], [21, 20379], [22, 28787]]
    };

    generateModels(1, '#model_3d', character);
  }
}
