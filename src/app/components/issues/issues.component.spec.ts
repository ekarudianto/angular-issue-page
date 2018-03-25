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

describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let fixture: ComponentFixture<IssuesComponent>;

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
    fixture = TestBed.createComponent(IssuesComponent);
    component = fixture.componentInstance;
    component.issues = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return empty array for issues initial value', () => {
    expect(component.issues).toEqual([]);
  });
});
