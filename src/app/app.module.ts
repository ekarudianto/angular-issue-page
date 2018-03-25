import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueComponent } from './issue/issue.component';

import { AppRoutingModule } from './app-routing.module';

import { IssueService } from './issue.service';


@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    IssueComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [ IssueService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
