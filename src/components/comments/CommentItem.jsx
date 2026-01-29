export function CommentItem({ comment }) {
    const { avatar, email, commentText } = comment
    return (
        <li className="comment-preview">
            <img src={avatar} alt={email} />
            <div>
                <p className="comment-email">{email}</p>
                <p className="comment-text">{commentText}</p>
            </div>
        </li>
    )
}
