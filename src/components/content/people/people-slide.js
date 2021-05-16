import * as React from "react"

// markup
const PeopleSlide = props => {
  return (
    
          
        <div className="relative">
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <div className="prose-xl leading-relaxed" dangerouslySetInnerHTML={{ __html: props.quote }}/>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    className="mx-auto h-14 w-14 rounded-full xl:h-24 xl:w-24"
                    src={props.image}
                    alt={props.alt}
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:text-left">
                  <p className="text-xl font-medium text-gray-900">{props.name}</p>

                  {/* <svg className="hidden md:block mx-1 h-5 w-5 text-arena-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg> */}

                  <p className="text-base font-medium text-gray-500">{props.position}</p>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      
      
  )
}

export default PeopleSlide




