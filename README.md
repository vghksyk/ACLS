# ACLS Code Leader v2.4 — Facilitator Pacing

- Mega Code 保留 **🎲 隨機新病例**。
- 新增 **👩‍🏫 Leader 指定病例**：帶課者可依 Cardiac Arrest / Bradycardia / Tachycardia / Advanced multi-rhythm 分類，從 33 個既有病例指定練習題。
- 指定後 Leader panel 自動收起；學員畫面會遮蔽完整 case title 與 future progression，只呈現當前情境，避免爆雷。
- 指定病例沿用原 Practice / Exam / 20 秒 Pressure mode、ECG、energy、scoring 與 Debrief，不另外複製一套邏輯。
- Random mode、CODE DASHBOARD、AUTO REPORT、Reset Case 與其他 Full ACLS modules 保持原有功能。
- 下一階段如有需要，可再加入 **Facilitator Manual Case**，讓 Leader 自訂 rhythm / vitals / scene 與病況推進。

# ACLS Code Leader v2.2.1 — Reset Case UX Fix

- CODE DASHBOARD 與 AUTO REPORT 新增明顯的 **↻ 新病例 / 重置** 按鈕。
- Reset 前會警告本次 Timeline 將被清除，避免誤觸。
- Reset 現在會完整清除新版 Dashboard state：Case ID、CPR、rhythm、shock、Epi、vitals、airway、lab/med timeline、Brady/Tachy 狀態等，避免下一個 case 殘留前一案資料。
- Full ACLS / TRAIN 原有模組內容保持不變。

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

## v1.8.1 — Bradycardia record/export
- Bradycardia page now includes a visible timeline and CSV/share/copy controls.
- Brady treatments are exported with structured event metadata where applicable (drug, dose, pacing, pathway).
- Possible causes are now selectable: first tap = suspected, second tap = addressed, third tap = cleared; states are logged/exported.
- CSV adds Pathway, Cause, and Cause_Status columns.

## v1.8.2 — Tachy refractory review + cause logging
- Refractory tachycardia block is now actionable rather than a single review button.
- Adds rhythm/12-lead re-check, higher-energy cardioversion consideration, antiarrhythmic review, and expert consultation logging.
- Adds selectable tachycardia contributors/underlying causes with suspected → addressed → cleared states.
- Adds Tachycardia timeline/export using the same Case ID and CSV schema.
- Tachy cause events populate Pathway, Cause, and Cause_Status columns.
- Contributor list is explicitly labeled as a clinical teaching checklist, not a fixed AHA Hs & Ts list.


## v1.9 — Arrest documentation upgrade
- Arrest page: ETT size (ID mm) + depth + EtCO2 are separately recorded/exported.
- Added time-stamped blood draw / POC lab workflow and structured ABG/electrolyte/lactate/glucose/Hb fields.
- Added special-circumstance medication recording for sodium bicarbonate and magnesium sulfate; UI explicitly states these are not routine cardiac-arrest drugs under 2025 AHA guidance.
- CSV expanded with airway and lab columns.


## v1.9.1 — Brady / Tachy initial support + Lab documentation
- Bradycardia: added a visible initial support block (Airway/O2, monitor/BP/SpO2/pulse, IV/IO, 12-lead, PPV if needed) before pathway branching in the UI.
- Tachycardia: expanded initial support buttons to include O2 if hypoxemic and monitor/BP/SpO2, plus IV/IO and 12-lead ECG.
- Bradycardia and Tachycardia now each have optional time-stamped Blood draw / POC Lab panels.
- Lab results use the same structured CSV fields as Arrest (pH, PaCO2, PaO2, HCO3, K, iCa, Mg, lactate, glucose, Hb).
- Lab panels are explicitly marked as clinically indicated / documentation aids rather than mandatory ACLS steps.


## v1.9.2 — Arrest defibrillation energy dropdown
- Replaced the free-text Biphasic energy field in Cardiac Arrest with a fast dropdown.
- Quick options: 120 J, 150 J, 200 J, 300 J, 360 J, Maximum available, and Other/custom.
- Other/custom reveals a numeric field for the actual joules used.
- Shock events continue to export the selected actual energy into Timeline/CSV.
- UI notes that defibrillation energy remains device/manufacturer- and local-protocol dependent.


## v1.9.3
- Airway documentation: ETT ID size changed to a prominent dropdown (6.0–9.0 mm + custom).
- Removed compressor-change action from Timeline/export; compressor rotation remains a CPR team workflow reminder rather than a dedicated event log.


## v2.1 Clinical Dashboard
- 新增 CODE DASHBOARD：一頁式 CPR / rhythm / shock energy / epinephrine / IV-IO / airway / lab / ROSC 快速 time-stamp。
- 原 Arrest / Brady / Tachy / Mega Code / ECG Lab / Post-ROSC 完整保留於 FULL ACLS / TRAIN。
- 新增 AUTO REPORT，自動排除 Mega Code training events。
- Vitals / airway / lab / medication details 改為需要時才展開。


## v2.2 Amp-based medication presets
- Emergency medication recording is amp-first, with automatic mg/g/mEq conversion.
- Defaults based on public Chi Mei emergency-cart/drug data: amiodarone 150 mg/3 mL/amp; lidocaine 2% 100 mg/5 mL/amp; sodium bicarbonate 7% 20 mL/amp (16.7 mEq/amp); magnesium sulfate 10% 20 mL/amp (2 g/amp).
- Always verify current hospital stock and local protocol before clinical use.


## v2.4 Facilitator pacing
- Mega Code 的 Leader 指定病例（Practice / Exam）改為 **Leader 控制 stage progression**，不再因學員快速按完按鈕就自動跳下一節律。
- 新增模擬 CPR rhythm-check 節奏：**40 秒（預設） / 60 秒 / 120 秒 / Leader 手動**。
- Learner 按下 Start / Resume CPR 後開始模擬倒數；40 秒到會提示 rhythm / pulse check，但不會自行爆雷下一個 rhythm。
- Leader 可隨時按 **「現在 Rhythm Check」** 推進下一 Stage；若仍缺關鍵步驟，會先確認並把缺漏記入 Debrief。
- 這個加速節奏 **僅限 Mega Code 教學／考站模擬**；CODE DASHBOARD 仍維持臨床 2 分鐘 CPR cycle，epinephrine 仍依實際 3–5 分鐘建議。
- Pressure mode 保持每 Stage 20 秒自動推進。
