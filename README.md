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
