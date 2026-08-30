# Before / After Examples

## 1. Non-claim disclaimer

**Before**

> We emphasize that these results should not be interpreted as evidence of universal robustness.

**After**

> Robustness is evaluated under the three shifts defined in Sec. 4.2.

---

## 2. Fairness defense

**Before**

> For a fair comparison, all methods are evaluated using the same encoder.

**After**

> All methods use the same encoder.

---

## 3. Weak-result excuse

**Before**

> Although the gain is relatively small, this result is still encouraging given the difficulty of the dataset.

**After**

> Macro-F1 increases from 71.4 to 72.1.

---

## 4. Caveat stacking

**Before**

> While these retrospective experiments provide preliminary evidence within the evaluated setting, they do not establish that the approach will necessarily generalize to unseen deployment environments.

**After**

> The retrospective experiments evaluate the method on the settings defined in Sec. 4.

If unseen deployment environments are a material limitation, mention that once in Limitations.

---

## 5. Promotional compensation

**Before**

> Our method provides strong, reliable, and practical performance.

**After**

> Our method improves accuracy by 2.6 points and reduces inference latency by 18%.

---

## 6. AI-style automatic summary

**Before**

> Taken together, these results provide a concrete foundation for reliable deployment.

**Action**

Delete if it merely repeats the preceding measurements.

---

## 7. Omitted-experiment defense

**Before**

> We do not compare against Method X because such a comparison would be unfair due to its different training assumptions.

**After**

> Method X assumes access to labeled target-domain data, whereas our protocol does not.

---

## 8. Necessary caveat that should remain

**Before**

> Confidence intervals are wide because the evaluation contains 18 subjects.

**Better**

> The 18-subject evaluation yields wide confidence intervals.

This is a scientific caveat, not merely defensive wording.
