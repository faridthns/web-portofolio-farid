/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [article, setArticle] = useState("")

  function Next() {
    setCount(count + 1);
  }

  useEffect(() => {
    fetch('https://dummyjson.com/posts/' + count).then((res => res.json())).then(data => setArticle(data))
  }, [count])
  

  return (
    <>
      <main>
        <header>
          <button onClick={Next}>Next</button>
        </header>
        <article>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </article>
      </main>
    </>
  )
}

export default App
