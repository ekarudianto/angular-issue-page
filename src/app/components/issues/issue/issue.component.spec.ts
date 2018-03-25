import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from '@app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { IssueService } from '@app/services/issue.service';

import { AppComponent } from '@app/app.component';
import { CommentComponent } from '@app/components/issue-detail/comment/comment.component';
import { IconComponent } from '@app/components/icon/icon.component';
import { IssueComponent } from '@app/components/issues/issue/issue.component';
import { IssueDetailComponent } from '@app/components/issue-detail/issue-detail.component';
import { IssuesComponent } from '@app/components/issues/issues.component';
import { LabelComponent } from '@app/components/label/label.component';

describe('IssueComponent', () => {
  let component: IssueComponent;
  let fixture: ComponentFixture<IssueComponent>;

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
        IssueService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueComponent);
    component = fixture.componentInstance;
    component.issue = {
      title: 'New angular issue',
      labels: [],
      state: 'open',
      summary: 'This is summary',
      comments: 5
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct title value', () => {
    expect(component.issue.title).toBe('New angular issue');
  });

  it('should return correct labels value', () => {
    expect(component.issue.labels.length).toBe(0);
  });

  it('should return correct state value', () => {
    expect(component.issue.state).toBe('open');
  });

  it('should return correct summary value', () => {
    expect(component.issue.summary).toBe('This is summary');
  });

  it('should return correct comments value', () => {
    expect(component.issue.comments).toBe(5);
  });
});
