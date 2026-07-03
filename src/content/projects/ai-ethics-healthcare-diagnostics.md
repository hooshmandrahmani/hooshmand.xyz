---
title: "AI Use in Healthcare: Ethical Framework for Diagnostic Applications"
description: "Graduate AI-ethics project combining a six-principle ethical design framework for AI-assisted medical diagnosis with a working explainability pipeline (Grad-CAM, Integrated Gradients, LIME, and SHAP on brain-tumor MRI and stroke-CT classifiers, evaluated quantitatively against ground-truth lesion masks) and a patient-centric contestability framework as my individual contribution."
pubDate: "2026-05-18"
category: "Machine Learning"
institution: "Sabanci University"
supervisor: "Dilara Keküllüoğlu"
tags: ["AI Ethics", "Healthcare AI", "Explainable AI", "Contestability", "Deep Learning"]
---

## Overview

AI-based diagnostic systems now routinely analyze chest X-rays, MRI scans, CT volumes, and dermatological photographs, often reaching accuracies comparable to expert clinicians. Yet the high-stakes nature of clinical decision-making makes their ethical risks uniquely acute: a misdiagnosis or an unfair predictive pattern can translate immediately into physical harm, eroded trust, and amplified health inequities.

This graduate project in Data and AI Ethics (Spring 2026) examined **AI-assisted medical image diagnosis** (brain-tumor detection from MRI, stroke detection from CT, pneumonia detection from chest X-rays) and made three contributions:

1. A critical review of the use case: its benefits, documented biases, privacy vulnerabilities, and regulatory landscape.
2. An **integrated ethical design framework** built on six principles: contestability, accountability, explainability, privacy, fairness, and answerability.
3. A **working proof-of-concept**: a medical image classification pipeline with four explainability methods, evaluated *quantitatively* against ground-truth lesion masks rather than by visual appeal alone.

My individual focus within the project was **contestability**: designing the mechanisms through which patients and clinicians can meaningfully challenge an AI-supported decision.

## Why Diagnostic AI Needs More Than Accuracy

Four structural risks undermine responsible deployment of diagnostic AI:

| Risk | Description |
|---|---|
| **Data bias** | Representational, historical, measurement, and label bias. A widely used commercial risk algorithm assigned the same risk score to Black patients who were measurably sicker than white patients, because its proxy label (healthcare cost) was itself a biased signal of need |
| **Explainability gap** | Black-box models can rely on *shortcut features* with no causal relation to disease, and their reasoning is difficult for clinicians to inspect and judge |
| **Privacy** | Even after de-identification, medical images are vulnerable to re-identification attacks; privacy-preserving training introduces accuracy trade-offs that fall hardest on under-represented groups |
| **Accountability** | When an AI-assisted decision causes harm, responsibility is distributed across vendors, hospitals, and clinicians, and is legally difficult to trace |

Regulation is catching up: the EU AI Act classifies medical-device AI as high-risk and mandates human oversight, transparency, and post-market monitoring. But legal recourse is often inaccessible to individual patients, which motivates designing systems that build the ability to contest into the workflow itself.

## An Integrated Six-Principle Framework

Each principle was designed in depth and then integrated into a single socio-technical system spanning data governance, model design, user interface, and dispute handling:

- **Contestability**: patients and clinicians can challenge, scrutinize, and revise AI-generated decisions (my individual design, detailed below).
- **Accountability**: an immutable, append-only audit log of every AI suggestion, clinician interaction, override, and outcome, with clear role definitions across vendor, hospital, physician, and IT.
- **Explainability** *(the group principle)*: a layered explainable-AI stack whose outputs can be inspected and judged by domain experts.
- **Privacy**: differential privacy at training time, federated learning to keep raw data on premise, and de-identification of imaging metadata.
- **Fairness**: group-level and individual-level fairness metrics with a stratified evaluation dashboard and corrective routines when subgroup error gaps exceed tolerance.
- **Answerability**: natural-language explanation cards that translate technical outputs into clinically meaningful narratives for patients, clinicians, and auditors.

The central design insight is that these principles are not independent: explainability makes contestability and accountability operationally meaningful; privacy enables fairness auditing without exposing raw data; and every principle depends on tamper-evident logging. They also conflict. Maximum explainability can leak training data, and strict privacy can degrade rare-class performance exactly where contestability matters most. The framework treats these as tunable design parameters rather than absolute commitments.

