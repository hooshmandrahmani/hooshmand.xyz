---
title: "Blockchain-Based Transparent and Sustainable Supply Chain Network Design"
description: "Analysis of a blockchain-enabled closed-loop supply chain framework — integrating IoT/RFID traceability, smart contract governance, and a multi-objective fuzzy optimization model to simultaneously balance economic, environmental, and social objectives."
pubDate: "2025-09-15"
category: "Machine Learning"
institution: "Iran University of Science and Technology"
supervisor: "Dr. Morteza Ghomi-Avili"
tags: ["Blockchain", "Supply Chain", "Sustainability", "RFID", "Smart Contracts", "Network Design"]
---

## Overview

Conventional supply chain models rest on an assumption that rarely holds in practice: that data reported by supply chain partners is accurate, current, and verifiable. In multi-tier networks spanning dozens of independent entities across multiple jurisdictions, this assumption produces systemic vulnerabilities — product counterfeiting, unverifiable sustainability claims, and opaque reverse logistics flows that undermine both business integrity and environmental accountability.

Blockchain technology offers a fundamentally different architecture: a decentralized, tamper-evident ledger where product provenance, partner transactions, and compliance events are recorded immutably and auditable by all authorized parties. This project engages with the model developed by Ghomi-Avili et al. (2023) in the *Journal of Cleaner Production*, which constructs a comprehensive blockchain-enabled closed-loop supply chain system integrating pricing decisions, full lifecycle traceability, and sustainability optimization.

## System Architecture

The framework combines three complementary layers:

### 1. Physical-Digital Traceability via IoT and RFID

Each product is tagged with **IoT sensors** and **RFID identifiers** that create a continuous digital record of location, condition, and handling throughout the product lifecycle — from raw material sourcing through forward distribution and retail, to end-of-life collection and reverse channel entry. This eliminates the audit gap between sustainability claims and actual product handling.

### 2. Transparent Governance via Smart Contracts

**Smart contracts** — self-executing code stored on the blockchain — are triggered automatically at predefined supply chain events: product transfers, disorder events, and reverse channel initiations. Each trigger simultaneously (a) records the transaction immutably on the distributed ledger, (b) executes pricing rules for used products entering the reverse channel, and (c) enforces CO₂ emission controls agreed upon by supply chain partners. Pricing and demand equilibrium is reached through iterative smart contract execution, without requiring a central coordinating authority.

### 3. Multi-Objective Network Optimization

Once the distributed ledger is populated with verified event data, the optimization layer designs the closed-loop network and determines flows across all arcs. The model minimizes three objectives simultaneously:

- **Economic**: total network cost including facility investment, variable production and reverse logistics costs, and transportation
- **Environmental**: lifecycle CO₂ emissions across all operations and transportation modes
- **Social**: employment generation and equitable distribution of economic activity across regions

A **fuzzy satisfying approach** identifies the solution that achieves the best balanced performance across these three objectives — capturing the Pareto frontier rather than collapsing multi-objective trade-offs into a single weighted sum.

## Validation

The integrated model was validated using industry data from the **Hamedan glass supply chain** in Iran. Sensitivity analyses on key parameters generated managerial insights applicable across supply chain contexts where product authenticity, lifecycle traceability, and sustainability certification matter — including food, agriculture, pharmaceuticals, and high-value electronics.

## Key Contribution

The blockchain architecture transforms sustainability governance from a monitoring challenge into an enforcement mechanism. By making provenance records tamper-resistant and pricing rules transparent through smart contract logic, the system converts sustainability commitments from unverifiable declarations into auditable, self-executing supply chain governance — a fundamental shift in how circular economy objectives can be operationalized in multi-tier networks.
