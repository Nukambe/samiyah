"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavBar from "../NavBar";

export default function Hamburger({ pages }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="text-black p-2" onClick={() => setOpen(!open)}>
        <Bars3Icon className="w-6 text-white" />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-gray-900 py-2"
              onClick={() => setOpen(false)}
            >
              <div className="pr-6" onClick={() => setOpen(false)}>
                <XMarkIcon className="w-12 text-white ml-auto" />
              </div>
              <NavBar
                pages={pages}
                className="flex flex-col w-full text-4xl space-y-2 divide-y-2 divide-gray-700"
                onClose={() => setOpen(false)}
              />
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
}
