import React from 'react';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import {MantineProvider} from '@mantine/core';
import {Router} from "./router";


function App() {
    return (
        <MantineProvider defaultColorScheme={'dark'}>
            <Router/>
        </MantineProvider>
    );
}

export default App;
