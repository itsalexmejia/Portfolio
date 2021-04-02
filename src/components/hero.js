import * as React from "react"
import { Link } from 'gatsby'
import Particles from 'react-particles-js';

const HeroHome = props => {
    return (
        <div className="relative bg-radial overflow-hidden shadow-xl sm:rounded-2xl sm:overflow-hidden">

            {/* <div className="absolute inset-0">
                <img className="h-full w-full object-cover" src={props.image} alt={props.alt} />
                <div className="absolute inset-0 bg-testcolor-700" style={{mixBlendMode: 'multiply'}}></div>
            </div> */}

            <div className="absolute inset-0">
              <Particles
                  params={{
                      particles: {
                          number: {
                              value: 72,
                              density: {
                                  enable: true,
                                  value_area: 800
                              }
                          },
                          color: {
                              value: "#ffffff",
                          },
                          shape: {
                              // type: circle,
                              stroke: {
                                  width: 0,
                                  color: "#000000",
                              },
                              polygon: {
                                  nb_sides: 5
                              },
                              image: {
                                  // src: img/github.svg,
                                  width: 100,
                                  height: 100
                              }
                          },
                          opacity: {
                              value: 0.3043286749689665,
                              random: true,
                              anim: {
                                  enable: false,
                                  speed: 0.7300395032486761,
                                  opacity_min: 0.1460079006497352,
                                  sync: false
                              }
                          },
                          size: {
                              value: 3,
                              random: true,
                              anim: {
                                  enable: false,
                                  speed: 40,
                                  size_min: 0.1,
                                  sync: false
                              }
                          },
                          line_linked: {
                              enable: true,
                              distance: 100,
                              color: "#ffffff",
                              opacity: 0.2,
                              width: 0.20000000000000004
                          },
                          move: {
                              enable: true,
                              speed: 1,
                              // direction: none,
                              random: false,
                              straight: false,
                              // out_mode: out,
                              bounce: false,
                              attract: {
                                  enable: false,
                                  rotateX: 600,
                                  rotateY: 1200
                              }
                          }
                      },
                      interactivity: {
                          // detect_on: canvas,
                          events: {
                              onhover: {
                                  enable: true,
                                  // mode: bubble
                              },
                              onclick: {
                                  enable: false,
                                  // mode: push
                              },
                              resize: true
                          },
                          modes: {
                              grab: {
                                  distance: 400,
                                  line_linked: {
                                      opacity: 1
                                  }
                              },
                              bubble: {
                                  distance: 316.35045140775964,
                                  size: 2,
                                  duration: 3.8935440173262723,
                                  opacity: 0.7,
                                  speed: 3
                              },
                              repulse: {
                                  distance: 324.4620014438561,
                                  duration: 0.8
                              },
                              push: {
                                  particles_nb: 4
                              },
                              remove: {
                                  particles_nb: 2
                              }
                          }
                      },
                  }}
              />
              {/* <div className="absolute inset-1"></div> */}
          </div>
          
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="font-arena text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">{props.title}</span>
                    <span className="block text-testcolor-200">{props.title2}</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-testcolor-200 sm:max-w-3xl">{props.body}</p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <Link to={`/insights/${props.linkUrl}`} className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-testcolor-700 bg-white hover:bg-testcolor-50 sm:px-8">{props.primaryButton}</Link>
                    <Link to="/startFile/" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-testcolor-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">{props.secondaryButton}</Link>
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