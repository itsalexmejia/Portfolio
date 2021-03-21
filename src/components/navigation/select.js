import React from 'react'
import { Menu, Transition } from '@headlessui/react'

export default function Example() {
  return (
    <Menu>
      {({ open }) => (
        <>
          <div className="flex justify-end">
            <Menu.Button className="rounded-lg bg-cyan-700 px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cyan-500">
              Options
            </Menu.Button>
          </div>
          <Transition
            as={React.Fragment}
            show={open}
            leave="transition duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute origin-top-right transform mt-2 right-0 w-full rounded-lg bg-white p-2 shadow-md focus:outline-none"
            >
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-800'
                    } block w-full rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-800'
                    } block w-full rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    Duplicate
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-800'
                    } block w-full rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    Share
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-800'
                    } block w-full rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    Delete
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}