import React, { Fragment } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalStom';
import {Dialog , Transition} from '@headlessui/react'

function Modal(props) {
    const [open,setIsOpen] = useRecoilState(modalState)
    return (
        <Transition.Root show={open} as={Fragment}>
                <Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto'>

                </Dialog>
        </Transition.Root>
    );
}

export default Modal;