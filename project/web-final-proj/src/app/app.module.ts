import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PigReportComponent } from './pig-report/pig-report.component';
import { PigListComponent } from './pig-list/pig-list.component';
import { PigFormComponent } from './pig-form/pig-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoreInfoComponent } from './more-info/more-info.component';
import { PigMapComponent } from './pig-map/pig-map.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, } from '@angular/material/dialog'; 
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    PigReportComponent,
    PigListComponent,
    PigFormComponent,
    MoreInfoComponent,
    PigMapComponent,
    SubmittedComponent,
    PasswordDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatNativeDateModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
