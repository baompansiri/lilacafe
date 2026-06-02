# Implementation Plan — LiLa Cafe Website

**Version:** 0.1
**Date:** 2026-05-28
**Status:** Planning
**Linked PRD:** [PRD.md](PRD.md)

---

## Phase 0 — Discovery & Setup ✅ (in progress)

**Goal:** Align บน requirement + เตรียม infrastructure

- [x] สร้าง CLAUDE.md (working protocol)
- [x] สร้าง PRD.md draft
- [x] สร้าง PLAN.md
- [x] สร้าง TASKS.md
- [ ] User review & approve PRD
- [ ] ตอบ Open Questions ใน PRD §8
- [ ] รวบรวม asset: รูปเมนู, รูป facility, logo
- [ ] เลือก/จดโดเมน

**Exit criteria:** PRD approved + asset พร้อม >= 70%

---

## Phase 1 — Foundation

**Goal:** Setup project + design system

- Init Next.js 15 + Tailwind + TypeScript
- Setup i18n (next-intl) — TH/EN
- Setup GA4
- Define design tokens (color palette สว่าง, typography, spacing)
- Build base layout (Header + Footer + Language toggle)
- Setup SEO infrastructure: meta tags helper, sitemap, robots.txt
- Setup Vercel deployment + preview branches

**Exit criteria:** Empty site deploy ได้ + base layout เห็นจริง

---

## Phase 2 — Core Pages (Content + Layout)

**Goal:** ทุกหน้าหลักมี content + layout เสร็จ (ยังไม่ polish)

- Home page (Hero + Highlight sections)
- Menu page (grid + filter)
- Facility page (sections per area)
- Contact / Visit page (info + map embed)
- Reviews section

**Exit criteria:** ทุกหน้า navigable ได้, content ถูกต้อง

---

## Phase 3 — Image Polish & UX

**Goal:** ทำให้รูปเป็นพระเอกจริง

- Image optimization (WebP, responsive sizes)
- Lazy loading + blur placeholder
- Gallery lightbox
- Smooth transitions / micro-interactions
- Mobile UX tuning

**Exit criteria:** Lighthouse Performance > 90 บน mobile

---

## Phase 4 — SEO + AEO + Schema

**Goal:** ค้นหาเจอใน Google + AI Search

- JSON-LD: Restaurant, Menu, Review, FAQ schema
- Meta tags ทุกหน้า (TH + EN)
- Open Graph + Twitter Card
- Sitemap submission to Google Search Console
- FAQ content สำหรับ AEO
- Rich Results Test ผ่าน

**Exit criteria:** Google Rich Results Test pass + Lighthouse SEO 100

---

## Phase 5 — Reviews Integration

**Goal:** แสดงรีวิวจริง

- Decision: Google Places API (real-time) vs manual curate
- Implement chosen approach
- Review schema markup
- "เขียนรีวิว" CTA → Google Maps

**Exit criteria:** Reviews section live + schema valid

---

## Phase 6 — Security & Pre-launch

**Goal:** ปลอดภัย + พร้อม launch

- OWASP checklist (HTTPS, headers, CSP, no exposed secrets)
- Accessibility audit (WCAG 2.1 AA)
- Cross-browser test
- GA4 event verification
- 404 page + error handling
- Domain + DNS setup

**Exit criteria:** Pre-launch checklist 100%

---

## Phase 7 — Launch & Monitor

- Deploy to production
- Submit sitemap to Google Search Console
- Verify GA4 receiving data
- Monitor Core Web Vitals 1 week
- Collect initial feedback

---

## Risks & Dependencies

| Risk | Mitigation |
|---|---|
| รูปคุณภาพไม่พอ / ไม่มี | จ้างถ่าย หรือใช้ stock + รูปจาก Google ชั่วคราว |
| Google Places API ต้องมี billing | Fallback: manual curate reviews ใน JSON |
| Brand assets ยังไม่มี | Phase 1 ทำ design system แบบ minimal ไปก่อน |
| เวลาเปิด-ปิดข้อมูลไม่ครบ | ยืนยันจาก user ก่อนปิด Phase 0 |

---

## Change Log

| Date | Version | Change |
|---|---|---|
| 2026-05-28 | 0.1 | Initial plan |
| 2026-06-02 | 0.2 | เพิ่ม Phase G — Mini-game "LiLa Cafe Rush" (crowd runner) |

---

## Phase G — Mini-game "LiLa Cafe Rush" (crowd runner)

**Branch:** `claude/web-game-dev-rCFZH`

| Step | งาน | สถานะ |
|---|---|---|
| G1 | Prototype playable: Canvas 2D, ระบบกองทัพ (gate ×/+/−, enemy HP, coffee pickup, boss wall, score, localStorage best), หน้า start/end | ✅ done |
| G2 | i18n TH+EN (รวม string + toggle) | todo |
| G3 | GA4 event tracking (start/end/win/lose/score) | todo |
| G4 | Polish: sprite/art ร้านกาแฟจริง, sfx/เสียง, juice (ขบวนวิ่งเป็น formation) | todo |
| G5 | ผูกเข้าเว็บหลัก (ปุ่ม "เล่นเกม" จากหน้า home) + share score | todo |

**สถาปัตยกรรม:** single-file `game/index.html` (HTML+CSS+JS, ไม่มี build step) — render ด้วย logical canvas 420×740 สเกลพอดีจอ, pointer + keyboard input, fixed-timestep game loop ผ่าน rAF
