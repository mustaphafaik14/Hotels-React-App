import React from 'react'

export default function Banner({title,subtitle,children}) {
    return (
        <div className="hero_content">
            <p>{title}</p>
            <h1>{subtitle}</h1>
            {children} 
        </div>
    )
}
