import * as React from "react"

//assets


// markup
const TextHeader = props => {
  return (

    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-arena-600 tracking-wide uppercase">{props.headline}</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">{props.title}</p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">{props.caption}</p>
        </div>
      </div>
    </div>
    
  )
}

export default TextHeader




