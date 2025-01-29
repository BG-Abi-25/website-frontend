import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { BlogComponent } from './app/blog/blog.component';

bootstrapApplication(BlogComponent, appConfig)
  .catch((err) => console.error(err));
