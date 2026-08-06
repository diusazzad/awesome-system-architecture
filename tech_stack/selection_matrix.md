# Tech Stack Selection Matrix

A comparative analysis of the technologies used for this futuristic project is provided below. This matrix outlines exactly why each specific technology was chosen.

| Category | Selected Technology | Role / Purpose | Justification |
| :--- | :--- | :--- | :--- |
| **API Gateway** | **NGINX / Envoy** | Initial entry point and load balancing for data arriving from edge devices. | Excellent support for mTLS, ensuring high performance and a Zero-Trust security foundation. |
| **Message Broker** | **Apache Kafka** | Receives real-time data streams and forwards them to processing nodes without packet loss. | Allows unlimited scaling through partitioning. Ensures robust data persistency. |
| **Compute Nodes** | **Rust & Go** | Consumes data from Kafka, processes it rapidly, and sends it to the database. | Offers memory safety, multi-threading capabilities, and ultra-low latency (See ADR-0002). |
| **In-Memory Cache** | **Redis** | Extremely fast memory access for session management and storing transient data. | Capable of reading/writing data with sub-millisecond latency. |
| **Relational Database**| **PostgreSQL** | Quantum state tracking and complex relational queries. | Strong ACID compliance and excellent JSONB support for unstructured data (See ADR-0001). |
| **Container Orchestration**| **Kubernetes (K8s)** | Manages the entire microservice ecosystem and handles auto-scaling. | Can effortlessly manage traffic spikes via Horizontal Pod Autoscaling (HPA). |
| **Security Layer** | **OAuth2 & mTLS** | Device authentication and network traffic encryption. | Industry standards for implementing a Zero-Trust architecture. |

## Matrix Summary
Each of these technologies complements the others. For example, Kafka prevents data loss, Rust processes that data quickly, Redis increases speed through caching, and PostgreSQL maintains data integrity.
