function Content({name, onClick, isActive, id, onChange}){


  return (
    <div className={name}>
    {!isActive &&  <h2 id={id} onClick={onClick}>{name}</h2>}
    {isActive && <input value={name} id={id} onChange={onChange}></input>}
    </div>
  )
}

export default Content