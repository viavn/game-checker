import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameStoreService } from 'src/app/services/gameStore/game-store.service';
import { GameModel } from 'src/app/services/gameStore/models/GameModel';
import { StringConstants } from '../../infrastructure/StringConstants';

@Component({
  selector: 'app-create-game-page',
  templateUrl: './create-game-page.component.html',
  styleUrls: ['./create-game-page.component.scss']
})
export class CreateGamePageComponent implements OnInit {
  gameForm: FormGroup;
  minMaxMessage = StringConstants.minMax_message_error;
  requiredMessage = StringConstants.required_message_error;

  constructor(
    private formBuilder: FormBuilder,
    private gameStoreSevice: GameStoreService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    const formFields = {};
    for (let index = 1; index <= 7; index++) {
      formFields[`number${index}`] = new FormControl(
        null,
        [
          Validators.required,
          Validators.min(1),
          Validators.max(31)
        ]
      );
    }

    this.gameForm = this.formBuilder.group({
      ...formFields
    });
  }

  onSubmit(): void {
    if (this.gameForm.invalid) { return; }

    const gameModel: GameModel = { ...this.gameForm.value };
    if (this.gameStoreSevice.gameExists(gameModel)) {
      console.log('jogo já existe');
      return;
    }

    this.gameStoreSevice.createGame({ ...this.gameForm.value });
    this.gameForm.reset();
    this.route.navigate(['/list-games']);
  }

  getMinMaxErrorMessageForInput(formControlName: string): () => boolean {
    return () => {
      return this.gameForm.get(formControlName).hasError('min') || this.gameForm.get(formControlName).hasError('max')
        && !this.gameForm.get(formControlName).hasError('required');
    };
  }

  getRequiredErrorMessageForInput(formControlName: string): () => boolean {
    return () => this.gameForm.get(formControlName).hasError('required');
  }
}
