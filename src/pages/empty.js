import * as React from "react"
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

//css
import '../styles/global.css';

//components
import BackgroundHeader from "../components/content/header";


// markup
const emptyTemplate = () => {

  return (
    
    <div>
      <div className="container-iphonex min-h-screen bg-white">
        <main>
            <BackgroundHeader/>
          {/* More main page content here... */}
        </main>
      </div>
    </div>




  )
}
export default emptyTemplate