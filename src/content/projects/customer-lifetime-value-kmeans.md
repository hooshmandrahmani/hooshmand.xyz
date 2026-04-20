---
title: "Customer Lifetime Value Assessment via Weighted K-Means Clustering"
description: "Combined RFM scoring with a weighted K-Means algorithm to segment 2,239 grocery store customers by lifetime value — showing that CLV-weighted clustering produces sharper, more actionable segments than the standard RFM approach alone."
pubDate: "2025-01-01"
category: "Machine Learning"
institution: "Sabanci University"
supervisor: "Dr. Kemal Kılıç"
tags: ["K-Means", "RFM", "CLV", "Clustering", "CRM"]
---

## Overview

Customer Lifetime Value (CLV) — the net present value a customer will generate over their relationship with a firm — is the central metric for CRM strategy. Traditional CLV models rely on probability and econometric approaches that are often theoretically elegant but impractical when dealing with large, messy behavioral datasets. This project integrates the classic **RFM framework** with a **weighted K-Means machine learning algorithm** to produce segments that are both statistically valid and managerially actionable.

## Dataset

The Kaggle grocery store dataset: **2,239 customers**, 29 attributes covering demographic information (year of birth, education, marital status, income), product spending (meat, fish, fruits, wine, etc.), promotional data (campaign responses, purchase frequency), and channel data (store, web, catalog). Data preprocessing addressed missing income values (replaced with median) and removed outliers.

## Phase 1: RFM Segmentation

Each customer was scored on three dimensions (each scored 1–5):

- **Recency (R)**: days since last purchase — lower recency = better
- **Frequency (F)**: number of purchases in the period — higher = better
- **Monetary (M)**: total spend — higher = better

CLV was then computed as: `CLV = average purchase value × average purchase frequency × customer recency`.

This yielded five customer segments:
- **Best Customers**: high on all three RFM dimensions, High CLV
- **Loyal Customers**: high F and M but lower recency; mix of Medium and Low CLV
- **At Risk**: declining engagement
- **Need Attention**: low recency and frequency, Low CLV
- **Lost Customers**: near-zero activity, Low CLV

The analysis revealed a weakness in pure RFM: the Loyal Customers segment spanned multiple CLV tiers, suggesting RFM alone over-groups customers with meaningfully different lifetime values.

## Phase 2: Weighted K-Means Clustering

K-Means clustering was applied in two experiments:

1. **Experiment 1** — standard K-Means on raw demographic and purchase features (without RFM labels)
2. **Experiment 2** — weighted K-Means using Recency, Frequency, Monetary, and CLV as input variables

The optimal number of clusters was determined by the **Elbow method** (both experiments yielded *k* = 4). The Elbow point was noticeably cleaner in Experiment 2, indicating better-separated clusters.

## Evaluation

| Method | SSE | Silhouette Score |
|---|---|---|
| K-Means (Experiment 1) | Higher | Lower |
| Weighted K-Means with RFM + CLV (Experiment 2) | Lower | Higher |

The CLV-weighted clustering produced tighter, better-separated clusters. Comparing clusters to RFM segments confirmed that only one cluster closely matched a single RFM segment (Best Customers ↔ Cluster 3); the others were finer-grained, with the Loyal Customers segment correctly split by CLV tier.

## Business Implication

By combining RFM behavioral scores with explicit CLV weighting, firms can direct retention spend toward customers whose *future value* is high — not just those who have been active recently. The "lapsed VIP" pattern (high historical F and M, declining recency) becomes a recoverable segment rather than being masked inside a broad Loyal category.
