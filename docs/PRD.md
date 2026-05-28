# PRD — LiLa Cafe Website

**Version:** 0.1 (Draft)
**Date:** 2026-05-28
**Status:** Discovery

---

## 1. Product Overview

เว็บไซต์ official ของ **LiLa Cafe (ลีลา คาเฟ่)** เน้นโชว์ความสวยงามของเมนู, บรรยากาศร้าน, และ facility ที่หลากหลาย เพื่อดึงดูดให้คนอยากมาที่ร้าน

### 1.1 Business Info
- **ชื่อร้าน:** LiLa Cafe — ลีลา คาเฟ่
- **Tagline:** THAI DESSERT & DRINK (ขนมไทย & เครื่องดื่ม)
- **Address:** 29 ถนน 01, Khwaeng Ao Ngoen, Khet Sai Mai, Bangkok 10210
- **Price range:** ฿1–200 per person
- **Phone:** 084 053 1494
- **Plus Code:** VMPP+WW Bangkok
- **Facebook:** https://www.facebook.com/profile.php?id=61584007161540
- **Reservation:** hungryhub.com (Find a table — ยังไม่มีลิงก์ตรง)
- **Google Maps:** https://maps.app.goo.gl/vQiVWGbnxttsCBJk8
- **Domain (placeholder):** lilacafe.com

### 1.2 Operating Hours

| Day | Hours |
|---|---|
| Monday | 07:30 – 18:30 |
| Tuesday | 07:30 – 18:30 |
| Wednesday | 07:30 – 18:30 |
| Thursday | 07:30 – 18:30 |
| Friday | 07:30 – 18:30 |
| Saturday | 08:30 – 19:30 |
| Sunday | 08:30 – 19:30 |

*(วันหยุดนักขัตฤกษ์อาจปรับเวลา — แสดง notice เมื่อใกล้วันหยุด)*

### 1.3 Brand Identity

**Logo:** ช้างเส้นสายมินิมอล สีน้ำตาล terracotta + ตัวอักษร LILA CAFE / THAI DESSERT & DRINK

**Interior Style** (จากรูปจริง):
- ผนังไม้สัก/โอ๊กอุ่น + slatted wood paneling
- ผนัง/เคาน์เตอร์โทน **เซจกรีน** (dusty teal-green)
- ผนัง background สี **ครีม/เบจ**
- Arched detail (โค้งบนช่องเก็บ + หน้าต่าง) — Mediterranean × Thai modern
- เพดานขาว, warm downlight

**Web Color Palette (proposed):**

| Role | Color | Hex (approx) |
|---|---|---|
| Background primary | Cream / off-white | `#F5EFE4` |
| Background secondary | Warm beige | `#EDE3D2` |
| Brand accent (sage) | Dusty sage green | `#7A8D7A` / `#6B8174` |
| Wood accent | Warm teak | `#B8895A` / `#A06B3F` |
| Logo brown (CTA / link) | Terracotta brown | `#A0522D` |
| Text primary | Deep brown-black | `#2A2520` |
| Text secondary | Warm grey | `#6B6055` |

**Concept:** Thai-modern dessert cafe — อบอุ่น, สว่าง, มี craftsmanship, รู้สึกเป็นไทยร่วมสมัยและสะอาดตา

**Source assets:** Facebook page — https://www.facebook.com/profile.php?id=61584007161540

---

## 2. Goals & Success Metrics

### 2.1 Primary Goals
1. **ดึงดูดลูกค้าใหม่** — คนเห็นเว็บแล้วอยากมาที่ร้าน
2. **โชว์ความหลากหลายของ facility** — ให้รู้ว่าร้านเหมาะกับหลาย occasion
3. **ทำให้หาเจอง่าย** — SEO + AEO + Google Maps integration

### 2.2 Success Metrics
- Organic traffic จาก Google Search (ตามรอย GA4)
- Click-through ไปยัง Google Maps / Hungry Hub (reservation)
- Click-through ไปยังเบอร์โทร / Facebook
- Time on page บน Menu & Gallery pages
- Bounce rate < 50%

---

## 3. Target Audience

ร้านมีสไตล์และบรรยากาศโดดเด่น เหมาะกับหลาย target:

| Persona | Need | Facility ที่ตอบโจทย์ |
|---|---|---|
| **Café lover / Foodie** | บรรยากาศดี ขนมไทยอร่อย รูปสวยลง IG | มุมจิบกาแฟ, garden |
| **Remote worker / นักเรียน** | นั่งทำงานนานๆ มี WiFi เงียบ | มุมห้องทำงาน |
| **ครอบครัวมีเด็ก** | พาเด็กมาเล่นได้ ผู้ใหญ่นั่งสบาย | สนามเด็กเล่น, สวน |
| **กลุ่มเพื่อน / คู่รัก** | hangout, ถ่ายรูป, มื้อสบายๆ | ทุก facility |

