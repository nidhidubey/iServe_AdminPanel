import { Routes } from '@angular/router';


import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { Auth1Guard } from '../../providers/auth1.guard';
import { AuthGuard } from '../../providers/auth.guard';
import { AuthDashboardGuard } from '../../providers/authDashboard.guard';

export const AdminLayoutRoutes: Routes = [
    {

        path: '', component: AdminLayoutComponent,
        children: [
              { path: 'dashboard', component: DashboardComponent,
              canActivate: [AuthDashboardGuard]

            },

            {
                path: 'incidents', loadChildren: '../../Modules/incidents/incidents.module#IncidentsModule',
                canActivate: [Auth1Guard]
            },

            {
                path: 'installation', loadChildren: '../../Modules/installation/installation.module#InstallationModule',
                canActivate: [Auth1Guard]
            },
            {
                path: 'manager', loadChildren: '../../Modules/brandManager/brand-manager.module#BrandManagerModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'engineer', loadChildren: '../../Modules/serviceEngineer/service-engineer.module#ServiceEngineerModule',
                canActivate: [AuthGuard]
            }

            
        ]
    }
];
