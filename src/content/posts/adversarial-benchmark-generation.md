---
title: Adversarial Benchmark Generation
---

_Jeffrey Tao_, Yimeng Zeng, Natalie Maus, Haydn Jones, Jacob R. Gardner, Ryan Marcus<br /> AIDB @
VLDB 2026<br />_Honorable Mention_

[[PDF](/publications/aidb26-adversarial-queries.pdf)]
[[Code](https://github.com/Speculative/adversarial-queries)]

# Abstract

Benchmarks determine where the database community will direct its optimization efforts and directly
shape the behaviors of learned systems. However, existing benchmarks are constructed to be realistic
or difficult, with no guarantee that systems can actually improve on their queries. We argue that
benchmarks should instead target headroom, the gap between how well a query currently executes and
how well it could execute. By identifying queries which have optimization potential, headroom
provides a clear signal of where a system is underperforming. To this end, we introduce GREMLIN, a
system for generating adversarial benchmarks of queries with high headroom. To do so, we apply
Bayesian optimization to search the joint space of queries and witness plans, seeking query-plan
pairs that maximize headroom, where each witness plan provides concrete evidence of how a system
could have selected a better join order. We show that GRELIMIN-generated benchmarks have multiple
orders of magnitude more headroom, with the median query having 34.2&times; headroom to JOB +
JOB-Comple's 1.4&times;, and summed headroom at the benchmark level of over 8 hours compared to 12.4
seconds.

<img src="/posts/nedb_2026_figure.svg" />
