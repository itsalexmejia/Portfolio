import * as React from 'react'
import { Link } from 'gatsby'
import { LibraryIcon } from '@heroicons/react/outline'

// markup
const ActionImageLeft = props => {
  return (


      <div className="relative bg-white">
          <div className="h-56 bg-brand-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80" alt="Support team" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
              <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
                  <div>
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-500 text-white">
                          <LibraryIcon className="h-6 w-6" />
                      </div>
                  </div>
                  <h2 className="font-arena mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">We champion the bold to achieve the extraordinary.</h2>
                  <p className="mt-6 text-lg text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nihil ea rerum ipsa. Nostrum consectetur sequi culpa doloribus omnis, molestiae esse placeat, exercitationem magnam quod molestias quia aspernatur deserunt voluptatibus.</p>
                  <Link to="#" className="mt-8 w-full bg-arena-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-brand-700 sm:mt-10 sm:w-auto">See more about us</Link>
                  {/* <div className="mt-8 overflow-hidden"></div> */}

              </div>
          </div>
      </div>


    
    
  )
}

export default ActionImageLeft




