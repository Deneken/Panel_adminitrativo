import { Component } from '@angular/core';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form';
import { DialogRef, DialogModule } from '@angular/cdk/dialog';

@Component({
  selector: 'app-sign-up-modify',
  imports: [DialogModule],
  templateUrl: './sign-up-modify.html',
  styleUrl: './sign-up-modify.css'
})
export class SignUpModify {
constructor(private DialogRef: DialogRef<SignUpFormComponent>) {}
close() {
    this.DialogRef.close();
  }

}
