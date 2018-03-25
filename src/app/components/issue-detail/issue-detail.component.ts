import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Issue } from '@app/models/issue';
import { IssueService } from '@app/services/issue.service';
import { CommentService } from '@app/services/comment.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit {

  issue: Issue;
  comments: any;

  constructor(
    private commentService: CommentService,
    private issueService: IssueService,
    private route: ActivatedRoute
  ) {
    this.comments = [];
  }

  ngOnInit() {
    this.getIssueDetail();
  }

  getIssueDetail() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.issueService.getIssue(id)
    .subscribe(result => {
      this.issue = result;

      this.commentService.getComments(_.get(result, 'comments_url'))
      .subscribe(comments => {
        this.comments = comments;
      });
    });
  }
}
