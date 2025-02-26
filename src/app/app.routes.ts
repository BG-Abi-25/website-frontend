import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EintragComponent } from './blogs/blog/eintrag/eintrag.component';
import { StartpageComponent } from './startpage/startpage.component';
import { SubpagesComponent } from './subpages/subpages.component';
import { ZuegeComponent } from './subpages/zuege/zuege.component';

export const routes: Routes = [
    {path: '', component: StartpageComponent},  
    {path: 'Eintrag', component: EintragComponent},
    {path: 'info', component: SubpagesComponent},
    {path: 'info/zuege', component: ZuegeComponent},
    {path: '**', redirectTo: '' },

    ]


NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
