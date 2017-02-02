import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// - need to bring in components we want to use in the router
import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';
import {GithubComponent} from './components/github.component';

const appRoutes: Routes = [
    {
        // - root path
        path: '',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'github',
        component: GithubComponent
    },
    {
        path: 'spotify',
        component: UserComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
