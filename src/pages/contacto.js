import * as React from "react"
import { graphql } from 'gatsby'
// import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import Layout from "../components/layout"
// import { Link } from 'gatsby'


// markup
const ContactPage = ({data}) => {
  return (
    <Layout>
      {data.allContentfulP01ContactPage.edges.map(edge => (
        <div key={edge.node.id} className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80"
                alt="user working at his laptop"
              />
            </div>
          </div>
          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h2 className="font-arena text-arena-900 text-3xl font-extrabold tracking-tight sm:text-4xl">{edge.node.title}</h2>
                <p className="mt-4 text-lg text-gray-500 sm:mt-3">{edge.node.smallIntro}</p>
                <div className="mt-12">
                  <h2 className="font-arena text-2xl font-extrabold text-gray-900 sm:text-3xl">{edge.node.titleSection1}</h2>
                  <div className="mt-9">
                    <a href={`tel:${edge.node.phoneNumber}`} className="flex text-arena-400 hover:text-brand-500 hover:underline" target="_blank" rel="noreferrer">
                      <div className="flex-shrink-0">
                        {/* <PhoneIcon className="h-7 w-7" aria-hidden="true" /> */}

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 272 496" className="h-7 w-7 text-arena-400 fillarena">
<defs>
</defs>
<g id="Smartphone_1_">
	<path d="M232,0H40C17.9,0,0,17.9,0,40v416c0,22.1,17.9,40,40,40h192c22.1,0,40-17.9,40-40V40C272,17.9,254.1,0,232,0z M190.2,16
		l-4.8,24H86.6l-4.8-24H190.2z M256,456c0,13.2-10.8,24-24,24H40c-13.2,0-24-10.8-24-24V40c0-13.2,10.8-24,24-24h25.4l6.7,33.6
		c0.7,3.7,4,6.4,7.8,6.4h112c3.8,0,7.1-2.7,7.8-6.4l6.7-33.6H232c13.2,0,24,10.8,24,24V456z"/>
	<path d="M88,448H40c-4.4,0-8,3.6-8,8s3.6,8,8,8h48c4.4,0,8-3.6,8-8S92.4,448,88,448z"/>
	<path d="M120,448h-8c-4.4,0-8,3.6-8,8s3.6,8,8,8h8c4.4,0,8-3.6,8-8S124.4,448,120,448z"/>
</g>
</svg>

                        
                      </div>
                      <div className="ml-3 text-base text-gray-500">
                        <p>{edge.node.phoneNumber}</p>
                        {/* <p className="mt-1">+52 (55) 2402 7409</p> */}
                      </div>
                    </a>
                    <a href={`mailto:${edge.node.email}`} className="mt-6 flex text-arena-400 hover:text-brand-500 hover:underline" target="_blank" rel="noreferrer">
                      <div className="flex-shrink-0">
                        {/* <MailIcon className="h-7 w-7" aria-hidden="true" /> */}
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 346" className="h-7 w-7 text-arena-400 fillarena">
                      <defs>
                      </defs>
                      <g>
                          <g>
                              <path d="M137.5,0h-0.1c-5.5,0-10,4.5-10,10s4.5,10,10,10h0.1c5.5,0,10-4.5,10-10S143,0,137.5,0z" />
                          </g>
                      </g>
                      <g>
                          <g>
                              <path d="M472,0H182.1c-5.5,0-10,4.5-10,10s4.5,10,10,10H472c0.5,0,1,0,1.5,0.1L445.6,48H315.1c-5.5,0-10,4.5-10,10s4.5,10,10,10
			h110.4L286.2,207.4c-16.7,16.7-43.8,16.7-60.4,0L38.5,20.1c0.5,0,1-0.1,1.5-0.1h53c5.5,0,10-4.5,10-10S98.5,0,93,0H40
			C17.9,0,0,17.9,0,40v266c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V40C512,17.9,494.1,0,472,0z M20,306V40
			c0-3,0.7-5.8,1.8-8.3L161,170.9L20.7,311.2C20.3,309.6,20,307.8,20,306z M472,326H40c-1.8,0-3.5-0.3-5.2-0.7L175.1,185l36.5,36.5
			c12.2,12.2,28.3,18.3,44.3,18.3s32.1-6.1,44.3-18.3l36.5-36.5l140.3,140.3C475.5,325.8,473.8,326,472,326z M492,306
			c0,1.8-0.3,3.5-0.7,5.2L351,170.9L490.2,31.7c1.2,2.5,1.8,5.3,1.8,8.3V306z"/>
                          </g>
                      </g>
                      <g>
                          <g>
                              <path d="M273.3,48h-0.1c-5.5,0-10,4.5-10,10s4.5,10,10,10h0.1c5.5,0,10-4.5,10-10S278.8,48,273.3,48z" />
                          </g>
                      </g>
                  </svg>

                      </div>
                      <div className="ml-3 text-base text-gray-500">
                        <p>{edge.node.email}</p>
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/company/arena-analytics/?originalSubdomain=mx" className="mt-6 flex text-arena-400 hover:text-brand-500 hover:underline" target="_blank" rel="noreferrer">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-7" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3 text-base text-gray-500">
                        <p>LinkedIn</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="mt-12">
                  <h2 className="font-arena text-2xl font-extrabold text-gray-900 sm:text-3xl">{edge.node.titleSection2}</h2>
                  <div className="mt-3">
                    <p className="text-lg text-gray-500">{edge.node.address}</p>
                    <a href={edge.node.googleMapsLink} className="block mt-3 text-lg font-medium space-x-1 text-arena-600 transition-all ease-in-out hover:text-bluearena-900" target="_blank" rel="noreferrer"> <span>Ver en Google Maps</span> <span aria-hidden="true">&rarr;</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default ContactPage
export const query = graphql`
query PageContactQuery {
  allContentfulP01ContactPage(limit: 1) {
    edges {
      node {
        title
        smallIntro
        titleSection1
        phoneNumber
        email
        titleSection2
        address
        googleMapsLink
      }
    }
  }
}
`



