# Menu Data — LiLa Cafe

**Source:** FoodStory POS (`order-v2.foodstory.co`) — capture วันที่ 2026-05-28
**Currency:** THB (฿)
**Status legend:**
- ✅ `confirmed` — อ่านครบทั้งชื่อและราคา
- 🟡 `price-tbc` — ชื่อแน่ ราคา/รายละเอียดอ่านไม่ชัด รอ confirm
- 🔴 `tbc` — ชื่อ/รายละเอียดอ่านไม่ชัด รอ confirm
- 📷 `has-photo` — POS มีรูปแล้ว
- 🚫 `no-photo` — POS ขึ้น "NO PHOTO"

> **Note for devs:** ตารางแต่ละหมวดออกแบบเป็น tabular schema เดียวกันเพื่อ parse ไป JSON / TS ได้ง่าย (column = field name). Type: `hot` / `cold` / `blended` / `n/a`.

---

## Schema (apply ทุกหมวด)

| Column | Description |
|---|---|
| `id` | unique slug ใช้ใน URL / data file |
| `name_th` | ชื่อภาษาไทย (ตามที่ปรากฏบน POS) |
| `name_en` | ชื่อภาษาอังกฤษ (เติมทีหลัง — ตอนนี้บางอันเป็น draft) |
| `price` | ราคา THB — ใส่ `?` ถ้าอ่านไม่ชัด |
| `type` | `hot` / `cold` / `blended` / `n/a` |
| `photo` | ✅/🚫 |
| `tags` | signature / set / takeaway / spicy / vegetarian / kids |
| `status` | ✅/🟡/🔴 |

---

## Category Index

| Code | Name (TH) | Name (EN) | Items | Filter |
|---|---|---|---|---|
| `coffee` | กาแฟ | Coffee | 16+ | ☕ |
| `noncoffee` | นอน-คอฟฟี่ | Non-Coffee | 13+ | 🥤 |
| `matcha` | มัตฉะ & ชา | Matcha & Tea | 8 | 🍵 |
| `signature` | ซิกเนเจอร์ | Signature | TBC | 🌟 |
| `soft` | ซอฟท์ดริงค์ | Soft Drinks | TBC | 🥛 |
| `bakery` | เบเกอรี่ | Bakery | 10+ | 🥐 |
| `snack` | อาหารทานเล่น | Snacks | TBC | 🍟 |
| `thaifood` | กับข้าว | Thai Mains | 7 | 🍛 |
| `inter` | อาหาร Inter | International | 3+ | 🍝 |
| `other` | อื่นๆ | Other | TBC | 🍽️ |
| `thaidessert` | ขนมไทย | Thai Dessert Sets | 15+ | 🍡 |

---

## ☕ 1. Coffee

| id | name_th | name_en | price | type | photo | tags | status |
|---|---|---|---|---|---|---|---|
| caramel-latte-iced | คาราเมลลาเต้ | Caramel Latte (Iced) | 100 | cold | ✅ | — | ✅ |
| es-yen | Es-yen | Es-Yen (Thai Cold Coffee) | 95 | cold | ✅ | signature | ✅ |
| americano-iced | อเมริกาโน่ | Americano (Iced) | 80 | cold | ✅ | — | ✅ |
| latte-iced | ลาเต้ | Latte (Iced) | 90 | cold | ✅ | — | ✅ |
| mocha-iced | มอคค่า | Mocha (Iced) | ? | cold | ✅ | — | 🟡 |
| cappuccino-iced | คาปูชิโน่ | Cappuccino (Iced) | ? | cold | ✅ | — | 🟡 |
| espresso | เอสเปรสโซ่ | Espresso | ? | hot | ✅ | — | 🟡 |
| latte-hot | ลาเต้ร้อน | Hot Latte | ? | hot | ✅ | — | 🟡 |
| cappuccino-hot | คาปูชิโน่ร้อน | Hot Cappuccino | ? | hot | ✅ | — | 🟡 |
| caramel-latte-hot | คาราเมลลาเต้ร้อน | Hot Caramel Latte | ? | hot | ✅ | — | 🟡 |
| mocha-hot | มอคค่าร้อน | Hot Mocha | ? | hot | ✅ | — | 🟡 |
| americano-hot | อเมริกาโน่ร้อน | Hot Americano | ? | hot | ✅ | — | 🟡 |
| irish-coffee | ไอริช | Irish Coffee | ? | cold | ✅ | — | 🟡 |
| affogato | แอฟโฟกาโต้ | Affogato | ? | cold | ✅ | — | 🟡 |
| lemon-espresso | มะนาวเอสเปรสโซ่ | Lemon Espresso | ? | cold | ✅ | — | 🟡 |
| black-orange | Black Orange | Black Orange | ? | cold | ✅ | signature | 🟡 |

