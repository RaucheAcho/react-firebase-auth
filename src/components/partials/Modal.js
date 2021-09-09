import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import * as HeroIcons from "react-icons/hi";
import { IconContext } from "react-icons/lib";

export default function Modal({
  closeModal,
  isOpen,
  title,
  subtitle,
  children,
}) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div
            className="min-h-screen px-4 backdrop-filter 
            backdrop-blur-md text-center"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className="inline-block w-2/6 max-w-3xl p-6 my-8 bg-white
              overflow-hidden text-left align-middle transition-all 
              transform border shadow-xl rounded-2xl"
              >
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-light-winter-cb uppercase dark:text-dark-winter-c"
                >
                  {title}
                </Dialog.Title>
                <Dialog.Title
                  as="h5"
                  className="text-sm font-medium leading-6 text-gray-400 mb-4"
                >
                  {subtitle}
                </Dialog.Title>
                <span className="mt-4 mr-4 absolute right-0 top-0">
                  <IconContext.Provider value={{ className: "w-6 h-6" }}>
                    <HeroIcons.HiOutlineX onClick={closeModal} />
                  </IconContext.Provider>
                </span>
                <div className="mt-3">{children}</div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
