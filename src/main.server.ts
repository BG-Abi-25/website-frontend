import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { BlogComponent } from './blog/blog.component';

const bootstrap = () => bootstrapApplication(BlogComponent, config);


export default bootstrap;
