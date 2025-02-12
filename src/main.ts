import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { appConfig } from './app/app.config';
import { NavbarComponent } from './app/navbar/navbar.component';
import { BlogComponent } from './app/blogs/blog/blog.component';

bootstrapApplication(NavbarComponent).catch(err => console.error(err));
