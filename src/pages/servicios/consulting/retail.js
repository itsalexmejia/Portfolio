import * as React from "react"
import { graphql } from 'gatsby'
// import { Link } from "gatsby"
import Layout from "../../../components/layout"
import ActionBackground from "../../../components/content/actions/bg-action"
import TextHeader from '../../../components/content/header/header-txt'
import { CheckIcon } from '@heroicons/react/solid'
import {
    UsersIcon,
    ChevronRightIcon,
    CursorClickIcon,
    CubeIcon,
    ShoppingBagIcon,
    ClipboardListIcon,
    CurrencyDollarIcon,
    SortAscendingIcon,
    ShoppingCartIcon,
    PhoneIcon,
  } from '@heroicons/react/outline'

// markup
const retailPage = ({data}) => {
    return (
        <Layout>
            <TextHeader
                headline="Industria del Consumo"
                title="Industria del Consumo"
            // title2 = "Industria del Consumo"
            // caption="Como una de las principales generadoras de actividad económica en México, la Industria de Consumo (en sus diferentes sectores) está enfrentando retos tanto sistémicos como coyunturales, que de no enfrentarse degradan tanto la capacidad de atender al Mercado, como también la rentabilidad y sustentabilidad de las Cadenas de Valor que la conforman:"
            />

            {data.allContentfulC06ConsultingSolutions.edges.map(edge => (
                <img className="shadow-xl w-full mt-10 object-cover m-auto max-h-96" src={edge.node.logo.file.url} alt={edge.node.logo.title} />
            ))}

            {data.allContentfulP06ConsultingPages.edges.map(edge => (
                <>
                    <div className="bg-white">
                        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                            <div>
                                {/* <h2 className="font-arena text-base font-semibold text-arena-600 uppercase tracking-wide">Everything you need</h2> */}
                                <p className="font-arena mt-2 text-3xl font-extrabold text-gray-900">{edge.node.section2Title}</p>
                                {/* <p className="mt-4 text-lg text-gray-500">{edge.node.section3Intro.childMarkdownRemark.html}</p> */}
                                <div className="mt-4 text-lg text-gray-500" dangerouslySetInnerHTML={{ __html: edge.node.section2Intro.childMarkdownRemark.html }} />
                            </div>
                            <div className="mt-12 lg:mt-0 lg:col-span-2">
                                <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">

                                    <div className="relative">
                                        <dt>
                                            <CheckIcon className="absolute h-6 w-6 text-arena-500" aria-hidden="true" />
                                            <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{edge.node.section1Bullet1}</p>
                                        </dt>
                                    </div>

                                    <div className="relative">
                                        <dt>
                                            <CheckIcon className="absolute h-6 w-6 text-arena-500" aria-hidden="true" />
                                            <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{edge.node.section1Bullet2}</p>
                                        </dt>
                                    </div>

                                    <div className="relative">
                                        <dt>
                                            <CheckIcon className="absolute h-6 w-6 text-arena-500" aria-hidden="true" />
                                            <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{edge.node.section1Bullet3}</p>
                                        </dt>
                                    </div>

                                    <div className="relative">
                                        <dt>
                                            <CheckIcon className="absolute h-6 w-6 text-arena-500" aria-hidden="true" />
                                            <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{edge.node.section1Bullet4}</p>
                                        </dt>
                                    </div>

                                    <div className="relative">
                                        <dt>
                                            <CheckIcon className="absolute h-6 w-6 text-arena-500" aria-hidden="true" />
                                            <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{edge.node.section1Bullet5}</p>
                                        </dt>
                                    </div>

                                </dl>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-100">
                        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
                            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">{edge.node.section3Title}</h2>
                            {/* <p className="mt-4 max-w-3xl text-lg text-gray-700 opacity-80">{edge.node.section3Intro.childMarkdownRemark.html}</p> */}
                            <div className="mt-4 max-w-3xl text-lg text-gray-700 opacity-80" dangerouslySetInnerHTML={{ __html: edge.node.section3Intro.childMarkdownRemark.html }} />

                            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                                {/* AQUI */}
                                <div>
                                    <div>
                                        <span className="flex items-center justify-center h-12 w-12 rounded-2xl bg-arena-500">
                                            <CurrencyDollarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium text-gray-800">{edge.node.section3BulletTitle1}</h3>
                                        <p className="mt-2 text-base text-gray-700">{edge.node.section3BulletDescription1}</p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <span className="flex items-center justify-center h-12 w-12 rounded-2xl bg-arena-500">
                                            <SortAscendingIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium text-gray-800">{edge.node.section3BulletTitle2}</h3>
                                        <p className="mt-2 text-base text-gray-700">{edge.node.section3BulletDescription2}</p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <span className="flex items-center justify-center h-12 w-12 rounded-2xl bg-arena-500">
                                            <ShoppingCartIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium text-gray-800">{edge.node.section3BulletTitle3}</h3>
                                        <p className="mt-2 text-base text-gray-700">{edge.node.section3BulletDescription3}</p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <span className="flex items-center justify-center h-12 w-12 rounded-2xl bg-arena-500">
                                            <PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium text-gray-800">{edge.node.section3BulletTitle4}</h3>
                                        <p className="mt-2 text-base text-gray-700">{edge.node.section3BulletDescription4}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="relative bg-white py-16 sm:py-24 lg:py-20">
                        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                            <p className="font-arena mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">{edge.node.section4Title}</p>
                            <div className="mt-12">
                                <div className="grid grid-cols-1 gap-8 overflow-hidden sm:grid-cols-2 lg:grid-cols-5">
                                    {/* AQUI */}
                                    <div className="relative">
                                        <div className="pt-6">
                                            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                                <div className="-mt-6">
                                                    <div>
                                                        <span className="inline-flex items-center justify-center p-3 bg-white border border-gray-400 rounded-2xl shadow-lg">
                                                            <CursorClickIcon className="h-6 w-6 text-arena-900" aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                    <h3 className="font-arena mt-8 text-base font-semibold text-gray-900 tracking-tight">{edge.node.section4Bullet1}</h3>
                                                    <p className="mt-5 text-sm text-gray-700">{edge.node.section4BulletDescription1}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <ChevronRightIcon className="ml-2 hidden w-5 h-5 absolute inset-y-1/2 inset-x-full text-arena-400 md:block" />
                                    </div>

                                    <div className="relative">
                                        <div className="pt-6">
                                            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                                <div className="-mt-6">
                                                    <div>
                                                        <span className="inline-flex items-center justify-center p-3 bg-white border border-gray-400 rounded-2xl shadow-lg">
                                                            <CubeIcon className="h-6 w-6 text-arena-900" aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                    <h3 className="font-arena mt-8 text-base font-semibold text-gray-900 tracking-tight">{edge.node.section4Bullet2}</h3>
                                                    <p className="mt-5 text-sm text-gray-700">{edge.node.section4BulletDescription2}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <ChevronRightIcon className="ml-2 hidden w-5 h-5 absolute inset-y-1/2 inset-x-full text-arena-400 md:block" />
                                    </div>

                                    <div className="relative">
                                        <div className="pt-6">
                                            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                                <div className="-mt-6">
                                                    <div>
                                                        <span className="inline-flex items-center justify-center p-3 bg-white border border-gray-400 rounded-2xl shadow-lg">
                                                            <ClipboardListIcon className="h-6 w-6 text-arena-900" aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                    <h3 className="font-arena mt-8 text-base font-semibold text-gray-900 tracking-tight">{edge.node.section4Bullet3}</h3>
                                                    <p className="mt-5 text-sm text-gray-700">{edge.node.section4BulletDescription3}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <ChevronRightIcon className="ml-2 hidden w-5 h-5 absolute inset-y-1/2 inset-x-full text-arena-400 md:block" />
                                    </div>

                                    <div className="relative">
                                        <div className="pt-6">
                                            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                                <div className="-mt-6">
                                                    <div>
                                                        <span className="inline-flex items-center justify-center p-3 bg-white border border-gray-400 rounded-2xl shadow-lg">
                                                            <ShoppingBagIcon className="h-6 w-6 text-arena-900" aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                    <h3 className="font-arena mt-8 text-base font-semibold text-gray-900 tracking-tight">{edge.node.section4Bullet4}</h3>
                                                    <p className="mt-5 text-sm text-gray-700">{edge.node.section4BulletDescription4}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <ChevronRightIcon className="ml-2 hidden w-5 h-5 absolute inset-y-1/2 inset-x-full text-arena-400 md:block" />
                                    </div>

                                    <div className="relative">
                                        <div className="pt-6">
                                            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                                <div className="-mt-6">
                                                    <div>
                                                        <span className="inline-flex items-center justify-center p-3 bg-white border border-gray-400 rounded-2xl shadow-lg">
                                                            <UsersIcon className="h-6 w-6 text-arena-900" aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                    <h3 className="font-arena mt-8 text-base font-semibold text-gray-900 tracking-tight">{edge.node.section4Bullet5}</h3>
                                                    <p className="mt-5 text-sm text-gray-700">{edge.node.section4BulletDescription5}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <ChevronRightIcon className="ml-2 hidden w-5 h-5 absolute inset-y-1/2 inset-x-full text-arena-400 md:block" /> */}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </>
            ))}
            <ActionBackground />
        </Layout>
  )
}

