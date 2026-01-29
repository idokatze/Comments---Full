import { useState } from 'react'

export function CommentFilter({ onSetFilter }) {
    const [txt, setTxt] = useState('')

    function handleChange(ev) {
        const value = ev.target.value
        setTxt(value)
        onSetFilter({ txt: value })
    }

    return (
        <section className="comment-filter">
            <input
                type="text"
                value={txt}
                onChange={handleChange}
                placeholder="Search comments..."
            />
        </section>
    )
}
