import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        work: resolve(import.meta.dirname, 'work.html'),
        workMemberHub: resolve(import.meta.dirname, 'work/member-operations-hub.html'),
        workQueueAssistant: resolve(import.meta.dirname, 'work/queue-match-assistant.html'),
        workSupporterCommunity: resolve(import.meta.dirname, 'work/supporter-community.html'),
        workIncidentWorkflow: resolve(import.meta.dirname, 'work/incident-workflow.html'),
        services: resolve(import.meta.dirname, 'services.html'),
        process: resolve(import.meta.dirname, 'process.html'),
        pricing: resolve(import.meta.dirname, 'pricing.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        contact: resolve(import.meta.dirname, 'contact.html'),
        notFound: resolve(import.meta.dirname, '404.html'),
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: false,
  },
});
