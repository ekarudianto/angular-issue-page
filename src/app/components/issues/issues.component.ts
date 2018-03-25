import { Component, OnInit } from '@angular/core';

import { Issue } from '@app/models/issue';
import { IssueService } from '@app/services/issue.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  issues: Issue[];

  constructor(private issueService: IssueService) { }

  ngOnInit() {
   this.getIssues();
  }

  getIssues() {
    this.issueService.getIssues()
    .subscribe(issues => this.issues = issues);
  }
}
