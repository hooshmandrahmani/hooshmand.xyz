---
title: "The Integrated Healthcare Timetabling Problem — A Systematic Review"
description: "PhD Summer Paper reviewing 50+ papers across Patient Admission Scheduling, Surgical Case Planning, and Nurse-to-Room Assignment — tracing the field from foundational metaheuristics to modern robust and stochastic models."
pubDate: "2025-10-01"
category: "Optimization"
institution: "Sabanci University"
supervisor: "Dr. Can Akkan"
tags: ["Literature Review", "Healthcare Scheduling", "Metaheuristics", "Robust Optimization", "IHTP"]
---

## Overview

Hospital planning involves a web of deeply interdependent decisions: which patients are admitted on which days, which surgeries are scheduled in which operating theaters, and which nurses are assigned to which rooms for each shift. Solving these in isolation — as has historically been the norm — produces plans that are locally optimal but globally infeasible or inefficient when the pieces are combined.

This paper, produced as my **PhD Summer Paper**, provides a structured literature review of the **Integrated Healthcare Timetabling Problem (IHTP)** as defined for the 2024 International Healthcare Timetabling Competition (IHTC 2024). The IHTP simultaneously combines three NP-hard sub-problems.

## The Three Sub-Problems

### 1. Patient Admission Scheduling (PAS)
Assigning elective patients to hospital beds for the duration of their stay — respecting room capacity, gender policies, specialism requirements, and patient-room compatibility. The literature spans foundational metaheuristics (Simulated Annealing by Ceschia & Schaerf 2011; Genetic Algorithms; Artificial Bee Colony) through exact decomposition methods (column generation with dynamic constraint aggregation, Range et al. 2014) to modern robust and stochastic models that handle uncertain lengths of stay (Gartner et al. 2023).

### 2. Surgical Case Planning (SCP)
Assigning surgical cases to operating theater–surgeon–day triples within daily capacity limits. Early work solved SCP independently; the review traces its evolution from simple assignment heuristics to two-stage stochastic programs and data-driven robust models (He et al. 2025) that explicitly plan for worst-case demand surges.

### 3. Nurse-to-Room Assignment (NRA)
Assigning one nurse (per shift) to each occupied room throughout the planning horizon. Key challenges include quantifying nursing workload (patient acuity is difficult to measure objectively), maximizing continuity of care, balancing workload across nurses, and handling uncertainty in care requirements. Stochastic programming approaches (Punnakitikashem et al. 2008, 2013) and robust home-care assignment models (Lanzarone et al. 2014) are reviewed in detail.

## Integration Taxonomy

Following Rachuba et al. (2024), the review classifies integration approaches into three levels:

- **Level 1 — Linkage by Constraints**: each sub-problem solved independently with static constraints from the others.
- **Level 2 — Sequential Planning**: output of one stage becomes fixed input for the next; amplifies upstream errors.
- **Level 3 — Completely Integrated Planning**: the IHTP approach, where all resources are optimized jointly in a single model.

The review focuses on Level 3 approaches and the methodological challenges they introduce: computational tractability of a model combining three NP-hard problems, objective function design for competing soft constraints, and robustness to the operational uncertainty inherent in real hospital environments.

## Solution Methods Reviewed

The review covers the full methodological spectrum:

- **Metaheuristics**: Simulated Annealing, Genetic Algorithms, ALNS, Harmony Search, Artificial Bee Colony, Biogeography-Based Optimization, Arithmetic Optimization Algorithm
- **Exact methods**: Mixed-Integer Programming (monolithic, Fix-and-Relax, Fix-and-Optimize), column generation, branch-and-bound
- **Matheuristics**: hybrid MIP-heuristic approaches for stochastic/robust variants (Gartner et al. 2023)
- **Modern uncertainty models**: two-stage stochastic programming, robust optimization with budgeted uncertainty sets (Bertsimas & Sim framework)

## Key Insight

The IHTC 2024 competition results confirm that no single method dominates — the tractability–quality trade-off depends heavily on instance size. For smaller instances, exact MIP formulations find provably optimal solutions; for larger, operationally realistic instances, matheuristics combining an exact solver with large-neighborhood search currently define the state of the art.

This review directly informed my OPIM 611 paper, in which I implement a robust integrated SCP–NPA model.
