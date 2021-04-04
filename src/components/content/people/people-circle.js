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
        {/* <ul className="flex justify-center space-x-5">
          <li>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  </li>  
  )
}

export default PeopleCircle




