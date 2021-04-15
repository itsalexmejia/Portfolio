import * as React from "react"


//Modal
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// import { ExclamationIcon } from '@heroicons/react/outline'

// markup
const PeopleGrid = props => {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef()
  return (
    <>
      <li key={props.name} className="py-10 px-6 cursor-pointer bg-white transition-all text-center border border-gray-200 rounded-xl xl:px-10 hover:bg-gray-100 hover:border-gray-100" onClick={() => setOpen(true)}>
        <div className="space-y-6 xl:space-y-10">
          <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={props.image} alt={props.name} />
          <div className="space-y-2">

            <div className="font-arena leading-6 font-semibold space-y-1">
              <h3 className="text-xl ">{props.name}</h3>
              <p className="text-base text-arena-400">{props.position}</p>
            </div>
          </div>
        </div>
      </li>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          open={open}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
          </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:px-6 sm:py-10 sm:pb-4">
                  <div>
                  {/* className="sm:flex sm:items-start" */}
                    <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={props.image} alt={props.name} />
                    <div className="mt-8 text-center sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="font-arena text-2xl leading-6 font-semibold text-gray-900">{props.name}</Dialog.Title>
                      <div className="mt-3">
                        <div className="prose" dangerouslySetInnerHTML={{ __html: props.description }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-arena-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >Cerrar
                </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

    </>
  )
}

export default PeopleGrid




