import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from '@app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { IssueService } from './issue.service';

import { AppComponent } from '@app/app.component';
import { CommentComponent } from '@app/components/issue-detail/comment/comment.component';
import { IconComponent } from '@app/components/icon/icon.component';
import { IssueComponent } from '@app/components/issues/issue/issue.component';
import { IssueDetailComponent } from '@app/components/issue-detail/issue-detail.component';
import { IssuesComponent } from '@app/components/issues/issues.component';
import { LabelComponent } from '@app/components/label/label.component';

describe('IssueService', () => {
  let issueService: IssueService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        IssueService,
        MockBackend,
      ],
    });

    backend = TestBed.get(MockBackend);
    issueService = TestBed.get(IssueService);
  });

  it('should be created', inject([IssueService], (service: IssueService) => {
    expect(service).toBeTruthy();
  }));

  it('should be returning angularjs issuesURL', inject([IssueService], (service: IssueService) => {
    const URL = 'https://api.github.com/repos/angular/angular.js';
    expect(service.issuesURL).toBe(URL);
  }));
});
