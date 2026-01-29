import { comments } from '../data/comments.js'
import { utilService } from './util.service.js'

export const commentService = {
    query,
    getById,
    save,
    remove,
    getEmptyComment,
    getRandomComment,
    getDefaultFilter,
}

function query(filterBy = {}) {
    const { txt = '' } = filterBy
    const regex = new RegExp(txt, 'i')
    const filtered = comments.filter(
        (c) => regex.test(c.commentText) || regex.test(c.email),
    )
    return Promise.resolve(filtered)
}

function getById(id) {
    return Promise.resolve(comments.find((c) => c._id === id))
}

function remove(commentId) {
    const idx = comments.findIndex((c) => c._id === commentId)
    if (idx !== -1) comments.splice(idx, 1)
    return Promise.resolve(commentId)
}

function save(comment) {
    if (comment._id) {
        const idx = comments.findIndex((c) => c._id === comment._id)
        if (idx !== -1) {
            comments[idx] = {
                ...comments[idx],
                ...comment,
                avatar: `https://www.gravatar.com/avatar/${utilService.hash(comment.email)}?d=identicon`,
            }
            return Promise.resolve(comments[idx])
        }
        return Promise.reject('Comment not found')
    }

    const _id = Date.now().toString()
    const newComment = {
        _id,
        ...comment,
        avatar: `https://www.gravatar.com/avatar/${utilService.hash(comment.email)}?d=identicon`,
    }
    comments.unshift(newComment)
    return Promise.resolve(newComment)
}

function getEmptyComment() {
    return { email: '', commentText: '', avatar: '' }
}

function getRandomComment() {
    const _id = Date.now().toString()
    return {
        _id,
        email: `user${_id}@demo.com`,
        commentText: `Random comment ${_id}`,
        avatar: `https://www.gravatar.com/avatar/${_id}?d=identicon`,
    }
}

function getDefaultFilter() {
    return { email: '', commentText: '' }
}
