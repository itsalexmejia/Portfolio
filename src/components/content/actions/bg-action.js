import * as React from 'react'
import Particles from 'react-particles-js';

// markup
const ActionBackground = props => {
  return (

      <div className="relative bg-radial overflow-hidden">
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
              <div className="absolute inset-1"></div>
          </div>

          <div className="relative inset-2 max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Let's make progress together.</span>
                  <span className="block">See how we can bring value.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-testcolor-200">Your design support. We understand your product, uncover problems and deliver usable solutions.</p>
              <a href="mailto:alex@me.com" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-arena-600 bg-white hover:bg-indigo-50 sm:w-auto">
                  <svg className="mr-3 -ml-1 h-5 w-5 text-arena-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
              </a>
          </div>
      </div>
    
       
  )
}

export default ActionBackground




