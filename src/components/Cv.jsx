function Cv({contents}){
  return (
    <div className="cv">
      {
      Object.values(contents).map((content) => {
        return (
          <h2 key={content}>{content}</h2>
        )
      })
      }
    </div>
  )
}

export default Cv