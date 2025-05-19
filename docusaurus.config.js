// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  // TODO: MENTEE - Update your name here
  title: 'Sandra Edathadan',
  // TODO: MENTEE - Update your tagline/slogan here
  tagline: 'Where Anne hath a will, Anne hath a way',
  // TODO: MENTEE - Update favicon path or add your own image
  favicon: 'img/sandra-profile.png',
  trailingSlash: true,

  // Set the production url of your site here
  // TODO: MENTEE - Update with your GitHub username
  url: 'https://sandra-edathadan.github.io',
  // TODO: MENTEE - Update with your repository name
  baseUrl: '/portfolio/',

  // GitHub pages deployment config
  // TODO: MENTEE - Update with your GitHub username
  organizationName: 'sandra-edathadan',
  // TODO: MENTEE - Update with your repository name
  projectName: 'ACMW-Jump-Project',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          // TODO: MENTEE - Update with your GitHub username and repository name
          editUrl:
            'https://github.com/sandra-edathadan/ACMW-Jump-Project/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // TODO: MENTEE - Update with your GitHub username and repository name
          editUrl:
            'https://github.com/sandra-edathadan/ACMW-Jump-Project/tree/main/',
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
      // TODO: MENTEE - Create your own social card image if desired
      image: 'img/acmw-social-card.jpg',
      navbar: {
        // TODO: MENTEE - Update with your name in the navbar
        title: 'Sandra Edathadan',
        logo: {
          // TODO: MENTEE - Update alt text with your name
          alt: 'Sandra Edathadan',
          // TODO: MENTEE - Update with your profile picture
          src: '/img/sandra-profile.png',
        },
        items: [
          {
            to: '/docs',
            position: 'left',
            label: 'Documentation',
          },
          {
            // TODO: MENTEE - Update with your GitHub profile URL
            href: 'https://github.com/sandra-edathadan',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // TODO: MENTEE - Update with your own copyright message
        copyright: `© ${new Date().getFullYear()} Sandra Edathadan. Built with Docusaurus and my tears.`,
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Blog',
                to: '/docs/blog-posts',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                // TODO: MENTEE - Update with your GitHub profile URL
                href: 'https://github.com/sandra-edathadan',
                label: 'GitHub',
              },
            ],
          },
        ],
      },
      // Updated colorMode settings to ensure light mode is default
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false, // Changed to false so it doesn't override with user preferences
      },
      // Fixed prism settings
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;