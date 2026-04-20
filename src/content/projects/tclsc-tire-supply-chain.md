---
title: "Tire Closed-Loop Supply Chain Network Design under Uncertainty"
description: "Working paper. Multi-objective MILP for designing a sustainable tire supply chain with two rounds of remanufacturing (retreading) — minimizing cost and environmental impact under stochastic demand and fuzzy return and production rates."
pubDate: "2022-06-01"
category: "Supply Chain"
institution: "Iran University of Science and Technology"
supervisor: "Dr. Morteza Ghomi-Avili"
tags: ["Closed-Loop Supply Chain", "Network Design", "Robust Optimization", "Sustainability", "Remanufacturing"]
---

## Overview

Tires are one of the most environmentally problematic end-of-life products: non-biodegradable, difficult to dispose of safely, and highly energy-intensive to manufacture. Closed-loop supply chain (CLSC) design — incorporating collection, remanufacturing, recycling, and disposal alongside forward production and distribution — is both an operational necessity and a sustainability imperative for tire manufacturers.

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

## Uncertainty Modelling

The model handles three types of uncertainty:

| Uncertain Parameter | Representation |
|---|---|
| Market demand | Stochastic (multiple scenarios) |
| Return rates (EOL tires from customers) | Fuzzy (triangular) |
| Raw material purchase costs and production costs | Fuzzy (triangular) |

Fuzzy arithmetic expectations are incorporated into the objective function, and stochastic demand is modelled via multiple scenarios with associated probabilities.

## Status

Working paper. The model extends the IUST research on hybrid remanufacturing systems and contributes the multi-period network design formulation with two-tier retreading and explicit environmental accounting.
