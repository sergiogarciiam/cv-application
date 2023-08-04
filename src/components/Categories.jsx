import Button from "./Button"

function Categories({contents, onClick}){
  return (
    <div>
      {Object.keys(contents).map((key) => { 
        if(!contents[key].isShow) {
          return (
            <Button 
              key={contents[key].id}
              id={contents[key].id}
              name={contents[key].name}
              onClick={onClick}
            />
          )
        }
      })}
    </div>
  )
}

export default Categories