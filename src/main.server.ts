import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { BlogComponent } from './app/blog/blog.component';

const bootstrap = () => bootstrapApplication(BlogComponent, config);


export default bootstrap;

