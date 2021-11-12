import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImportazioneFileComponent } from './importazione-file/importazione-file.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'importazione-file', component: ImportazioneFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
