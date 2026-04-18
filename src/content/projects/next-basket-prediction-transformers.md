---
title: "Next-Basket Prediction using Bidirectional Transformers"
description: "Improved an e-commerce recommendation system by applying a bidirectional Transformer model with data augmentation to better capture customer shopping patterns."
pubDate: "2025-06-01"
category: "Machine Learning"
institution: "Sabanci University"
supervisor: "Dr. Yucel Saygin"
tags: ["Transformers", "Deep Learning", "Recommender Systems"]
---

Next-basket prediction asks: given a customer's purchase history, what items will appear
in their next basket? Sequential models tend to over-weight recency; bidirectional
attention captures longer-range complementarity (e.g. "bought a printer three months ago,
likely to need ink now").

We applied a BERT-style bidirectional Transformer with basket-level masking and augmented
training data to address sparsity in the long tail of SKUs. The model improved hit-rate@K
on held-out baskets over sequential-only baselines.
