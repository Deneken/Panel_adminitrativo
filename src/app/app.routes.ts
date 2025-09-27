import { Routes } from '@angular/router';
import { EmployedComponent } from './pages/employed/employed';
import { ConfigurationComponent } from './pages/configuration/configuration';

export const routes: Routes = [
  {path: '', component: EmployedComponent},
  {path: 'configuration', component: ConfigurationComponent}
];
