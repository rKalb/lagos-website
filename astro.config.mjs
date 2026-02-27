// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://trylagos.app',
  output: 'static',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: 'Lagos',
      disable404Route: true,
      favicon: '/favicon.svg',
      customCss: ['./src/styles/global.css', './src/styles/starlight.css'],
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://trylagos.app/og-image.png' },
        },
      ],
      social: [
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/PLACEHOLDER' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/rKalb' },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started' },
          ],
        },
        {
          label: 'Transcription Engines',
          items: [
            { label: 'Apple Speech (Level 1)', slug: 'engines/apple-speech' },
            { label: 'WhisperKit — Local AI (Level 2)', slug: 'engines/whisperkit' },
            { label: 'Lagos Cloud (Level 3)', slug: 'engines/lagos-cloud' },
            { label: 'Bring Your Own Key (Level 4)', slug: 'engines/byok' },
          ],
        },
        { label: 'Keyboard Shortcuts', slug: 'shortcuts' },
        { label: 'Transcription History', slug: 'history' },
        { label: 'FAQ', slug: 'faq' },
      ],
      components: {
        SiteTitle: './src/components/docs/DocsSiteTitle.astro',
      },
    }),
  ],
});
