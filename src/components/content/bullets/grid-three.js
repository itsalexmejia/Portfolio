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
              <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-arena-500 text-white">
                {/* <ChatAlt2Icon className="h-6 w-6" /> */}

                <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" className="h-10 w-10 fillwhite">
                  <g id="Expand">
                    <rect x="96" y="80" width="16" height="16" />
                    <rect x="128" y="80" width="80" height="16" />
                    <rect x="80" y="112" width="128" height="16" />
                    <rect x="80" y="144" width="104" height="16" />
                    <rect x="320" y="160" width="16" height="16" />
                    <rect x="352" y="160" width="80" height="16" />
                    <rect x="304" y="192" width="128" height="16" />
                    <rect x="304" y="224" width="104" height="16" />
                    <path d="M64.2,223.7c-0.1,2.7-0.2,5.5-0.2,8.3s0.1,5.6,0.2,8.3l16-0.7c-0.1-2.5-0.2-5.1-0.2-7.7s0.1-5.1,0.2-7.7L64.2,223.7z" />
                    <path d="M139.1,384.3l9.7-12.7c-37.2-28.3-61.4-70.3-67.4-116.7L65.6,257C72.1,307.6,98.6,353.4,139.1,384.3z" />
                    <path d="M393.9,98.4c-26.1-27-59.5-45.8-96.2-53.9l-3.5,15.6c33.6,7.5,64.2,24.7,88.1,49.4L393.9,98.4z" />
                    <path d="M410.9,272H456c4.4,0,8-3.6,8-8V136c0-4.4-3.6-8-8-8h-78.5C347.2,92.4,302.8,71.9,256,72c-5.4,0-10.7,0.4-16,0.9V56
		c0-4.4-3.6-8-8-8H56c-4.4,0-8,3.6-8,8v128c0,4.4,3.6,8,8,8h45.1c-19.7,76,18.8,155.1,90.9,186.4v5.6h-8c-4.4,0-8,3.6-8,8v64
		c0,4.4,3.6,8,8,8h8v8c0,13.3,10.7,24,24,24h80c13.3,0,24-10.7,24-24v-8h8c4.4,0,8-3.6,8-8v-64c0-4.4-3.6-8-8-8h-8v-5.6
		C365.1,358.8,398.6,319.6,410.9,272z M448,256h-72c-1.7,0-3.4,0.6-4.8,1.6L352,272v-8c0-4.4-3.6-8-8-8h-56V144h160V256z M272,296
		v88h-32v-88c0-1.2-0.3-2.5-0.8-3.6l-23.9-47.7l38.5,11c1.4,0.4,3,0.4,4.4,0l13.8-3.9V264c0,4.4,3.6,8,8,8h3.1l-10.3,20.4
		C272.3,293.5,272,294.8,272,296z M64,64h160v112h-64c-4.4,0-8,3.6-8,8v8l-19.2-14.4c-1.4-1-3.1-1.6-4.8-1.6H64V64z M203,365.6
		c-69-27.1-106-102.4-85.2-173.6h7.6l29.9,22.4c1.4,1,3.1,1.6,4.8,1.6c4.4,0,8-3.6,8-8v-16h64c4.4,0,8-3.6,8-8V89
		c5.3-0.6,10.7-0.9,16-1c37.1,0,72.8,14.3,99.5,40H280c-4.4,0-8,3.6-8,8v99.1l-16,4.6l-53.8-15.4c-2.4-0.7-5-0.2-7,1.3l-32,24
		l9.6,12.8l24.3-18.2l26.9,53.7V384h-16v-11C208,369.8,206,366.8,203,365.6z M192,400h128v16H192V400z M304,472c0,4.4-3.6,8-8,8h-80
		c-4.4,0-8-3.6-8-8v-8h96V472z M320,448H192v-16h128V448z M288,384v-86.1l12.9-25.9H336v16c0,4.4,3.6,8,8,8c1.7,0,3.4-0.6,4.8-1.6
		l29.9-22.4h15.7c-12.4,42.7-43.9,77.3-85.3,93.6c-3,1.2-5,4.2-5,7.4v11H288z"/>
                  </g>
                </svg>


              </div>
              <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{props.bulletTitle1}</p>
            </dt>
            <dd className="mt-2 text-base text-gray-500">{props.bulletCaption1}</dd>
            <Link to="/servicios/consulting/" className={`mt-2 text-base font-medium space-x-1 text-arena-600 transition-all ease-in-out ${props.buttonShows} lg:mt-4 hover:space-x-3`}> <span>Conoce más</span> <span aria-hidden="true">&rarr;</span></Link>

          </div>

          <div>
            <dt>
              <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-arena-500 text-white">
                {/* <PresentationChartBarIcon className="h-6 w-6" /> */}

                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" className="h-10 w-10 fillwhite">
                  <g id="Outlines">
                    <g>
                      <circle cx="264" cy="320" r="8" />
                      <circle cx="296" cy="320" r="8" />
                      <circle cx="328" cy="320" r="8" />
                      <circle cx="264" cy="256" r="8" />
                      <circle cx="296" cy="256" r="8" />
                      <circle cx="328" cy="256" r="8" />
                      <path d="M176,264h48c4.4,0,8-3.6,8-8s-3.6-8-8-8h-48c-4.4,0-8,3.6-8,8S171.6,264,176,264z" />
                      <circle cx="264" cy="192" r="8" />
                      <circle cx="296" cy="192" r="8" />
                      <circle cx="328" cy="192" r="8" />
                      <path d="M224,184h-48c-4.4,0-8,3.6-8,8s3.6,8,8,8h48c4.4,0,8-3.6,8-8S228.4,184,224,184z" />
                      <path d="M479.9,424.1c0.4-25.6-9.9-58.3-29.3-94.9c26.7-70.8,12.8-150.6-36.4-208.2c-2.9-3.4-7.9-3.8-11.3-0.9s-3.8,7.9-0.9,11.3
			c42.2,49.4,56.5,116.7,38,179c-10.6-17.7-22.1-34.8-34.5-51.3c-2.6-3.5-7.7-4.3-11.2-1.6c-3.5,2.6-4.3,7.7-1.6,11.2c0,0,0,0,0,0
			c14.8,19.6,28.2,40.2,40.2,61.6c-19.6,46.2-56.4,83-102.6,102.6c-36.4-20.8-70.6-45.2-102-73H368c4.4,0,8-3.6,8-8v-9.5
			c12.4-4.3,19-17.9,14.7-30.4c-2.4-6.9-7.8-12.3-14.7-14.7V160c0-4.4-3.6-8-8-8h-60.3c-32.7-30.2-68.3-57-106.3-80
			c39.6-11.8,82-10.5,120.8,3.8c-1.4,3.9-2.1,8.1-2.1,12.2c-0.2,22.3,17.7,40.6,40,40.9s40.6-17.7,40.9-40s-17.7-40.6-40-40.9
			c-11.8-0.1-23,4.9-30.8,13.7c-47.5-18.2-100-18.3-147.6-0.2c-36.2-19.1-69-29.5-94.6-29.3c-13.1-17.7-38.1-21.4-55.8-8.4
			s-21.4,38.1-8.4,55.8c2.4,3.2,5.2,6,8.4,8.4c-0.4,25.8,10,58.6,29.2,94.7c-29.3,77.7-9.5,165.5,50.4,223.1c3.2,3.1,8.3,3,11.3-0.2
			c3.1-3.2,3-8.3-0.2-11.3C71.2,344.5,51.6,270.2,72,201.4c18.8,31.2,40.2,60.7,64,88.2V352c0,4.4,3.6,8,8,8h32c4.4,0,8-3.6,8-8
			s-3.6-8-8-8h-24v-36.4c8.2,9,16.7,18,25.5,26.8c39.8,40.5,84.5,76,132.9,105.6c-33.8,10.1-69.7,10.5-103.7,1.4
			c5.4-21.6-7.7-43.5-29.3-49s-43.5,7.7-49,29.3c-5.4,21.6,7.7,43.5,29.3,49c15.6,3.9,32.1-1.8,41.9-14.7
			c42.7,12.1,88.1,10.2,129.6-5.5c35.6,18.8,68,29.4,93.6,29.4c0.4,0,0.8,0,1.3,0c13.2,17.7,38.1,21.3,55.8,8.1
			c17.7-13.2,21.3-38.1,8.1-55.8C485.8,429.2,483,426.4,479.9,424.1L479.9,424.1z M360,64c13.3,0,24,10.7,24,24s-10.7,24-24,24
			s-24-10.7-24-24S346.7,64,360,64z M210.6,344c-5.6-5.2-11.2-10.5-16.8-16H224c4.4,0,8-3.6,8-8s-3.6-8-8-8h-46
			c-5.1-5.3-10.1-10.6-15-16h197v1.5c-12.4,4.3-19,17.9-14.7,30.4c2.4,6.9,7.8,12.3,14.7,14.7v1.5H210.6z M360,280H152v-48h208V280z
			 M368,328c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S372.4,328,368,328z M56,32c8.4,0,16.2,4.4,20.5,11.7c0,0.1,0.1,0.2,0.2,0.3
			c2.2,3.6,3.3,7.8,3.4,12c0,13.3-10.7,24-24,24c-4.3,0-8.4-1.2-12.1-3.4l-0.2-0.1C32.3,69.7,28.6,55,35.4,43.7
			C39.7,36.4,47.5,32,56,32z M48.2,95.2c21.6,4.4,42.6-9.6,47-31.2c1-5.2,1-10.5,0-15.7c23.9,2.9,47.1,10.2,68.3,21.4
			C122.9,90,89.9,123,69.7,163.7C58.4,142.4,51.1,119.2,48.2,95.2z M181.5,79.1c36.5,20.7,70.7,45.2,102.2,72.9H264
			c-4.4,0-8,3.6-8,8s3.6,8,8,8h96v48H152v-48h80c4.4,0,8-3.6,8-8s-3.6-8-8-8h-88c-4.4,0-8,3.6-8,8v104.5c-21.3-26-40.4-53.7-57-83
			C98.6,135.4,135.3,98.6,181.5,79.1z M168,456c-13.3,0-24-10.7-24-24s10.7-24,24-24s24,10.7,24,24S181.3,456,168,456z M348.2,442.4
			c40.8-20.3,73.8-53.3,94.1-94.1c11.3,21.3,18.5,44.5,21.4,68.5c-21.6-4.3-42.6,9.7-46.9,31.3c-1,5.2-1,10.5,0,15.7
			C392.8,461,369.5,453.8,348.2,442.4z M456,480c-8.4,0-16.1-4.4-20.5-11.6l-0.2-0.3c-2.2-3.6-3.3-7.8-3.4-12.1
			c0-13.3,10.7-24,24-24c4.3,0,8.4,1.2,12.1,3.4l0.2,0.1c11.4,6.8,15.1,21.4,8.3,32.8C472.3,475.6,464.5,480,456,480z"/>
                      <path d="M464,104c13.3,0,24-10.7,24-24s-10.7-24-24-24s-24,10.7-24,24S450.7,104,464,104z M464,72c4.4,0,8,3.6,8,8s-3.6,8-8,8
			s-8-3.6-8-8S459.6,72,464,72z"/>
                      <path d="M56,392c-13.3,0-24,10.7-24,24s10.7,24,24,24s24-10.7,24-24S69.3,392,56,392z M56,424c-4.4,0-8-3.6-8-8s3.6-8,8-8
			s8,3.6,8,8S60.4,424,56,424z"/>
                    </g>
                  </g>
                </svg>



              </div>
              <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{props.bulletTitle2}</p>
            </dt>
            <dd className="mt-2 text-base text-gray-500">{props.bulletCaption2}</dd>
            <Link to="/servicios/analytics/" className={`mt-2 text-base font-medium space-x-1 text-arena-600 transition-all ease-in-out ${props.buttonShows} lg:mt-4 hover:space-x-3`}> <span>Conoce más</span> <span aria-hidden="true">&rarr;</span></Link>
          </div>

          <div>
            <dt>
              <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-arena-500 text-white">
                {/* <UserGroupIcon className="h-6 w-6" /> */}

                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 509.4" className="h-10 w-10 fillwhite">
                  <defs>
                  </defs>
                  <g>
                    <path d="M504.5,115.9H455l29.9-53c5.5-9.8,6.9-21.2,3.9-32.1C485.9,20,478.8,11,469,5.4c-20.3-11.4-46-4.3-57.5,16l-6.8,12.1
		c-2,3.6-0.8,8.2,2.8,10.2c3.6,2,8.2,0.8,10.2-2.8l6.8-12.1c7.4-13.1,24-17.7,37-10.3c6.3,3.6,10.9,9.4,12.8,16.4
		c1.9,7,1.1,14.3-2.5,20.7L395.4,191c-4.5,7.9-12.6,13.1-21.7,13.7c-0.7,0-1.3,0.1-2,0.1c-8.3,0-16.4-3.9-21.5-10.5l-58-74.8
		c-9.2-11.8-7-29,4.8-38.1c11.8-9.2,29-7,38.1,4.8l26,33.6c1.5,2,4,3.1,6.5,2.9c2.5-0.2,4.8-1.6,6-3.8L403,67
		c2-3.6,0.8-8.2-2.8-10.2c-3.6-2-8.2-0.8-10.2,2.8l-23.7,42l-19.1-24.7c-14.3-18.4-40.8-21.7-59.2-7.5c-14.5,11.2-19.6,30-14.2,46.5
		l-266.2,0c-4.1,0-7.5,3.4-7.5,7.5v202c0,26.6,21.6,48.3,48.3,48.3c4.1,0,8.1-0.5,12-1.5c1.8,5.7,5,10.8,9.3,15.2
		c7.4,7.4,17.2,11.1,26.9,11.1c5.3,0,10.5-1.1,15.4-3.3c0.4,9.5,4.3,18.4,11.1,25.1c7.4,7.4,17.2,11.1,26.9,11.1
		c7.1,0,14.2-2,20.4-5.9c0.9,8.7,4.7,16.7,10.9,23c7.4,7.4,17.2,11.1,26.9,11.1c9.6,0,19.2-3.6,26.6-10.8
		c1.1,8.2,4.8,15.8,10.8,21.8c5.5,5.5,12.3,9.1,19.7,10.5c1.1,6.8,4.2,13.3,9.4,18.5c6.3,6.3,14.8,9.8,23.7,9.8s17.4-3.5,23.7-9.8
		c7.4-7.4,10.6-17.5,9.6-27.2c1.1,0.1,2.3,0.2,3.5,0.2c9,0,17.4-3.5,23.7-9.8c6.3-6.3,9.8-14.8,9.8-23.7c0-1.2-0.1-2.3-0.2-3.5
		c1.1,0.1,2.3,0.2,3.5,0.2c2.3,0,4.6-0.2,6.7-0.7c4.1-0.9,6.6-4.8,5.8-8.9c-0.9-4.1-4.8-6.6-8.9-5.8c-1.2,0.2-2.4,0.4-3.7,0.4
		c-5,0-9.6-1.9-13.1-5.4l-22.1-22c-7.2-7.2-7.2-19,0-26.2c3.5-3.5,8.2-5.4,13.1-5.4c4.9,0,9.6,1.9,13.1,5.4l22.1,22.1c0,0,0,0,0,0
		c4.4,4.4,6.2,10.7,5,16.8c-0.8,4.1,1.8,8,5.9,8.8c4.1,0.8,8-1.8,8.8-5.9c0.7-3.4,0.8-6.8,0.5-10.2c1.2,0.1,2.3,0.2,3.5,0.2
		c8.6,0,17.2-3.3,23.7-9.8c5.7-5.7,8.9-13,9.7-20.5c6.5,3.2,13.8,5.1,21.5,5.1c26.6,0,48.3-21.6,48.3-48.3v-202
		C512,119.3,508.6,115.9,504.5,115.9L504.5,115.9z M15,325.4V130.9h66.5v63.1c0,4.1,3.4,7.5,7.5,7.5c4.1,0,7.5-3.4,7.5-7.5v-63.1
		h119.8c9.7,0,18.8,3.8,25.6,10.6l77.2,77.2c6.1,6.1,9.4,14.1,9.4,22.7s-3.3,16.6-9.4,22.7c-6.1,6.1-14.1,9.4-22.7,9.4
		c-8.6,0-16.6-3.3-22.7-9.4L211.7,202c-1.4-1.4-3.3-2.2-5.3-2.2c-2,0-3.9,0.8-5.3,2.2L96.5,306.5v-82.5c0-4.1-3.4-7.5-7.5-7.5
		c-4.1,0-7.5,3.4-7.5,7.5v97.5l-11.9,11.9c-6.4,6.4-10.2,14.6-11,23.5c-3.3,1.1-6.8,1.6-10.3,1.6C29.9,358.7,15,343.7,15,325.4
		L15,325.4z M311.5,489c-3.5,3.5-8.2,5.4-13.1,5.4s-9.6-1.9-13.1-5.4c-7.2-7.2-7.2-19,0-26.2c3.6-3.6,8.4-5.4,13.1-5.4
		s9.5,1.8,13.1,5.4C318.8,470,318.8,481.7,311.5,489z M348.4,452.1c-3.5,3.5-8.2,5.4-13.1,5.4s-9.6-1.9-13.1-5.4l-10-10
		c-3.5-3.5-5.4-8.2-5.4-13.1s1.9-9.6,5.4-13.1s8.2-5.4,13.1-5.4c4.9,0,9.6,1.9,13.1,5.4l10,10c3.5,3.5,5.4,8.2,5.4,13.1
		C353.8,444,351.9,448.6,348.4,452.1L348.4,452.1z M350,346.6c-9,0-17.4,3.5-23.7,9.8c-10.7,10.7-12.6,26.8-5.9,39.5
		c-7.1,1-13.7,4.3-18.8,9.5c-6.3,6.3-9.8,14.8-9.8,23.7c0,4.7,1,9.3,2.8,13.5c-7.3,0.8-14.3,4-19.9,9.6c-4,4-6.8,8.7-8.3,13.8
		c-3.8-1-7.3-3-10.2-5.9c-4.4-4.4-6.8-10.2-6.8-16.3c0-6.1,2.4-11.9,6.7-16.3l52.2-52.2c2.9-2.9,2.9-7.7,0-10.6
		c-2.9-2.9-7.7-2.9-10.6,0l-73.2,73.2c-9,9-23.6,9-32.6,0c-4.4-4.4-6.8-10.1-6.8-16.3s2.4-12,6.8-16.3l55.4-55.4
		c2.9-2.9,2.9-7.7,0-10.6s-7.7-2.9-10.6,0l-70.4,70.4c-9,9-23.6,9-32.6,0c-4.4-4.4-6.8-10.1-6.8-16.3s2.4-12,6.8-16.3l55.7-55.7
		c2.9-2.9,2.9-7.7,0-10.6c-2.9-2.9-7.7-2.9-10.6,0l-66,66c-9,9-23.6,9-32.6,0c-4.4-4.4-6.8-10.1-6.8-16.3s2.4-12,6.8-16.3
		l126.2-126.2l56.8,56.8c8.9,8.9,20.7,13.8,33.3,13.8c12.6,0,24.4-4.9,33.3-13.8c8.9-8.9,13.8-20.7,13.8-33.3
		c0-12.6-4.9-24.4-13.8-33.3l-77.2-77.2l0,0h29.7l56.2,72.5c7.9,10.2,20.4,16.3,33.3,16.3c1,0,2,0,3.1-0.1c14.1-1,26.7-9,33.7-21.3
		l7-12.3v139.4c0,0.3,0,0.6,0,0.9c-5-2.8-10.7-4.4-16.6-4.4c-9,0-17.4,3.5-23.7,9.8c-5.2,5.2-8.4,11.7-9.5,18.8
		C361,348,355.6,346.6,350,346.6L350,346.6z M422,378.5c-7.2,7.2-18.9,7.2-26.2,0c0,0,0,0,0,0l-10-10c-3.5-3.5-5.4-8.1-5.4-13.1
		c0-5,1.9-9.6,5.4-13.1c3.5-3.5,8.2-5.4,13.1-5.4c5,0,9.6,1.9,13.1,5.4l10,10C429.2,359.5,429.2,371.3,422,378.5L422,378.5z
		 M497,325.4c0,18.3-14.9,33.3-33.3,33.3c-18.3,0-33.3-14.9-33.3-33.3v-166l16.1-28.5H497L497,325.4z"/>
                    <path d="M438,174.7c0,14.4,11.7,26.1,26.1,26.1c14.4,0,26.1-11.7,26.1-26.1c0-14.4-11.7-26.1-26.1-26.1
		C449.7,148.6,438,160.3,438,174.7L438,174.7z M475.2,174.7c0,6.1-5,11.1-11.1,11.1s-11.1-5-11.1-11.1c0-6.1,5-11.1,11.1-11.1
		S475.2,168.6,475.2,174.7z"/>
                    <path d="M74.4,174.7c0-14.4-11.7-26.1-26.1-26.1s-26.1,11.7-26.1,26.1c0,14.4,11.7,26.1,26.1,26.1S74.4,189.1,74.4,174.7z
		 M37.2,174.7c0-6.1,5-11.1,11.1-11.1s11.1,5,11.1,11.1c0,6.1-5,11.1-11.1,11.1S37.2,180.8,37.2,174.7z"/>
                  </g>
                </svg>

              </div>
              <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{props.bulletTitle3}</p>
            </dt>
            <dd className="mt-2 text-base text-gray-500">{props.bulletCaption3}</dd>
            <Link to="/servicios/partners/" className={`mt-2 text-base font-medium space-x-1 text-arena-600 transition-all ease-in-out ${props.buttonShows} lg:mt-4 hover:space-x-3`}> <span>Conoce más</span> <span aria-hidden="true">&rarr;</span></Link>

          </div>

        </dl>
      </div>
    </div>
  )
}

export default GridThree




