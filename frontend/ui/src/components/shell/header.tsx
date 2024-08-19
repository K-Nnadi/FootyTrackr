import React from 'react';
import { AppShell, Box, Burger, Button, Container, Divider, Flex, Group, Text } from '@mantine/core';
import { DarkModeButton } from '../buttons/darkMode.button';
import { IoSettingsOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useHeaderNavbarStore } from '../../shared/stores/headerNavbar.store';

interface HeaderProps {
    showHeader: boolean
}

export function Header({ showHeader }: HeaderProps) {
    const navigate = useNavigate();
    const { navbarOpen, toggleNavbar } = useHeaderNavbarStore();

    const pages = [
        { page: 'home', label: 'Home' },
        { page: 'matches', label: 'Matches' },
        { page: 'logs', label: 'Logs' }
    ];

    return (
        <AppShell.Header>
            <Container px="md" h={'100%'}>
                <Flex justify={'space-between'} align="center" h="100%">
                    <Burger opened={navbarOpen} onClick={toggleNavbar} hiddenFrom="sm" size="md" />
                    {
                        showHeader && (
                            <Flex justify="center" align="center" style={{ flexGrow: 1 }}>
                                <Group gap="xl">
                                    {pages.map(({ page, label }) => (
                                        <Button key={page} variant="subtle" onClick={() => navigate(`/${page}`)}>
                                            <Text>{label}</Text>
                                        </Button>
                                    ))}
                                </Group>
                            </Flex>
                        )
                    }
                    {
                        showHeader && (
                            <Group visibleFrom="sm" gap='lg'>
                                <Divider orientation={'vertical'} />
                                <IoSettingsOutline size={28} onClick={() => navigate('/settings')} />
                                <DarkModeButton />
                                <Button variant="outline" onClick={() => navigate('/join')}>Sign In</Button>
                                <Button variant="light">Join</Button>
                            </Group>
                        )
                    }
                </Flex>
            </Container>
        </AppShell.Header>
    );
}
