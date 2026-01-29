import { CommentList } from '../components/comments/CommentList.jsx'
import { CommentFilter } from '../components/comments/CommentFilter.jsx'
import { AddComment } from '../components/comments/AddComment.jsx'
import { commentService } from '../services/comment.service-local.js'
import { useEffect, useState } from 'react'

export function Comments() {
    const [comments, setComments] = useState([])
    const [filterBy, setFilterBy] = useState({ txt: '' })

    useEffect(() => {
        loadComments()
    }, [filterBy])

    async function loadComments() {
        try {
            const comments = await commentService.query(filterBy)
            setComments(comments)
        } catch (error) {
            console.log('Could not load comments')
        }
    }

    async function onAdd(newComment) {
        try {
            await commentService.save(newComment)
            loadComments()
        } catch (error) {
            console.log('Could not save comment')
        }
    }

    return (
        <main className="comments-page">
            <div className="comment-index">
                <AddComment onAdd={onAdd} />
                <CommentFilter onSetFilter={setFilterBy} />
                <CommentList comments={comments} />
            </div>
        </main>
    )
}
