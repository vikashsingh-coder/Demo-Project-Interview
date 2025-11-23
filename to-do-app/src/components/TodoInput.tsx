import React from 'react'

interface Props {
    onAdd: (text: string) => void
}

function TodoInput() {

    const [value, setValue] = useState("")

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        const v = value.trim()
        if (!v) return
        onAdd(v)
        setValue("")
    }
  
    return (
    <form>
        <input 
         type="text" 
         value={value}
         onChange={(e) => setValue(e.target.value)}
         placeholder="Add new task..."
         style={{flex: 1, padding: 10}}
        />
        <button type="submit" aria-label="Add Task" >Add</button>
    </form>
  )
}

export default TodoInput