import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IssuesComponent } from './components/issues/issues.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/issues', pathMatch: 'full' },
  { path: 'issue', redirectTo: '/issues', pathMatch: 'full' },
  { path: 'issues', component: IssuesComponent },
  { path: 'issue/:id', component: IssueDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
