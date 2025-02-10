import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { EintragComponent } from './blogs/blog/eintrag/eintrag.component';

export const routes: Routes = [
    {path: '', component: BlogsComponent},  
    {path: 'Eintrag', component: EintragComponent},
    {path: '**', redirectTo: '' }

    ]


NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
