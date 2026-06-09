/* =====================================================================
   LiLa Cafe — Menu data + renderer
   Source of truth: official menu posters (assets/menu-book/) + FoodStory POS.
   Prices in THB. img = slug of a photo in assets/menu/lila-cafe-<slug>.jpg,
   or null → skeleton placeholder (item has no photo yet).
   Drinks with hot/iced prices show the iced (most-ordered) price; full
   hot/iced detail lives in the flipbook on the home page.
   ===================================================================== */

const MENU = [
  {
    id: 'coffee', icon: '☕', name: 'Coffee', sub: 'กาแฟสด',
    items: [
      { th: 'เอสเพรสโซ',   en: 'Espresso',            price: 75,  img: 'espresso-hot' },
      { th: 'Es-yen',      en: 'เอสเพรสโซไทยสไตล์',     price: 95,  img: 'es-yen' },
      { th: 'อเมริกาโน่',   en: 'Americano',            price: 80,  img: 'americano-iced' },
      { th: 'ลาเต้',       en: 'Latte',                price: 90,  img: 'latte-iced' },
      { th: 'คาปูชิโน่',    en: 'Cappuccino',           price: 90,  img: 'cappuccino-iced' },
      { th: 'มอคค่า',      en: 'Mocha',                price: 90,  img: 'dirty-chocolate' },
      { th: 'คาราเมลลาเต้', en: 'Caramel Latte',        price: 100, img: 'caramel-latte-iced' },
    ],
  },
  {
    id: 'noncoffee', icon: '🥤', name: 'Non-Coffee', sub: 'นอน-คอฟฟี่',
    items: [
      { th: 'ซิกเนเจอร์โกโก้',  en: 'Signature Cocoa',   price: 100, img: 'dark-chocolate-iced' },
      { th: 'คาราเมลโกโก้',    en: 'Caramel Cocoa',     price: 115, img: null },
      { th: 'สตรอว์เบอร์รี่โกโก้', en: 'Strawberry Cocoa', price: 130, img: null },
      { th: 'นมสด',           en: 'Fresh Milk',        price: 75,  img: null },
      { th: 'นมสดคาราเมล',     en: 'Caramel Milk',      price: 90,  img: null },
      { th: 'สตรอว์เบอร์รี่นมสด', en: 'Strawberry Milk',  price: 120, img: 'strawberry-milk' },
      { th: 'นมชมพูเย็น',      en: 'Pink Milk',         price: 85,  img: 'pink-milk' },
    ],
  },
  {
    id: 'matcha', icon: '🍵', name: 'Matcha & Tea', sub: 'มัทฉะ & ชา',
    items: [
      { th: 'ชานมฮอร์ลิคส์',    en: 'Horlicks Milk Tea',     price: 110, img: null },
      { th: 'ชานมน้ำผึ้ง',     en: 'Honey Milk Tea',        price: 115, img: null },
      { th: 'ชาไทยน้ำผึ้งมะนาว', en: 'Thai Tea Honey Lemon',  price: 115, img: null },
      { th: 'เพียวมัทฉะ',      en: 'Pure Matcha',           price: 120, img: 'matcha-iced' },
      { th: 'มัทฉะ โคโคนัท',    en: 'Matcha Coconut',        price: 140, img: 'matcha-latte-cream' },
      { th: 'มัทฉะ ลาเต้',     en: 'Matcha Latte',          price: 140, img: 'matcha-latte-iced' },
      { th: 'คลาวด์มัทฉะ โคโคนัท', en: 'Cloud Matcha Coconut', price: 160, img: null },
      { th: 'มัทฉะ สตรอเบอรี่', en: 'Strawberry Matcha',     price: 160, img: 'matcha-strawberry' },
      { th: 'มัทฉะ แมงโก้',    en: 'Mango Matcha',          price: 160, img: null },
      { th: 'มัทฉะ เอสเพรสโซ',  en: 'Matcha Espresso',       price: 175, img: 'dirty-matcha' },
    ],
  },
  {
    id: 'signature', icon: '🌟', name: 'Signature', sub: 'เครื่องดื่มซิกเนเจอร์',
    items: [
      { th: 'Thai Tea',             en: 'ชาไทยซิกเนเจอร์',        price: 85,  img: 'thai-tea-iced', badge: 'ยอดนิยม' },
      { th: 'Fruity Tea',           en: 'ชาเขียวมะลิ + ผลไม้สด',   price: 135, img: null },
      { th: 'Vanilla Sky',          en: 'นมชมพู พุดดิ้ง คาราเมล',  price: 125, img: 'rainbow-layered' },
      { th: 'Rose Kiss Soda',       en: 'ลิ้นจี่ + กุหลาบ + โซดา',  price: 125, img: 'lychee-mocktail' },
      { th: 'Rosie Peach Fizz Soda', en: 'พีช + กุหลาบ + โซดา',     price: 125, img: 'passion-peach' },
      { th: 'Summer Berry Frappe',  en: 'เบอร์รี่รวมปั่น',         price: 175, img: 'berry-smoothie' },
      { th: 'Thai Tea Espresso',    en: 'ชาไทย + เอสเพรสโซ',       price: 130, img: null },
      { th: 'Oreo Latte',           en: 'เอสเพรสโซ + ครีมโอริโอ',   price: 145, img: null },
      { th: 'Lotus Biscoff Latte',  en: 'เอสเพรสโซ + บิสคอฟ',      price: 145, img: 'biscoff-latte' },
    ],
  },
  {
    id: 'soft', icon: '🥤', name: 'Soft Drinks & โซดา', sub: 'น้ำผลไม้ & อิตาเลียนโซดา',
    items: [
      { th: 'น้ำส้มคั้น',         en: 'Orange Juice',      price: 75,  img: 'orange-juice' },
      { th: 'น้ำมะพร้าว',        en: 'Coconut Juice',     price: 75,  img: null },
      { th: 'น้ำเปล่า',          en: 'Drinking Water',    price: 20,  img: 'sparkling-water' },
      { th: 'น้ำอัดลม',          en: 'Soft Drink',        price: 25,  img: null },
      { th: 'สตรอว์เบอร์รี่โซดา',  en: 'Strawberry Soda',   price: 95,  img: null },
      { th: 'บลูโซดา',           en: 'Blue Curacao Soda', price: 95,  img: 'butterfly-pea-soda' },
      { th: 'น้ำผึ้งเลมอนโซดา',   en: 'Honey Lemon Soda',  price: 120, img: 'honey-lemon' },
      { th: 'แดงมะนาวโซดา',      en: 'Red Lemon Soda',    price: 85,  img: 'red-mocktail' },
    ],
  },
  {
    id: 'single', icon: '🍛', name: 'อาหารจานเดียว', sub: 'Single Dishes',
    items: [
      { th: 'ผัดไทยกุ้งสด',       en: 'Pad Thai with Shrimp',           price: 119, img: null },
      { th: 'ข้าวกะเพราไข่ดาว',   en: 'Holy Basil w/ Fried Egg',        price: 95,  img: null, note: 'หมูสับ/ไก่/เนื้อ/ทะเล' },
      { th: 'ข้าวไข่ข้น',        en: 'Creamy Omelette Rice',           price: 129, img: null, note: 'กะเพราหมู/ไส้กรอกแฮม/กุ้ง' },
      { th: 'ข้าวผัดรถไฟ',       en: 'Railway Fried Rice',             price: 89,  img: null },
      { th: 'ข้าวผัด',          en: 'Fried Rice',                     price: 89,  img: null, note: 'หมู/ไก่/ไส้กรอก/ทะเล' },
      { th: 'ข้าวผัดอเมริกัน',    en: 'American Fried Rice',            price: 169, img: null },
      { th: 'ข้าวไข่เจียว',      en: 'Thai Omelette Rice',             price: 65,  img: null, note: 'ไข่เจียว/ไข่เจียวหมูสับ' },
    ],
  },
  {
    id: 'thaifood', icon: '🍲', name: 'กับข้าว', sub: "Chef's Specials",
    items: [
      { th: 'ลาบหมู',                en: 'Spicy Minced Pork Salad (Larb)', price: 95,  img: null },
      { th: 'ยำวุ้นเส้นโบราณ',        en: 'Glass Noodle Spicy Salad',       price: 115, img: null },
      { th: 'น้ำพริกโจรกุ้งสด + ปลาทูทอด', en: 'Nam Prik w/ Shrimp & Mackerel', price: 195, img: null },
      { th: 'แกงพริกกระดูกหมู',       en: 'Spicy Pork Rib Curry',           price: 125, img: null },
      { th: 'ต้มจืดเต้าหู้หมูสับ',     en: 'Tofu & Minced Pork Soup',        price: 90,  img: null },
      { th: 'ผัดผักรวมกุ้งสด',        en: 'Stir-fried Mixed Veg w/ Shrimp', price: 125, img: null },
      { th: 'ไข่เจียวฟู',            en: 'Thai Fluffy Omelette',           price: 70,  img: null, note: 'ไข่/หมูสับ/กุ้งสับ' },
      { th: 'แกงส้มปลากะพง',         en: 'Sour Curry w/ Sea Bass',         price: 250, img: null },
      { th: 'ใบเหลียงผัดไข่',        en: 'Stir-fried Bai Liang w/ Egg',    price: 100, img: null },
    ],
  },
  {
    id: 'khanomjeen', icon: '🍜', name: 'ขนมจีน', sub: 'Khanom Jeen',
    note: 'เพิ่มได้: ขนมจีนเปล่า ฿15/จาน · ไข่ต้ม ฿15/ฟอง · ข้าวเปล่า ฿15/จาน · น้ำยาขนมจีนเปล่า ฿60/ถ้วย',
    items: [
      { th: 'น้ำยากะทิใต้',         en: 'Southern Coconut Curry',     price: 75,  img: null },
      { th: 'น้ำยากะทิกลาง',        en: 'Central Coconut Curry',      price: 75,  img: null },
      { th: 'น้ำพริกหวานกุ้งสด',     en: 'Sweet Shrimp Chili Sauce',   price: 75,  img: null },
      { th: 'น้ำยาลาว',            en: 'Lao Style Curry',            price: 75,  img: null },
      { th: 'เขียวหวานไก่',         en: 'Green Curry with Chicken',   price: 75,  img: null },
      { th: 'น้ำยากะทิรวมเจ้าสมุทร', en: 'Coconut Curry w/ Seafood',   price: 299, img: null },
      { th: 'เซตน้ำยาสามสหาย',      en: 'Curry Set (Choose any 3)',   price: 199, img: null },
    ],
  },
  {
    id: 'fried', icon: '🍤', name: 'เมนูทอด', sub: 'Fried Dishes',
    items: [
      { th: 'ปีกไก่ทอด',          en: 'Fried Chicken Wings',       price: 89,  img: null },
      { th: 'หมูสามชั้นทอดน้ำปลา',  en: 'Fried Pork Belly',          price: 95,  img: null },
      { th: 'เห็ดเข็มทองทอด',      en: 'Crispy Enoki Mushrooms',    price: 79,  img: null },
      { th: 'ทอดมันกุ้ง',         en: 'Deep Fried Shrimp Cakes',   price: 139, img: null },
      { th: 'กุ้งชุบแป้งทอด',      en: 'Deep Fried Shrimp in Batter', price: 109, img: null },
      { th: 'ปลาหมึกทอด',         en: 'Deep Fried Squid',          price: 129, img: null },
      { th: 'ไส้กรอกทอด',         en: 'Fried Sausage',             price: 89,  img: null },
      { th: 'นักเก็ต',           en: 'Chicken Nuggets',           price: 95,  img: null },
      { th: 'ไก่ป๊อป',           en: 'Popcorn Chicken',           price: 89,  img: null },
      { th: 'เอ็นไก่ทอด',         en: 'Fried Chicken Tendons',     price: 95,  img: null },
      { th: 'เฟรนช์ฟรายส์',       en: 'French Fries',              price: 79,  img: null },
      { th: 'เนื้อแดดเดียว',      en: 'Sun-Dried Beef (Fried)',    price: 119, img: null },
      { th: 'ลีลาทอดคอมโบ',       en: 'Fried Combo Platter',       price: 199, img: null, badge: 'จัดชุด' },
    ],
  },
  {
    id: 'pasta', icon: '🍝', name: 'พาสต้า', sub: 'Pasta',
    items: [
      { th: 'สปาเก็ตตี้คาโบนาร่าครีมซอส', en: 'Spaghetti Carbonara',        price: 145, img: null },
      { th: 'สปาเก็ตตี้กระเทียมเบคอน',   en: 'Spaghetti Bacon, Garlic & Chili', price: 145, img: null },
      { th: 'สปาเก็ตตี้ผัดขี้เมาทะเล',    en: 'Spaghetti Spicy Seafood',    price: 175, img: null },
    ],
  },
  {
    id: 'thaidessert', icon: '🍡', name: 'ขนมไทย', sub: 'Thai Dessert & ของฝาก',
    highlight: true,
    note: 'ขนมไทยมีแบบกล่อง 4 ชิ้น และ 6 ชิ้น — ราคาแสดงเป็นราคาต่อชิ้น',
    items: [
      { th: 'วุ้นกะทิมะพร้าวอ่อน',  en: 'Young Coconut Jelly',        price: 15, img: null, unit: '/ชิ้น' },
      { th: 'วุ้นผลไม้',          en: 'Assorted Fruit Jelly',       price: 15, img: null, unit: '/ชิ้น' },
      { th: 'ขนมชั้น',           en: 'Thai Layered Dessert',       price: 15, img: null, unit: '/ชิ้น' },
      { th: 'ขนมเปียกปูน',        en: 'Pandan Coconut Pudding',     price: 15, img: null, unit: '/ชิ้น' },
      { th: 'ตะโก้ ข้าวโพด/เผือก', en: 'Takoh (Corn / Taro)',        price: 15, img: null, unit: '/ชิ้น' },
      { th: 'ขนมกล้วยมะพร้าวอ่อน', en: 'Steamed Banana Coconut Cake', price: 15, img: null, unit: '/ชิ้น' },
      { th: 'ขนมฟักทองมะพร้าวอ่อน', en: 'Steamed Pumpkin Coconut Cake', price: 15, img: null, unit: '/ชิ้น' },
      { th: 'ลูกชุบ',            en: 'Mung Bean Fruit Dessert',    price: 6,  img: null, unit: '/ชิ้น' },
      { th: 'เฉาก๊วยชากังราว',    en: 'Herbal Grass Jelly',         price: 50, img: null },
      { th: 'ลอดช่องวัดเจษ',      en: 'Lod Chong in Coconut Milk',  price: 50, img: null },
      { th: 'SET 1 — ชุดลีลาสวนหวาน', en: 'LiLa Sweet Garden Set',   price: 249, img: null, badge: 'เซ็ต' },
      { th: 'SET 2 — ชุดลีลาดอกไม้หอม', en: 'LiLa Blossom Set',       price: 199, img: null, badge: 'เซ็ต' },
      { th: 'SET 3 — ชุดลีลารวมมิตร', en: 'LiLa Signature Basket Set', price: 269, img: null, badge: 'เซ็ต' },
    ],
  },
];

