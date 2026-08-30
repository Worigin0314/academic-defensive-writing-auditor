# Full-Paper Cleanup Prompt

Perform a full-paper defensive-writing cleanup using `SKILL.md`.

Priority order:
1. Abstract
2. Introduction
3. Contributions
4. Results
5. Discussion
6. Limitations
7. Conclusion
8. Figure/table captions

Preserve technical meaning and necessary uncertainty.

Editing rules:
- state results before explanations;
- use positive scope statements instead of repeated "we do not claim" sentences;
- remove reviewer-facing prebuttals;
- reduce repeated caveats;
- replace "fair/strong/promising/reliable" with protocol facts or measurements;
- do not explain weak results without evidence;
- do not justify omitted experiments unless the limitation materially affects interpretation;
- delete redundant AI-style summary sentences;
- never upgrade a claim beyond the available evidence.

Return:
- a ranked audit table;
- paper-level patterns;
- a list of caveats that must remain;
- and, if requested, a cleaned replacement version.
