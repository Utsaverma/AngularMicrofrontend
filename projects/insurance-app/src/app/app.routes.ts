import { Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';

export const routes: Routes = [
    {
        path: 'premium-payment',
        loadComponent: () =>
            import('premiumPayment/Component').then(m => m.AppComponent)

    },
    {
        path: 'premium-payment/:policyNumber', loadComponent: () =>
            import('premiumPayment/Component').then(m => m.AppComponent)
    },
    {
        path: 'insurance-details',
        loadComponent: () =>
            import('insuranceDetails/Component').then(m => m.AppComponent)

    },
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
];
