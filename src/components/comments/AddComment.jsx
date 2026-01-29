import { useState } from 'react'

export function AddComment({ onAdd }) {
    const [newComment, setNewComment] = useState({ email: '', commentText: '' })

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd(newComment)
        setNewComment({ email: '', commentText: '' })
    }

    function handleInput(ev) {
        const { name, value } = ev.target
        setNewComment((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <div className="add-container">
            <form className="add-comment" onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    value={newComment.email}
                    onChange={handleInput}
                    placeholder="Your email"
                />

                <textarea
                    name="commentText"
                    value={newComment.commentText}
                    onChange={handleInput}
                    placeholder="Your comment"
                    rows="3"
                    required
                />

                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}
