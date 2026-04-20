---
title: "Large-Scale Optimization of Healthcare Logistics via Benders Decomposition"
description: "Benders decomposition algorithm implemented in GAMS to solve a blood supply chain network design problem — exploiting the natural strategic–operational decomposition to achieve tractability on instances where monolithic MILP fails."
pubDate: "2019-12-01"
category: "Optimization & Uncertainty Modelling"
institution: "Iran University of Science and Technology"
supervisor: "Dr. Hadi Sahebi"
tags: ["Benders Decomposition", "GAMS", "Blood Supply Chain", "Healthcare Logistics", "MILP"]
---

## Overview

Blood supply chain management presents a class of optimization problems that is structurally more complex than standard facility location or distribution network design. Three features combine to make it computationally intractable for monolithic solvers at realistic scale: **perishability** (blood products have short shelf lives, creating tight time-window constraints), **demand stochasticity** (hospital demand for specific blood types fluctuates and is difficult to forecast precisely), and a **multi-echelon network structure** that spans donation centers, processing laboratories, testing facilities, and hospitals.

A monolithic Mixed-Integer Linear Program (MILP) on a realistic instance of this problem grows quickly beyond the reach of branch-and-bound methods. Benders decomposition provides a principled way to exploit the structure of the problem — separating strategic decisions from operational decisions — and solve large instances to near-optimality.

## Problem Structure

The blood supply chain network design problem involves two distinct classes of decisions:

- **Strategic decisions** (master problem): facility location (which donation centers, processing labs, and distribution hubs to open), capacity configuration, and network topology. These are binary and integer decisions that commit capital and determine the shape of the supply chain.
- **Operational decisions** (subproblem): daily/weekly flow volumes across network arcs, inventory levels at each node, and allocation of perishable inventory to meet stochastic hospital demand. These are continuous decisions, conditional on the fixed network structure.

This two-stage structure is precisely the setting Benders decomposition is designed for.

## Algorithm

The Benders scheme iterates between:

1. **Master Problem**: solves the integer facility location and capacity decisions; receives optimality and feasibility cuts from the subproblem.
2. **Subproblem**: given fixed network structure from the master, optimizes operational flows and inventory subject to perishability constraints and stochastic demand; generates cuts that feed back to the master.

**Cut management** — the selection and aggregation of Benders cuts — is critical to convergence speed. At each iteration, the dual solution of the subproblem generates a linear cut that tightens the master problem's lower bound on operational costs. Infeasibility in the subproblem (arising from combinations of network decisions that cannot feasibly serve demand) generates feasibility cuts that eliminate those configurations.

The algorithm was implemented in **GAMS**, exploiting its algebraic modeling capabilities for clean problem reformulation and leveraging CPLEX as the underlying solver for both the master and subproblem.

## Results

The decomposition reduced solve time substantially relative to monolithic MILP on medium and large instances, achieving near-optimal solutions within practical computational budgets. Sensitivity analysis on key parameters — demand variability, perishability windows, and facility cost structures — generated operational insights for blood bank planners: specifically, the trade-off between network redundancy (protective against stochastic demand spikes) and the fixed costs of maintaining additional processing capacity.

## Significance

Beyond the specific application, this project established a working understanding of decomposition-based optimization — a family of methods central to large-scale operations research. The structural insight that strategic and operational decisions can often be profitably separated, with information passed between them through duality-based cuts, applies broadly across supply chain design, scheduling under uncertainty, and multi-stage stochastic programs.
