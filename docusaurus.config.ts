import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AI Agents for Deep Research | Navan.ai',
  tagline: '',
  favicon: "img/navan_favicon_NO_Code_AI.svg",

  // Set the production url of your site here
  url: 'https://navan.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.


  trailingSlash: true,
  onBrokenLinks: "ignore",

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
        /*
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/saaragh/navan.ai/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      //title: 'My Site',
      logo: {
        alt: 'Navan AI Logo',
        src: 'img/logo/navan_main_logo_NO_code_AI.svg',
      },
      items: [
        {
          to: "/",
          label: "Home",
          position: "left",
          exact: true,
        },
        {
          to: "/contact-us",
          label: "Contact us",
          position: "left",
        },
        {to: '/blog', label: 'Blog', position: 'right'},
        
      ],
    },
    footer: {
      style: 'light',
      logo: {
        src: "img/logo/navan_footer_logo_NO_code_AI.svg",
        alt: "navan.ai Logo",
        width: "100px",
        height: "100px",
      },
      links: [
        {
          title: "Resources",
          items: [
            
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Glossary",
              to: "/category/glossary",
            },
            
          ],
        },
        {
          title: " ",
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              to: "/privacy-policy",
            },
            {
              label: "Terms of Service",
              to: "/terms-of-use",
            },
          ],
        },
        {
          title: " ",
        },
        {
          title: "Community",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/company/navan-ai/",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/getnavanai",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/navan_ai",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/@navan-ai",
            },
          ],
        },
        {
          title: " ",
        },
        {
          title: "Company Headquarters",
          items: [
            {
              html: `Singapore: 6 Eu Tong Sen Street #09-10 · The Central · Singapore 059817.`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Navan AI Pte Ltd.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
