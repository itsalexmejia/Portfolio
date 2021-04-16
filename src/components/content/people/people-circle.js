import * as React from "react"

// markup
const PeopleCircle = props => {
  return (
    <li>
    <div className="space-y-6">
      <img className="mx-auto h-40 w-40 rounded-full object-cover xl:w-56 xl:h-56" src={props.image} alt={props.alt}/>
      <div className="space-y-2">
        <div className="font-arena text-lg leading-6 font-medium space-y-1">
          <h3>{props.name}</h3>
          <p className="text-arena-600">{props.position}</p>
        </div>
      </div>
    </div>
  </li>  
  )
}

export default PeopleCircle




