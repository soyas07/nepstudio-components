import React, { FC, ReactNode, useEffect } from 'react';
import styles from './Navbar.module.css';

interface Logo {
    src: string,
    alt: string,
    width: string,
    height: string,
    url: string,
}

interface Resolution {
    sml: string,
    med: string,
    lrg: string
}

interface NavbarProps {
    logo: Logo;
    itemLists: string[];
    ctaBtn?: ReactNode;
    customClass?: string;
    resolution: Resolution;
}

const Navbar: FC<NavbarProps> = ({
    logo = {src: "", alt: "logo", width: "80px", height: "90px", url: "#" },
    itemLists = [],
    ctaBtn = null,
    customClass = '',
    resolution = { sml: '473px', med: '768px', lrg: '994px' }
}) => {
    
    // Set global CSS variables on the :root element from the props
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--mobile-resolution", resolution.sml);
        root.style.setProperty("--tablet-resolution", resolution.med);
        root.style.setProperty("--desktop-resolution", resolution.lrg);
    }, [resolution]);

    return (
        <nav className={customClass} id={styles.navbar}>
            <div style={{width:logo.width, height:logo.height}}>
                {/* logo */}
                <a href={logo.url}><img src={logo.src} width="100%" height="100%" alt={logo.alt} /></a>
            </div>
            <div className={styles['list-container']}>
                {/* item lists */}
                <ul>
                    {itemLists.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))}
                    {/* if ctaBtn is provided declare here */}
                    {ctaBtn && <li>{ctaBtn}</li>}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;