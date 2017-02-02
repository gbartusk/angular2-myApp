import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about.component';
import { GithubComponent }  from './components/github.component';

/*
Modules
    - AppModule is the rool module of every Angular application
    - map major functionality or a feature to a module
Components
    - controls a patch of the page, called a view
    -
    - a component can belong to only one module

*/


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent, GithubComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
