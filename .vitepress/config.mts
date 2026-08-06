import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Enterprise Architecture",
  description: "A Futuristic Architecture Masterclass",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Architecture', link: '/architecture/01_enterprise_topology' },
      { text: 'ADRs', link: '/adrs/0001_postgresql_for_quantum_state_tracking' },
      { text: 'Tech Stack', link: '/tech_stack/selection_matrix' },
      { text: 'Contributing', link: '/CONTRIBUTING' }
    ],

    sidebar: [
      {
        text: 'Architecture',
        items: [
          { text: 'Enterprise Topology', link: '/architecture/01_enterprise_topology' },
          { text: 'Scaling & Threat Modeling', link: '/architecture/02_scaling_and_threat_modeling' }
        ]
      },
      {
        text: 'Decision Records (ADRs)',
        items: [
          { text: 'ADR Template', link: '/adrs/0000_template' },
          { text: 'Why PostgreSQL?', link: '/adrs/0001_postgresql_for_quantum_state_tracking' },
          { text: 'Why Rust & Go?', link: '/adrs/0002_rust_and_go_for_real_time_data_streams' }
        ]
      },
      {
        text: 'Tech Stack',
        items: [
          { text: 'Selection Matrix', link: '/tech_stack/selection_matrix' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/diusazzad/awesome-system-architecture' }
    ],

    // Search and Footer
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Enterprise Architecture Masterclass'
    }
  },
  // Ensure we can use Mermaid.js if we add a plugin later or we just output the code blocks
  markdown: {
    theme: 'material-theme-palenight',
  }
})
