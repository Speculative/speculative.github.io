---
title: Learned Offline Query Planning via Bayesian Optimization
---

_Jeffrey Tao_, Natalie Maus, Haydn Jones, Yimeng Zeng, Jacob R. Gardner, Ryan Marcus<br />SIGMOD
2025

[[PDF](/publications/sigmod25-bayesqo.pdf)]

# Abstract

Analytics database workloads often contain queries that are executed repeatedly. Existing
optimization techniques generally prioritize keeping optimization cost low, normally well below the
time it takes to execute a single instance of a query. If a given query is going to be executed
thousands of times, could it be worth investing significantly more optimization time? In contrast to
traditional online query optimizers, we propose an offline query optimizer that searches a wide
variety of plans and incorporates query execution as a primitive. Our offline query optimizer
combines variational auto-encoders with Bayesian optimization to find optimized plans for a given
query. We compare our technique to the optimal plans possible with PostgreSQL and recent RL-based
systems over several datasets, and show that our technique finds faster query plans.

<img src="/posts/bayesqo_figure.svg" />

The BayesQO System. ① The user submits a query to optimize offline. ②–④ Candidate plans are used to
seed BO with starting points for exploration. ⑤ A vector in the query plan latent space is selected
with a timeout. ⑥ The plan vector is decoded to a query and ⑦ executed. ⑧ The measured (vector,
latency) pair is used to update the BO surrogate model. ⑨ After the budget is consumed, the best
seen plan is cached.
