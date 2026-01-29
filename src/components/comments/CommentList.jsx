import { CommentItem } from './CommentItem.jsx'

export function CommentList({ comments }) {
    return (
        <ul className="comment-list">
            {comments.map((comment) => (
                <CommentItem key={comment._id} comment={comment} />
            ))}
        </ul>
    )
}
