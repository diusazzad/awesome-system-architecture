# Architecture Decision Record (ADR)

## Title
**ADR-0001: Selecting PostgreSQL for Quantum State Tracking**

## Context
Our system receives 'gravitational telemetry data' from edge devices. The state of this data changes constantly (Quantum State). We need a storage system that can maintain 100% data integrity (ACID properties) and execute complex relational queries incredibly fast.

## Decision
We decided to bypass NoSQL databases (like MongoDB) and selected **PostgreSQL** as our primary relational database.

## Justification
1. **ACID Compliance:** Even a minor error in quantum state data can corrupt the entire system's calculations. PostgreSQL's strong ACID compliance ensures data consistency.
2. **JSONB Support:** Even though it's a relational database, its JSONB feature allows us to index and query unstructured telemetry data very quickly. This gives us the benefits of NoSQL alongside relational stability.
3. **Complex Joins and Analytics:** Complex joins in MongoDB are difficult and slow. Telemetry analytics require merging data from multiple tables simultaneously, an area where PostgreSQL is unparalleled.

## Consequences
**Positive Aspects:**
- No concerns regarding data consistency and integrity.
- Complex queries can be executed effortlessly.

**Negative Aspects / Challenges:**
- Horizontal scaling is not as trivial as it is with NoSQL. We will need to implement complex architectures like database sharding or Read-Replicas.
