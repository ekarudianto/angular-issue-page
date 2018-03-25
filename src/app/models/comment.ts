import * as _ from 'lodash';
import * as moment from 'moment';

export class Comment {
    commentSummary: string;

    constructor(comment: Object) {
        this.commentSummary = this.getCommentSummary(comment);
    }

    /**
     * Used in issue detail comment summary header
     * @param comment Object
     */
    private getCommentSummary(comment: Object) {
        const createdAt = moment(_.get(comment, 'created_at')).startOf('day').fromNow();
        const user = _.get(comment, 'user.login');

        return `${user} commented ${createdAt}`;
      }
}
