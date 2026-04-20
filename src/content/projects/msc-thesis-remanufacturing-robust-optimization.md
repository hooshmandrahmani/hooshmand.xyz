---
title: "MSc Thesis — Multi-objective Robust Optimization for Remanufacturing Systems"
description: "Multi-period, multi-objective robust MILP for hybrid manufacturing and remanufacturing planning under simultaneous uncertainty in return quality, processing times, and demand — solved with NSGA-II and validated on a real industrial case."
pubDate: "2021-09-01"
category: "Uncertainty Modelling"
institution: "Iran University of Science and Technology"
supervisor: "Dr. Ahmad Makui"
tags: ["Robust Optimization", "Multi-objective", "Remanufacturing", "NSGA-II", "MILP"]
---

## Overview

Growing population, shorter product life cycles, and tightening environmental regulation have made **remanufacturing** — returning used products to original quality standards rather than discarding or merely recycling them — economically and ecologically essential. Unlike simple recycling (material recovery), remanufacturing recovers value-added functionality, significantly reducing energy consumption and production costs.

This thesis, completed at Iran University of Science and Technology under Dr. Ahmad Makui, develops a mathematical model for planning hybrid manufacturing–remanufacturing operations under the three sources of uncertainty that make the problem genuinely hard.

## Problem and Uncertainty

A hybrid system produces both new products and remanufactured ones using the same facilities, competing for the same capacity. Three uncertainty dimensions are modelled simultaneously:

1. **Return quality** — the condition of returned products is unknown until inspection; poor-quality returns require more reprocessing time and may be non-remanufacturable.
2. **Processing and reprocessing times** — variability in disassembly, refurbishment, and assembly operations.
3. **Demand** — market demand for both new and remanufactured products fluctuates across the planning horizon.

Ignoring any one of these dimensions produces plans that frequently become infeasible or sub-optimal in practice.

## Model

The thesis formulates a **multi-period, multi-objective robust MILP** with a budgeted uncertainty set. The two competing objectives are:

- **Minimize total cost** (production, reprocessing, inventory, holding, and disposal costs)
- **Minimize environmental impact** (emissions from manufacturing and reprocessing operations)

Because the problem is NP-hard and exact solvers (GAMS/Gurobi, ε-constraint method) cannot solve large instances in reasonable time, the thesis develops and benchmarks a **metaheuristic solution**:

## Algorithms

Sixteen benchmark test instances of varying size (small to large) were solved using three methods and compared on three multi-objective performance metrics:

| Method | Description |
|---|---|
| **GAMS / Gurobi (ε-constraint)** | Exact solver; baseline for small/medium instances |
| **NSGA-II** | Non-dominated Sorting Genetic Algorithm II |
| **MOPSO** | Multi-Objective Particle Swarm Optimization |

Performance was evaluated using:
- **NPS** (Number of Pareto Solutions): richness of the Pareto frontier
- **CM** (Coverage Metric): dominance of one algorithm's frontier over another
- **DS** (Diversity Spread): spread of solutions across the objective space

**NSGA-II outperformed MOPSO across all three metrics** for small and medium instances, while offering acceptable performance at larger scales. The ε-constraint method provided the exact Pareto frontier for small instances, confirming algorithm quality.

## Case Study

The validated model was applied to **Saze Puyesh**, a real Iranian manufacturing company, providing production and remanufacturing plans across multiple periods. Sensitivity analysis on key model parameters generated managerial recommendations for supply chain planners under changing uncertainty levels.

## Connection to Working Papers

This thesis is the foundation for two working papers referenced in my CV: one on hybrid manufacturing–remanufacturing planning (extending the model to a green closed-loop supply chain design) and one on Tire Closed-Loop Supply Chain network design under demand and return uncertainty.
