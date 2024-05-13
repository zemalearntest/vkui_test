import type { Options as DocsOptions } from '@docusaurus/plugin-content-docs';
import type { Options as PageOptions } from '@docusaurus/plugin-content-pages';
import type { Options as IdealImageOptions } from '@docusaurus/plugin-ideal-image';
import type { Options as ThemeClassicOptions } from '@docusaurus/theme-classic';
import type { UserThemeConfig as ClassicThemeConfig } from '@docusaurus/theme-common';
import type { ThemeConfig as BaseThemeConfig, Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

type ThemeConfig = BaseThemeConfig & ClassicThemeConfig;

const url = process.env.DOCUSAURUS_URL ?? 'https://vkcom.github.io/';
const baseUrl = process.env.DOCUSAURUS_BASE_URL ?? '/';

const config: Config = {
  title: 'VKUI Documentation',
  tagline: 'VKUI',
  favicon: 'img/favicon.ico',

  url,
  baseUrl,

  noIndex: true, // no search engines allowed (temporally)

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        sidebarPath: './sidebars.ts',
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        // editUrl: '',
      } satisfies DocsOptions,
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        path: 'src/pages',
        routeBasePath: '',
        include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**',
        ],
        mdxPageComponent: '@theme/MDXPage',
        rehypePlugins: [],
        beforeDefaultRemarkPlugins: [],
        beforeDefaultRehypePlugins: [],
      } satisfies PageOptions,
    ],
    process.env.NODE_ENV === 'production' && '@docusaurus/plugin-debug',
    [
      '@docusaurus/theme-classic',
      {
        customCss: './src/css/custom.css',
      } satisfies ThemeClassicOptions,
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      } satisfies IdealImageOptions,
    ],
  ].filter(Boolean),

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    announcementBar: {
      id: 'announcementBar-0', // Increment on change
      content: `<b style="background-color: black;">Under Construction!</b>`,
    },
    navbar: {
      logo: {
        alt: 'VK logo + ui',
        src: 'img/vkui-logo-light.svg',
        srcDark: 'img/vkui-logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          'href': 'https://github.com/VKCOM/VKUI',
          'position': 'right',
          'className': 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} VKUI. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies ThemeConfig,
};

export default config;
