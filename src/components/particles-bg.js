import * as React from 'react'
import Particles from 'react-particles-js';


// markup
const ParticlesAnimation = props => {
  return (

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
                          opacity: 0.5,
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

    
       
  )
}

export default ParticlesAnimation




