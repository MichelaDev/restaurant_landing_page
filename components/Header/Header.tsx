'use client'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'About', href: 'about'},
  { name: 'Menu', href: 'menu' },
  { name: 'Reservation', href: 'reservation' },
  { name: 'Contacts', href: 'contacts' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function isInViewport(id: string) {
  const element = document.getElementById(id);
  const rect = element?.getBoundingClientRect();
  if(!rect) return;
  return (
      (rect.bottom <= (window.innerHeight+window.innerHeight/2 || document.documentElement.clientHeight+document.documentElement.clientHeight/2) && rect.bottom >= (window.innerHeight-window.innerHeight/2 || document.documentElement.clientHeight-document.documentElement.clientHeight/2)) ||
      (rect.top >= 0 && rect.top <= (window.innerHeight/2 || document.documentElement.clientHeight/2))
  );
}

const debounce = (fn: Function, ms = 100) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export default function Header() {

  const [selected, setSelected] = useState<string>();

  useEffect(() => {
    const onScroll = debounce(() => navigation.every((el, index) => {
        if(isInViewport(el.href)) {setSelected(el.href); return false};
        if(index === navigation.length-1) setSelected(undefined);
        return true
      }))
    
    document.addEventListener("scroll", onScroll)

    return () => document.removeEventListener("scroll", onScroll)
  })

  return (
    <Disclosure as="nav" className="fixed w-full bg-primary">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between sm:justify-center">
              <div className="flex items-center sm:hidden">

                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="sm:absolute sm:inset-y-0 sm:left-0 flex flex-shrink-0 gap-2 items-center">
                <Image
                  className="h-6 w-auto"
                  src={logo}
                  alt="Culinary Heaven"
                />
                <div className='block sm:hidden lg:block'>CULINARY HEAVEN</div>
              </div>

              {/* Desktop menu */}
              <div className="hidden sm:flex basis-1/2 items-center justify-center sm:items-stretch">
                <div className="flex">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      onClick={() => {scrollTo(item.href)}}
                      className={classNames(
                        item.href === selected ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                      )}
                      aria-current={item.href === selected ? 'page' : undefined}
                    >
                      {item.name}
                    </div>
                  ))}
              </div>
              </div>

                {/* Social media */}
                <div className='sm:absolute sm:inset-y-0 sm:right-0 flex gap-2 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-4 w-4">
                    {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                    <path
                      fill="currentColor"
                      d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  onClick={() => {scrollTo(item.href)}}
                  className={classNames(
                    item.href === selected ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium cursor-pointer'
                  )}
                  aria-current={item.href === selected ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