---

## 🥤 2. Non-Coffee

| id | name_th | name_en | price | type | photo | tags | status |
|---|---|---|---|---|---|---|---|
| dark-chocolate-iced | ดาร์กช็อกโกแลต | Dark Chocolate (Iced) | 120 | cold | ✅ | — | ✅ |
| choco-mint-iced | ช็อกมินต์ | Chocolate Mint (Iced) | 100 | cold | ✅ | — | ✅ |
| dark-chocolate-hot | ดาร์กช็อกร้อน | Hot Dark Chocolate | ? | hot | ✅ | — | 🟡 |
| choco-mint-hot | ช็อกมินต์ร้อน | Hot Chocolate Mint | ? | hot | ✅ | — | 🟡 |
| fresh-milk | นมสด | Fresh Milk | 85 | cold | ✅ | — | ✅ |
| pink-milk | นมชมพู | Pink Milk | ? | cold | ✅ | — | 🟡 |
| strawberry-milk | นมสตรอเบอร์รี่ | Strawberry Milk | ? | cold | ✅ | — | 🟡 |
| lemon-soda | เลม่อนโซดา | Lemon Soda | ? | cold | ✅ | — | 🟡 |
| honey-lemon | น้ำผึ้งมะนาว | Honey Lemon | ? | cold | ✅ | — | 🟡 |
| butterfly-pea-blended | ดอกอัญชันปั่น | Butterfly Pea (Blended) | ? | blended | ✅ | — | 🟡 |
| cinnamon-apple-peach | ชิมาเนเปิ้ลพีช | Cinnamon Apple Peach | ? | cold | ✅ | — | 🔴 |
| lila-lemon-blended | ลีลามะนาวปั่น | LiLa Lemon (Blended) | ? | blended | ✅ | signature | 🟡 |

---

## 🍵 3. Matcha & Tea

| id | name_th | name_en | price | type | photo | tags | status |
|---|---|---|---|---|---|---|---|
| matcha-iced | ชามัตฉะ | Matcha (Iced) | 140 | cold | ✅ | — | ✅ |
| matcha-yuzu | มัตฉะยุซุ | Matcha Yuzu | 140 | cold | ✅ | — | ✅ |
| matcha-cola | มัตฉะโคล่า | Matcha Cola | ? | cold | ✅ | — | 🟡 |
| matcha-latte | มัตฉะลาเต้ | Matcha Latte | ? | cold | ✅ | — | 🟡 |
| cha-tong | ชาตอง | Cha Tong | ? | cold | ✅ | — | 🟡 |
| yuzu-tea | ชายุซุ | Yuzu Tea | ? | cold | ✅ | — | 🟡 |
| hot-ginger-lemon | ขิงมะนาวร้อน | Hot Ginger Lemon | ? | hot | ✅ | — | 🟡 |
| extra-shot | เพิ่มช็อต | Extra Shot | + | n/a | 🚫 | add-on | 🟡 |

---

## 🌟 4. Signature

