import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../../assets/images/logo.png"; // Make sure the path is correct

const navigation = [
  { name: "Shop", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 md:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-h5 font-heading text-primary-600">
            <img src={Logo} alt="Logo" className="h-24" /> {/* Logo Image */}
          </a>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-body font-regular text-neutral-900 hover:text-primary-600"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right side actions */}
        <div className="hidden md:flex md:items-center md:gap-x-6">
          <a href="#" className="text-sm font-regular font-body text-neutral-900 hover:text-primary-600">
            Sign in
          </a>
          <a href="#" className="flex items-center gap-x-2 text-sm font-regular text-neutral-900 font-body hover:text-primary-600">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" alt="Canada Flag" className="w-5 h-5" />
            CAD
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            type="button"
            className="-ml-2 rounded-md p-2 text-neutral-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-3/4 bg-white p-6 shadow-lg sm:max-w-sm">
          <div className="flex items-center justify-between">
            <a href="#" className="text-h5 font-heading text-primary-600">
              <img src={Logo} alt="Logo" className="h-8" /> {/* Logo in mobile menu */}
            </a>
            <button
              type="button"
              className="-m-2 rounded-md p-2 text-neutral-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-base font-regular text-neutral-800 hover:text-primary-600"
              >
                {item.name}
              </a>
            ))}
            <a href="#" className="block text-base font-medium text-neutral-800 hover:text-primary-600">
              Sign in
            </a>
            <a href="#" className="block w-fit flex items-center gap-x-2 rounded-md bg-primary-500 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-600">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_Canada.svg" alt="Canada Flag" className="w-5 h-5" />
              CAD
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
