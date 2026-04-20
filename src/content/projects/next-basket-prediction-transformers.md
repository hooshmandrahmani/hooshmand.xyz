---
title: "Next-Basket Prediction using Bidirectional Transformers"
description: "Progressive enhancement framework for e-commerce next-basket recommendation — replacing a GRU baseline with a bidirectional BERT4Rec Transformer and structured data augmentation, achieving a 4× improvement in Recall@10 on the Retail Rocket dataset."
pubDate: "2025-06-01"
category: "Machine Learning"
institution: "Sabanci University"
supervisor: "Dr. Yucel Saygin"
tags: ["Transformers", "BERT4Rec", "Deep Learning", "Recommender Systems", "E-Commerce"]
---

## Overview

Next-basket recommendation (NBR) asks: given a customer's full purchase history, what items will appear in their **next** shopping basket? Unlike predicting a single next item, NBR must infer an unordered set of potentially co-dependent items — a harder and more realistic problem that more closely mirrors how consumers shop (buying complementary items together: printer + ink, recipe ingredients, fashion ensembles).

This project, carried out as a team of six researchers for CS 525 at Sabanci University, systematically enhanced a recurrent neural network baseline toward a state-of-the-art Transformer-based architecture. The paper follows a **progressive enhancement framework**: each addition is independently validated before layering on the next.

## Baseline and Enhancements

### Baseline: GRU
The starting point was a standard Gated Recurrent Unit (GRU) model that encodes the sequence of historical baskets and predicts the next basket as a multi-label classification problem.

### Enhancement 1: Bidirectional Transformer (BERT4Rec)
The GRU encoder was replaced with a **bidirectional Transformer** inspired by BERT4Rec — using a Cloze-style masking objective where randomly masked items in the basket sequence must be predicted from bidirectional context. This allows the model to capture both past and future (within the sequence) dependencies simultaneously, which a unidirectional RNN cannot do.

### Enhancement 2: Data Augmentation
Four augmentation strategies were applied to address data sparsity and improve generalization:

| Technique | Description |
|---|---|
| **Item masking** | Randomly mask items within baskets during training |
| **Sequence cropping** | Truncate purchase histories to various lengths |
| **Sequence reversing** | Train on reversed purchase sequences |
| **Intra-basket sorting** | Reorder items within baskets by different criteria |

These augmentations effectively multiply the training signal for users with short histories — a common challenge in real e-commerce datasets.

## Experimental Results

Experiments were conducted on the **Retail Rocket** dataset. The table below summarizes Recall@10 across model variants:

| Model | Recall@10 |
|---|---|
| GRU baseline | 0.0177 |
| Transformer + Augmentation | 0.0658 |
| BERT4Rec standalone | **0.0731** |

Each enhancement contributed meaningfully: the Transformer architecture alone improved recall significantly, and data augmentation provided additional gains. BERT4Rec standalone achieved the highest recall, while the combined Transformer + augmentation system offered the best balance of performance and robustness.

## Key Finding

Bidirectional context modeling — allowing the model to see what a user purchased both before and after a masked item in training — substantially outperforms forward-only sequential models for capturing the complementary structure of shopping baskets. Data augmentation further improves generalization on sparse user histories.
