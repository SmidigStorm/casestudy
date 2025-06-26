import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SIKT Organizational Transformation',
  tagline: 'A Case Study in Creating Agile Organizations',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://smidigstorm.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/sikt-case-study/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'smidigstorm', // Usually your GitHub org/user name.
  projectName: 'sikt-case-study', // Usually your repo name.

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
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/smidigstorm/sikt-case-study/tree/main/',
        },
        blog: false,
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
      title: 'SIKT Case Study',
      logo: {
        alt: 'SIKT Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'caseStudySidebar',
          position: 'left',
          label: 'Case Study',
        },
        {
          href: 'https://creatingagileorganizations.com/',
          label: 'CAO Framework',
          position: 'right',
        },
        {
          href: 'https://github.com/smidigstorm/sikt-case-study',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Case Study',
          items: [
            {
              label: 'Overview',
              to: '/',
            },
            {
              label: 'Timeline',
              to: '/timeline',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Creating Agile Organizations',
              href: 'https://creatingagileorganizations.com/',
            },
            {
              label: 'SIKT',
              href: 'https://sikt.no/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/smidigstorm/sikt-case-study',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SIKT Case Study. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
