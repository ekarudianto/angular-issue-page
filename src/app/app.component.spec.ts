import { APP_BASE_HREF } from '@angular/common';
import { TestBed, async } from '@angular/core/testing';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { IssueService } from './services/issue.service';

import { AppComponent } from './app.component';
import { CommentComponent } from './components/issue-detail/comment/comment.component';
import { IconComponent } from './components/icon/icon.component';
import { IssueComponent } from './components/issues/issue/issue.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { IssuesComponent } from './components/issues/issues.component';
import { LabelComponent } from './components/label/label.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
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
        IssueService
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'list issues app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('list issues app');
  }));
  it('should render router-outlet component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).not.toBe(null);
  }));
});
