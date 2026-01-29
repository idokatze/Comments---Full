export const utilService = {
    makeId,
    sortBy,
    getRandomIntInclusive,
    shuffleArray,
    debounce,
    saveToStorage,
    loadFromStorage,
    hash,
}

export function makeId(length = 6) {
    var txt = ''
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

export function sortBy(array, isAscen, key, key2) {
    //key is not neccesery if not an obj.
    const sortedArray = [...array]

    sortedArray.sort((a, b) => {
        let itemA
        let itemB
        if (key2) {
            itemA = a[key]?.[key2]
            itemB = b[key]?.[key2]
        } else if (key) {
            itemA = a[key]
            itemB = b[key]
        } else {
            itemA = a
            itemB = b
        }

        if (typeof itemA === 'number' && typeof itemB === 'number') {
            return isAscen ? itemA - itemB : itemB - itemA
        }

        return isAscen
            ? String(itemA).localeCompare(String(itemB))
            : String(itemB).localeCompare(String(itemA))
    })
    return sortedArray
}

export function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
}

export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

export function randomPastTime() {
    const HOUR = 1000 * 60 * 60
    const DAY = 1000 * 60 * 60 * 24
    const WEEK = 1000 * 60 * 60 * 24 * 7

    const pastTime = getRandomIntInclusive(HOUR, WEEK)
    return Date.now() - pastTime
}

export function shuffleArray(array) {
    let arr = [...array]

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }

    return arr
}

export function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, timeout)
    }
}

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
}

function hash(str) {
    let hash = 0
    if (!str) return hash.toString()
    str = str.trim().toLowerCase() // normalize email
    for (let i = 0; i < str.length; i++) {
        const chr = str.charCodeAt(i)
        hash = (hash << 5) - hash + chr
        hash |= 0 // convert to 32bit integer
    }
    return hash.toString()
}
