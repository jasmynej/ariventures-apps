import * as React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    width?: string; // e.g. 'w-1/2', 'w-1/3'
}

export default function Modal({ isOpen, onClose, title, children, width = "w-1/3" }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className={`bg-white p-6 rounded-lg shadow-lg ${width}`}>
                {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
                {children}
                <div className="mt-4 flex justify-end">
                    <button className="text-sm text-gray-500 hover:underline" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}