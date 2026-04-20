---
title: "Robust Optimization for Integrated Healthcare Scheduling"
description: "Multi-resource MILP with budgeted uncertainty sets to jointly optimize surgical case planning and nurse-to-patient assignment — quantifying the Price of Robustness against surgical duration variability and nursing acuity spikes."
pubDate: "2026-01-01"
category: "Optimization & Uncertainty Modelling"
institution: "Sabanci University"
supervisor: "Dr. Burak Gökgür"
tags: ["MILP", "Gurobi", "Python", "Robust Optimization", "Healthcare Operations"]
---

## Overview

Operating rooms account for up to 40% of total hospital expenditure while simultaneously driving an equivalent share of revenue. Despite this, Surgical Case Planning (SCP) and Nurse-to-Patient Assignment (NPA) are almost universally solved as separate sequential problems — even though admitting a patient on day *d* simultaneously consumes operating theater capacity on that day and generates nursing workload across the patient's entire length of stay. Decoupling these decisions produces plans that are locally feasible in each sub-system but globally infeasible or severely suboptimal once the operational dependencies materialize.

This project constructs, implements, and validates an integrated mathematical model under uncertainty — treating SCP and NPA as a single coupled optimization problem from the outset, rather than as a pipeline.

## Problem Structure

The model follows the **IHTC 2024 competition framework**, which defines the Integrated Healthcare Timetabling Problem (IHTP) over a planning horizon of 14–28 days. The core entities and their coupling:

- **Patients** — elective cases with a release date, required surgeon, and a surgery duration that is uncertain.
- **Surgeons** — daily time budgets consumed by assigned cases; overruns cascade directly into operating theater violations.
- **Operating Theaters (OTs)** — finite capacity in minutes per day; may be unavailable on specific dates due to maintenance or staffing.
- **Nurses** — predefined on/off rosters and skill levels, each assigned to a room for a full shift.

The structural coupling is explicit: scheduling patient *p* on day *d* triggers (1) surgeon and OT capacity consumption on day *d*, and (2) nursing workload on every subsequent day through discharge. No sequential decomposition can capture this coupling without losing optimality guarantees.

## Modelling Approach

### Deterministic MILP Baseline

Binary decision variables assign each patient to a day–surgeon–OR triple; continuous and binary variables assign nurses to room–shift pairs. Hard constraints enforce OT time limits, surgeon daily budgets, and skill–room compatibility. The objective minimizes a weighted combination of unscheduled surgical cases and nurse overtime penalties.

### Robust Counterpart — Bertsimas & Sim Framework

Two sources of uncertainty threaten plan feasibility in real hospital environments:

1. **Surgical duration uncertainty** — actual surgery times follow right-skewed distributions; overruns propagate downstream, displacing subsequent cases and disrupting nursing shift hand-offs.
2. **Nursing acuity uncertainty** — a patient scheduled for routine recovery may deteriorate, generating higher care hours than the nominal plan anticipates.

Rather than enumerating scenarios — which grows exponentially with the number of uncertain parameters — I apply the **budgeted uncertainty set** of Bertsimas & Sim (2004). The budget parameter **Γ** controls the number of uncertain parameters permitted to simultaneously attain their worst-case values:

- **Γ = 0** — nominal solution: maximum throughput, no uncertainty protection
- **Γ = N** — fully robust: every surgery assumes worst-case duration simultaneously
- **Intermediate Γ** — tunable conservatism that preserves LP-tractability and yields a well-defined Price of Robustness curve

Crucially, Γ is applied independently to OT capacity (protecting against surgical overruns) and nursing capacity (protecting against acuity spikes), allowing the hospital planner to calibrate risk tolerance separately for each bottleneck — a practically important flexibility that scenario-based stochastic programs do not naturally provide.

## Implementation

The model was implemented in **Python with Gurobi** and tested on instances calibrated against the IHTC 2024 JSON data format. A sensitivity sweep across Γ values directly quantified the **Price of Robustness** — the marginal degradation in nominal objective value per unit increase in protection.

## Results and Insights

- Increasing Γ reduced nominal surgical throughput marginally but **eliminated nurse workload violations** across all simulated demand spike scenarios.
- The deterministic baseline failed to maintain feasibility under realized uncertainty in a majority of disruption scenarios; the robust schedule remained feasible throughout.
- The Price of Robustness curve exhibited convex, well-behaved structure — providing hospital administrators with a transparent, quantitative basis for selecting a conservatism level aligned with institutional risk tolerance and staffing buffers.

The central finding is that the marginal cost of robustness is modest relative to the operational disruption costs it prevents. For healthcare systems where nurse overload directly affects patient safety, this trade-off is highly favorable — and the integrated formulation is essential to capturing it correctly.