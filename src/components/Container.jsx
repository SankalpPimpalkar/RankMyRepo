import React from 'react'

export default function Container({ children }) {
    return (
        <div className='w-full min-h-dvh'>
            <div className='w-full h-full min-h-dvh max-w-2xl mx-auto px-4 py-5 space-y-3'>
                {children}
            </div>
        </div>
    )
}
