---
title: "AI Use in Health: Ethical Framework for Diagnostic Applications"
description: "Evaluation of ethical risks in AI-based medical diagnostic systems and design of a responsible framework built on contestability, explainability, accountability, privacy, fairness, and answerability — with a focus on contestability as the mechanism enabling meaningful human oversight."
pubDate: "2025-09-01"
category: "Machine Learning"
institution: "Sabanci University"
supervisor: "Sabanci University"
tags: ["AI Ethics", "Healthcare AI", "Explainability", "Contestability", "Deep Learning", "GRAD-CAM", "SHAP"]
---

## Overview

Deep learning models are increasingly deployed in healthcare diagnostics — examining chest X-rays, MRIs, and CT scans to identify diseases including pneumonia, cancer, and cardiovascular conditions. Systems like CheXNet have demonstrated performance comparable to radiologists on specific tasks. Yet high technical performance alone is insufficient for responsible clinical deployment: bias, lack of transparency, privacy vulnerabilities, and accountability gaps remain unresolved challenges that can directly harm patients.

This project conducts a systematic review of AI diagnostic systems and develops a comprehensive ethical design framework for their responsible use in clinical settings, with a particular focus on **contestability** as the mechanism through which human oversight becomes meaningful rather than nominal.

## Capabilities and Risks of AI Diagnostic Systems

AI diagnostic systems offer genuine advantages — processing large volumes of medical data consistently, reducing diagnostic delays, and enabling early disease detection. However, four principal risk categories undermine responsible deployment:

| Risk | Description |
|---|---|
| **Data Bias** | Training datasets lacking diversity perform poorly on underrepresented populations, producing unequal healthcare outcomes |
| **Explainability Gap** | Black-box models make it difficult to understand how predictions are generated, reducing clinician trust and limiting clinical adoption |
| **Privacy** | Medical image data is vulnerable to re-identification attacks; sensitive patient information requires robust anonymization and access controls |
| **Accountability** | When AI errors cause patient harm, tracing responsibility across developers, institutions, and clinicians is legally and ethically complex |

## Ethical Design Framework

Six complementary principles form an integrated framework for trustworthy clinical AI. Each principle addresses a specific identified risk while collectively ensuring the system is not only accurate but safe, transparent, and human-centered.

### Contestability
Contestability enables patients and clinicians to **challenge AI-generated decisions** rather than passively accepting them. A diagnostic AI must provide sufficient information for meaningful disagreement — not merely surface-level outputs that appear convincing after the fact.

Effective contestability requires:
- Clinician override capabilities with justification logging
- Interpretable outputs: confidence scores, key diagnostic indicators, and alternative diagnoses
- Feedback channels and audit logs enabling users to report disagreements and track decisions over time

Contestability enhances trust and accountability without compromising system performance — focusing on providing decision-relevant information rather than fully exposing complex model internals (Ploug & Holm, 2020).

### Explainability
Explainability ensures AI decision-making is **transparent and interpretable** to clinicians and patients. Implementation integrates visual explanation methods — **GRAD-CAM** and **SHAP** outputs presented as heatmaps — showing which regions of a medical image drove a prediction. Explainability is the connective tissue between all other ethical principles: interpretable outputs make contestability, accountability, and answerability operationally effective.

### Accountability
AI-assisted diagnoses must be fully traceable. The framework retains model outputs, confidence ratings, and system logs; physicians maintain final authority and can disregard AI recommendations; mechanisms for reviewing and auditing incorrect predictions are embedded in the system design.

### Privacy
Medical image data requires anonymization so individuals cannot be re-identified, encryption during storage and processing, and access restricted to authorized users only — preventing misuse of sensitive patient information and ensuring legal and ethical compliance.

### Fairness
The system monitors performance differences across patient groups — by age, gender, and background — and flags disparities for correction, ensuring equal diagnostic accuracy for all patients and preventing AI from amplifying existing healthcare inequalities.

### Answerability
Every prediction is accompanied by a clear, structured explanation — including relevant image regions, confidence scores, and the main factors influencing the decision — so clinicians can meaningfully assess whether the output is reliable and appropriate in its specific clinical context.