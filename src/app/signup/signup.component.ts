import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import {MatDialog} from '@angular/material';
import {DialogContentComponent} from './dialog-content/dialog-content.component';
import {MatSnackBar} from '@angular/material';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements ErrorStateMatcher
{
  constructor(private form :FormBuilder , public dialog: MatDialog, public snackBar: MatSnackBar,
              private bottomSheet: MatBottomSheet) { }

  ngOnInit() {}

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean 
  {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  message:"Bilal Akbar"
  openSnackBar( action: string) {
    this.snackBar.open("Bilal Akbar", action, {
      duration: 2000,
    });
  }
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }

  minDate = new Date(2015,0,1);
  maxDate = new Date(2025,0,1);
  model;
  
  StudentForm=this.form.group({
    address:this.form.group({
      street:[''],
      city:[''],
      State:[''],
      zipCode:['']
    }),
    phoneNo:this.form.array([
      this.form.control('')
    ])
  });

  get phoneNo()
  {
    return this.StudentForm.get('phoneNo') as FormArray;
  }

  addPhoneNo()
  {
    this.phoneNo.push(this.form.control(''))
  }

  

}
