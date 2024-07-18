import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PigReportComponent } from './pig-report/pig-report.component';
import { PigListComponent } from './pig-list/pig-list.component';
import { PigFormComponent } from './pig-form/pig-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoreInfoComponent } from './more-info/more-info.component';
import { PigMapComponent } from './pig-map/pig-map.component';

@NgModule({
  declarations: [
    AppComponent,
    PigReportComponent,
    PigListComponent,
    PigFormComponent,
    MoreInfoComponent,
    PigMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
