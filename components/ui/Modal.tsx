import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg overflow-hidden w-full max-w-lg"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

interface ModalContentProps {
    children: ReactNode;
}

const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
    return <div className="p-6">{children}</div>;
};

interface ModalHeaderProps {
    children: ReactNode;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => {
    return <div className="text-xl font-semibold">{children}</div>;
};

interface ModalFooterProps {
    children: ReactNode;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
    return <div className="flex justify-end gap-4 mt-4">{children}</div>;
};

interface ModalBodyProps {
    children: ReactNode;
}

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
    return <div className="text-gray-700 mt-2">{children}</div>;
};

interface ModalTitleProps {
    children: ReactNode;
}

const ModalTitle: React.FC<ModalTitleProps> = ({ children }) => {
    return <div className="text-lg font-bold">{children}</div>;
};

interface ModalCloseButtonProps {
    onClose: () => void;
}

const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({ onClose }) => {
    return (
        <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
            ×
        </button>
    );
};

export {
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalTitle,
    ModalCloseButton,
};