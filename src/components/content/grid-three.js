import * as React from "react"
// import { Link } from 'gatsby'

// markup
const GridThree = props => {
  return (

    <div className="bg-brand-700">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="font-arena text-3xl font-extrabold text-white tracking-tight">We champion the bold to achieve the extraordinary.</h2>
        <p className="mt-4 max-w-3xl text-lg text-testcolor-200">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis in.</p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">

          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                {/* Heroicon name: outline/inbox */}
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-white">Unlimited Inboxes</h3>
              <p className="mt-2 text-base text-testcolor-200">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </div>
          </div>
    
          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                {/* Heroicon name: outline/users */}
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-white">Manage Team Members</h3>
              <p className="mt-2 text-base text-indigo-200">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
              </p>
            </div>
          </div>
    
          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                {/* Heroicon name: outline/trash */}
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-white">Spam Report</h3>
              <p className="mt-2 text-base text-indigo-200">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    
    
  )
}

export default GridThree