---

## 4. Functional Requirements

### 4.1 Pages (v1)

| Page | Priority | Description |
|---|---|---|
| **Home** | P0 | Hero (รูปร้านสวย) + เมนูเด่น + facility highlight + CTA |
| **Menu** | P0 | แสดงเมนูแบบ image-first, grid สวย, category filter |
| **Facility** | P0 | โชว์แต่ละมุม (กาแฟ / ทำงาน / สวน / สนามเด็กเล่น) พร้อมรูป |
| **Gallery** | P1 | รวมรูปบรรยากาศร้าน (lightbox) |
| **Reviews** | P0 | รีวิวจากลูกค้า (Google Reviews + manual curate) |
| **Contact / Visit** | P0 | Address, hours, map embed, phone, social, reservation link |

### 4.2 Core Features

**F1. Image-First Menu Display** (P0)
- Grid layout, รูปใหญ่คุณภาพสูง
- Hover/tap ดูชื่อ + ราคา + คำอธิบายสั้น
- Filter by category (ตาม POS ของร้าน — ดู [menu-data.md](menu-data.md)):
  - Coffee / Non-Coffee / Matcha & Tea / Signature / Soft Drinks
  - เบเกอรี่ / กับข้าว / อาหาร Inter / อื่นๆ / ขนมไทย (เซ็ตของฝาก)
- Lazy load + responsive images (next/image)

**F2. Facility Showcase** (P0)
- Section per facility พร้อมรูปและคำอธิบาย:
  - มุมจิบกาแฟ
  - มุมห้องทำงาน (เน้น WiFi, ปลั๊กไฟ)
  - มุมสวน
  - มุมสนามเด็กเล่น
  - มุมครอบครัว (โต๊ะใหญ่ สำหรับมื้อครอบครัว)
- Visual storytelling — ใช้รูปเป็นพระเอก

**F3. Customer Reviews** (P0)
- Section รีวิวจากลูกค้า
- Source: Google Reviews (pull via API หรือ embed) + manual curate รีวิวเด่น
- แสดง: rating, ข้อความ, ชื่อผู้รีวิว, วันที่
- CTA: "เขียนรีวิวบน Google" → ลิงก์ไป Google Maps

**F4. Visit / Contact Info** (P0)
- Address + Google Maps embed (interactive)
- Hours (พร้อม "Open Now" indicator)
- One-tap: โทร, เปิด Maps, เปิด Facebook, จองโต๊ะ Hungry Hub
- Plus Code สำหรับนำทาง

**F5. SEO + AEO Foundation** (P0)
- Meta tags ทุกหน้า
- Structured data: `Restaurant` / `CafeOrCoffeeShop` schema, `Menu` schema, `Review` schema, `FAQPage` schema
- Sitemap.xml + robots.txt
- Open Graph + Twitter Card
- Canonical URLs
- FAQ section ตอบคำถามยอดฮิต (parking, WiFi, เด็ก, สัตว์เลี้ยง, จอง, etc.) สำหรับ AEO

**F6. i18n** (P0)
- TH (default) + EN
- Toggle ที่ header
- URL: `/` (TH) และ `/en`

**F7. Analytics** (P0)
- GA4 integration
- Event tracking: click phone, click directions, click reservation, view menu item, switch language

### 4.3 Design Requirements

- **Theme: สว่าง (Light)** — โทนสี cream/beige/sage green, airy, สะอาด, เน้นให้รูปอาหาร/บรรยากาศโดดเด่น
- **Visual motif:** Arched shapes (rounded arch borders, arch dividers) สะท้อนสถาปัตยกรรมจริงของร้าน
- **Accent:** Sage green เป็น primary brand color, Terracotta brown สำหรับ CTA/link
- Typography: serif elegant สำหรับ heading (เข้ากับโลโก้ LILA CAFE) + sans-serif อ่านง่ายสำหรับ body
- Thai font: รองรับการแสดงผลภาษาไทยสวย (e.g., IBM Plex Sans Thai, Sarabun, หรือ Noto Sans Thai)
- Responsive: Mobile-first (ลูกค้าส่วนใหญ่เปิดจากมือถือ)
- Fast loading: รูปต้อง optimize (WebP, lazy load)

---

## 5. Non-Functional Requirements

