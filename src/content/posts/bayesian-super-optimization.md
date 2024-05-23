---
title: Bayesian Query Super-Optimization
---

[[Poster PDF]](/downloads/nedb_2024_poster.pdf)

<img src="/posts/nedb_2024_figure.svg" />

# Abstract

Analytics database workloads often contain queries that are executed repeatedly. Despite being known
ahead of time, these queries are usually optimized online in the same fashion as ad-hoc queries. For
such queries, techniques ought to exist to find better plans than can be found using traditional
heuristic query planners that use cost and cardinality estimates, even if such techniques require
longer optimization time, as the upfront investment in optimization time will pay off as the query
is executed more times. We present a novel strategy for iteratively searching the space of possible
query plans by performing Bayesian optimization over a latent space that encodes all possible query
plans for a given schema. Encoded query plans select both join orders and join operators. As
optimization proceeds, proposed plans are executed against the database to record their real
execution times, and the Bayesian surrogate model makes better predictions of the execution times of
latent-space plans. We introduce a novel timeout-based strategy in order to minimize the impact of
bad plans on the running time of the optimization process while still gaining useful information
from timed-out plans by recording censored observations. We evaluate our technique on the Join Order
Benchmark and find that it successfully finds plans that are strictly better than any plans
achievable by providing optimal hints to the Postgres optimizer.
