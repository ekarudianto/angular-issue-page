import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() summary: string;
  @Input() body: string;
  @Input() user: Object;

  constructor() {}
  ngOnInit() {}

}
