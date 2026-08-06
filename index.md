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

## Case Study: The Gravitational Data Pipeline

> Imagine an edge device—perhaps a deep-space satellite or an advanced terrestrial sensor—transmitting critical "gravitational telemetry data" every single millisecond. There are millions of such devices actively sending data simultaneously. 
> 
> How does a system handle this immense, relentless flood of data without crashing, slowing down, or losing a single packet?

This is where true **Enterprise Architecture** comes into play. As a System Architect, you must design a flow that is resilient, highly scalable, and completely secure.

### The Journey of a Data Packet

1. **The Arrival:** The device fires the data payload. Before it even reaches our internal network, it hits a containerized **API Gateway (NGINX/Envoy)**. This gateway verifies the device's identity using a Zero-Trust mTLS protocol.
2. **The Buffer:** The gateway doesn't try to process the data immediately. Instead, it acts as a load balancer and immediately offloads the payload to **Apache Kafka**. Kafka acts as an indestructible buffer, placing the event into a partitioned topic (`telemetry_events`).
3. **The Brain:** Waiting on the other side of Kafka are ultra-fast **Rust & Go Microservices**. They rapidly consume the streams. Because they are designed for extreme concurrency with zero garbage-collection pauses, they can process hundreds of thousands of events instantly.
4. **The Memory:** During processing, the microservices might need to check the previous state of the device. They instantly query an in-memory **Redis Cache** for sub-millisecond responses.
5. **The Vault:** Finally, the processed, structured data is persisted into a highly durable, ACID-compliant **PostgreSQL** database, ensuring the quantum state is tracked flawlessly.

---

## How It Was Built

Below is the architectural blueprint of this exact data pipeline. This illustrates the flawless execution of our case study.

```mermaid
graph TD
    %% Styling
    classDef edge fill:#f9f,stroke:#333,stroke-width:2px;
    classDef gateway fill:#bbf,stroke:#333,stroke-width:2px;
    classDef broker fill:#fbb,stroke:#333,stroke-width:2px;
    classDef cache fill:#bfb,stroke:#333,stroke-width:2px;
    classDef compute fill:#fbf,stroke:#333,stroke-width:2px;
    classDef db fill:#ffb,stroke:#333,stroke-width:2px;

    %% Components
    E[Edge Devices<br/>IoT / Mobile]:::edge --> |Telemetry Data Streams| G[API Gateway<br/>Containerized / Nginx]:::gateway
    
    subgraph Data Ingestion Layer
        G --> |Load Balanced| K1[Kafka Broker 1]:::broker
        G --> |Load Balanced| K2[Kafka Broker 2]:::broker
        K1 & K2 --> |Topic: telemetry_events| K_Cluster((Kafka Cluster)):::broker
    end

    subgraph Processing & Caching
        K_Cluster --> |Consumes Streams| R[Rust/Go Microservices]:::compute
        R --> |Read/Write Hot Data| Redis[(Redis Cache<br/>In-Memory)]:::cache
    end

    subgraph Storage & Quantum State Tracking
        R --> |Persists State| PG[(PostgreSQL<br/>Relational DB)]:::db
    end
```

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Giscus integration script can be added here or in layout
})
</script>