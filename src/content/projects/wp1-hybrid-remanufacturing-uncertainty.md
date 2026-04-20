---
title: "Multi-objective Robust Optimization for Hybrid Manufacturing and Remanufacturing Under Uncertainty"
description: "Working paper extending the MSc thesis into a multi-period, multi-objective MILP for jointly planning new production and remanufacturing operations under simultaneous uncertainty in return quality, processing times, and demand."
pubDate: "2022-01-01"
category: "Supply Chain"
institution: "Iran University of Science and Technology"
supervisor: "Dr. Ahmad Makui"
tags: ["Robust Optimization", "Multi-objective", "Remanufacturing", "MILP", "NSGA-II"]
badge: "Working Paper"
---

## Overview

Hybrid manufacturing–remanufacturing systems produce both new products and remanufactured (restored) products using shared facilities and capacity. This creates a resource competition that is difficult to plan even under deterministic assumptions — and dramatically harder when operational uncertainty is accounted for.

This working paper, co-authored with Dr. Ahmad Makui at Iran University of Science and Technology, extends the MSc thesis model into a publishable formulation that addresses all three major uncertainty sources simultaneously.

## The Planning Problem

A firm must decide, across multiple periods:
- How many new products to manufacture at each facility
- Which returned products to remanufacture and in what quantities
- How to allocate shared production capacity between new and remanufactured output
- What inventory levels to maintain for both product streams

These decisions must be made **before** uncertainty is resolved — before the quality of returned goods is known, before actual processing times are observed, and before demand materializes.

## Sources of Uncertainty

| Source | Description |
|---|---|
| **Return quality** | Returned products vary in condition; poor-quality units require more reprocessing time or may be scrapped outright |
| **Processing times** | Disassembly, refurbishment, and reassembly operations have variable durations |
| **Demand** | Market demand for both new and remanufactured products fluctuates across the planning horizon |

Standard deterministic models ignore these uncertainties and produce plans that are frequently infeasible or highly suboptimal when realized conditions differ from point estimates.

## Model

The paper formulates a **multi-period, multi-objective robust MILP** using a budgeted uncertainty set (Bertsimas & Sim framework). The budget parameter Γ controls conservatism — how many uncertain parameters are assumed to simultaneously take their worst-case values.

**Objectives:**
- Minimize total cost (production, reprocessing, inventory holding, disposal)
- Minimize total environmental impact (emissions from manufacturing and remanufacturing operations)

**Solution approach:** Because the NP-hard nature of the problem prevents exact solvers from handling large instances, the paper develops and benchmarks **NSGA-II** (Non-dominated Sorting Genetic Algorithm II) against the ε-constraint exact method and MOPSO. NSGA-II achieves superior Pareto frontier quality — measured by NPS, Coverage Metric, and Diversity Spread — at scales relevant to real industrial applications.

## Managerial Insight

The robust model allows operations managers to explicitly trade off cost and environmental performance against schedule reliability. The Price of Robustness is quantified: modest increases in Γ significantly improve feasibility under disruption with small degradation in nominal objectives — a favorable exchange in industries where product return quality is genuinely unpredictable.

## Status

Working paper · In progress
