---
title: "Robust Optimization for Integrated Healthcare Scheduling"
description: "MILP with budgeted uncertainty in Python/Gurobi to co-optimize surgical planning and nurse assignment, preventing staff workload violations during stochastic demand spikes."
pubDate: "2026-01-01"
category: "Operations Research"
institution: "Sabanci University"
supervisor: "Dr. Burak Gokgur"
tags: ["MILP", "Gurobi", "Python", "Healthcare Operations"]
---

## Overview

Integrated hospital scheduling sits at the intersection of surgical capacity planning and
nurse rostering — two problems that are traditionally solved in isolation, even though
they share the same bottlenecks (OR time, recovery beds, nurse hours). Solving them
jointly under uncertainty is what makes the problem interesting.

## Approach

I formulated a Mixed-Integer Linear Program with **budgeted uncertainty** (Bertsimas &
Sim, 2004) over both surgical demand and nurse availability. The budget parameter lets
the hospital administrator trade conservatism for optimality explicitly.

- **Decision variables:** surgery-to-day-to-OR assignment, nurse-to-shift assignment.
- **Constraints:** coupled workload caps, skill-mix requirements, maximum consecutive
  shifts.
- **Objective:** weighted surgical throughput minus overtime penalties.

Implemented in Python with Gurobi, tested on synthetic instances calibrated against
published hospital data.

## Outcome

The robust model prevented staff workload violations during stochastic demand spikes
without materially degrading surgical throughput on nominal days — the main trade-off
a risk-averse planner wants to see.