/* ---------------- renderer ---------------- */
(function () {
  const CAMERA_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>' +
    '<circle cx="12" cy="13" r="4"/></svg>';

  function cardHTML(it) {
    const media = it.img
      ? '<img src="../assets/menu/lila-cafe-' + it.img + '.jpg" alt="' + it.th +
        '" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />'
      : '<div class="skeleton w-full h-full">' + CAMERA_SVG + '<span>ยังไม่มีรูป</span></div>';

    const badge = it.badge
      ? '<span class="absolute top-2 left-2 z-10 text-[10px] px-2 py-0.5 rounded-full bg-terracotta-600 text-cream-50">' + it.badge + '</span>'
      : '';

    const sub = it.note
      ? it.en + ' · <span class="text-ink-400">' + it.note + '</span>'
      : it.en;

    const unit = it.unit ? '<span class="text-xs text-ink-400 font-normal"> ' + it.unit + '</span>' : '';

    return (
      '<article class="group">' +
        '<div class="relative arch-image bg-cream-200 aspect-square mb-4 shadow-sm">' + badge + media + '</div>' +
        '<h3 class="thai-heading text-lg leading-snug">' + it.th + '</h3>' +
        '<p class="text-xs text-ink-500 mt-1">' + sub + '</p>' +
        '<p class="text-terracotta-600 font-medium mt-2">฿' + it.price + unit + '</p>' +
      '</article>'
    );
  }

  function sectionHTML(cat) {
    const cards = cat.items.map(cardHTML).join('');
    const note = cat.note
      ? '<p class="text-xs text-ink-500 italic mb-6 -mt-2">' + cat.note + '</p>'
      : '';
    return (
      '<section id="' + cat.id + '" class="cat-anchor">' +
        '<div class="flex items-end justify-between mb-6 border-b border-cream-300 pb-4">' +
          '<h2 class="font-serif text-3xl lg:text-4xl">' + cat.icon + ' ' + cat.name +
            '<span class="block text-sm font-sans text-ink-500 tracking-wide mt-1">' + cat.sub + '</span>' +
          '</h2>' +
          '<span class="text-xs text-ink-500 whitespace-nowrap">' + cat.items.length + ' รายการ</span>' +
        '</div>' + note +
        '<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8">' + cards + '</div>' +
      '</section>'
    );
  }

  function navHTML(cat) {
    const cls = cat.highlight
      ? 'bg-terracotta-600 text-cream-50 hover:bg-terracotta-700'
      : 'bg-cream-200 hover:bg-sage-700 hover:text-cream-50';
    return '<a href="#' + cat.id + '" class="px-4 py-2 rounded-full transition ' + cls + '">' +
      cat.icon + ' ' + cat.name + '</a>';
  }

  const nav = document.getElementById('catNav');
  const root = document.getElementById('menuRoot');
  if (nav) nav.innerHTML = MENU.map(navHTML).join('');
  if (root) root.innerHTML = MENU.map(sectionHTML).join('');
})();
