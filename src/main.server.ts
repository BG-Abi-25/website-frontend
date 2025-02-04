import { bootstrapApplication } from '@angular/platform-browser';
import { NavbarComponent } from './app/navbar/navbar.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(NavbarComponent, config);

export default bootstrap;
