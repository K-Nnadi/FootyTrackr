import {AppShell} from "@mantine/core";
import {Outlet} from "react-router-dom";
import {Footer} from "./footer";
import React from "react";

export function Main(){
    return(
        <AppShell.Main>
            <div>
                <Outlet/>
            </div>
            <Footer />
        </AppShell.Main>
    )
}