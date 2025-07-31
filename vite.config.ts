import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { repoName } from './src/config';
const basenameProd = `/${repoName}/`;

// https://vite.dev/config/

export default defineConfig(({ command }) => {
    const isProd = command === 'build';

    return {
        base: isProd ? basenameProd : '',
        plugins: [
            react(),
            tailwindcss(),
            VitePWA({
                registerType: 'autoUpdate',
                workbox: {
                    globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
                },
                includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
                manifest: {
                    name: 'Yonstack React PWA',
                    short_name: 'yonstack-pwa',
                    description: 'Starter kit for modern web applications',
                    theme_color: '#ffffff',
                    display: 'fullscreen',
                    start_url: isProd ? `${basenameProd}` : '/',
                    icons: [
                        {
                            src: `${basenameProd}pwa-192x192.png`,
                            sizes: '192x192',
                            type: 'image/png',
                        },
                        {
                            src: `${basenameProd}pwa-512x512.png`,
                            sizes: '512x512',
                            type: 'image/png',
                        },
                    ],
                },
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        define: {
            global: {
                basename: isProd ? basenameProd : '',
            },
        },
    };
});
