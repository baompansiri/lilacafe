# Task Tracking — LiLa Cafe Website

**Last updated:** 2026-05-28 (v2)

Status: `todo` | `in-progress` | `blocked` | `done`

---

## Phase 0 — Discovery & Setup

| ID | Task | Status | Note |
|---|---|---|---|
| 0.1 | สร้าง CLAUDE.md | done | working protocol |
| 0.2 | ร่าง PRD.md | done | v0.1 รอ user review |
| 0.3 | ร่าง PLAN.md | done | v0.1 |
| 0.4 | ร่าง TASKS.md | done | (this file) |
| 0.5 | User review & approve PRD | in-progress | v0.2 |
| 0.6 | ตอบ PRD Open Questions (§8) | in-progress | ✅ domain, hours, FB, logo, reviews / ⏳ เมนู, รูป facility, hungryhub link, story |
| 0.7 | รวบรวม asset (รูปเมนู/facility) | todo | logo ได้แล้ว (ขอไฟล์ต้นฉบับเพิ่ม) |
| 0.8 | จดโดเมน lilacafe.com | todo | ใช้ placeholder ก่อน |
| 0.9 | ขอ Logo file ต้นฉบับ (SVG/PNG hi-res) | todo | |
| 0.10 | ขอข้อความรีวิว 5-10 อันสำหรับ seed | todo | จาก Google/FB |
| 0.11 | ขอ About/Story ของร้าน | todo | ที่มาของชื่อ "ลีลา" + concept |
| 0.12 | สร้าง menu-data.md (preliminary) | done | จาก FoodStory POS capture |
| 0.13 | Confirm menu data จริง (ราคา + EN + รูปต้นฉบับ) | in-progress | 86 items extracted, 21% confirmed |
| 0.14 | Redesign menu-data schema (table-based + id/type/tags/status) | done | พร้อม parse เป็น JSON ในอนาคต |
| 0.15 | Owner fills ราคา 54 รายการที่ price-tbc | todo | **blocking** Phase 2.2 |
| 0.16 | Owner confirms 14 รายการที่ item-tbc (snacks/soft/signature) | todo | |
| 0.17 | ดาวน์โหลด+resize drink photos จาก Drive (40 ไฟล์, 563MB→5.3MB) | done | gdown + sips, web 1200px/q75 |
| 0.18 | สร้าง menu-image-mapping.md | done | 18 strong + 19 likely match |
| 0.19 | แทน Unsplash placeholders ด้วยรูปจริงใน prototype | done | 27/48 (drinks); food/dessert ยังรอรูป |
| 0.20 | ขอรูปอาหาร/ขนมไทย/เบเกอรี่/พาสต้าเพิ่มจากเจ้าของ | todo | 21 รายการรอ asset |
| 0.21 | ขอรูป interior/facility (5 มุม) | todo | สำหรับ facility.html + hero |
| 0.22 | Retry download ~5 ไฟล์ที่ Drive rate-limit | todo | LILA-083/086/087/088/090/091/092/093 |
| 0.23 | SEO rename รูป: `LILA-NNN` → `lila-cafe-{slug}.jpg` | done | git mv 40 ไฟล์ + update HTML/docs (74 refs) |
| 0.24 | Re-map Coffee 4 รายการหลัก (คาราเมลลาเต้/Es-yen/ลาเต้/อเมริกาโน่) | done | สลับ LILA-043/044/049/053 ให้ตรงตาม POS images ใหม่ |
| 0.25 | Re-map รายการที่เหลือ (~36) | todo | รอ user check verify.html รอบ 2 + ส่ง POS ละเอียดเพิ่ม |
| 0.26 | Process รูปใหม่ใน _downloads/lila-source (164 ไฟล์) | todo | resize + map หลัง user confirm task 0.25 |
| 0.27 | Upgrade verify.html: interactive checkboxes + edit + copy review | done | 3-state buttons + auto-save localStorage + clipboard export markdown |
| 0.28 | Verify v2: list ครบ 86 เมนู + upload + orphan re-assign + add-new + ZIP export | done | client-side resize 1200px JPEG q75 + JSZip; เมนูที่ไม่มีรูป upload ได้, รูป orphan re-assign ได้ |
| 0.29 | Verify v2: hover-zoom preview popup | done | floating 480px preview ตามเคอร์เซอร์, touch tap toggle, ESC ปิด |

---

## Phase 0.5 — HTML Prototype (New Requirement)

**Goal:** เจ้าของร้านดู look & feel ก่อน commit Next.js build

| ID | Task | Status | Note |
|---|---|---|---|
| P.1 | สร้าง `prototype/index.html` (single-file, Tailwind CDN) | done | brand palette จริง + arched motif |
| P.2 | รวม sections: Hero / About / Menu / Facility / Reviews / Visit | done | TH only |
| P.3 | ใช้ Google Maps embed จริง | done | |
| P.4 | Sample menu 8 รายการจาก menu-data.md | done | placeholder images จาก Unsplash |
| P.5 | Owner review prototype | todo | **next step** |
| P.6 | เก็บ feedback → update PRD เป็น CR/Improvement | todo | |
| P.7 | สร้าง prototype/menu.html (10 หมวด) | done | sticky category nav |
| P.8 | สร้าง prototype/facility.html (5 มุม detail) | done | alternating layout |
| P.9 | Update home: nav/CTA/footer/cards link ไปหน้าใหม่ | done | ทุกปุ่มคลิกได้แล้ว |
| P.10 | เพิ่ม glossy theme layer (3 ไฟล์) | done | คงโทนสีเดิม |
| P.11 | Connect git + push GitHub repo | done | https://github.com/baompansiri/lilacafe.git |
| P.12 | Enable GitHub Pages (เปลี่ยน repo เป็น public) | done | https://baompansiri.github.io/lilacafe/ |

