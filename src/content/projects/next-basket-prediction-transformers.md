---
title: "Next-Basket Prediction using Bidirectional Transformers"
description: "Progressive enhancement framework for e-commerce next-basket recommendation — replacing a GRU baseline with a bidirectional BERT4Rec Transformer and structured data augmentation, achieving a 4× improvement in Recall@10 on the Retail Rocket dataset."
pubDate: "2025-10-01"
category: "Machine Learning"
institution: "Sabanci University"
supervisor: "Dr. Yücel Saygın"
tags: ["Transformers", "BERT4Rec", "Deep Learning", "Recommender Systems", "E-Commerce"]
---

## Overview

Next-basket recommendation (NBR) asks: given a customer's complete purchase history, what items will appear in their **next** shopping basket? Unlike single-item next-click prediction, NBR must infer an unordered set of potentially co-dependent items — a substantially harder problem that more closely mirrors actual consumer behavior, where purchases of complementary items (recipe ingredients, fashion ensembles, printer consumables) co-occur within the same transaction.

This project develops a **progressive enhancement framework** for NBR: beginning from a recurrent neural network baseline, each architectural and data-level modification is independently validated before the next is introduced, producing a clean ablation that isolates the contribution of each component.

## Baseline and Enhancements

### Baseline: Gated Recurrent Unit (GRU)

The starting architecture is a standard GRU encoder that processes the sequence of historical baskets and outputs next-basket predictions as a multi-label classification problem. GRUs capture temporal dependencies but are inherently unidirectional — the model can only condition predictions on past purchases, not on the full sequential context.

### Enhancement 1: Bidirectional Transformer (BERT4Rec)

The GRU encoder is replaced with a **bidirectional Transformer** following the BERT4Rec architecture, which employs a Cloze-style masking objective: randomly masked items within the purchase sequence must be predicted from both left and right context simultaneously. This bidirectionality allows the model to capture co-purchase dependencies that a unidirectional encoder cannot — if a user systematically buys items A and C together, masking B and observing both neighbors enables the model to infer that structure.

### Enhancement 2: Structured Data Augmentation

Four augmentation strategies address data sparsity — a pervasive challenge in behavioral recommendation datasets where many users have short or irregular purchase histories:

| Technique | Mechanism |
|---|---|
| **Item masking** | Randomly mask items within baskets during training, creating additional masked prediction targets |
| **Sequence cropping** | Truncate purchase histories to variable lengths, forcing robustness to incomplete histories |
| **Sequence reversing** | Train on reversed purchase sequences, regularizing temporal ordering assumptions |
| **Intra-basket sorting** | Reorder items within baskets under different criteria, diversifying co-occurrence signals |

These augmentations multiply the effective training signal for sparse users and reduce overfitting to specific sequential patterns.

## Experimental Results

Experiments were conducted on the **Retail Rocket** dataset — a large-scale e-commerce clickstream and purchase dataset. Performance is measured by Recall@10, the fraction of true next-basket items appearing in the top-10 predictions:

| Model | Recall@10 |
|---|---|
| GRU baseline | 0.0177 |
| Transformer + Augmentation | 0.0658 |
| BERT4Rec standalone | **0.0731** |

The Transformer architecture alone produced the dominant share of improvement, with data augmentation providing further gains in generalization. BERT4Rec standalone achieved the highest Recall@10; the combined Transformer + augmentation system offered the best robustness-performance balance across user history lengths.

## Key Finding

Bidirectional context modeling — conditioning item predictions on both preceding and subsequent purchases within the masked training objective — substantially outperforms forward-only sequential models for capturing the co-purchase structure of shopping baskets. The 4× improvement over the GRU baseline (0.0177 → 0.0731) demonstrates that architectural choice is the dominant factor, with data augmentation contributing meaningful additional generalization on sparse histories.

The progressive enhancement methodology itself is a transferable contribution: it provides a rigorous framework for isolating the source of performance gains in recommendation systems, as opposed to reporting aggregate improvements from bundles of simultaneous changes.
