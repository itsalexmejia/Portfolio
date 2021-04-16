import * as React from "react"
// import videoul from "../../../images/video/partners.mp4"

//assets

// markup
const BackgroundHeader = props => {
  return (

  <div className="relative bg-bluearena-800">
    <div className="absolute inset-0 overflow-hidden">
      <img className="w-full h-full object-cover" src={props.image} alt={props.alt}/>
      <video className="hidden absolute inset-0 min-w-full min-h-full md:block" autoPlay muted loop>
        <source src={props.video} type="video/mp4"/>
      </video>
      <div className="absolute inset-0 bg-bluearena-700" style={{mixBlendMode: "multiply"}} aria-hidden="true"></div>
    </div>
    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 className="font-arena text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{props.title}</h1>
      <p className="mt-6 text-xl text-bluearena-100 max-w-3xl">{props.caption}</p>
    </div>
  </div> 
    
  )
}

export default BackgroundHeader




