/**
 * Sidebar Configuration File
 * 
 * This file defines the sidebar structure for your documentation site.
 * 
 * Creating a sidebar enables you to:
 * - Create an ordered group of docs
 * - Render a sidebar for each doc of that group
 * - Provide next/previous navigation between docs
 * - Automatically show a table of contents for each doc
 * - Display the current doc's position within the sidebar
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Main sidebar for documentation
  tutorialSidebar: [
    // Root level pages
    'intro',                  // Main landing page for docs
    
    // Documentation section
    //{
    //  type: 'category',
    //  label: 'Documentation',
    //  link: {
    //  type: 'doc',
    //    id: 'documentation/index',
    //  },
    //  items: [
    //    'documentation/etl-process',
        // Add other documentation files here
    //  ],
    //},
    
    // Blog posts section
    {
      type: 'category',
      label: 'Blog Posts',
      link: {
        type: 'doc',
        id: 'blog-posts/index',
      },
      items: [
        'blog-posts/github',
        'blog-posts/markdown',
        'blog-posts/fastapi',
        'blog-posts/neural-networks',
        'blog-posts/docusaurus',
        // Add other blog posts here
      ],
    },
    
    // TODO: Mentees can add more categories or documents as needed
  ],
};

module.exports = sidebars;