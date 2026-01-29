import { httpService } from './http.service.js'
import { utilService } from './util.service.js'

const BASE_URL = 'comment/'

export const commentService = {
    query,
    getById,
    save,
    remove,
    getEmptyComment,
    getDefaultFilter,
    getRandomComment,
}

function query(filterBy = {}) {
    console.log('query:')
    return httpService.get(BASE_URL, { params: filterBy })
}

function getById(commentId) {
    return httpService.get(BASE_URL + commentId)
}
function remove(commentId) {
    return httpService.delete(BASE_URL + commentId)
}

function save(comment) {
    if (comment._id) {
        return httpService.put(BASE_URL + comment._id, comment)
    } else {
        return httpService.post(BASE_URL, comment)
    }
}

function getEmptyComment() {
    return {
        email: '',
        commentText: '',
        avatar: '',
    }
}

function getRandomComment() {
    return {
        email: 'Susita-' + (Date.now() % 1000),
        commentText: utilService.getRandomIntInclusive(1000, 9000),
        avatar: '',
    }
}

function getDefaultFilter() {
    return {
        email: '',
        commentText: '',
    }
}
