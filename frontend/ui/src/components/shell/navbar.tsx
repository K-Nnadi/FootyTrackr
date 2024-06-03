import {AppShell, NavLink} from "@mantine/core";
import {useNavigate} from "react-router-dom";

export function Navbar() {
    const navigate = useNavigate()
    return (
        <AppShell.Navbar p="md" w={'25%'} style={{gap: '1px'}}>
            <NavLink
                label={"Home"}
                onClick={() => navigate('/home')}
                style={{margin: "5px"}}
            />

            <NavLink
                label={"Logs"}
                onClick={() => navigate('/logs')}
                style={{margin: "5px"}}
            />

            <NavLink
                label={"Matches"}
                onClick={() => navigate('/matches')}
                style={{margin: "5px"}}
            />

            <NavLink
                label={"Settings"}
                onClick={() => navigate('/settings')}
                style={{margin: "5px"}}
            />

        </AppShell.Navbar>

    )
}

