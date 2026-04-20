---
title: "AI Use in Health: Ethical Framework for Diagnostic Applications"
description: "Group project evaluating ethical risks of AI-based diagnostic systems (medical imaging for pneumonia, cancer, and cardiovascular conditions) and proposing a responsible design framework built on contestability, explainability, accountability, privacy, fairness, and answerability."
pubDate: "2025-09-01"
category: "Machine Learning"
institution: "Sabanci University"
supervisor: "DS440/CS540"
tags: ["AI Ethics", "Healthcare AI", "Explainability", "Contestability", "Deep Learning", "GRAD-CAM", "SHAP"]
---

## Overview

Deep learning models are increasingly used in healthcare diagnostics — examining chest X-rays, MRIs, and CT scans to identify diseases including pneumonia, cancer, and cardiovascular conditions. Systems like CheXNet have demonstrated performance comparable to radiologists on specific tasks. Yet high technical performance alone is insufficient for responsible deployment: bias, lack of transparency, privacy risks, and accountability gaps remain critical unresolved challenges.

This project, completed as part of DS440/CS540 at Sabanci University, conducts a systematic review of AI diagnostic systems and develops a comprehensive ethical design framework for their responsible use in clinical settings.

## AI Diagnostic Systems: Capabilities and Risks

AI-based diagnostic systems offer significant advantages — processing large volumes of medical data consistently, reducing diagnostic delays, and enabling early disease detection. However, the review identifies four principal risk categories:

| Risk | Description |
|---|---|
| **Data Bias** | Training datasets lacking diversity perform poorly on underrepresented populations, producing unequal healthcare outcomes |
| **Explainability Gap** | Black-box models make it difficult to understand predictions, reducing clinician trust and clinical adoption |
| **Privacy** | Medical image data is vulnerable to re-identification attacks; sensitive patient information requires robust protection |
| **Accountability** | When AI errors cause patient harm, tracing responsibility across developers, institutions, and clinicians is legally and ethically complex |

## Ethical Framework

Each team member developed a design principle to address a specific identified risk. The six principles together form an integrated framework for trustworthy clinical AI.

### Contestability *(Hooshmand)*
Contestability enables patients and clinicians to **challenge AI-generated decisions** rather than passively accepting them. Effective implementation requires:
- Clinician override capabilities with justification logging
- Interpretable outputs: confidence scores, key diagnostic indicators, and alternative diagnoses
- Feedback channels and audit logs enabling users to report disagreements and track decisions over time

Contestability enhances trust and accountability without compromising system performance — focusing on providing relevant information rather than fully exposing complex model internals (Ploug & Holm, 2020).

### Explainability *(Group & Berk)*
Selected as the central group principle, explainability ensures AI decision-making is **transparent and understandable** to clinicians and patients. Implementation integrates visual explanation methods — **GRAD-CAM** and **SHAP** outputs presented as heatmaps — showing which regions of a medical image drove a prediction. Explainability is the connective tissue between other ethical principles: interpretable outputs make contestability, accountability, and answerability all more effective.

### Accountability *(Selin)*
AI-assisted diagnoses must be fully traceable. The framework retains model outputs, confidence ratings, and system logs; physicians maintain final authority and can disregard AI recommendations; and mechanisms for reviewing incorrect predictions are built into the system design.

### Privacy *(Cansu)*
Medical image data requires anonymization, encryption during storage and processing, and access restricted to authorized users only — preventing re-identification and misuse of sensitive patient information.

### Fairness *(Sena)*
The system monitors performance differences across patient groups (age, gender, background) and flags disparities for correction, ensuring equal diagnostic accuracy for all patients.

### Answerability *(Talha)*
The system provides clear, understandable explanations for every prediction — including relevant image regions, confidence scores, and the main factors influencing the decision — so clinicians can meaningfully assess whether an output is reliable in its clinical context.

## Status

Course project in progress — DS440/CS540, Sabanci University, Spring 2026.
