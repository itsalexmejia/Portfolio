import * as React from 'react'

//Modal
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

// markup
const CardAction = props => {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef()
    return (
        <>
            <div className="relative bg-white">
                
                <div className={`h-56 bg-brand-600 sm:h-72 md:absolute md:${props.align} md:h-full md:w-1/2`}>
                    <img
                        className="w-full h-full object-cover object-top"
                        src={props.image}
                        alt={props.alt}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className={`md:${props.alignText} md:w-1/2 md:pl-10 md:pr-10`}>
                        {/* <h2 className="font-arena text-base font-semibold uppercase tracking-wider text-arena-900">{props.headline}</h2> */}
                        <p className="font-arena mt-2 text-brand text-3xl font-extrabold tracking-tight sm:text-4xl">{props.organizationName}</p>
                        <p className="mt-3 text-lg text-gray-600">{props.introduction}</p>
                        <div className="mt-8">
                            <div className="inline-flex rounded-md shadow">
                                <p onClick={() => setOpen(true)} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-arena-500 hover:bg-brand-500">Leer más</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    className="fixed z-50 inset-0 overflow-y-auto"
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
                            <Dialog.Overlay className="fixed inset-0 bg-brand-900 bg-opacity-80 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"> &#8203;</span>
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
                                        <div className="mt-8 text-center sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="font-arena text-2xl leading-6 font-semibold text-gray-900">{props.organizationName}</Dialog.Title>
                                            <div className="mt-3">
                                                <div className="prose" dangerouslySetInnerHTML={{ __html: props.content }} />
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
                                    >Cerrar</button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </> 
  )
}

export default CardAction




