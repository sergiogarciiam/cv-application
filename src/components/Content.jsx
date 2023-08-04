function Section({id, data, changeData}) {
  return (
    <div>
      <label>{id}</label>
      <input value={data} id={id} onChange={changeData}></input>
    </div>
  )
}

function List ({list, addItem}){

  return (
    <>
      {list.length > 1 && list.map((object) => {
        if (object.id === 0) return
        return (
          <h3 key={object.id} id={object.id}>{object.name}</h3>
        )
      })} 
      <button onClick={addItem}>Add item</button>
    </>
  )
}

function Details ({data, changeData, changeList}){

  const addItem = () => {
    const newList = [...data.list]
    newList.push({
        ...newList[0],
        id: newList.length,
      })

    console.log(newList)
    changeList(newList)
  }

  return (
    <>
      {data !== undefined && Object.keys(data).map((key) => {
        if (key === "id" || key === "name" || key === "isShow") return
        if (key === "list") {
          return (
            <List key={key} list={data[key]} addItem={addItem}></List>
          )

        } else {
          return (
            <Section key={key} id={key} data={data[key]} changeData={changeData} ></Section>
          )
        }

      })}
    </>
  )
}

function Content({content, isActive, onClick, changeContent}){

  const changeName = (e) => {
    let newContent = {...content}
    newContent.name = e.target.value
    changeContent(newContent)
  }

  const changeData = (e) => {
    let newContent = {...content}
    newContent[e.target.id] = e.target.value
    changeContent(newContent)
  }

  const changeList = (newList) => {
    let newContent = {...content}
    newContent.list = newList
    changeContent(newContent)
  }

  return (
    <div className={content.name}>
      {!isActive &&  <h2 id={content.id} onClick={onClick}>{content.name}</h2>}
      {isActive && 
        <>
          <input value={content.name} id={content.id} onChange={changeName}></input>
          <Details data={content} changeData={changeData} changeList={changeList}/>
        </>}
    </div>
  )
}

export default Content