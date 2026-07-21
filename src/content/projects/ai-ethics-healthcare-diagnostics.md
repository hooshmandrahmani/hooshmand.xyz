---
title: "AI Use in Healthcare: Ethical Framework for Diagnostic Applications"
description: "Graduate AI-ethics project combining a six-principle ethical design framework for AI-assisted medical diagnosis with a working explainability pipeline (Grad-CAM, Integrated Gradients, LIME, and SHAP on brain-tumor MRI and stroke-CT classifiers, evaluated quantitatively against ground-truth lesion masks) at its core."
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

My focus throughout was **explainability**: building the layer that makes the model's reasoning inspectable, and that the other five principles depend on to be operationally meaningful.

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

- **Contestability**: patients and clinicians can challenge, scrutinize, and revise AI-generated decisions, operationalizing Ploug and Holm's four-domain framework of data, bias, performance, and decision involvement.
- **Accountability**: an immutable, append-only audit log of every AI suggestion, clinician interaction, override, and outcome, with clear role definitions across vendor, hospital, physician, and IT.
- **Explainability**: a layered explainable-AI stack whose outputs can be inspected and judged by domain experts (detailed below).
- **Privacy**: differential privacy at training time, federated learning to keep raw data on premise, and de-identification of imaging metadata.
- **Fairness**: group-level and individual-level fairness metrics with a stratified evaluation dashboard and corrective routines when subgroup error gaps exceed tolerance.
- **Answerability**: natural-language explanation cards that translate technical outputs into clinically meaningful narratives for patients, clinicians, and auditors.

The central design insight is that these principles are not independent: explainability makes contestability and accountability operationally meaningful; privacy enables fairness auditing without exposing raw data; and every principle depends on tamper-evident logging. They also conflict. Maximum explainability can leak training data, and strict privacy can degrade rare-class performance exactly where contestability matters most. The framework treats these as tunable design parameters rather than absolute commitments.

## Designing for Explainability

Explainability is the connective tissue of the whole framework: it is the principle that makes contestability, accountability, and answerability operationally meaningful rather than aspirational. Three considerations shaped the design.

First, explainability is foundational: transparency about *how* a system arrived at a decision is a precondition for the moral demands of *why* we should accept it (Coeckelbergh, 2020). Second, the other five principles reduce, in their operational form, to questions explainability can directly help answer: *Why this prediction? On what evidence? With what subgroup performance? Logged where?* Third, medical image classification is a domain where explainable AI methods have been extensively evaluated in the literature, providing a well-validated foundation to build on rather than starting from first principles.

The explainability layer has four components:

1. **Backbone classifiers**: a ResNet50 fine-tuned on a brain-tumor MRI dataset and a ConvNeXt-Tiny fine-tuned on a stroke-CT corpus, providing two representative diagnostic tasks.
2. **Post-hoc saliency methods**: Grad-CAM, Integrated Gradients, LIME, and SHAP, deployed in parallel to provide complementary perspectives: gradient-based vs. perturbation-based, coarse vs. fine resolution, model-specific vs. model-agnostic.
3. **Quantitative localization evaluation**: saliency maps are binarized at a consistent threshold and compared against ground-truth lesion masks using Intersection over Union (IoU), addressing the central critique of XAI in healthcare: that explanations are usually assessed only qualitatively, by how convincing they look.
4. **Clinical-explanation interface**: XAI outputs are rendered as side-by-side overlays accompanied by an answerability card summarizing the evidence the model used, its calibrated confidence, and the corresponding contestability variables.

Direct beneficiaries are clinicians (verifying that the model uses clinically meaningful regions), patients (gaining the morally relevant information needed for contestation), regulators (CONSORT-AI / CLAIM compliance), and developers (debugging shortcut learning). Costs include compute (LIME and SHAP run 50–500× slower than Grad-CAM), interface complexity, and the risk of *explanation-induced over-trust*, where visually appealing heatmaps can lend false confidence even when their localization is poor.

Explainability also sits in tension with the other principles: detailed explanations make model-extraction and membership-inference attacks easier, cutting against privacy; they can conflict with a vendor's reluctance to expose internals; and explanations that are too detailed overwhelm both clinicians and patients. The design addresses these trade-offs by serving *layered* explanations: a one-line plain-language summary by default, a clinician-facing saliency overlay on request, and a full audit-grade report only when needed.

## From Principles to a Running System

To test whether the design survives contact with real code, I built a proof-of-concept pipeline implementing the explainability layer end to end, running all four saliency methods against the two backbone classifiers.

![Sample explanation maps on five stroke-CT test cases: input slice, ground-truth lesion mask, and the four explanation methods](/projects/xai-stroke-ct-saliency.jpg)

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