> รวมเครื่องดื่ม Thai/House special — รอ confirm รายการครบจากร้าน

| id | name_th | name_en | price | type | photo | tags | status |
|---|---|---|---|---|---|---|---|
| thai-tea-iced | ชาไทยเย็น | Thai Tea (Iced) | ? | cold | ✅ | signature | 🟡 |
| lila-orange | ลีลาส้มซ่า | LiLa Orange Soda | ? | cold | ✅ | signature | 🔴 |

---

## 🥛 5. Soft Drinks

| id | name_th | name_en | price | type | photo | tags | status |
|---|---|---|---|---|---|---|---|
| water | น้ำดื่ม | Drinking Water | ? | n/a | 🚫 | — | 🔴 |
| orange-juice | น้ำส้ม | Orange Juice | ? | cold | ✅ | — | 🔴 |
| coconut-water | น้ำมะพร้าว | Coconut Water | ? | cold | 🚫 | — | 🔴 |

---

## 🥐 6. เบเกอรี่ (Bakery)

| id | name_th | name_en | price | type | photo | tags | status |
|---|---|---|---|---|---|---|---|
| croissant | ครัวซองต์ | Croissant | 100 | n/a | ✅ | — | 🟡 |
| croissant-cream | ครัวซองต์ไส้ครีม | Croissant w/ Cream | 110 | n/a | ✅ | — | 🟡 |
| croissant-tuna | ครัวซองต์ทูน่า | Tuna Croissant | 115 | n/a | ✅ | — | 🟡 |
| chocolate-cake | เค้กช็อกโกแลต | Chocolate Cake | ? | n/a | ✅ | — | 🟡 |
| strawberry-cake | เค้กสตรอเบอร์รี่ | Strawberry Cake | ? | n/a | ✅ | — | 🟡 |
| sandwich | แซนวิช | Sandwich | ? | n/a | ✅ | — | 🟡 |
| cookies | คุกกี้ | Cookies | ? | n/a | ✅ | — | 🟡 |
| pie | พาย | Pie | ? | n/a | ✅ | — | 🔴 |

---

## 🍟 7. อาหารทานเล่น (Snacks)

| id | name_th | name_en | price | type | photo | tags | status |
|---|---|---|---|---|---|---|---|
| fried-mackerel | ปลาทูทอด | Fried Mackerel | ? | n/a | ✅ | — | 🟡 |
| fried-chicken | ไก่ทอด | Fried Chicken | ? | n/a | ✅ | — | 🟡 |
| dim-sum | ขนมจีบ | Dim Sum | ? | n/a | ✅ | — | 🟡 |
| spring-roll | ปอเปี๊ยะ | Spring Roll | ? | n/a | ✅ | — | 🔴 |
| fried-fish-cake | ทอดมัน | Thai Fish Cake | ? | n/a | ✅ | — | 🔴 |

---

## 🍛 8. กับข้าว (Thai Mains) — ✅ ครบ

| id | name_th | name_en | price | type | photo | tags | status |
|---|---|---|---|---|---|---|---|
| namprik-jorn-shrimp | น้ำพริกโจรกุ้งสด + ปลาทูทอด | Nam Prik Jorn w/ Fresh Shrimp & Fried Mackerel | 195 | n/a | ✅ | spicy | ✅ |
| spicy-pork-rib-curry | แกงพริกกระดูกหมู | Spicy Pork Rib Curry | 125 | n/a | ✅ | spicy | ✅ |
| tofu-pork-soup | ต้มจืดเต้าหู้หมูสับ | Tofu & Minced Pork Soup | 90 | n/a | 🚫 | mild | ✅ |
| pork-omelette-rice | ไข่เจียวหมูสับ (กับข้าว) | Pork Omelette w/ Rice | 85 | n/a | 🚫 | — | ✅ |
| fluffy-omelette-rice | ไข่เจียวฟู (กับข้าว) | Fluffy Omelette w/ Rice | 70 | n/a | 🚫 | — | ✅ |
| sour-curry-seabass | แกงส้มปลากะพง | Sour Curry w/ Sea Bass | 250 | n/a | 🚫 | spicy | ✅ |
| bailiang-egg | ใบเหลียงผัดไข่ | Stir-fried Bai Liang w/ Egg | 100 | n/a | 🚫 | vegetarian | ✅ |

