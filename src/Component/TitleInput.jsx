import React, { useState } from 'react'

function TitleInput(props) {
  const [title, setTitle] = useState("")
  const [titles, setTitles] = useState([])

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() === "") return
    setTitles(prev => [...prev, title.trim()])
    setTitle("")
    if (props.onSubmit) {
      props.onSubmit(title.trim())
    }
  }

  return (
    <div>
      <form className="title-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={handleChange}
          className="title-input-textbox"
        />
        <button type="submit" className="title-input-button">Submit</button>
      </form>
      <ul className="title-list">
        {titles.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  )
}

export default TitleInput
