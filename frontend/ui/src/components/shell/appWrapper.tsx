import { AppShell } from '@mantine/core';
import { Header } from './header';
import { Footer } from './footer';
import { Navbar } from './navbar';
import { Main } from "./main";
import React, {useEffect, useState} from "react";
import { useHeaderNavbarStore } from "../../shared/stores/headerNavbar.store";

export function AppWrapper() {
    const { navbarOpen } = useHeaderNavbarStore();
    const [showHeader, setShowHeader] = useState(false);

    const collapsed = {
        desktop: true,
        mobile: !navbarOpen
    };

    const width = 768

    useEffect(() => {
        console.log("Navbar", navbarOpen)
    }, [navbarOpen]);

    useEffect(() => {
        const handleResize = () => {
            setShowHeader(window.innerWidth > width);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <AppShell
            header={
                {
                    height: {
                        base: 80,
                        sm: 80
                    }
                }
            }
            navbar={{width, breakpoint: width, collapsed}}
            footer={{
                height: 200
            }}
        >
            <Header showHeader={showHeader}/>
            <Navbar />
            <Main />
        </AppShell>
    );
}
