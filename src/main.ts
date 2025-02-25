import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { appConfig } from './app/app.config';
import { NavbarComponent } from './app/navbar/navbar.component';
import { BlogComponent } from './app/blogs/blog/blog.component';
import { provideRouter } from '@angular/router'; // 🚀 Router importieren!
import { routes } from './app/app.routes'; // 🚀 Die Routen importieren!

bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(),
      provideRouter(routes) // 🚀 Routing aktivieren
    ]
  }).catch(err => console.error(err));
