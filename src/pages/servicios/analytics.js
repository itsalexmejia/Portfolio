import * as React from "react"
import { graphql } from 'gatsby'
// import { Link } from "gatsby"
import Layout from "../../components/layout"
import ActionBackground from "../../components/content/actions/bg-action"
import BackgroundHeader from "../../components/content/header/header-bg"

// import GridSolutions from "../../components/content/bullets/grid-solutions"

import logoTool1 from "../../images/tools/logo-tool-1.png"
import logoTool10 from "../../images/tools/logo-tool-10.png"
import logoTool11 from "../../images/tools/logo-tool-11.png"
import logoTool12 from "../../images/tools/logo-tool-12.png"
import logoTool2 from "../../images/tools/logo-tool-2.png"
import logoTool3 from "../../images/tools/logo-tool-3.png"
import logoTool4 from "../../images/tools/logo-tool-4.png"
import logoTool5 from "../../images/tools/logo-tool-5.png"
import logoTool6 from "../../images/tools/logo-tool-6.png"
import logoTool7 from "../../images/tools/logo-tool-7.png"
import logoTool8 from "../../images/tools/logo-tool-8.png"
import logoTool9 from "../../images/tools/logo-tool-9.png"
import { CheckIcon } from "@heroicons/react/outline"


// markup
const AnalyticsPage = ({data}) => {
  return (
      <Layout>
          {data.allContentfulC03ContentHeader.edges.map(edge => (
              <BackgroundHeader
                  key={edge.node.id}
                  title={edge.node.title}
                  // caption={edge.node.longCaption.childMarkdownRemark.html}
                  caption = "Muchas empresas utilizan información interna y externa para analizar y reportar el estado del negocio, pero pocas la aprovechan al máximo para gestionar la estrategia en tiempo real. Las que lo están haciendo están logrando una ventaja competitiva."
                  image={edge.node.image.file.url}
                  alt={edge.node.image.title}
                  video={edge.node.video.file.url}
              />
          ))}


{data.allContentfulP07CienciaDeDatos.edges.map(edge => (
          <>

          <div className="bg-arena-700 relative">
              <div className="absolute inset-0">
                  <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80" alt="people working" />
                  <div className="absolute inset-0 bg-brand-900 bg-opacity-70"></div>
              </div>
              <div className="relative max-w-3xl mx-auto text-center py-16 px-4 sm:py-24 sm:px-6 lg:px-1">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                      <span className="block">{edge.node.smallIntroduction}</span>
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-white">{edge.node.descriptionText}</p>
              </div>
          </div>

          <div className="relative py-16 bg-arena-900 -mt-1 z-10 pb-72">
              <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                  <h2 className="font-arena text-3xl font-extrabold text-white sm:text-4xl">{edge.node.section2Title}</h2>
                  <p className="mt-3 max-w-3xl mb-10 text-lg text-white opacity-70">{edge.node.section2Intro}</p>
                  <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                    {/* Biullets */}

                          <div>
                              <dt>
                                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-white bg-opacity-10 text-white">
                                      {/* <DatabaseIcon className="h-6 w-6" aria-hidden="true" /> */}

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 496 496" className="h-8 w-8 fillwhite">
<defs>
</defs>
<g>
	<path d="M312,248c0-35.3-28.7-64-64-64s-64,28.7-64,64s28.7,64,64,64S312,283.3,312,248z M248,296c-26.5,0-48-21.5-48-48
		s21.5-48,48-48c26.5,0,48,21.5,48,48S274.5,296,248,296z"/>
	<path d="M463.8,240.8c-0.8-25.7-6.1-50.7-15.8-74.4v-20.7c0-5.4,2.6-10.4,6.9-13.1c20.7-13.3,33.1-36,33.1-60.6
		c0-20.5-8.8-40.1-24-53.7C448.7,4.6,428.2-1.8,407.6,0.5c-30,3.4-54.9,26-61.7,55C315.7,40.1,282.1,32,248,32
		c-24.8,0-48.9,4.2-72,12.3V0h-48v128h-16V32H64v96H48V64H0v80h58.7C41.2,175.8,32,211.4,32,248c0,24.7,4.3,48.9,12.4,72
		c-2.8,4.7-4.4,10.1-4.4,16H24c-13.2,0-24,10.8-24,24v40h16c8.8,0,16,7.2,16,16c0,8.8-7.2,16-16,16H0v40c0,13.2,10.8,24,24,24h96
		c13.2,0,24-10.8,24-24v-40h-16c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16h16v-40c0-13.2-10.8-24-24-24h-16c0-17.6-14.4-32-32-32
		c-5.3,0-10.3,1.4-14.7,3.8C52,291,49,273.7,48.4,256H144v21.7l14.6,5.2c0.5,1.3,1,2.5,1.6,3.8l-6.7,14l42,42l14-6.7
		c1.2,0.6,2.5,1.1,3.8,1.6l5.1,14.6H240v95.8c-26.6-1-52.2-7.2-76.3-18.4l-6.8,14.5c28.6,13.3,59.3,20.1,91.1,20.1
		c66.1,0,127.2-29.6,168-80.3v58.2l21.3,42.5c3.6,7.1,10.7,11.6,18.7,11.6s15.2-4.4,18.7-11.6l21.3-42.5V280
		C496,260.6,482.1,244.4,463.8,240.8L463.8,240.8z M32,128H16V80h16V128z M360.5,64.6c3.2-25.1,23.8-45.4,49-48.2
		c2.2-0.2,4.4-0.4,6.6-0.4c13.8,0,26.8,4.9,37.2,14.2C465.2,40.8,472,56.1,472,72c0,19.1-9.6,36.7-25.8,47.1
		c-8.5,5.4-13.6,14.7-14.1,24.9H424V94.5c9.3-3.3,16-12.1,16-22.5c0-13.2-10.8-24-24-24s-24,10.8-24,24c0,10.4,6.7,19.2,16,22.5V144
		h-8.1c-0.6-10.3-5.7-19.5-14-24.8C367.4,107.4,357.7,86.5,360.5,64.6L360.5,64.6z M432,160v8c0,4.4-3.6,8-8,8h-16c-4.4,0-8-3.6-8-8
		v-8H432z M408,72c0-4.4,3.6-8,8-8c4.4,0,8,3.6,8,8s-3.6,8-8,8C411.6,80,408,76.4,408,72z M256,48.3c30.9,1.2,61.1,9.6,88,24.4
		c0.2,24.3,12.4,46.7,33.2,60c4.2,2.6,6.7,7.8,6.7,13.3v22c0,13.2,10.8,24,24,24h16c5.5,0,10.4-1.9,14.5-5c5.5,17.1,8.6,34.9,9.3,53
		H352v-21.7l-14.6-5.2c-0.5-1.3-1-2.5-1.6-3.8l6.7-14l-42-42l-14,6.7c-1.2-0.6-2.5-1.1-3.8-1.6l-5.1-14.6H256L256,48.3z M144,16h16
		v112h-16V16z M80,48h16v80H80V48z M56,352v-16c0-8.8,7.2-16,16-16s16,7.2,16,16v16h32c4.4,0,8,3.6,8,8v24c-17.6,0-32,14.4-32,32
		s14.4,32,32,32v24c0,4.4-3.6,8-8,8H24c-4.4,0-8-3.6-8-8v-24c17.6,0,32-14.4,32-32s-14.4-32-32-32v-24c0-4.4,3.6-8,8-8H56z
		 M144,218.3V240H48.3c1.4-34.1,11.3-67,29-96H176V61.4c20.5-7.9,41.9-12.4,64-13.2V144h-21.7l-5.2,14.6c-1.3,0.5-2.5,1-3.8,1.6
		l-14-6.7l-42,42l6.7,14c-0.6,1.2-1.1,2.5-1.6,3.8L144,218.3z M229.7,336l-3.9-11.1l-3.7-1.3c-3.1-1-6.2-2.3-9.2-3.8l-3.5-1.7
		l-10.7,5.1l-25.9-25.9l5.1-10.7l-1.7-3.5c-1.5-3-2.8-6.1-3.8-9.2l-1.3-3.7l-11.1-3.9v-36.7l11.1-3.9l1.3-3.7c1-3.1,2.3-6.2,3.8-9.2
		l1.7-3.5l-5.1-10.7l25.9-25.9l10.7,5.1l3.5-1.7c3-1.5,6.1-2.8,9.2-3.8l3.7-1.3l3.9-11.1h36.7l3.9,11.1l3.7,1.3
		c3.1,1,6.2,2.3,9.2,3.8l3.5,1.7l10.7-5.1l25.9,25.9l-5.1,10.7l1.7,3.5c1.5,3,2.8,6.1,3.8,9.2l1.3,3.7l11.1,3.9v36.7l-11.1,3.9
		l-1.3,3.7c-1,3.1-2.3,6.2-3.8,9.2l-1.7,3.5l5.1,10.7l-25.9,25.9l-10.7-5.1l-3.5,1.7c-3,1.5-6.1,2.8-9.2,3.8l-3.7,1.3l-3.9,11.1
		H229.7z M416,280v76.5c-35.6,55.1-94.8,88.7-160,91.3V352h21.7l5.2-14.6c1.3-0.5,2.5-1,3.8-1.6l14,6.7l42-42l-6.7-14
		c0.6-1.2,1.1-2.5,1.6-3.8l14.6-5.1V256h72.2C419.1,262.7,416,271,416,280L416,280z M432,304h16v128h-16V304z M460.4,477.3
		c-1.7,3.4-7.2,3.4-8.8,0L436.9,448h38.1L460.4,477.3z M480,432h-16V304h16V432z M480,288h-48v-8c0-13.2,10.8-24,24-24
		s24,10.8,24,24V288z"/>
	<path d="M273.1,430.3c41.8-5.7,80.6-25.9,109.5-56.8l-11.7-10.9c-26.4,28.3-61.9,46.7-100,51.9L273.1,430.3z"/>
	<path d="M407.4,340l-13.8-8c-3,5.2-6.4,10.4-10,15.3l12.9,9.5C400.4,351.4,404.1,345.7,407.4,340z"/>
</g>
</svg>

                                  </div>
                                  <p className="mt-5 text-lg leading-6 font-medium text-white">{edge.node.section2BulletTitle1}</p>
                              </dt>
                              <dd className="mt-2 text-base text-white opacity-70">{edge.node.section2BulletDes1}</dd>
                          </div>

                          <div>
                              <dt>
                                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-white bg-opacity-10 text-white">
                                      {/* <SortAscendingIcon className="h-6 w-6" aria-hidden="true" /> */}

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 496 496" className="h-8 w-8 fillwhite">
<defs>
</defs>
<g>
	<g>
		<path d="M464,160c-17.6,0-32,14.4-32,32v89.3c0,7-3.1,13.7-8.4,18.2l-35.8,30.7c-4.4,3.7-9.9,5.8-15.6,5.8H344l31-34.8
			c5.8-6.5,9-15,9-23.7v-1.8c0-19.7-16-35.7-35.7-35.7c-10.1,0-19.8,4.3-26.5,11.8l-43.2,48C264,316,256,336.9,256,358.7V448h-16
			v-89.3c0-21.8-8-42.7-22.6-58.9l-43.2-48c-6.8-7.5-16.4-11.8-26.5-11.8c-19.7,0-35.7,16-35.7,35.7v1.8c0,8.7,3.2,17.2,9,23.7
			l31,34.8h-28.1c-5.7,0-11.3-2-15.6-5.8l-35.8-30.7c-5.3-4.6-8.4-11.2-8.4-18.2V192c0-17.6-14.4-32-32-32S0,174.4,0,192v100.8
			c0,24.6,10.4,48.2,28.5,64.9l54.5,50c8.2,7.6,13,18.3,13,29.5V448H80v48h160h16h160v-48h-16v-10.9c0-11.2,4.7-21.9,13-29.5
			l54.5-50c18.1-16.6,28.5-40.3,28.5-64.9V192C496,174.4,481.6,160,464,160z M240,480H96v-16h96v-16h-80v-10.9
			c0-15.7-6.6-30.7-18.2-41.3l-54.5-50C24.5,332.3,16,312.9,16,292.8V192c0-8.8,7.2-16,16-16s16,7.2,16,16v89.3
			c0,11.7,5.1,22.8,14,30.4l35.8,30.7c7.2,6.2,16.5,9.6,26,9.6h42.3l11.8,13.3l12-10.6l-57-64.1c-3.2-3.6-5-8.2-5-13.1v-1.8
			c0-10.8,8.8-19.7,19.7-19.7c5.6,0,10.9,2.4,14.6,6.5l43.2,48c11.9,13.2,18.5,30.3,18.5,48.2V448h-16v16h32V480z M480,292.8
			c0,20.1-8.5,39.5-23.3,53.1l-54.5,50c-11.5,10.6-18.2,25.6-18.2,41.3V448h-80v16h96v16H256v-16h32v-16h-16v-89.3
			c0-17.8,6.6-34.9,18.5-48.2l43.2-48c3.7-4.1,9.1-6.5,14.6-6.5c10.8,0,19.7,8.8,19.7,19.7v1.8c0,4.8-1.8,9.5-5,13.1l-57,64.1
			l12,10.6l11.8-13.3h42.3c9.5,0,18.8-3.4,26-9.6l35.8-30.7c8.9-7.6,14-18.7,14-30.4V192c0-8.8,7.2-16,16-16s16,7.2,16,16L480,292.8
			L480,292.8z"/>
	</g>
</g>
<g>
	<g>
		<path d="M248,96c-8.8,0-16-7.2-16-16s7.2-16,16-16s16,7.2,16,16h16c0-14.9-10.2-27.3-24-30.9V32h-16v17.1c-13.8,3.6-24,16-24,30.9
			c0,17.6,14.4,32,32,32c8.8,0,16,7.2,16,16s-7.2,16-16,16s-16-7.2-16-16h-16c0,14.9,10.2,27.3,24,30.9V176h16v-17.1
			c13.8-3.6,24-16,24-30.9C280,110.4,265.6,96,248,96z"/>
	</g>
</g>
<g>
	<g>
		<path d="M248,0c-57.3,0-104,46.7-104,104s46.7,104,104,104s104-46.7,104-104S305.3,0,248,0z M248,192c-48.5,0-88-39.5-88-88
			s39.5-88,88-88s88,39.5,88,88S296.5,192,248,192z"/>
	</g>
</g>
<g>
	<g>
		<path d="M440,32c-30.9,0-56,25.1-56,56s25.1,56,56,56s56-25.1,56-56S470.9,32,440,32z M440,128c-22.1,0-40-17.9-40-40
			s17.9-40,40-40s40,17.9,40,40S462.1,128,440,128z"/>
	</g>
</g>
<g>
	<g>
		<polygon points="448,80 448,64 432,64 432,80 416,80 416,96 432,96 432,112 448,112 448,96 464,96 464,80 		"/>
	</g>
</g>
<g>
	<g>
		<path d="M56,32C25.1,32,0,57.1,0,88s25.1,56,56,56s56-25.1,56-56S86.9,32,56,32z M56,128c-22.1,0-40-17.9-40-40s17.9-40,40-40
			s40,17.9,40,40S78.1,128,56,128z"/>
	</g>
</g>
<g>
	<g>
		<polygon points="64,80 64,64 48,64 48,80 32,80 32,96 48,96 48,112 64,112 64,96 80,96 80,80 		"/>
	</g>
</g>
<g>
	<g>
		<rect x="304" y="96" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="176" y="96" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="120" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="120" y="32" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="136" y="16" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="104" y="16" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="368" y="160" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="368" y="192" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="384" y="176" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="352" y="176" width="16" height="16"/>
	</g>
</g>
</svg>

                                  </div>
                                  <p className="mt-5 text-lg leading-6 font-medium text-white">{edge.node.section2BulletTitle2}</p>
                              </dt>
                              <dd className="mt-2 text-base text-white opacity-70">{edge.node.section2BulletDes2}</dd>
                          </div>

                          <div>
                              <dt>
                                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-white bg-opacity-10 text-white">
                                      {/* <ThumbUpIcon className="h-6 w-6" aria-hidden="true" /> */}

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 496 496" viewBox="0 0 496 496" className="h-8 w-8 fillwhite">
<defs>
</defs>
<path d="M432,368c-23.6,0-44.3,12.9-55.3,32h-48.7C403.1,368.6,456,294.4,456,208C456,93.3,362.7,0,248,0C136,0,44.4,89,40.2,200
	H14.9L72,268.5l57.1-68.5h-24.9c4.2-75.7,67.1-136,143.8-136c79.4,0,144,64.6,144,144s-64.6,144-144,144h-88v96h210.1
	c7.1,27.6,32.1,48,61.9,48c35.3,0,64-28.7,64-64S467.3,368,432,368z M248,368c88.2,0,160-71.8,160-160S336.2,48,248,48
	S88,119.8,88,208v8h6.9L72,243.5L49.1,216H56v-8c0-105.9,86.1-192,192-192s192,86.1,192,192s-86.1,192-192,192h-72v-32H248z
	 M176,432v-16h194.1c-1.3,5.1-2.1,10.5-2.1,16H176z M432,480c-26.5,0-48-21.5-48-48s21.5-48,48-48s48,21.5,48,48S458.5,480,432,480z
	"/>
<path d="M458.3,410.3L424,444.7l-10.3-10.3l-11.3,11.3l21.7,21.7l45.7-45.7L458.3,410.3z"/>
<path d="M120,288H24c-13.2,0-24,10.8-24,24v160c0,13.2,10.8,24,24,24h96c13.2,0,24-10.8,24-24V312C144,298.8,133.2,288,120,288z
	 M128,472c0,4.4-3.6,8-8,8H24c-4.4,0-8-3.6-8-8V312c0-4.4,3.6-8,8-8h96c4.4,0,8,3.6,8,8V472z"/>
<path d="M256,264c30.9,0,56-25.1,56-56s-25.1-56-56-56s-56,25.1-56,56S225.1,264,256,264z M256,168c22.1,0,40,17.9,40,40
	s-17.9,40-40,40s-40-17.9-40-40S233.9,168,256,168z"/>
<path d="M152,238.2l19.3,4.8l-10.2,17.1l42.8,42.8l17.1-10.2l4.8,19.3h60.5l4.8-19.3l17.1,10.2l42.8-42.8l-10.2-17.1l19.3-4.8v-60.5
	l-19.3-4.8l10.2-17.1l-42.8-42.8l-17.1,10.2l-4.8-19.3h-60.5l-4.8,19.3l-17.1-10.2l-42.8,42.8l10.2,17.1l-19.3,4.8V238.2z
	 M168,190.2l19.6-4.9l4-9.8l-10.4-17.3l25.1-25.1l17.3,10.4l9.8-4l4.9-19.6h35.5l4.9,19.6l9.8,4l17.3-10.4l25.1,25.1l-10.4,17.3
	l4,9.8l19.6,4.9v35.5l-15.6,3.9l-4.3,1.6l-3.7,9.1l10.4,17.3l-25.1,25.1l-17.3-10.4l-9.8,4l-4.9,19.6h-35.5l-3.9-15.6l-1.6-4.3
	l-9.1-3.7l-17.3,10.4l-25.1-25.1l10.4-17.3l-4-9.8l-19.6-4.9V190.2z"/>
<path d="M256,232c13.2,0,24-10.8,24-24s-10.8-24-24-24s-24,10.8-24,24S242.8,232,256,232z M256,200c4.4,0,8,3.6,8,8s-3.6,8-8,8
	s-8-3.6-8-8S251.6,200,256,200z"/>
<path d="M32,320h80v16H32V320z"/>
<path d="M32,352h80v16H32V352z"/>
<path d="M32,384h80v16H32V384z"/>
<path d="M32,416h80v16H32V416z"/>
<path d="M96,448h16v16H96V448z"/>
<path d="M64,448h16v16H64V448z"/>
<path d="M32,448h16v16H32V448z"/>
</svg>

                                  </div>
                                  <p className="mt-5 text-lg leading-6 font-medium text-white">{edge.node.section2BulletTitle3}</p>
                              </dt>
                              <dd className="mt-2 text-base text-white opacity-70">{edge.node.section2BulletDes3}</dd>
                          </div>
                      

                  </dl>
              </div>
          </div>

          <img className="shadow-xl w-full my-20 -mt-56 relative z-10 object-contain m-auto max-w-screen-xl rounded-xl" src={edge.node.flowChartDraw.file.url} alt="scheme" />



          <div className="bg-white">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:pt-3">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                      <div>
                          <h2 className="font-arena text-3xl font-extrabold text-gray-900 sm:text-4xl">{edge.node.section3Title}</h2>
                          <p className="mt-3 max-w-3xl text-lg text-gray-500">{edge.node.section3Description}</p>
                          <p className="mt-3 max-w-3xl text-lg text-gray-500">{edge.node.section3Des2}</p>
                      </div>
                      <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-3">

                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool10} alt="logotool1" />
                          </div>
                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool4} alt="logotool1" />
                          </div>
                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool3} alt="logotool1" />
                          </div>
                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool2} alt="logotool1" />
                          </div>

                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool11} alt="logotool1" />
                          </div>
                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool12} alt="logotool1" />
                          </div>



                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool5} alt="logotool1" />
                          </div>
                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool9} alt="logotool1" />
                          </div>
                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool1} alt="logotool1" />
                          </div>
                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool8} alt="logotool1" />
                          </div>
                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool7} alt="logotool1" />
                          </div>
                          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-2xl">
                              <img className="max-h-12 object-contain" src={logoTool6} alt="logotool1" />
                          </div>

                          

                          

                          
                      </div>
                  </div>
              </div>
          </div>


          <div className="relative bg-gray-100">
              <div className="h-56 bg-arena-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                  <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80"
                      alt=""
                  />
              </div>
              <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                  <div className="md:ml-auto md:w-1/2 md:pl-10">
                      <h2 className="font-arena text-base font-semibold uppercase tracking-wider text-arena-300">{edge.node.section4Tagline}</h2>
                      <p className="font-arena mt-2 text-gra-900 text-3xl font-extrabold tracking-tight sm:text-3xl">{edge.node.section4Title}</p>
                      <p className="mt-5 text-lg text-gray-700">
                          <CheckIcon className="w-6 h-6 float-left text-arena-900 mr-6" />{edge.node.section4Bullet1}</p>
                      <p className="mt-3 text-lg text-gray-700">
                          <CheckIcon className="w-6 h-6 float-left text-arena-900 mr-6" />{edge.node.section4Bullet2}</p>
                      <p className="mt-3 text-lg text-gray-700">
                          <CheckIcon className="w-6 h-6 float-left text-arena-900 mr-6" />{edge.node.section4Bullet3}</p>
                  </div>
              </div>
          </div>
          
          </>
          ))}

          <ActionBackground />
      </Layout>
  )
}

