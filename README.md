# ACLS Code Leader v1.2

Adult ACLS cognitive aid + random Mega Code training simulator.

## v1.2
- Added **Mega Code Simulator** as a separate fifth mode.
- Random synthetic cases: refractory VF, PEA from tension pneumothorax, PEA/hyperkalemia, symptomatic bradycardia, unstable monomorphic VT, stable SVT, unstable AF with RVR, and stable wide-complex tachycardia that can deteriorate.
- Practice mode gives immediate feedback; Exam mode hides correctness until debrief.
- Random age / sex / clinical setting, staged vital-sign and rhythm changes.
- Action scoring, hints, errors, missed key actions and case-specific debrief.
- Mega Code actions are also timestamped in the local event record and remain exportable to CSV.

## Existing features retained
- Adult cardiac arrest code leader with 2-minute CPR cycle, metronome and audio reminders.
- Bradycardia and tachycardia interactive pathways.
- 24-hour date/time display and timestamped event log.
- CSV export/share/copy summary.
- PWA/offline-ready structure for GitHub Pages / Netlify.

## Clinical note
This is a training/cognitive-aid prototype, not a substitute for clinician judgment, formal ACLS training, local protocols, or device-specific instructions. Mega Code cases are synthetic and simplified. Core flow logic follows the 2025 American Heart Association adult ACLS algorithms.


## Credit
奇美加護醫學部專科護理師 洪苡瑾


## v1.5 training updates
- Post-ROSC temperature control: 32–37.5°C for at least 36 h if not following verbal commands after ROSC.
- Dedicated ECG Rhythm Lab.
- Mega Code 20-second pressure exam mode.
- Mega Code cardioversion energy questions (AF 200 J, flutter 200 J, narrow-complex 100 J, monomorphic VT 100 J; polymorphic VT unsynchronized high-energy shock).


## v1.5 Mega Code expansion
- Mega Code case bank expanded from 17 to 25 distinct scenarios.
- Recent-case exclusion increased from 5 to 8 cases.
- Added PEA due to hypovolemia, hypoxia, pulmonary thrombosis, acidosis, coronary thrombosis; toxicologic symptomatic bradycardia; second-dose adenosine SVT; unstable polymorphic VT with unsynchronized shock.


## v1.8 Advanced Mega Code
- ECG Lab: 36 strip variants; last 15 strip IDs are excluded from random draw.
- Mega Code: 33 scenarios total, including advanced multi-rhythm cases with 2–4 rhythm transitions in one case.
- Advanced cases include VF↔pVT, PEA→VF, Asystole→PEA→VF, Mobitz II→complete heart block→PEA, SVT→flutter, WCT→monomorphic VT→polymorphic VT, AF→flutter, and post-ROSC re-arrest.

- v1.8: Advanced multi-rhythm Mega Code weighted to 85% of random draws when advanced cases are available.


## v1.8 Exam / Pressure flow
- Exam mode hides live Correct / Errors counts.
- Wrong or incomplete actions do not reveal the answer; the UI states that critical steps remain.
- `提交本 Stage` lets the learner submit an incomplete stage and continue; missing critical actions are disclosed in Debrief.
- Pressure mode auto-submits and advances when the 20-second decision timer expires.
- Debrief reviews missing critical actions across every stage, not only the final stage.


## v1.8 updates
- Mega Code energy selection moved directly below the case card with prominent Step 1 energy buttons; Step 2 is Sync cardioversion / Defibrillation.
- ECG Rhythm Lab expanded to 31 diagnoses × 3 variants = 93 synthetic teaching strips.
- ECG Lab prevents repetition of the same diagnosis within the most recent 20 questions.
- Added atrial tachycardia, MAT, accelerated junctional rhythm, flutter with variable block, AF with aberrancy/irregular WCT, ventricular paced rhythm, idioventricular/AIVR, PVC bigeminy, ventricular escape rhythm, 2:1 AV block, and sinus pause/arrest.
