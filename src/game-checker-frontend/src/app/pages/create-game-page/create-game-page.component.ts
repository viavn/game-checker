import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-game-page',
  templateUrl: './create-game-page.component.html',
  styleUrls: ['./create-game-page.component.scss']
})
export class CreateGamePageComponent implements OnInit {
  gameForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
    console.log(this.gameForm.value);
  }
}