---

## 🍝 9. อาหาร Inter (International)

| id | name_th | name_en | price | type | photo | tags | status |
|---|---|---|---|---|---|---|---|
| spaghetti-classic | สปาเก็ตตี้คลาสสิก | Classic Spaghetti | 175 | n/a | ✅ | — | ✅ |
| spaghetti-seafood-spicy | สปาเก็ตตี้ขี้เมาทะเล | Spicy Seafood Spaghetti | 179 | n/a | ✅ | spicy | 🟡 |
| spaghetti-braised-beef | สปาเก็ตตี้เนื้อตุ๋น | Braised Beef Spaghetti | ? | n/a | ✅ | — | 🟡 |

---

## 🍽️ 10. อื่นๆ (Other)

| id | name_th | name_en | price | type | photo | tags | status |
|---|---|---|---|---|---|---|---|
| mango | มะม่วง | Mango | 55 | n/a | 🚫 | — | 🟡 |
| orange-lemon-fresh | ส้ม/มะนาวสด | Fresh Orange/Lemon | 35 | n/a | 🚫 | — | 🟡 |
| rice-porridge | ข้าวต้ม | Rice Porridge | 15 | n/a | 🚫 | — | 🟡 |
| boiled-egg | ไข่ต้ม | Boiled Egg | ? | n/a | 🚫 | — | 🔴 |
| poke | โปเก | Poke | ? | n/a | 🚫 | — | 🔴 |
| khanom-jeen | ขนมจีน | Khanom Jeen (Thai Rice Noodle) | ? | n/a | 🚫 | — | 🔴 |
| somtum-chaole | ส้มตำชาวเล | Seafood Som Tum | ? | n/a | 🚫 | spicy | 🔴 |

---

## 🍡 11. ขนมไทย (Thai Dessert Sets) — 🌟 Signature ของฝาก

> หมวดนี้คือ **highlight ของร้าน** — ขนมไทยจัดเซ็ตในกล่องสวย เหมาะกับของฝาก ของไหว้ งานบุญ
> รวมรายการอ่านได้จาก POS — ราคาส่วนใหญ่ต้อง confirm

| id | name_th | name_en | price | type | photo | tags | status |
|---|---|---|---|---|---|---|---|
| set-1 | SET 1 ขนมรวม | Thai Dessert Set #1 | ? | n/a | ✅ | set, takeaway | 🟡 |
| set-2 | SET 2 ขนมรวม | Thai Dessert Set #2 | 240 | n/a | ✅ | set, takeaway | ✅ |
| set-3-kosanak | SET 3 ขนมรวม + โกสนัค | Thai Dessert Set #3 + Khanom Kosanak | 250 | n/a | ✅ | set, takeaway | ✅ |
| box-4-small | ขนม 4 หลุม (เล็ก) | 4-Box Set (Small) | ? | n/a | ✅ | set, takeaway | 🟡 |
| box-4-large | ขนม 4 หลุม (ใหญ่) | 4-Box Set (Large) | ? | n/a | ✅ | set, takeaway | 🟡 |
| mongkol-set | ขนมมงคล (รวมเซ็ต) | Auspicious Thai Sweets Set | ? | n/a | ✅ | set, takeaway, ceremony | 🟡 |
| mixed-set-small | รวมเซ็ต (เล็ก) | Mixed Set (Small) | ? | n/a | ✅ | set, takeaway | 🟡 |
| mixed-set-large | รวมเซ็ต (ใหญ่) | Mixed Set (Large) | ? | n/a | ✅ | set, takeaway | 🟡 |
| prig-small | พริก (เล็ก) | Prik (Small) | ? | n/a | ✅ | set, takeaway | 🔴 |
| prig-large | พริก (ใหญ่) | Prik (Large) | ? | n/a | ✅ | set, takeaway | 🔴 |
| look-choop | ลูกชุบ | Look Choop (Mung Bean Fruits) | ? | n/a | ✅ | takeaway | 🟡 |
| khanom-jeeb-sweet | ขนมจีบน้ำพริกหวาน | Sweet Filling Dim Sum | ? | n/a | ✅ | takeaway | 🟡 |
| khanom-jeeb-spicy | ขนมจีบน้ำพริกเผ็ด | Spicy Filling Dim Sum | ? | n/a | ✅ | takeaway, spicy | 🟡 |
| kao-tom-mud-fresh | ข้าวต้มมัด (สด) | Kao Tom Mud (Fresh) | ? | n/a | ✅ | takeaway | 🟡 |
| kao-tom-mud-cold | ข้าวต้มมัด (เย็น) | Kao Tom Mud (Chilled) | 75 | n/a | ✅ | takeaway | ✅ |

