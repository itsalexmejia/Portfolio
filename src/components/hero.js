import * as React from "react"
import { Link } from 'gatsby'
// import Particles from 'react-particles-js';
import ParticlesAnimation from "./particles-bg";

const HeroHome = props => {
    return (
        <div className="relative bg-radial overflow-hidden shadow-xl sm:rounded-2xl sm:overflow-hidden">

            {/* <div className="absolute inset-0">
                <img className="h-full w-full object-cover" src={props.image} alt={props.alt} />
                <div className="absolute inset-0 bg-bluearena-700" style={{mixBlendMode: 'multiply'}}></div>
            </div> */}
           <ParticlesAnimation/>
            <div className="relative px-4 py-20 sm:px-6 sm:py-24 lg:py-48 lg:px-24">
            {/* <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"> */}
                <h1 className="max-w-6xl mx-auto font-arena text-center">
                    <span className="block text-arena-200 text-base font-semibold tracking-wide uppercase">{props.title}</span>
                    <span className="block text-white mt-4 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-7xl">{props.title2}</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-bluearena-50 opacity-80 sm:max-w-3xl">{props.body}</p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <Link to={`/insights/${props.linkUrl}`} className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-3xl shadow-sm text-arena-700 bg-white hover:bg-bluearena-50 sm:px-8">{props.primaryButton}</Link>
                    <Link to="/" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-3xl shadow-sm text-white bg-bluearena-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">{props.secondaryButton}</Link>
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