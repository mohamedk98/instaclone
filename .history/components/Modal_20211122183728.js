import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalStom';

function Modal(props) {
    const [open,setIsOpen] = useRecoilState(modalState)
    return (
        <div>
                { open && <p>Modal is Open</p>}
        </div>
    );
}

export default Modal;