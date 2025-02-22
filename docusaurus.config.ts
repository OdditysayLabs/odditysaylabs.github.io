import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'OdditysayLabs',
  // tagline: '<to be written>',
  favicon: 'img/favicon.ico',
  url: 'https://odditysayabs.github.io',
  baseUrl: '/',
  organizationName: 'OdditysayLabs',
  projectName: 'odditysaylabs.github.io',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Odditysay Labs',
      logo: {
        alt: 'Odditysay Labs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'who_sidebar',
          position: 'left',
          label: 'Who we are',
        },
        {
          type: 'docSidebar',
          sidebarId: 'what_sidebar',
          position: 'left',
          label: 'What we do',
        },
        {
          href: 'https://github.com/OdditysayLabs/OdditysayLabs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Substack',
              href: 'https://substack.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/OdditysayLabs/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Odditysay Labs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
