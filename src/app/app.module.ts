import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'angular2-markdown';
import { NgModule } from '@angular/core';

import { CommentService } from './services/comment.service';
import { IssueService } from './services/issue.service';

import { AppComponent } from './app.component';
import { CommentComponent } from './components/issue-detail/comment/comment.component';
import { IconComponent } from './components/icon/icon.component';
import { IssueComponent } from './components/issues/issue/issue.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { IssuesComponent } from './components/issues/issues.component';
import { LabelComponent } from './components/label/label.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    IconComponent,
    IssueComponent,
    IssueDetailComponent,
    IssuesComponent,
    LabelComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
  providers: [ CommentService, IssueService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