export default retailPage

export const query = graphql`
query retail {
  site {
    siteMetadata {
      title
      description
      keywords
    }
  }
  allContentfulC06ConsultingSolutions(filter: {linkTo: {eq: "/servicios/consulting/retail/"}}) {
    edges {
      node {
        logo {
          file {
            url
          }
          title
        }
        linkTo
      }
    }
  }
  allContentfulP06ConsultingPages(filter: {pageId: {eq: "retail"}}) {
    edges {
      node {
        pageId
        section2Title
        section2Intro {
          childMarkdownRemark {
            html
          }
        }
        section1Bullet1
        section1Bullet2
        section1Bullet3
        section1Bullet4
        section1Bullet5
        section3Title
        section3Intro {
          childMarkdownRemark {
            html
          }
        }

        section3BulletTitle1
        section3BulletTitle2
        section3BulletTitle3
        section3BulletTitle4
        section3BulletDescription1
        section3BulletDescription2
        section3BulletDescription3
        section3BulletDescription4

        section4Title
        
        section4Bullet1
        section4Bullet2
        section4Bullet3
        section4Bullet4
        section4Bullet5
        section4BulletDescription1
        section4BulletDescription2
        section4BulletDescription3
        section4BulletDescription4
        section4BulletDescription5
      }
    }
  }
}
`
