import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EmployeeComponent } from './employee/employee.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { TeamComponent } from './team/team.component';
import { ParentComponent } from './parent/parent.component';
import { TraineeComponent } from './trainee/trainee.component';
import { AuthenticationComponent } from './authentication/authentication.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'emp',component:EmployeeComponent},
    {path:'about',component:AboutusComponent},
    {path:'pipes',component:PipesdemoComponent},
    {path:'login',component:LoginComponent},
    {path:'det',component:DetailsComponent},
    {path:'contact',component:ContactComponent},
    {path: 'team',component:TeamComponent},
    {path:'parent',component:ParentComponent},
    {path:'trainee',component:TraineeComponent},
    {path:'auth',component:AuthenticationComponent}
];
