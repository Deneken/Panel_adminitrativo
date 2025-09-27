import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sign-up-form',
  imports: [FormsModule],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css'
})
export class SignUpFormComponent {
  constructor(private dialogRef: DialogRef<SignUpFormComponent>) {}
close() {
    this.dialogRef.close();
  }
}
