import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  site: 'https://irenare404.github.io',
  base: '/BlockPilotDocs',

  integrations: [
    starlight({
      title: 'BlockPilot Docs',
      description: 'Documentation for BlockPilot, a Minecraft Java AI companion bot platform.',

      logo: {
        src: './src/assets/logo.svg',
      },

      customCss: ['./src/styles/custom.css'],

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Irenare404/blockpilot',
        },
      ],
    }),
  ],
})