import * as React from "react"
import { Link } from 'gatsby'

// markup
const PostCard = props => {
  return (
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={props.image} alt={props.altText} />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                  <p className="text-sm font-medium text-arena-600">
                      <Link to="/" className="hover:underline">{props.type}</Link>
                  </p>
                  <Link to={`/insights/${props.linkUrl}`} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{props.title} <br/> {props.title2}</p>
                      <p className="mt-3 text-base text-gray-500">{props.introduction}</p>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default PostCard




