import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EintragComponent } from './blogs/blog/eintrag/eintrag.component';
import { StartpageComponent } from './startpage/startpage.component';
import { SubpagesComponent } from './subpages/subpages.component';
import { SubInfoComponent } from './subpages/sub-info/sub-info.component';
import { SubJubComponent } from './subpages/sub-jub/sub-jub.component';

export const routes: Routes = [
    {path: '', component: StartpageComponent},  
    {path: 'eintrag', component: EintragComponent},
    {path: 'info', component: SubInfoComponent},
    {path: 'info/schuljubiläum', component: SubJubComponent},
    {path: '**', redirectTo: '' },

    ]


NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
