---
title: "Green Closed-Loop Supply Chain for Remanufacturing with Robust Fuzzy Stochastic Programming"
description: "Working paper designing a sustainable closed-loop supply chain for remanufacturing under hybrid uncertainty — combining robust optimization, fuzzy parameters, and stochastic demand scenarios to minimize cost and environmental impact jointly."
pubDate: "2022-06-01"
category: "Uncertainty Modelling"
institution: "Iran University of Science and Technology"
supervisor: "Dr. Ahmad Makui"
tags: ["Closed-Loop Supply Chain", "Robust Optimization", "Fuzzy Programming", "Stochastic Programming", "Sustainability"]
badge: "Working Paper"
---

## Overview

Green closed-loop supply chains (CLSCs) integrate the forward flow (raw materials → production → distribution → customers) with the reverse flow (collection → remanufacturing or recycling → disposal) under environmental constraints. When remanufacturing is the primary recovery strategy, operational uncertainty becomes a central design challenge: demand is stochastic, return quantities and quality are fuzzy, and production costs fluctuate.

This working paper, co-authored with Dr. Ahmad Makui at Iran University of Science and Technology, develops a **green CLSC network design and planning model** that handles this multi-layered uncertainty through a novel combination of three complementary frameworks.

## The Hybrid Uncertainty Approach

Real-world CLSCs face fundamentally different types of uncertainty that call for different mathematical treatments:

| Uncertainty Type | Mathematical Treatment |
|---|---|
| **Market demand** | Stochastic — modelled across multiple discrete scenarios with associated probabilities |
| **Return rates and return quality** | Fuzzy — modelled with triangular membership functions capturing imprecise expert knowledge |
| **Raw material and production costs** | Fuzzy — triangular distributions capturing price volatility |
| **Worst-case disruptions** | Robust — budgeted uncertainty set protecting against adversarial parameter realizations |

Combining these into a single tractable model is the technical contribution of the paper. The fuzzy parameters are de-fuzzified via expected value operators; the stochastic demand is handled via scenario-based programming; and the robust counterpart immunizes the model against the remaining uncertainty budget.

## Network Structure

The CLSC network spans the full product lifecycle:

**Forward**: Suppliers → Manufacturing Centers → Distribution Centers → Customers

**Reverse**: Customers → Collection Centers → Remanufacturing Centers → Distribution Centers *(or)* → Recycling Centers → Disposal

Key strategic decisions:
- Facility location and capacity for manufacturing, distribution, collection, remanufacturing, and recycling centers
- Supplier selection for raw materials
- Network flows between all echelons in each period

## Objectives

The model simultaneously minimizes:

1. **Total cost** — facility fixed costs, variable production and remanufacturing costs, transportation, inventory, shortage penalties, minus revenue from recovered products
2. **Total environmental impact** — CO₂ emissions from all operations; disposal (incineration) carries the highest per-unit environmental penalty, creating an incentive to maximize recovery rates

## Solution

The multi-objective problem is solved using the **ε-constraint method** for exact Pareto frontiers on small instances and **NSGA-II** for larger, industrially relevant scales. Sensitivity analysis on key parameters provides managerial guidance for supply chain designers operating under changing uncertainty levels.

## Status

Working paper · In progress
