# Defense-Only Audit Prompt

Audit the provided academic text **only for defensive writing**.

Follow `SKILL.md`.

Do not:
- judge novelty;
- assign an acceptance score;
- critique technical quality unless required to decide whether a caveat is necessary;
- remove scientifically necessary limitations;
- increase claim strength beyond the evidence.

Find explicit and implicit defensive wording, including:
- pre-emptive reviewer rebuttals;
- repeated non-claim disclaimers;
- caveat stacking;
- excuses for weak results;
- defenses of missing experiments;
- "fairness" claims;
- repeated preliminary/scope qualifiers;
- legalistic disclaimers;
- irrelevant defensive disclosures;
- promotional adjectives replacing measurements;
- AI-style automatic summary sentences.

For every issue return:
1. location;
2. original sentence;
3. taxonomy type;
4. severity;
5. necessary caveat / defensive / mixed;
6. why it feels defensive;
7. likely reviewer reaction;
8. recommended action: delete / rewrite / move / preserve;
9. concise rewrite.

Finish with:
- defensive-writing score from 0–10;
- highest-priority removals;
- necessary caveats to preserve;
- repeated defensive phrase counts.
