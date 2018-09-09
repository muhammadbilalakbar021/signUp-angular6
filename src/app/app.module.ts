import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ErrorEmailComponent } from './signup/error-email/error-email.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentComponent } from './signup/dialog-content/dialog-content.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BottomSheetComponent } from './signup/bottom-sheet/bottom-sheet.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ErrorEmailComponent,
    DialogContentComponent,
    BottomSheetComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MatGridListModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatSidenavModule,
    MatListModule

    
  ],
  entryComponents: [ErrorEmailComponent,DialogContentComponent,BottomSheetComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
