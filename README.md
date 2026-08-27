# ACLS Code Leader v1.1

Static PWA for GitHub Pages / Netlify.

## Deploy to GitHub Pages
1. Upload every file in this folder to the repository root.
2. GitHub → Settings → Pages → Deploy from a branch → main / root.
3. Open the Pages URL once online. The service worker will cache the app for offline use.
4. iPhone/iPad: Safari → Share → Add to Home Screen.

## v1.1
- CPR metronome 100/110/120 bpm
- 90 s, 110 s and 120 s audio prompts
- 3-minute epinephrine reminder
- rhythm- and shock-dependent voice prompts
- local event log persistence (30-minute recovery window)
- CSV export, native Share Sheet where supported, copyable summary
- PWA manifest, icons, offline service worker, screen wake lock where supported

Clinical cognitive-aid prototype. Validate locally before clinical deployment.


## v1.1 更新
- 首頁即時顯示日期與 24 小時制時間（HH:mm:ss）
- Event timeline 同時顯示實際 24 小時時間與事件 elapsed time
- CSV 同時輸出本機 24 小時時間與 ISO UTC timestamp


## 2025 AHA Bradycardia / Tachyarrhythmia update

This v1.1 build adds interactive Adult Bradycardia With a Pulse and Adult Tachyarrhythmia With a Pulse pathways based on the 2025 AHA algorithms, including atropine/TCP/vasoactive infusion prompts, stability/QRS branching, adenosine, stable wide-QRS antiarrhythmic references, and 2025 synchronized cardioversion energy references.

This remains a clinical cognitive-aid prototype and requires local governance/protocol validation before clinical deployment.
