import { useState } from "react"
import Button from "./components/Button.jsx"
import Categories from "./components/Categories.jsx"
import Content from "./components/Content.jsx";
import Cv from "./components/Cv.jsx";

function App() {
  const [isCategoriesDisplay, setIsCategoriesDisplay] = useState(false)
  const [contents, setContentList] = useState({})
  const [activeContent, setActiveContent] = useState("")

  const showCategories = () => {
    setIsCategoriesDisplay(true)
  }

  const hideCategories = (e) => {
    setIsCategoriesDisplay(false)
    setContentList({...contents, [e.target.textContent]: e.target.textContent})
  }

  const changeActiveContent = (e) => {
    setActiveContent(e.target.id)
  }

  const changeContent = (e) => {
    setContentList({...contents, [e.target.id]: e.target.value})
  }

  return (
    <>
      <div>
        {Object.keys(contents).map((key) => { 
          const content = contents[key]
          return (
            <Content key={key} name={content} onClick={changeActiveContent} isActive={key===activeContent} id={key} onChange={changeContent}></Content>
          )}
        )}

        <Button name="+ Add content" onClick={showCategories}></Button> 
      </div>

      <Cv contents={contents}></Cv>

      {isCategoriesDisplay && <Categories options={contents} onClick={hideCategories} />}
    </>
  )
}

export default App
