---
title: "Large-Scale Optimization of Healthcare Logistics via Benders Decomposition"
description: "Implemented a Benders decomposition algorithm in GAMS to efficiently solve a complex optimization model for blood supply chain distribution."
pubDate: "2019-12-01"
category: "Optimization"
institution: "Iran University of Science and Technology"
supervisor: "Dr. Hadi Sahebi"
tags: ["Benders Decomposition", "GAMS", "Healthcare Logistics"]
---

Blood supply chain distribution mixes perishability constraints with demand stochasticity
and a network that spans donation centres, processing labs, and hospitals. A monolithic
MILP on realistic instances becomes intractable quickly.

I implemented a **Benders decomposition** scheme in GAMS — master problem on
strategic/structural decisions, subproblem on operational flow — with cut-management to
reach near-optimal solutions at a fraction of the solve time.
