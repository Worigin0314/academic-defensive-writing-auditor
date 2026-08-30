---
name: academic-defensive-writing-auditor
description: Detect and rewrite defensive, reviewer-facing, disclaimer-heavy academic prose while preserving necessary scientific caveats and evidence boundaries.
version: 1.0.0
license: MIT
---

# Academic Defensive Writing Auditor

## Purpose

Audit academic writing for language that sounds defensive, anxious, reviewer-facing,
over-explanatory, legally disclaiming, or artificially self-protective.

The goal is **not** to remove legitimate scientific uncertainty or make claims stronger
than the evidence supports.

Prefer:

> claim → evidence → concise boundary

over:

> anticipated objection → disclaimer → justification → weakened claim → another disclaimer

A scientific caveat is useful when it changes how evidence should be interpreted.
A defensive caveat is harmful when it mainly anticipates reviewer criticism.

## Defensive Writing Taxonomy

### D1. Reviewer-facing prebuttal
Signals:
- "We emphasize that..."
- "It should be noted that..."
- "Importantly, we do not claim..."
- "To avoid misunderstanding..."
- "One might argue that..."
- "A potential concern is..."

Action:
State the technical fact directly.

### D2. Repeated non-claim disclaimers
Signals:
- "We do not claim that..."
- "This should not be interpreted as..."
- "This does not establish..."
- "We make no claim regarding..."

Action:
State the supported claim positively and scope it once.

### D3. Caveat stacking
Signals:
Multiple although / while / despite / within / only / may / might / potentially
qualifiers around one claim.

Action:
Keep the strongest supported claim and move one material limitation to the proper section.

### D4. Excusing imperfect results
Signals:
- "The lower score is likely due to..."
- "This degradation is expected because..."
- "The result remains encouraging despite..."
- "Given the difficulty of the setting..."

Action:
Report the result first. Explain only when supported by evidence or diagnostics.

### D5. Justifying omitted experiments
Signals:
- "We did not include X because..."
- "X is unnecessary because..."
- "Such a comparison would be unfair..."
- "We leave this out since..."

Action:
If material, state the omission once as a limitation. Otherwise describe the evaluation
protocol rather than arguing with an imagined reviewer.

### D6. Fairness self-defense
Signals:
- "For a fair comparison..."
- "To ensure fairness..."
- "This provides a fair setting..."
- "We believe this is sufficient..."

Action:
Describe the controlled variable directly.

Example:
Bad:
> For a fair comparison, all methods use the same backbone.

Better:
> All methods use the same backbone.

### D7. Preliminary / limited-scope repetition
Repeated use of:
- preliminary
- initial
- suggestive
- exploratory
- proof-of-concept
- within-scope
- indicative

Action:
Use these labels only when technically necessary.

### D8. Legalistic disclaimer prose
Long lists of things the paper should not be interpreted as claiming.

Action:
Convert them into short positive scope statements.

### D9. Irrelevant defensive disclosure
Reporting exploratory failures or procedural detours that do not affect validity,
reproducibility, or interpretation.

Action:
Keep only details that matter scientifically. Move the rest to supplement or repository logs.

### D10. Promotional compensation
Signals:
- strong
- favorable
- compelling
- practical
- reliable
- safe
- auditable
- comprehensive
- robust
- promising
- encouraging

Action:
Replace adjectives with measurements, protocol facts, or named properties.

### D11. AI-style automatic summary sentences
Signals:
- "Together, these results demonstrate..."
- "Taken together, these findings..."
- "This provides a concrete foundation for..."
- "These results further validate..."

Action:
Delete if redundant, or replace with the single specific inference justified by the data.

### D12. Evidence-boundary over-signaling
Pattern:
> The evidence supports X within the evaluated scope, but does not establish Y.

Action:
Usually prefer:
> Under the evaluated setting, X.

Mention untested generalization once in Limitations if material.

### D13. Absolute defensive claims
Signals:
- "Any adaptive method would fail..."
- "This guarantees..."
- "It is impossible..."
- "There is no need..."
- "No method can..."

Action:
Use the exact empirical or theoretical condition supporting the statement.

### D14. Contribution-by-relabeling language
Signals:
- introducing new terminology for a standard operation;
- repeatedly defending novelty;
- "our method is not simply X applied to Y."

Action:
Describe the actual technical delta directly.

## Scientific Caveat vs Defensive Wording Test

For every suspicious sentence:

1. **Validity:** Would removing it make the interpretation materially misleading?
2. **Evidence:** Does it report a supported condition, uncertainty, or limitation?
3. **Reviewer simulation:** Is its main purpose to answer an imagined criticism?
4. **Positive reformulation:** Can it be stated as what was evaluated, observed, or outside scope?
5. **Duplication:** Has the same caveat already appeared elsewhere?

Classify each case as:
- NECESSARY_CAVEAT
- DEFENSIVE
- MIXED
- CLEAN

## Severity

- **Critical**: rebuttal-like, apologetic, argumentative, or legalistic.
- **Major**: repeated caveating, result excuses, omitted-experiment defense, promotional compensation.
- **Minor**: local stylistic defensiveness.

## Audit Procedure

### Pass 1 — Detection
Mark D1–D14 patterns sentence by sentence.

### Pass 2 — Necessity classification
Assign NECESSARY_CAVEAT / DEFENSIVE / MIXED / CLEAN.

### Pass 3 — Reviewer reaction
For DEFENSIVE or MIXED cases, explain likely reviewer perception in one sentence.

### Pass 4 — Rewrite
Rules:
1. Put the empirical or technical fact first.
2. Prefer positive scope statements.
3. Keep at most one material caveat per claim.
4. Replace adjectives with measurements.
5. Describe controls rather than calling them fair.
6. Do not explain weak results without evidence.
7. Do not strengthen claims beyond the evidence.
8. Preserve necessary uncertainty.
9. Prefer deletion when a sentence adds no technical information.

### Pass 5 — Paper-level audit
Check:
- repeated limitations;
- abstract disclaimers;
- limitations inside contribution bullets;
- reviewer-facing result interpretation;
- rebuttal-like discussion;
- self-weakening conclusion;
- defended omissions;
- vague praise;
- repeated AI-style summary sentences.

## Required Output Format

| Location | Original | Type | Severity | Necessary caveat? | Why it feels defensive | Likely reviewer reaction | Recommended action | Rewrite |
|---|---|---|---|---|---|---|---|---|

Then provide:

### Paper-level defensive-writing score
0–10:
- 0–2: clean
- 3–4: mild
- 5–6: noticeable
- 7–8: strong
- 9–10: rebuttal-like / disclaimer-heavy

### Highest-priority removals
List the 3–10 edits most likely to improve reviewer perception.

### Necessary caveats to preserve
List caveats that should not be deleted.

### Repeated phrase audit
Count repeated constructions when the full paper is available.

## Rewrite Style

Use:
- compact academic English,
- direct subject–verb structure,
- measurable statements,
- exact scope conditions,
- neutral interpretation.

Do not replace defensive writing with hype.

## Defense-Only Mode

When asked to inspect only defensive writing:
- do not score novelty;
- do not judge technical correctness except as needed to preserve caveats;
- do not recommend extra experiments unless the text explicitly defends a missing one;
- focus on framing, style, and claim discipline.

## Full-Paper Cleanup Mode

When given a complete manuscript:
1. Audit Abstract and Introduction first.
2. Audit contribution bullets.
3. Audit Results and Discussion.
4. Audit Limitations for redundancy.
5. Audit Conclusion for unnecessary self-weakening.
6. Return a ranked edit list.
7. If requested, provide a cleaned version preserving technical meaning.
