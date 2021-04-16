import * as React from "react"



const HeaderLeft = props => {
  return (
      <div className="relative bg-gray-50 overflow-hidden border-b border-gray-200">
          <>
              <div className="max-w-7xl mx-auto">
                  <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                      <svg
                          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-50 transform translate-x-1/2"
                          fill="currentColor"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                      >
                          <polygon points="50,0 100,0 50,100 0,100" />
                      </svg>
                      <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
                      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                          <div className="sm:text-center lg:text-left">
                              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                  <span className="block font-arena text-base font-semibold text-arena-600 tracking-wide uppercase">{props.headline}</span>{' '}
                                  <span className="block font-arena mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">{props.title}</span>
                              </h1>
                              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">{props.caption}</p>
                          </div>
                      </div>

                  </div>
              </div>
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                  <img
                      className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                      src={props.image}
                      alt={props.alt}
                  />
              </div>
          </>

      </div>
  )
}

export default HeaderLeft
