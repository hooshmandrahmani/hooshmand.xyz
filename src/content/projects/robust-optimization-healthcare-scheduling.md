---
title: "Robust Optimization for Integrated Healthcare Scheduling"
description: "MILP with budgeted uncertainty in Python/Gurobi to simultaneously co-optimize surgical case planning and nurse-to-patient assignment, quantifying the Price of Robustness against stochastic demand and workload spikes."
pubDate: "2026-01-01"
category: "Optimization"
institution: "Sabanci University"
supervisor: "Dr. Burak Gokgur"
tags: ["MILP", "Gurobi", "Python", "Robust Optimization", "Healthcare Operations"]
---

## Overview

Operating rooms account for up to 40% of total hospital expenses and an equivalent share of revenue. Despite this, Surgical Case Planning (SCP) and Nurse-to-Patient Assignment (NPA) are almost always solved in isolation — even though admitting a patient on day *d* simultaneously consumes OR time and generates nursing workload across the patient's entire length of stay. Solving them jointly under uncertainty is both operationally necessary and computationally hard.

This paper, produced for OPIM 611 (Modeling in Operations Management) under Dr. Burak Gökgür, constructs, implements, and validates a mathematical model that does exactly that.

## Problem Structure

The model follows the **IHTC 2024 competition framework**, which defines the Integrated Healthcare Timetabling Problem (IHTP) over a planning horizon of 14–28 days. Core entities:

- **Patients** — elective cases with a release date, required surgeon, and a surgery duration that is stochastic.
- **Surgeons** — daily time budgets consumed by each assigned case.
- **Operating Theaters (OTs)** — capacity in minutes per day; may be unavailable on specific dates.
- **Nurses** — predefined on/off rosters and skill levels; each assigned to a room for a full shift.

The integration coupling is explicit: admitting patient *p* on day *d* triggers (1) consumption of surgeon and OT capacity on day *d*, and (2) nursing workload on every subsequent day through discharge.

## Modelling Approach

### Deterministic MILP

Binary decision variables assign each patient to a day–surgeon–OR triple, and nurses to room–shift pairs. Hard constraints enforce OT capacity, surgeon daily limits, and skill–room compatibility. Soft constraints minimize a weighted combination of surgical throughput loss and nurse overtime penalties.

### Robust Counterpart via Bertsimas–Sim

Real-world hospitals face two principal uncertainty sources:

1. **Duration uncertainty** — surgery times follow right-skewed (log-normal) distributions; over-runs delay downstream cases and cascade into nursing hand-off failures.
2. **Workload/acuity uncertainty** — a patient scheduled for routine recovery may deteriorate, generating higher nursing hours than anticipated.

Rather than enumerating scenarios (which explodes exponentially), I applied the **Budgeted Uncertainty** framework of Bertsimas & Sim (2004). For a system with *N* uncertain surgeries, the budget parameter **Γ** controls the number of parameters allowed to deviate simultaneously to their worst-case values:

- **Γ = 0** — nominal, deterministic solution (aggressive, high throughput, fragile)
- **Γ = N** — fully robust (conservative; every surgery assumed worst-case)
- **Intermediate Γ** — tunable conservatism that remains LP-tractable

The budget constraint is applied separately to OT capacity (protecting against surgical overruns) and nursing capacity (protecting against acuity spikes), allowing the planner to set independent risk tolerances for each bottleneck.

## Implementation

The model was implemented in **Python with Gurobi** and tested on synthetic instances calibrated against the IHTC 2024 JSON data format. A sensitivity sweep across Γ values quantified the **Price of Robustness** — the objective function degradation per unit increase in protection level.

## Results

- Increasing Γ reduced surgical throughput slightly on nominal days but **eliminated nurse workload violations** during synthetic demand spikes.
- The robust schedule maintained feasibility across all simulated disruption scenarios where the deterministic model failed.
- The Price of Robustness curve was convex and well-behaved, giving the hospital administrator a clear quantitative basis for choosing a conservatism level aligned with institutional risk tolerance.

The core finding: robust optimization provides a practical mechanism for trading theoretical efficiency for operational reliability — protecting nursing staff from overload while preserving care quality under uncertainty.
