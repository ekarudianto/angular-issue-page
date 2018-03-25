import * as _ from 'lodash';
import * as moment from 'moment';

export class Issue {
    static readonly OPEN = 'open';
    static readonly CLOSED = 'closed';

    commentSummary: string;
    summary: string;
    inDetailSummary: string;

    constructor(issue: Object) {
      this.summary = this.getSummary(issue);
      this.inDetailSummary = this.getDetailSummary(issue);
      this.commentSummary = this.getCommentSummary(issue);
    }

    /**
     * Used in issue list
     * @param issue Object
     */
    private getSummary(issue: Object) {
      const createdAt = moment(_.get(issue, 'created_at')).startOf('day').fromNow();
      const number = _.get(issue, 'number');
      const updatedAt = moment(_.get(issue, 'updated_at')).startOf('day').fromNow();
      const user = _.get(issue, 'user.login');

      let template = `#${number} was closed ${updatedAt} by ${user}`;

      if (_.get(issue, 'state') === Issue.OPEN) {
        template = `#${number} opened ${createdAt} by ${user}`;
      }

      return template;
    }

    /**
     * Used in issue detail
     * @param issue Object
     */
    private getDetailSummary(issue: Object) {
      const createdAt = moment(_.get(issue, 'created_at')).startOf('day').fromNow();
      const number = _.get(issue, 'number');
      const updatedAt = moment(_.get(issue, 'updated_at')).startOf('day').fromNow();
      const user = _.get(issue, 'user.login');

      let template = `${user} closed this issue ${updatedAt}`;

      if (_.get(issue, 'state') === Issue.OPEN) {
        template = `${user} opened this issue ${createdAt}`;
      }

      return template;
    }

    /**
     * Used in issue detail comment summary header
     * @param issue Object
     */
    private getCommentSummary(issue: Object) {
      const createdAt = moment(_.get(issue, 'created_at')).startOf('day').fromNow();
      const user = _.get(issue, 'user.login');

      return `${user} commented ${createdAt}`;
    }
}