## My Contribution: Designing for Contestability

Of the available principles, contestability most directly empowers the patient as a moral agent. Explainability, accountability, and fairness concern what the system can *say* about itself; contestability concerns what the patient can *do* when they disagree with what the system says. An explanation that affords no opportunity to revise the underlying decision falls short of what interpretability is meant to deliver.

My design operationalizes Ploug and Holm's four-domain framework, which identifies the four kinds of information a patient minimally needs to mount an effective challenge: **data** (where the training data came from and how the patient's own data was handled), **bias** (documented subgroup performance and audit history), **performance** (accuracy, calibration, and out-of-distribution warnings), and **decision involvement** (whether the AI screens, triages, or supports, and where the final decision sits). The system has five components:

1. **Per-prediction contestability card**: a one-page, machine-readable card generated automatically for every diagnostic prediction, covering all four domains.
2. **Clinician override with mandatory justification**: overriding the AI requires a structured, coded reason plus free-text justification, making disagreement a first-class interaction rather than a hidden option.
3. **Patient appeal channel**: a structured pathway (second clinician re-read without AI, specialist review, audit-grade card copy) that does not require legal representation.
4. **Tamper-evident audit log**: every prediction, override, appeal, and outcome is written to an append-only, hash-chained log, so contestation events cannot be silently rewritten.
5. **Contestability triage classifier**: a lightweight secondary model that prioritizes appeals most likely to surface genuine model errors, keeping the appeal channel usable at scale.

Deliberately, the design does not require full model transparency. Instead, it provides the *morally relevant* information needed for self-protection, delivered in layers so that time-critical clinical workflows are not delayed.

In the group implementation, I built the **contestability card module**: a Python component that consumes the explainability pipeline's outputs (saliency maps, per-prediction confidence, latest fairness audit) and produces the structured card, writing each prediction-and-card pair to the hash-chained audit log.

## From Principles to a Running System

To test whether the framework survives contact with real code, the group implemented a proof-of-concept pipeline: a **ResNet50** fine-tuned on a brain-tumor MRI dataset (four classes) and a **ConvNeXt-Tiny** fine-tuned on a stroke-CT corpus, with four post-hoc explanation methods run in parallel: **Grad-CAM**, **Integrated Gradients**, **LIME**, and **SHAP**. The four were chosen to cover complementary perspectives: gradient-based vs. perturbation-based, coarse vs. fine resolution, model-specific vs. model-agnostic.

![Sample explanation maps on five stroke-CT test cases: input slice, ground-truth lesion mask, and the four explanation methods](/projects/xai-stroke-ct-saliency.jpg)

Crucially, the explanations were evaluated **quantitatively**: each saliency map was binarized and compared against ground-truth lesion masks using Intersection over Union (IoU). This addresses the central critique that explanations in medical AI are usually assessed only by how convincing they look.

## What the Numbers Showed

The stroke-CT classifier reached roughly 90% accuracy, providing a solid base for the explainability evaluation across 80 test samples:

| Method | IoU > 0.10 | IoU > 0.30 | Time per image |
|---|---|---|---|
| Grad-CAM | 25.0% | 2.5% | ~0.1 s |
| Integrated Gradients | 23.8% | 1.3% | ~10 s |
| LIME | 13.8% | 0.0% | ~12 s |

**No method reached IoU > 0.5 on any sample.** Grad-CAM was both the fastest and the strongest localizer, yet even it only modestly overlapped the true lesions. This is the project's most important empirical point: visually appealing heatmaps can lend false confidence even when their localization is poor. Explanations should therefore be presented to clinicians as *evidence of where the model looked*, not as verification of the diagnosis, and must be paired with contestability and answerability mechanisms rather than used as a substitute for them.

## Takeaway

Ethical AI in healthcare cannot be achieved by any single principle in isolation. It requires a layered, defense-in-depth configuration spanning data governance, model design, interface, and dispute handling, with components deliberately co-designed so that one principle's strength compensates for another's weakness. And when even the best explanation methods only partially track the true evidence, the right to meaningfully contest the machine is not an optional courtesy; it is a safety requirement.
