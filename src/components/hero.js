import * as React from "react"
import { Link } from 'gatsby'
import bannerBackground from '../images/mainpage/buildoffices.jpeg'

const HeroHome = props => {
    return (
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
            <img className="h-full w-full object-cover" src={props.image} alt={props.alt} />
            <div className="absolute inset-0 bg-indigo-700" style={{mixBlendMode: 'multiply'}}></div>
            {/*style="mix-blend-mode: multiply;"*/}
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">{props.title}</span>
                <span className="block text-indigo-200">{props.title2}</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">{props.body}</p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <Link to="/" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">{props.primaryButton}</Link>
                <Link to="startFile" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">{props.secondaryButton}</Link>
                </div>
            </div>
            </div>
        </div>
        // <div>
        //     <p>{props.title}</p>
        // </div>
    )
}

export default HeroHome