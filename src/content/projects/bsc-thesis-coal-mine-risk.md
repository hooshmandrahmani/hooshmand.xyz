---
title: "BSc Thesis — Pillar Failure Risk Assessment in Underground Coal Mining"
description: "Monte Carlo simulation to quantify pillar failure probability in room-and-pillar underground coal mining, applied to the Tabas Central Coal Mine — modeling uncertainty in five geomechanical variables to derive the safety factor distribution."
pubDate: "2017-11-01"
category: "Optimization"
institution: "Amirkabir University of Technology"
supervisor: "Dr. Shahryar"
tags: ["Monte Carlo Simulation", "Risk Assessment", "Mining Engineering", "Geomechanics"]
---

## Overview

Underground coal extraction is among the most hazardous industrial activities in any country — a fact made especially acute in the room-and-pillar mining method, where the entire overburden is supported by coal pillars left in place between excavated rooms. Pillar failure is one of the most critical and catastrophic risks in this setting: a single pillar collapse can trigger cascading failures across the panel, causing mine-wide instability and fatalities.

This thesis, completed at Amirkabir University of Technology (Tehran Polytechnic) in the Department of Mining and Metallurgical Engineering, develops a quantitative risk framework for pillar failure probability at the **Tabas Central Coal Mine** — Iran's largest underground coal mine, located in South Khorasan Province.

## The Risk Assessment Problem

The safety factor of a coal pillar — the ratio of pillar strength to applied load — is a function of five geomechanical variables, each of which carries significant uncertainty in a real underground environment:

| Variable | Source of Uncertainty |
|---|---|
| Uniaxial compressive strength of coal (UCS) | Natural variation in coal quality; lab test scatter |
| Pillar width | Drilling and blasting inaccuracies |
| Pillar height | Seam thickness variation |
| Entry width | Construction variability |
| Depth of cover | Topographic variation above the panel |

Traditional deterministic analyses use single point estimates for each variable, producing a single safety factor value that hides the actual probability of failure. A safety factor slightly above 1.0 in deterministic terms may correspond to a substantial failure probability once variability is accounted for.

## Method: Monte Carlo Simulation

The thesis applied **Monte Carlo simulation** to propagate uncertainty through the pillar safety factor formula. Each input variable was characterized by a probability distribution fitted to field measurements and laboratory data from Tabas:

- UCS: fitted from compressive strength tests on coal samples
- Pillar geometry variables: fitted from survey measurements of the mine panel

Thousands of simulation trials sampled each variable independently, computing the safety factor for each realization. The output was:

1. The **probability distribution of the safety factor** — revealing the shape and tails of the failure risk
2. The **probability of failure** (P[SF < 1.0]) as a single quantitative risk number
3. Sensitivity analysis showing how the **mean safety factor** changes as each input variable shifts across its plausible range

## Key Findings

Sensitivity analysis identified UCS variability and pillar width as the dominant drivers of pillar failure risk at Tabas. The depth-of-cover variable had a comparatively smaller influence for the specific panel geometry studied. The Monte Carlo-derived failure probability was substantially higher than the deterministic safety factor alone would suggest — demonstrating the importance of explicit uncertainty quantification in mine design.

The results provide planners and mine engineers at Tabas with quantitative risk thresholds for pillar geometry design decisions, rather than relying solely on deterministic factor-of-safety calculations.
