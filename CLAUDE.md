# CLAUDE.md — Web Lila Cafe

คู่มือการทำงานสำหรับ Claude ในโปรเจคนี้ **ต้องอ่านและปฏิบัติตามทุกครั้ง**

---

## 1. Working Protocol (วิธีทำงาน)

### 1.1 ก่อน Implement ทุกครั้ง
- **แจ้ง plan ก่อนเสมอ** — สรุปสิ่งที่จะทำเป็นข้อๆ ให้เห็นภาพ ก่อนแตะ code
- **ไม่เข้าใจ → ถามก่อน** ห้ามเดา ห้าม assume requirement เอง
- **ก่อน execute action ที่มี side effect → ขอ permission**
  - ยกเว้นกรณีที่ user อยู่ใน bypass / auto-approve mode (เช่น file edit, test run ที่ไม่กระทบระบบจริง)
  - Action ที่ต้องขอเสมอ: deploy, migration, push, delete, force operation, แก้ config ระบบจริง

### 1.2 งานนอกแผน (Out-of-scope work)
หากระหว่าง implement พบว่าต้องทำงาน **นอกเหนือจากแผนที่ตกลงไว้**:
1. **หยุดก่อน** อย่าทำเงียบๆ
2. **ถาม user** ว่าจะทำต่อหรือไม่
3. ถ้า user เห็นชอบ → **update PRD** จัดเป็นหนึ่งใน:
   - **CR** (Change Request) — เปลี่ยน requirement เดิม
   - **Improvement** — ปรับปรุงสิ่งที่มีอยู่
   - **New Requirement** — feature/scope ใหม่

---

## 2. Discovery Phase (ก่อนเริ่ม dev)

ทุก feature/iteration ต้องมีเอกสาร 3 ตัวที่ `docs/`:

| ไฟล์ | หน้าที่ |
|---|---|
| `docs/PRD.md` | Product Requirement — what & why |
| `docs/PLAN.md` | Implementation plan — how, แบ่ง phase, dependency |
| `docs/TASKS.md` | Task tracking — checklist สถานะ (todo / in-progress / done) |

**ถ้า user เริ่ม task ใหม่ที่ไม่มีเอกสารเหล่านี้ → ต้องสร้าง/อัปเดตก่อนเริ่ม code**

---

## 3. Implementation Skills (Mandatory)

ทุก feature ที่ออกสู่ user ต้องผ่าน checklist นี้:

- ✅ **i18n / Translation** — รองรับหลายภาษา (อย่างน้อย TH + EN) ไม่ hardcode string
- ✅ **SEO** — meta tags, semantic HTML, sitemap, structured data (JSON-LD), canonical URL
- ✅ **AEO** (Answer Engine Optimization) — content เหมาะกับ AI search (ChatGPT, Perplexity, Google AI Overview): clear Q&A structure, FAQ schema, concise answers
- ✅ **OWASP Top 10 Security** — input validation, XSS, CSRF, SQL injection, auth, secrets management, secure headers
- ✅ **Google Analytics** — GA4 integration, event tracking สำหรับ user action สำคัญ (conversion, click, form submit)

หากบาง feature ไม่จำเป็นต้องมีบางข้อ → **ระบุเหตุผลใน PRD**

---

## 4. Commit Discipline

**ทุกครั้งหลัง `git commit`** ต้องทำต่อทันที:
1. Update `docs/TASKS.md` — เปลี่ยน status task ที่ทำเสร็จ
2. Update `docs/PLAN.md` — mark phase/step progression, note สิ่งที่เปลี่ยนแปลงจาก plan เดิม
3. (ถ้ามี scope เปลี่ยน) Update `docs/PRD.md`

**เหตุผล:** session อื่น (หรือ Claude instance อื่น) ต้องเปิดมาแล้วเห็น progress ทันทีโดยไม่ต้องไล่ git log

---

## 5. Change Management Summary

```
งานนอกแผน → ถาม user → ถ้า approve → จัดประเภท (CR/Improvement/New Req) → update PRD → update PLAN → update TASKS → implement → commit → update PLAN+TASKS
```

---

## 6. Quick Reference

- ไม่แน่ใจ requirement → **ถาม**
- จะทำ action กระทบระบบจริง → **ขอ permission**
- ทำเสร็จ commit แล้ว → **update docs/PLAN.md + docs/TASKS.md**
- เจองานนอกแผน → **หยุด ถาม update PRD**
