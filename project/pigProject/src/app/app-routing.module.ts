import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreInfoComponent } from './more-info/more-info.component';
import { PigFormComponent } from './pig-form/pig-form.component';
import { PigListComponent } from './pig-list/pig-list.component';
import { PigMapComponent } from './pig-map/pig-map.component';

const routes: Routes = [
  { path: 'add', component: PigFormComponent },
  { path: 'more/:id', component: MoreInfoComponent },
  { path: 'map', component: PigMapComponent },
  { path: '', component: PigListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
