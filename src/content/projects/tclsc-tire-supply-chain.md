---
title: "Tire Closed-Loop Supply Chain Network Design under Uncertainty"
description: "Working paper. Multi-objective MILP for designing a sustainable tire supply chain with two rounds of remanufacturing (retreading), minimizing cost and environmental impact under stochastic demand and fuzzy return and production rates."
pubDate: "2021-08-01"
category: "Optimization & Uncertainty Modeling"
institution: "Iran University of Science and Technology"
supervisor: "Dr. Ahmad Makui"
tags: ["MILP", "Robust Optimization", "Stochastic Programming", "Fuzzy Programming", "Benders Decomposition", "Remanufacturing"]
badge: "Working Paper"
---

## Overview

Tires are one of the most environmentally problematic end-of-life products: non-biodegradable, difficult to dispose of safely, and highly energy-intensive to manufacture. Closed-loop supply chain (CLSC) design, which incorporates collection, remanufacturing, recycling, and disposal alongside forward production and distribution, is both an operational necessity and a sustainability imperative for tire manufacturers.

This working paper, developed at Iran University of Science and Technology, formulates a **Tier Closed-Loop Supply Chain (TCLSC)** network design model that jointly optimizes economic and environmental objectives under multiple sources of uncertainty.

## Network Structure

The TCLSC encompasses the full product lifecycle:

**Forward flow**: Suppliers → Manufacturing Centers → Distribution Centers → Retailers (customers)

**Reverse flow**: Customers → Collection Centers → Remanufacturing Centers (Retread 1) → Distribution Centers → (second use) → Collection → Remanufacturing Centers (Retread 2) → Recycling Centers → Disposal

A distinctive feature of the tire industry is that retreading is possible **twice** before a tire reaches end-of-life recycling. Each retreading cycle restores functionality (at decreasing value: Retread 1 > Retread 2) and generates additional revenue while deferring environmental disposal costs.

## Objectives

The model simultaneously minimizes two conflicting objectives:

1. **Total cost**: fixed costs for establishing manufacturing, distribution, collection, remanufacturing, and recycling centers; variable production, collection, remanufacturing, and recycling costs; transportation costs; shortage penalties; minus revenue from retreaded tire sales and recycling.

2. **Total environmental impact**: CO₂ emissions from manufacturing, remanufacturing, recycling, transportation, and disposal operations. Disposal (incineration) carries the highest per-unit environmental cost.

## Key Decisions

- Which suppliers to source raw materials from
- Where to locate and at what capacity to open manufacturing and distribution centers (existing and new)
- Where to locate collection, remanufacturing (Retread 1 and 2), and recycling centers
- How much to flow across each network arc in each period

## Hybrid Uncertainty Approach

Real-world tire CLSCs face fundamentally different types of uncertainty that call for different mathematical treatments:

| Uncertainty Type | Mathematical Treatment |
|---|---|
| **Market demand** | Stochastic: modeled across multiple discrete scenarios with associated probabilities |
| **Return, remanufacturing, and recycling rates** | Fuzzy: modeled with trapezoidal membership functions capturing imprecise expert knowledge |
| **Raw material and production costs** | Fuzzy: trapezoidal numbers capturing price volatility |

Combining these into a single tractable model is the technical contribution of the paper. The two uncertainty types are unified within a **Robust Fuzzy Stochastic Programming (RFSP)** framework (Farrokh et al., 2018). Fuzzy parameters are handled via credibility measures and fuzzy expected-value operators; stochastic demand is captured through scenario-based programming; and robustness is enforced by a Mulvey-type robust term (in the linearized Yu–Li form) that penalizes both scenario deviation of the objective and constraint infeasibility, controlling solution and feasibility robustness simultaneously.

## Solution

The bi-objective problem is scalarized using the **augmented ε-constraint (AEC) method**, with the ε-ranges obtained via a lexicographic (payoff-table) procedure to generate an efficient Pareto frontier. For large, industrially relevant instances, the model is solved with **Benders decomposition**, treating the network-design binaries (facility location and capacity) as the complicating variables so that the problem splits into a master problem over the design decisions and a dual subproblem over the continuous network flows, with optimality and feasibility cuts added iteratively. This preserves global optimality while keeping large instances tractable. Sensitivity analysis on key parameters provides managerial guidance for supply chain designers operating under changing uncertainty levels.