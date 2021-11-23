import React, { Fragment } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalStom';
import {Dialog , Transition} from '@headlessui/react'

function Modal(props) {
    const [open,setIsOpen] = useRecoilState(modalState)
    return (
        <Transition.Root show={open} as={Fragment}>
                <Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto' onClose={setIsOpen}>
                    <div className='flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>

                    </div>
                </Dialog>
        </Transition.Root>
    );
}

export default Modal