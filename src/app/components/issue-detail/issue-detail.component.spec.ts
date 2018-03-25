import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDetailComponent } from './issue-detail.component';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from '@app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CommentService } from '@app/services/comment.service';
import { IssueService } from '@app/services/issue.service';

import { AppComponent } from '@app/app.component';
import { CommentComponent } from './comment/comment.component';
import { IconComponent } from '@app/components/icon/icon.component';
import { IssueComponent } from '@app/components/issues/issue/issue.component';
import { IssuesComponent } from '@app/components/issues/issues.component';
import { LabelComponent } from '@app/components/label/label.component';

describe('IssueDetailComponent', () => {
  let component: IssueDetailComponent;
  let fixture: ComponentFixture<IssueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CommentComponent,
        IssuesComponent,
        IssueComponent,
        IssueDetailComponent,
        IconComponent,
        LabelComponent,
      ],
      imports: [
        AppRoutingModule,
        HttpClientModule,
        BrowserModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        CommentService,
        IssueService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
