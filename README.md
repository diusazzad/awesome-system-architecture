---
layout: home

hero:
  name: "Enterprise Architecture"
  text: "Masterclass"
  tagline: "A futuristic project on real-world enterprise systems and hyper-scaling"
  actions:
    - theme: brand
      text: "Architecture Diagram"
      link: "/architecture/01_enterprise_topology"
    - theme: alt
      text: "Read ADRs"
      link: "/adrs/0001_postgresql_for_quantum_state_tracking"
    - theme: alt
      text: "How to Contribute?"
      link: "/CONTRIBUTING"

features:
  - title: "Dynamic Topology"
    details: "Dynamic and animated diagrams of the 'gravitational telemetry data' flow from edge devices to compute nodes."
    link: "/architecture/01_enterprise_topology"
  - title: "Scaling and Security"
    details: "A blueprint for handling millions of data packets using HPA and a Zero-Trust Security (mTLS, OAuth2) model."
    link: "/architecture/02_scaling_and_threat_modeling"
  - title: "Logical Tech Stack"
    details: "Clear justifications for why each technology was used, alongside a comprehensive selection matrix."
    link: "/tech_stack/selection_matrix"
---

<style>
/* Custom Laravel-like styling overrides */
:root {
  --vp-c-brand-1: #FF2D20;
  --vp-c-brand-2: #E0241A;
}
</style>

# Enterprise Architecture Masterclass

This repository is not a traditional codebase. It is designed to teach real-world enterprise architecture, system scaling, and technical decision-making processes.

Here, you will learn how to design a futuristic, high-performance system.

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Giscus integration script can be added here or in layout
})
</script>