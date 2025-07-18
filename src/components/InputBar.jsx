import React from 'react'

export default function InputBar() {
    return (
        <div className="rounded-lg px-4 py-2 bg-gray-100">
            <input
                type="text"
                className="w-full outline-none text-gray-400 placeholder-gray-400 bg-transparent caret-gray-400 text-sm"
                placeholder="Search repositories by tech stack..."
            />
        </div>
    )
}
