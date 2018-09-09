import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { SignupComponent } from '../signup.component';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {MatDialog} from '@angular/material';



@Component({
  selector: 'app-error-email',
  templateUrl: './error-email.component.html',
  styleUrls: ['./error-email.component.css']
})
export class ErrorEmailComponent {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  

  form: FormBuilder;
  public dialog: MatDialog;
  public snackBar: MatSnackBar;
  private bottomSheet: MatBottomSheet

  matcher = new SignupComponent(this.form,this.dialog,this.snackBar,this.bottomSheet);
  

  
}