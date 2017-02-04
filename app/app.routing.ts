import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// - need to bring in components we want to use in the router
import { JunkuserComponent } from './components/junk/junkuser.component';
import { JunkaboutComponent } from './components/junk/junkabout.component';
import { GithubComponent } from './components/github/github.component';
import { SearchComponent } from './components/spotify/search.component';
import { AboutComponent } from './components/spotify/about.component';

const appRoutes: Routes = [
    {
        // - root path
        path: '',
        component: JunkuserComponent
    },
    {
        path: 'about',
        component: JunkaboutComponent
    },
    {
        path: 'github',
        component: GithubComponent
    },
    {
        path: 'spotify',
        component: SearchComponent
    }
    ,
    {
        path: 'spotify-about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