---

## Phase 1 — Foundation

| ID | Task | Status | Note |
|---|---|---|---|
| 1.1 | Init Next.js 15 + TS + Tailwind | todo | |
| 1.2 | Setup next-intl (TH/EN) | todo | |
| 1.3 | Setup GA4 | todo | ต้องการ measurement ID |
| 1.4 | Design tokens (light theme) | todo | |
| 1.5 | Base layout (Header/Footer/Lang toggle) | todo | |
| 1.6 | SEO infrastructure | todo | meta helper, sitemap, robots |
| 1.7 | Vercel deployment + preview | todo | |

---

## Phase 2 — Core Pages

| ID | Task | Status | Note |
|---|---|---|---|
| 2.1 | Home page | todo | |
| 2.2 | Menu page (grid + filter) | todo | |
| 2.3 | Facility page (4 มุม) | todo | |
| 2.4 | Contact/Visit page | todo | |
| 2.5 | Reviews section | todo | |

---

## Phase 3 — Image Polish & UX

| ID | Task | Status | Note |
|---|---|---|---|
| 3.1 | Image optimization (WebP, responsive) | todo | |
| 3.2 | Lazy loading + blur placeholder | todo | |
| 3.3 | Gallery lightbox | todo | |
| 3.4 | Micro-interactions | todo | |
| 3.5 | Mobile UX tuning | todo | |

---

## Phase 4 — SEO + AEO + Schema

| ID | Task | Status | Note |
|---|---|---|---|
| 4.1 | JSON-LD: Restaurant + Menu schema | todo | |
| 4.2 | JSON-LD: Review + FAQ schema | todo | |
| 4.3 | Meta tags ทุกหน้า (TH+EN) | todo | |
| 4.4 | OG + Twitter Card | todo | |
| 4.5 | FAQ content สำหรับ AEO | todo | |
| 4.6 | Submit sitemap to Search Console | todo | |
| 4.7 | Rich Results Test pass | todo | |

---

## Phase 5 — Reviews Integration

| ID | Task | Status | Note |
|---|---|---|---|
| 5.1 | Decide: Google Places API vs manual | todo | |
| 5.2 | Implement reviews source | todo | |
| 5.3 | Review schema markup | todo | |
| 5.4 | "เขียนรีวิว" CTA | todo | |

---

## Phase 6 — Security & Pre-launch

| ID | Task | Status | Note |
|---|---|---|---|
| 6.1 | OWASP checklist | todo | |
| 6.2 | Accessibility audit (WCAG 2.1 AA) | todo | |
| 6.3 | Cross-browser test | todo | |
| 6.4 | GA4 event verification | todo | |
| 6.5 | 404 + error pages | todo | |
| 6.6 | Domain + DNS | todo | |

---

## Phase 7 — Launch

| ID | Task | Status | Note |
|---|---|---|---|
| 7.1 | Production deploy | todo | |
| 7.2 | Submit sitemap | todo | |
| 7.3 | Verify GA4 | todo | |
| 7.4 | Monitor Core Web Vitals (1 week) | todo | |

---

## Change Log

| Date | Change |
|---|---|
| 2026-05-28 | Initial task list created from PLAN.md |
| 2026-05-28 | Update Phase 0: domain/hours/FB/logo/reviews resolved; เพิ่ม task ขอ logo file, review seed, story |
| 2026-05-28 | สร้าง menu-data.md preliminary จาก FoodStory POS — 10 categories |
| 2026-05-28 | New Requirement: Phase 0.5 HTML Prototype — สร้าง prototype/index.html (single-file Tailwind) |
| 2026-05-28 | สร้าง menu.html + facility.html, อัปเดต home ให้ทุกปุ่มและการ์ดคลิกได้ |
| 2026-05-28 | เพิ่ม glossy theme layer ทั้ง 3 ไฟล์ (sheen, frosted glass, ambient glow) |
| 2026-05-28 | Initial commit + push GitHub: baompansiri/lilacafe |
| 2026-05-28 | Drive photos: 40 drink shots downloaded, resized 1200px (563MB→5.3MB), mapped + integrated into prototype |
| 2026-05-28 | SEO rename: `LILA-NNN` → `lila-cafe-{slug}.jpg` ทั้ง 40 ไฟล์ (git mv + bulk refs update) |
| 2026-05-28 | Re-map Coffee #1-4 หลัง POS images ละเอียดมาใหม่: swap LILA-043↔053, 044↔049 ให้ตรง |
| 2026-05-28 | verify.html v2: full 86-item list + upload-replace + orphan assign + add-new + ZIP export (JSZip + Canvas resize) |
