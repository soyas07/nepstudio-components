import React, { FC, ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
    children: ReactNode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

const Container: FC<ContainerProps> = ({
    children,
    maxWidth = 'lg',
    className = '',
}) => {
    return (
        <div className={`${styles.container} ${styles[`container-${maxWidth}`]} ${className}`}>
            {children}
        </div>
    );
};

export default Container;