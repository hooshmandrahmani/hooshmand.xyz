---
title: "Customer Lifetime Value Assessment via Weighted K-Means Clustering"
description: "Combined RFM scoring with a CLV-weighted K-Means algorithm to segment 2,239 grocery store customers — demonstrating that explicit lifetime value weighting produces sharper, more actionable segments than standard RFM classification alone."
pubDate: "2025-01-01"
category: "Machine Learning"
institution: "Sabanci University"
supervisor: "Dr. Kemal Kılıç"
tags: ["K-Means", "RFM", "CLV", "Clustering", "CRM"]
---

## Overview

Customer Lifetime Value (CLV) — the discounted present value of expected future cash flows from a customer relationship — is the foundational metric for CRM strategy and customer portfolio management. Classical CLV models rely on parametric probability distributions and econometric assumptions that, while theoretically well-grounded, often break down on large behavioral datasets with sparse, irregular purchase patterns.

This project integrates the **RFM framework** (Recency, Frequency, Monetary value) with a **CLV-weighted K-Means clustering algorithm** to produce customer segments that are simultaneously statistically compact and managerially interpretable — addressing a structural limitation of purely behavioral scoring approaches.

## Dataset

The analysis uses a grocery store behavioral dataset comprising **2,239 customers** with 29 attributes: demographic variables (birth year, education, marital status, income), category-level spending (meat, fish, fruit, wine, sweets, gold), promotional responsiveness (campaign acceptance rates, discount usage), and channel data (in-store, web, catalog). Preprocessing replaced missing income values with the median and removed outliers identified by z-score threshold.

## Phase 1 — RFM Segmentation

Each customer was scored on three behavioral dimensions (1–5 scale):

- **Recency (R)**: days since last purchase — lower recency score signals higher engagement
- **Frequency (F)**: number of transactions in the observation period
- **Monetary (M)**: cumulative spend

CLV was computed as the product of average purchase value, purchase frequency, and a recency-weighted discount factor. RFM scoring yielded five segments: **Best Customers, Loyal Customers, At Risk, Need Attention**, and **Lost Customers**.

A structural weakness of pure RFM emerged: the *Loyal Customers* segment spanned multiple CLV tiers, grouping customers with meaningfully different future value under a single label. This misclassification has direct consequences for retention resource allocation.

## Phase 2 — CLV-Weighted K-Means

K-Means clustering was applied in two experiments to assess whether explicit CLV weighting corrects the segmentation failure:

1. **Standard K-Means** on raw demographic and behavioral features (no RFM or CLV inputs)
2. **Weighted K-Means** using Recency, Frequency, Monetary value, and CLV as input features

The optimal number of clusters was determined by the **Elbow method**; both experiments yielded *k* = 4, but the Elbow point was substantially cleaner in Experiment 2, indicating better-separated latent structure when CLV-relevant dimensions are prioritized.

## Results

| Method | SSE | Silhouette Score |
|---|---|---|
| Standard K-Means | Higher | Lower |
| CLV-Weighted K-Means | **Lower** | **Higher** |

The CLV-weighted approach produced tighter, better-separated clusters. Cross-referencing against RFM segments confirmed the key finding: only one cluster corresponded closely to a single RFM segment (Best Customers ↔ Cluster 3). The remaining clusters correctly split the *Loyal Customers* group by CLV tier — separating high-value lapsing customers from genuinely engaged mid-value customers, a distinction invisible to RFM scoring.

## Managerial Implication

Retention investment directed by CLV-weighted segments targets customers by *expected future value* rather than recent behavioral activity. The "lapsed VIP" pattern — high historical Frequency and Monetary value with declining Recency — becomes a distinct, recoverable segment rather than being collapsed into a broad Loyal category that receives undifferentiated treatment. This reallocation of retention resources directly improves the expected return on CRM spend.
