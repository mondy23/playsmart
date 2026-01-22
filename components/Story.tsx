import React from 'react'
import { PatternBackground } from './PatternBackground'

const Story = () => {
    return (
        <section className="relative">
            <PatternBackground type="grid" color="#4FC3F7" opacity={0.1} />
            <div className='h-153.5'>Story</div>
        </section>
    )
}

export default Story