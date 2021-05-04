import * as React from 'react'
import { Link } from "gatsby"



// markup
const GridSolutions = props => {
  return (
    <Link to={props.url} className="flex flex-col rounded-lg shadow-lg bg-white overflow-hidden transition-all ease-in-out cursor-pointer sm:hover:shadow-2xl" key={props.name}>
      <div className="flex-shrink-0 border-b border-gray-200">
        <img className="h-48 w-full object-cover" src={props.image} alt={props.alt} />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="font-arena text-sm font-medium text-arena-600">
            <p>{props.type}</p>
          </p>
          <div className="block mt-2" target="_blank" rel="noreferrer">
            <p className="font-arena font-semibold text-xl text-gray-900">{props.name}</p>
            {/* <dd className="mt-3 text-base text-gray-600 prose" dangerouslySetInnerHTML={{ __html: props.description }} /> */}
          </div>
        </div>
        <p className="block mt-3 text-base font-medium space-x-1 text-arena-600 transition-all ease-in-out lg:mt-5"> <span>Conoce más</span> <span aria-hidden="true">&rarr;</span></p>
      </div>
    </Link>

  )
}

export default GridSolutions




