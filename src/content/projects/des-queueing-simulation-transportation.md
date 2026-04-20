---
title: "Discrete-Event Simulation for Transportation System Performance Analysis"
description: "Arena-based discrete-event simulation of a multi-stage transportation system — generating utilization profiles, queue-length distributions, and throughput sensitivity curves to identify binding bottlenecks and evaluate the system-wide impact of operational interventions."
pubDate: "2019-01-01"
category: "Optimization & Uncertainty Modelling"
institution: "Iran University of Science and Technology"
supervisor: "Dr. Kamran Shahanaghi"
tags: ["Arena", "Discrete-Event Simulation", "Queueing Theory", "Bottleneck Analysis", "Transportation"]
---

## Overview

Operational performance in multi-stage transportation systems cannot be reliably inferred from aggregate statistics alone. Average throughput and mean queue lengths obscure the variance structure that drives congestion, delay propagation, and service degradation — particularly when arrival processes and service times are stochastic. Identifying true system bottlenecks requires a model that explicitly captures the temporal dynamics of entity flow, resource contention, and queue accumulation under realistic variability.

This project develops a **discrete-event simulation (DES)** model of a multi-stage transportation system in **Arena**, exploiting the ability of DES to represent stochastic processes, resource interactions, and time-dependent congestion that closed-form queueing models cannot capture at this level of operational fidelity.

## Modelling Approach

The simulation represents the transportation system as a network of processing stages, each characterized by stochastic arrival processes and service time distributions calibrated to operational data. Entities (vehicles, shipments, or passengers — depending on context) flow through the network, competing for shared resources at each stage.

Key modeling decisions:

- **Arrival processes**: modeled as non-homogeneous Poisson processes to capture time-of-day demand variation
- **Service time distributions**: fit to empirical data; right-skewed distributions (log-normal, Erlang) reflecting the variability typical of transportation service operations
- **Resource constraints**: finite server capacity at each stage; explicit representation of resource preemption and priority rules
- **Queue discipline**: FIFO with configurable priority classes to test alternative dispatching policies

## Outputs and Analysis

The simulation generates a comprehensive performance profile:

- **Utilization profiles**: server utilization at each stage across the planning horizon, revealing which resources operate close to capacity and are vulnerable to overload
- **Queue-length distributions**: not just mean queue lengths but full distributional characterization, exposing tail behavior that drives worst-case delays
- **Throughput sensitivity**: systematic perturbation of arrival rates and service time parameters to map how system throughput responds to demand variation and service disruption

The bottleneck identification approach — tracing the propagation of queue build-up through the network — avoids the common error of inferring bottleneck location from headline utilization averages, which can misidentify secondary congestion as primary constraint.

## Key Finding

The binding bottleneck in the system was not the stage with the highest nominal utilization, but rather the stage with the highest combination of utilization and service time variance — a finding that emerges clearly from the distributional output of the simulation but would be invisible to a deterministic network model. Targeted capacity expansion at this stage produced disproportionate system-wide throughput improvements, while equivalent investment at the nominally busiest stage yielded negligible gains.

This result illustrates a general principle: in stochastic service systems, variance matters as much as mean capacity, and simulation is the appropriate tool for surfacing this structure.
