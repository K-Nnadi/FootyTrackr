import React from 'react';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import {MantineProvider} from '@mantine/core';
import {Router} from "./router";


function App() {
    return (
        <MantineProvider defaultColorScheme={'light'}>
            <Router/>
        </MantineProvider>
    );
}

export default App;
