# Architecture Decision Record (ADR)

## Title
**ADR-0002: Selecting Rust and Go for Real-Time Data Streams**

## Context
To process hundreds of thousands of telemetry data packets per second, we need a compute node that is ultra-fast and possesses impeccable memory management.

## Decision
We decided to bypass popular languages like Node.js or Python and prioritized **Rust** and **Go (Golang)** for building the core microservices.

## Justification
1. **Latency and Performance:** Node.js's single-threaded nature and Python's Global Interpreter Lock (GIL) are major bottlenecks in real-time, high-volume data processing. In contrast, Rust and Go excel in multi-threading. Their CPU utilization is highly efficient.
2. **Garbage Collection:** Rust doesn't have a garbage collector; it ensures memory safety through an 'ownership' model. This means there are no pauses during data processing. Go's garbage collector is also extremely fast and highly optimized for concurrent workloads.
3. **Concurrency:** By using Go's Goroutines, we can handle thousands of data streams simultaneously, which is far more scalable than Node.js's asynchronous model.

## Consequences
**Positive Aspects:**
- System performance will be near C/C++ levels.
- Cloud bills will be significantly reduced as they consume very little memory and CPU.

**Negative Aspects / Challenges:**
- Rust has a steep learning curve and higher development times.
- Developer sourcing might be somewhat more challenging compared to Python or Node.js.
