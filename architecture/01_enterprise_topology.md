# Enterprise Topology

> [!NOTE]
> A static Mermaid.js diagram is provided below. For those who want to see dynamic animations, please check the [Animated Architecture](#animated-architecture) section.

This diagram illustrates how 'gravitational telemetry data' is ingested from an edge device, passes through a containerized gateway, a message broker, and an in-memory cache layer before reaching an ultra-fast compute node.

## Architecture Diagram

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
    
    %% Details
    click PG "adrs/0001_postgresql_for_quantum_state_tracking.md" "Why PostgreSQL?"
    click R "adrs/0002_rust_and_go_for_real_time_data_streams.md" "Why Rust/Go?"
```

### Diagram Explanation

1. **Edge Devices**: Generates thousands of telemetry data points (e.g., gravitational sensor data) per second.
2. **API Gateway**: A containerized layer that receives the initial data and handles load balancing.
3. **Kafka Broker**: Chosen for its ability to handle massive data volumes. It routes data to processing services in real-time without any packet loss.
4. **Rust/Go Microservices**: These are ultra-fast compute nodes that consume data streams from Kafka.
5. **Redis**: An in-memory cache utilized for ultra-fast memory access needs during data processing (e.g., sessions or transient states).
6. **PostgreSQL**: Used as the primary database for persistent storage and executing complex relational queries (like quantum state tracking).

## Animated Architecture

> [!TIP]
> **Placeholder:** Our futuristic animated diagram (e.g., an Isometric .gif created via Figma/After Effects) will be added here.

![Animated Architecture Placeholder](https://via.placeholder.com/800x400.gif?text=Animated+Architecture+Diagram+Here)

*This image will visually demonstrate the live flow of data from one node to another using animations.*
