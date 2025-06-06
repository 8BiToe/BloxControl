import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'index',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/index',
        'getting-started/how-to-link-your-roblox-account',
        'getting-started/how-to-register-your-experience',
      ],
    },
    {
      type: 'category',
      label: 'Functions Examples',
      items: [
        'functions/index',
        'functions/authentication',
        'functions/promocodes',
        'functions/remote-config',
        'functions/live-events',
      ],
    },
  ],
};

export default sidebars;
