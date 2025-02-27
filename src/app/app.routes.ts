import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EintragComponent } from './blogs/blog/eintrag/eintrag.component';
import { StartpageComponent } from './startpage/startpage.component';
import { SubpagesComponent } from './subpages/subpages.component';
import { SubInfoComponent } from './subpages/sub-info/sub-info.component';

export const routes: Routes = [
    {path: '', component: StartpageComponent},  
    {path: 'Eintrag', component: EintragComponent},
    {path: 'info', component: SubInfoComponent},
    {path: 'info/zuege', component: SubpagesComponent},
    {path: '**', redirectTo: '' },

    ]


NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