---

## Summary

| Category | Total | ✅ Confirmed | 🟡 Price-TBC | 🔴 Item-TBC |
|---|---|---|---|---|
| Coffee | 16 | 4 | 12 | 0 |
| Non-Coffee | 12 | 2 | 9 | 1 |
| Matcha & Tea | 8 | 2 | 6 | 0 |
| Signature | 2 | 0 | 1 | 1 |
| Soft Drinks | 3 | 0 | 0 | 3 |
| Bakery | 8 | 0 | 7 | 1 |
| Snacks | 5 | 0 | 3 | 2 |
| Thai Mains | 7 | 7 | 0 | 0 |
| Inter | 3 | 1 | 2 | 0 |
| Other | 7 | 0 | 3 | 4 |
| Thai Dessert | 15 | 2 | 11 | 2 |
| **Total** | **86** | **18** | **54** | **14** |

**Coverage:** 21% confirmed, 63% รอ confirm ราคา, 16% รอ confirm รายการเต็ม

---

## What's Missing / To Confirm with Owner

### 🔴 Critical (ขัด layout)
- [ ] ราคาทั้งหมวด Coffee (12 รายการ) — POS image อ่านไม่ชัด
- [ ] รายการ Signature เต็ม
- [ ] รายการ Soft Drinks
- [ ] รายการ Snacks

### 🟡 Nice-to-have
- [ ] รูปคุณภาพสูงทุกรายการ (POS resolution ต่ำเกินสำหรับเว็บ)
- [ ] คำอธิบาย/ส่วนผสมแต่ละเมนู (1-2 บรรทัด)
- [ ] ชื่อภาษาอังกฤษทางการ (ตอนนี้บางอันเป็น translation จาก Claude)
- [ ] แยกราคา ร้อน / เย็น / ปั่น สำหรับเมนูที่มีหลาย type
- [ ] Allergen tags (นม / ถั่ว / กลูเตน)
- [ ] เมนู Signature ที่อยาก highlight เป็นพิเศษ

### Design Question
- [ ] เซ็ตขนมไทย — ต้องการให้สั่งจองออนไลน์ผ่านเว็บ หรือแค่โชว์ + ให้โทร?

---

## Change Log

| Date | Version | Change |
|---|---|---|
| 2026-05-28 | 0.1 | Initial extraction (preliminary) |
| 2026-05-28 | 0.2 | Rename "พาสต้า" → "อาหาร Inter" |
| 2026-05-28 | 0.3 | **Redesign schema** — table-based with id/type/tags/status, รวม snack & expanded thai dessert (~86 items), เพิ่ม category index และ coverage summary |
