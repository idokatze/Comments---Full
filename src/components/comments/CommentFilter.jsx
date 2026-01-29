import { useState, useMemo } from 'react'
import { debounce } from '../../services/util.service.js'

export function CommentFilter({ onSetFilter }) {
    const [txt, setTxt] = useState('')

    // create a debounced version of onSetFilter once
    const debouncedSetFilter = useMemo(
        () => debounce((value) => onSetFilter({ txt: value }), 300),
        [onSetFilter],
    )

    function handleChange(ev) {
        const value = ev.target.value
        setTxt(value) // for controlled input
        debouncedSetFilter(value) // only calls parent after debounce
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
