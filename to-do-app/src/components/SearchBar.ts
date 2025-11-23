import React from "react"

interface Props {
    value: string
    onChange: (v: string) => void
    placeholder: string
    ''
}

export default function SearchBar({value, onChange, placeholder = "Search Task...", "aria-label": ariaLabel = "Search tasks"}) {

    return (
        <label>
        <span >{ariaLabel} </span>
        <input
         type="search"
         value={value}
         placeholder={placeholder}
         aria-label = {ariaLabel}
         onChange={(e) => onChange(e.target.value)}
         style={{padding: 10, width: '100%', boxSizing: 'border-box'}}
        />
        </label>
    )
    
}