export default AnalyticsPage

export const query = graphql`
query AnalyticsGraph {
  site {
    siteMetadata {
      title
      description
      keywords
    }
  }

  allContentfulP07CienciaDeDatos(limit: 1) {
    edges {
      node {
        smallIntroduction
        descriptionText
        section2Title
        section2Intro
        section2BulletTitle1
        section2BulletDes1
        section2BulletTitle2
        section2BulletDes2
        section2BulletTitle3
        section2BulletDes3
        flowChartDraw {
          file {
            url
          }
          title
        }
        section3Title
        section3Description
        section3Des2
        section4Tagline
        section4Title
        section4Bullet1
        section4Bullet2
        section4Bullet3
        spaceId
      }
    }
  }

  allContentfulC03ContentHeader(filter: {atPage: {eq: "analytics"}}, limit: 1) {
    edges {
      node {
        title
        atPage
        caption
        id
        image {
          file {
            url
          }
          title
        }
        video {
          file {
            url
          }
        }
        longCaption {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }

  allContentfulC06ConsultingSolutions(sort: {order: ASC, fields: createdAt}) {
    edges {
      node {
        logo {
          file {
            url
          }
          title
        }
        name
        linkTo
        description {
          childMarkdownRemark {
            html
          }
        }
        content {
          childMarkdownRemark {
            html
          }
        }
        createdAt
      }
    }
  }

}
`