- **Performance:** Lighthouse > 90 ทุก metric (Performance, SEO, Accessibility, Best Practices)
- **Accessibility:** WCAG 2.1 AA
- **Security:** OWASP Top 10 compliance (HTTPS, secure headers, input sanitization, no exposed secrets)
- **Browser:** Chrome, Safari, Firefox, Edge (รุ่นล่าสุด 2 versions)
- **SEO:** Index ครบทุกหน้า, structured data ผ่าน Google Rich Results Test

---

## 6. Out of Scope (v1)

- ❌ Online ordering / Delivery
- ❌ Online payment
- ❌ Member / Loyalty program
- ❌ Blog / Content marketing (อาจ add v2)
- ❌ Admin CMS (เนื้อหา hardcode ใน code ก่อน — v1)
- ❌ Multi-branch support

---

## 7. Tech Stack (Proposed)

- **Framework:** Next.js 15 (App Router) — SSG/SSR friendly สำหรับ SEO
- **Styling:** Tailwind CSS
- **Images:** next/image + Cloudinary หรือ static optimized assets
- **i18n:** next-intl
- **Analytics:** GA4
- **Deployment:** Vercel (free tier เพียงพอ v1)
- **Domain:** TBD

---

## 8. Open Questions

### ✅ Resolved
- ~~โดเมน~~ → ใช้ `lilacafe.com` เป็น placeholder ก่อน (จดจริงทีหลัง)
- ~~เวลาเปิด-ปิด~~ → §1.2
- ~~Facebook URL~~ → §1.1
- ~~Logo + Brand color~~ → §1.3
- ~~Reviews approach~~ → **Manual curate** (เก็บใน JSON/MDX)

### ⏳ Pending
1. **เมนู:** preliminary structure แล้วใน [menu-data.md](menu-data.md) — ยังต้องการ: ราคาที่อ่านไม่ชัด, ชื่อ EN, คำอธิบาย, รูปต้นฉบับคุณภาพสูง (POS screenshot resolution ต่ำเกิน)
2. **รูป facility:** 4 มุม (จิบกาแฟ / ห้องทำงาน / สวน / สนามเด็กเล่น) — รูปคุณภาพสูง
3. **รูปบรรยากาศร้าน:** สำหรับ Hero + Gallery
4. **Hungry Hub:** ลิงก์ตรงไปหน้าร้าน LiLa บน hungryhub.com
5. **Logo file:** ขอไฟล์ต้นฉบับ (SVG/PNG ความละเอียดสูง โปร่งใส) สำหรับใช้ในเว็บ
6. **About / Story:** อยากเล่าเรื่องร้าน, ที่มาของชื่อ "ลีลา", concept อะไรเป็นพิเศษไหม?
7. **Reviews seed:** ขอข้อความรีวิว 5–10 อัน (จาก Google/FB) มา hardcode ตอน v1

---

## 9. Change Log

| Date | Version | Change | Type |
|---|---|---|---|
| 2026-05-28 | 0.1 | Initial draft จาก Discovery session | - |
| 2026-05-28 | 0.2 | เพิ่ม tagline "THAI DESSERT & DRINK", hours ครบทุกวัน, FB URL, brand identity (logo ช้าง+terracotta), reviews=manual | Info added |
| 2026-05-28 | 0.3 | Refine brand palette จากรูป interior จริง: cream/sage green/teak wood (ไม่ใช่ terracotta-led), เพิ่ม arched visual motif | Improvement |
| 2026-05-28 | 0.4 | เพิ่ม menu-data.md (preliminary จาก FoodStory POS), refine 10 category ตามที่ร้านจัดจริง | Info added |
| 2026-05-28 | 0.5 | เพิ่ม Phase 0.5: HTML prototype สำหรับเจ้าของรีวิวก่อน build Next.js | **New Requirement** |
| 2026-05-28 | 0.6 | เพิ่ม facility "มุมครอบครัว" (รวม 5 มุม) + ปรับ hero copy ให้รวมคำว่า "อาหาร" | Improvement |
| 2026-05-28 | 0.7 | Rename category "พาสต้า" → "อาหาร Inter" + เพิ่มเข้า menu filter | Improvement |
| 2026-05-28 | 0.8 | Prototype expanded: เพิ่ม menu.html (10 หมวด) + facility.html (5 มุม), ทุกปุ่ม home คลิกได้ | New Requirement |
| 2026-05-28 | 0.9 | Visual polish: เพิ่ม glossy theme layer (sheen, frosted glass, ambient glow) คงสีเดิม | Improvement |
