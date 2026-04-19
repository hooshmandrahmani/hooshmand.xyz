---
title: "Customer Lifetime Value Assessment via K-Means Clustering"
description: "Combined traditional RFM modeling with weighted K-Means clustering to predict customer lifetime value across e-commerce segments."
pubDate: "2025-01-01"
category: "Analytics"
institution: "Sabanci University"
supervisor: "Dr. Kemal Kılıç"
tags: ["K-Means", "RFM", "Clustering"]
---

RFM (Recency, Frequency, Monetary value) is the canonical CLV starting point but treats
each dimension as independent. I extended it with a **weighted K-Means** clustering step
that lets the algorithm discover segments where dimensions interact — e.g. customers
whose frequency and monetary value are co-elevated but recency is low (lapsed VIPs).
Implemented on an e-commerce dataset and validated against holdout spend.
