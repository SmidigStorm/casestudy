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
  caseStudySidebar: [
    'summary',
    'context',
    'mapping',
    'problems-interviews',
    {
      type: 'category',
      label: 'Theoretical Analysis',
      items: [
        'theory/systems-thinking',
        'theory/traditional-forms',
        'theory/strategy-structure-alignment',
        'theory/authority-responsibility',
        'theory/interface-configuration',
      ],
    },
    'organizational-design',
    'results',
    {
      type: 'category',
      label: 'Appendices',
      items: [
        'appendices/glossary',
        'appendices/references',
      ],
    },
  ],
};

export default sidebars;
