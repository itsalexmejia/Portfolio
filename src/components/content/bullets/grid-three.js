import * as React from "react"
import { Link } from 'gatsby'

//icons
import { ChatAlt2Icon, PresentationChartBarIcon, UserGroupIcon } from '@heroicons/react/outline'

// markup
const GridThree = props => {
  return (
        <div className="py-24 bg-gray-100">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* <h2 className="sr-only">A better way to send money.</h2> */}

            <div className="lg:text-center">
              <h2 className="font-arena text-base text-arena-600 font-semibold tracking-wide uppercase">{props.headline}</h2>
              <p className="font-arena mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{props.title}</p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">{props.caption}</p>
            </div>


            <dl className="mt-10 space-y-14 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">

              <div>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-arena-500 text-white">
                    <ChatAlt2Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{props.bulletTitle1}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{props.bulletCaption1}</dd>
                <Link to = "/servicios/consulting/" className={`mt-2 text-sm font-medium space-x-1 text-arena-600 transition-all ease-in-out ${props.buttonShows} lg:mt-4 hover:space-x-3`}> <span>Conoce más</span> <span aria-hidden="true">&rarr;</span></Link>

              </div>

              <div>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-arena-500 text-white">
                    <PresentationChartBarIcon className="h-6 w-6" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{props.bulletTitle2}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{props.bulletCaption2}</dd>
                <Link to = "/" className={`mt-2 text-sm font-medium space-x-1 text-arena-600 transition-all ease-in-out ${props.buttonShows} lg:mt-4 hover:space-x-3`}> <span>Conoce más</span> <span aria-hidden="true">&rarr;</span></Link>
              </div>

              <div>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-arena-500 text-white">
                    <UserGroupIcon className="h-6 w-6" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{props.bulletTitle3}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{props.bulletCaption3}</dd>
                <Link to = "/servicios/partners/" className={`mt-2 text-sm font-medium space-x-1 text-arena-600 transition-all ease-in-out ${props.buttonShows} lg:mt-4 hover:space-x-3`}> <span>Conoce más</span> <span aria-hidden="true">&rarr;</span></Link>
                
              </div>

              


            </dl>
          </div>
        </div>
  )
}

export default GridThree




