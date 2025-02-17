// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import {themes as prismThemes} from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '波特律动',
  tagline: '知而不行, 是为不知; 行而不知, 可以致知.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://docs.baud-dance.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BaudDance', // Usually your GitHub org/user name.
  projectName: '波特律动文档', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BaudDance/docs/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BaudDance/docs/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '波特律动文档站',
        logo: {
          alt: '波特律动',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'stm32Sidebar',
            position: 'left',
            label: 'STM32教程',
          },
          // { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '开源工具',
            items: [
              {
                label: '串口助手',
                to: 'https://serial.baud-dance.com/',
              },
              {
                label: '取模助手',
                to: 'https://led.baud-dance.com/',
              },
            ],
          },
          {
            title: '社交媒体',
            items: [
              {
                label: 'B站(keysking)',
                href: 'https://space.bilibili.com/6100925',
              },
              {
                label: 'B站(博哥在学习)',
                href: 'https://space.bilibili.com/321656991',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/BaudDance',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 波特律动 提供`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config
