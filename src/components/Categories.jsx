import Button from "./Button"

function Categories({options, onClick}){
  const names = ["Personal Details", "About Me", "Professional Experience", "Education", "Skills", "Projects", "Languages"]
  return (
    <div>
      {names.map((name, index) => {
        if (options.hasOwnProperty(name)) return null
        return (
          <Button key={index} name={name} onClick={onClick}></Button>
        )
      })}
    </div>
  )
}

export default Categories