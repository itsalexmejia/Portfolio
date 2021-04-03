import * as React from "react"
import { Link } from 'gatsby'

// markup
const PostCard = props => {
  return (
      
    <Link to={`/insights/${props.linkUrl}`} className="flex flex-col rounded-lg shadow-lg overflow-hidden sm:hover:shadow-xl">
          <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={props.image} alt={props.altText} />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                  <p className="font-arena text-sm font-medium text-arena-600">
                      <p>{props.type}</p>
                  </p>
                  <Link to={`/insights/${props.linkUrl}`} className="block mt-2">
                      <p className="font-arena font-semibold text-xl text-gray-900">{props.title} <br/> {props.title2}</p>
                      <p className="mt-3 text-base text-gray-500">{props.introduction}</p>
                  </Link>
              </div>
          </div>
      </Link>
  )
}

export default PostCard




