import { defineConfig } from 'orval';

export default defineConfig({
    uiClients: {
        output: {
            mode: 'tags-split',
            target: '../clients/openapi.ts',
            client: 'react-query',
            override: {
                mutator: {
                    path: '../client/client-instance.ts',
                    name: 'clientInstance',
                }
            }
        },
        input: {
            target: 'resources/openapi.json'
        }
    }
});
