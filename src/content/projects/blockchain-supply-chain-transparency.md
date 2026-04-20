---
title: "Blockchain-Based Transparent and Sustainable Supply Chain Network Design"
description: "Study of a blockchain-enabled closed-loop supply chain framework using IoT/RFID for product traceability, smart contracts for transparent pricing, and a fuzzy satisfying approach to balance economic, environmental, and social objectives."
pubDate: "2023-01-01"
category: "Supply Chain"
institution: "Iran University of Science and Technology"
supervisor: "Dr. Morteza Ghomi-Avili"
tags: ["Blockchain", "Supply Chain", "Sustainability", "RFID", "Smart Contracts", "Network Design"]
---

## Overview

Rapid global supply chain expansion has introduced systemic risks: product counterfeiting, opacity in multi-tier supplier networks, and the misalignment between sustainability claims and actual environmental performance. Blockchain technology offers a promising architecture to address these risks simultaneously — decentralized, tamper-evident ledgers that make product provenance and partner transactions auditable by all parties.

This project engaged with the model developed by Ghomi-Avili et al. (2023) in the *Journal of Cleaner Production*, which builds a comprehensive blockchain-based system for a closed-loop supply chain that integrates pricing decisions, traceability, and sustainability.

## System Architecture

The framework combines three distinct technological and modeling layers:

### 1. Traceability via IoT and RFID
Each product in the supply chain is labeled with **Internet-of-Things (IoT) sensors** and **Radio Frequency Identification (RFID)** tags. This creates a real-time digital record of the product's location, condition, and handling throughout its lifecycle — from raw material sourcing through forward distribution to end-of-life return.

### 2. Transparency via Smart Contracts
**Smart contracts** — self-executing code stored on the blockchain — are triggered at predefined supply chain events (e.g., disorder events, product transfers, reverse flow initiation). Each trigger: (a) records the transaction immutably, (b) executes pricing rules for used products in the reverse channel, and (c) enforces CO₂ emission controls. The iterative optimization of facility prices and demands runs until a final equilibrium solution is reached.

### 3. Network Optimization from a Distributed Ledger
Once smart contracts have populated the distributed ledger with event data, the optimization phase begins: a joint pricing and sustainable closed-loop supply chain network design model minimizes economic, environmental, and social objectives simultaneously. A **fuzzy satisfying approach** identifies the optimal solution across the Pareto frontier of these three competing objectives.

## Application

The model was validated using real data from the **Hamedan glass industry** in Iran, with sensitivity analyses generating managerial insights applicable to food, agriculture, healthcare, and other supply chain contexts where product authenticity and sustainability certification matter.

## Key Insight

The blockchain architecture addresses a fundamental limitation of conventional supply chain models: the assumption that data reported by supply chain partners is accurate and verifiable. By making provenance records tamper-resistant and pricing rules transparent via smart contracts, the system converts sustainability commitments from unverifiable claims into auditable, enforceable supply chain governance.
