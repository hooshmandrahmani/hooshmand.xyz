---
title: "The Integrated Healthcare Timetabling Problem — A Systematic Review"
description: "Structured literature review of 50+ papers across Patient Admission Scheduling, Surgical Case Planning, and Nurse-to-Room Assignment — mapping the field from foundational metaheuristics to modern robust and stochastic models, and establishing the methodological frontier for fully integrated planning."
pubDate: "2025-10-15"
category: "Optimization & Uncertainty Modelling"
institution: "Sabanci University"
supervisor: "Dr. Can Akkan"
tags: ["Literature Review", "Healthcare Scheduling", "Metaheuristics", "Robust Optimization", "IHTP"]
---

## Overview

Hospital operations involve a web of deeply interdependent decisions: which patients are admitted on which days, which surgeries are scheduled in which operating theaters, and which nurses are assigned to which rooms across each shift. Treating these as independent scheduling problems — the prevailing approach in both practice and earlier research — produces plans that are locally optimal in each sub-system but globally infeasible or inefficient once operational dependencies materialize.

This review provides a structured synthesis of the **Integrated Healthcare Timetabling Problem (IHTP)**, defined formally for the 2024 International Healthcare Timetabling Competition (IHTC 2024), which simultaneously combines three NP-hard sub-problems. The goal is to establish where the field stands methodologically and to identify the gaps that motivate integrated modelling under uncertainty.

## The Three Constituent Sub-Problems

### Patient Admission Scheduling (PAS)

PAS assigns elective patients to hospital beds for the duration of their stay, subject to room capacity constraints, gender policies, specialism requirements, and patient–room compatibility. The literature begins with foundational metaheuristics — Simulated Annealing (Ceschia & Schaerf, 2011), Genetic Algorithms, Artificial Bee Colony — and progresses through exact decomposition methods (column generation with dynamic constraint aggregation; Range et al., 2014) to modern uncertainty-aware models that treat length-of-stay as a stochastic parameter rather than a fixed input (Gartner et al., 2023).

### Surgical Case Planning (SCP)

SCP assigns surgical cases to operating theater–surgeon–day triples within daily capacity limits. Early research treated SCP as an independent assignment problem; the field has since evolved toward two-stage stochastic programs and data-driven robust models (He et al., 2025) that explicitly hedge against worst-case demand surges and surgical duration variability.

### Nurse-to-Room Assignment (NRA)

NRA assigns one nurse per shift to each occupied room throughout the planning horizon. Core challenges include the objective measurement of nursing workload (patient acuity is inherently subjective and variable), maximizing continuity of care across admissions, balancing workload equitably, and planning under uncertainty in care requirements. The review covers stochastic programming approaches (Punnakitikashem et al., 2008, 2013) and robust home-care assignment models (Lanzarone et al., 2014) in detail.

## Integration Taxonomy

Following Rachuba et al. (2024), integration approaches are classified into three levels:

| Level | Description | Limitation |
|---|---|---|
| **Level 1 — Linked by Constraints** | Sub-problems solved independently with static constraints passed between them | Ignores dynamic coupling; may be locally infeasible |
| **Level 2 — Sequential Planning** | Output of one stage becomes fixed input for the next | Amplifies upstream errors; no recovery mechanism |
| **Level 3 — Fully Integrated** | All resources optimized jointly in a single model | Computationally hardest; only approach with global optimality guarantees |

The review focuses on Level 3 approaches and the methodological challenges they introduce: tractability of a model combining three NP-hard sub-problems, objective function design for competing soft constraints, and robustness to the operational uncertainty inherent in real hospital environments.

## Solution Methods

The review covers the full spectrum of published methods:

- **Metaheuristics**: Simulated Annealing, Genetic Algorithms, Adaptive Large Neighborhood Search (ALNS), Harmony Search, Artificial Bee Colony, Biogeography-Based Optimization, Arithmetic Optimization Algorithm
- **Exact methods**: Monolithic MIP, Fix-and-Relax, Fix-and-Optimize, column generation, branch-and-bound
- **Matheuristics**: Hybrid MIP-heuristic approaches, particularly effective for stochastic and robust variants (Gartner et al., 2023)
- **Uncertainty models**: Two-stage stochastic programming; robust optimization with budgeted uncertainty sets (Bertsimas & Sim framework)

## Key Findings

The IHTC 2024 competition results confirm that no single method dominates across all instance scales. For smaller instances, exact MIP formulations produce provably optimal solutions; for larger, operationally realistic instances, matheuristics combining an exact solver with large-neighborhood search currently define the state of the art in solution quality within practical time limits.

The most significant gap in the literature remains the joint treatment of integration and uncertainty: the majority of fully integrated models assume deterministic inputs, while uncertainty-aware models typically operate on individual sub-problems rather than the coupled system. Closing this gap — building robust or stochastic models that respect the full operational coupling — is both an open research problem and a practical necessity for real hospital deployment.
