import React, { useEffect, useState } from 'react';
import { AppShell, Box, Burger, Button, Divider, Flex, Group, Text } from '@mantine/core';
import { DarkModeButton } from '../buttons/darkMode.button';
import { IoSettingsOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useHeaderNavbarStore } from '../../shared/stores/headerNavbar.store';

interface HeaderProps {
    showHeader: boolean
}

export function Header({showHeader}: HeaderProps) {  
    const navigate = useNavigate();
    const { navbarOpen, toggleNavbar } = useHeaderNavbarStore();



    const pages = [
        { page: 'home', label: 'Home' },
        { page: 'matches', label: 'Matches' },
        { page: 'logs', label: 'Logs' }
    ];

    return (
        <AppShell.Header>
            <Flex justify={'space-between'}>
                <Burger opened={navbarOpen} onClick={toggleNavbar} hiddenFrom="sm" size="md"/>
            </Flex>
            <Box>
                {
                    showHeader && <Group justify="space-between" h="100%" align="center" className="header">
                        <Group gap="sm">
                            <Group gap="xl">
                                {pages.map(({ page, label }) => (
                                    <Button key={page} variant="subtle" onClick={() => navigate(`/${page}`)}>
                                        <Text>{label}</Text>
                                    </Button>
                                ))}
                            </Group>
                        </Group>
                        <Group visibleFrom="sm">
                            <Divider orientation={'vertical'}/>
                            <IoSettingsOutline onClick={() => navigate('/settings')}/>
                            <DarkModeButton/>
                            <Button variant="outline" onClick={() => navigate('/join')}>Sign In</Button>
                            <Button variant="light">Join</Button>
                        </Group>
                    </Group>
                }

            </Box>
        </AppShell.Header>
    );
}
