import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { JunkuserComponent }  from './components/junk/junkuser.component';
import { JunkaboutComponent }  from './components/junk/junkabout.component';
import { GithubComponent }  from './components/github/github.component';

import { NavbarComponent } from './components/navbar/navbar.component';

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
  declarations: [ AppComponent, JunkuserComponent, JunkaboutComponent, GithubComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
