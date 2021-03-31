import * as React from "react"

//assets
import img from "../../images/mainpage/smile.jpeg"

// markup
const PeopleGrid = props => {
  return (
        <li>
          <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
            <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img className="object-cover shadow-lg rounded-lg" src={img} alt=""/>
            </div>
            <div className="sm:col-span-2">
              <div className="space-y-4">
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3>{props.name}</h3>
                  <p className="font-arena text-brand-600">{props.position}</p>
                </div>
                <div className="text-lg">
                  <p className="text-gray-500">{props.description}</p>
                </div>
              </div>
            </div>
          </div>
        </li>   
  )
}

export default PeopleGrid




