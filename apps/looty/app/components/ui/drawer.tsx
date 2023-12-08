'use client'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { useOutsideClick } from 'apps/looty/hooks/useOutsideClick';
import * as React from 'react';

enum DrawerDirection {
    Left = 'Left',
    Right = 'Right',
}

type Props = {
    isOpen: boolean;
    children: React.ReactNode;
    direction?: DrawerDirection;
    onClose: () => void;

};

const Drawer = ({
    isOpen,
    children,
    direction = DrawerDirection.Right,
    onClose,
    ...rest
}: Props) => {


    const ref = useOutsideClick(() => {
        onClose()
    });
    return (
        <div className={`${isOpen ? 'visible' : 'hidden'} fixed w-screen h-screen backdrop:bg/80 top-0 left-0 bottom-0  transition ease-in-out duration-500  backdrop-blur-sm `}>
            <div ref={ref} className={`fixed z-50 h-full w-[400px] bg-[#1B142E] right-0`}>
                <div className="absolute top-1 right-1 flex cursor-pointer" onClick={onClose}>
                    X
                </div>
                <div className="mt-16 mx-4">{children}</div>
            </div>
        </div>
    );
};

export { Drawer, DrawerDirection };