'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Dialog, DialogPanel } from '@headlessui/react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-400 p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="size-6" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:space-x-8">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Shop</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Contact</a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Sign in</a>
            <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
              <MagnifyingGlassIcon className="size-6" />
              <span className="sr-only">Search</span>
            </a>
            <a href="#" className="hidden lg:flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
              <img
                src="https://tailwindui.com/plus-assets/img/flags/flag-canada.svg"
                alt=""
                className="w-5 h-auto mr-2"
              />
              CAD
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden z-40">
        <div className="fixed inset-0 bg-black/25" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 left-0 w-3/4 max-w-sm bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <a href="#">
              <img
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Logo"
                className="h-8 w-auto"
              />
            </a>
            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-400">
              <XMarkIcon className="size-6" />
            </button>
          </div>
          <nav className="space-y-4">
            <a href="#" className="block text-base font-medium text-gray-700 hover:text-gray-900">Shop</a>
            <a href="#" className="block text-base font-medium text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="block text-base font-medium text-gray-700 hover:text-gray-900">Contact</a>
            <a href="#" className="block text-base font-medium text-gray-700 hover:text-gray-900">Sign in</a>
          </nav>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
