/**
 * HTML Bilimdon - 20 ta interaktiv test dasturi
 * JavaScript mantiq va hodisalar boshqaruvi
 */

const questionsData = [
  {
    id: 1,
    category: "Asosiy tushunchalar",
    question: "HTML qisqartmasining to'liq kengaytmasi nima va u qanday vazifani bajaradi?",
    code: null,
    options: [
      "HyperText Markup Language — veb-sahifalarning strukturasi va skeletini yaratadi",
      "HighText Machine Language — kompyuter dasturlarini mashina kodiga o'tkazadi",
      "Hyperlink and Text Management Language — faqat giperhavolalarni boshqaradi",
      "Home Tool Markup Language — faqat lokal matnli fayllarni formatlaydi"
    ],
    correct: 0,
    explanation: "HTML (HyperText Markup Language — Gipermatnli belgilash tili) veb-sahifalarning asosi hisoblanib, matn, rasm, video va shakllarning joylashuvi hamda tuzilishini belgilab beradi."
  },
  {
    id: 2,
    category: "Sarlavhalar",
    question: "HTML da eng yuqori darajadagi (eng katta va eng muhim) sarlavha qaysi teg orqali yoziladi?",
    code: "<h1>Asosiy Katta Sarlavha</h1>\n<h3>O'rtacha Sarlavha</h3>\n<h6>Kichik Sarlavha</h6>",
    options: [
      "<heading>",
      "<h6>",
      "<h1>",
      "<head>"
    ],
    correct: 2,
    explanation: "HTML da sarlavhalar <h1> dan <h6> gacha belgilanadi. <h1> eng muhim va eng katta sarlavha, <h6> esa eng kichigi hisoblanadi. <head> esa hujjatning texnik sozlamalari qismidir."
  },
  {
    id: 3,
    category: "Matn elementlari",
    question: "Matn ichida yangi qatorga tushish (line break) uchun qaysi teg ishlatiladi va uning xususiyati nima?",
    code: "Salom barchaga!<br>Yangi qator boshlandi.",
    options: [
      "<br> — uning alohida yopiluvchi tegi yo'q (bo'sh/yolg'iz teg)",
      "<lb> — uning juft yopiluvchi tegi mavjud",
      "<break> — maxsus ajratuvchi juft teg",
      "<newline> — yangi satr kirituvchi matnli teg"
    ],
    correct: 0,
    explanation: "<br> (break) tegi matnni yangi satrga o'tkazadi. U 'void element' (bo'sh teg) hisoblanadi va unga alohida </br> yopiluvchi tegi yozilmaydi."
  },
  {
    id: 4,
    category: "Havolalar (Links)",
    question: "Boshqa veb-sahifaga giperhavola (link) qo'yish uchun to'g'ri sintaksis qaysi javobda ko'rsatilgan?",
    code: null,
    options: [
      "<a href=\"https://daryo.uz\">Yangiliklar</a>",
      "<link src=\"https://daryo.uz\">Yangiliklar</link>",
      "<a url=\"https://daryo.uz\">Yangiliklar</a>",
      "<anchor path=\"https://daryo.uz\">Yangiliklar</anchor>"
    ],
    correct: 0,
    explanation: "Havolalar <a> (anchor) tegi orqali yaratiladi va yo'naltirilayotgan manzil 'href' (hypertext reference) atributida ko'rsatiladi."
  },
  {
    id: 5,
    category: "Multimedia",
    question: "Veb-sahifaga rasm joylashtirish va muqobil matn (alt) berish sintaksisi to'g'ri ko'rsatilgan qatorni toping:",
    code: null,
    options: [
      "<image src=\"logo.png\" title=\"Logotip\">",
      "<img src=\"logo.png\" alt=\"Sayt logotipi\">",
      "<img href=\"logo.png\" alt=\"Sayt logotipi\">",
      "<picture name=\"logo.png\">"
    ],
    correct: 1,
    explanation: "Rasm uchun <img> tegi ishlatiladi. 'src' (source) rasm yo'lini, 'alt' (alternative text) esa rasm ochilmay qolganda yoki ovozli o'quvchi dasturlar uchun tavsifni belgilaydi."
  },
  {
    id: 6,
    category: "Ro'yxatlar",
    question: "Raqamlangan (tartiblangan: 1, 2, 3...) ro'yxat yaratish uchun qaysi asosiy teg ishlatiladi?",
    code: "<ol>\n  <li>Birinchi dars</li>\n  <li>Ikkinchi dars</li>\n</ol>",
    options: [
      "<ul> (Unordered List)",
      "<ol> (Ordered List)",
      "<dl> (Description List)",
      "<list> (Simple List)"
    ],
    correct: 1,
    explanation: "<ol> (Ordered List) — raqamlangan ro'yxat. Belgili (markerli) ro'yxat esa <ul> (Unordered List) orqali hosil qilinadi. Har bir element <li> (List Item) ichiga olinadi."
  },
  {
    id: 7,
    category: "Jadvallar (Tables)",
    question: "HTML jadvalida gorizontal bitta qatorni (table row) yaratish uchun qaysi teg qo'llaniladi?",
    code: "<table>\n  <tr>\n    <td>Ism</td>\n    <td>Bahosi</td>\n  </tr>\n</table>",
    options: [
      "<td> (Table Data)",
      "<th> (Table Header)",
      "<tr> (Table Row)",
      "<row> (Row Element)"
    ],
    correct: 2,
    explanation: "<tr> (Table Row) jadvalning gorizontal qatorini yaratadi. Qator ichidagi ma'lumot katakchalari <td>, sarlavha katakchalari esa <th> tegi bilan yoziladi."
  },
  {
    id: 8,
    category: "Formalar (Forms)",
    question: "Foydalanuvchi ma'lumotlarini (masalan, login va parol) serverga xavfsizroq yuborish uchun <form> tegida qaysi usul (method) qo'llaniladi?",
    code: "<form action=\"/login\" method=\"...\">\n  <!-- maydonlar -->\n</form>",
    options: [
      "method=\"GET\"",
      "method=\"POST\"",
      "method=\"SEND\"",
      "method=\"SECURE\""
    ],
    correct: 1,
    explanation: "POST metodi ma'lumotlarni so'rov tanasida (request body) yashirin jo'natadi va URL manzil satrida ko'rsatmaydi. GET esa ma'lumotlarni URL manzilida hamma ko'radigan qilib yuboradi."
  },
  {
    id: 9,
    category: "Formatlash",
    question: "Semantik jihatdan matnning muhimligini bildiruvchi va uni qalin (bold) qilib chiqaruvchi teg qaysi?",
    code: "<p>Eslatma: Bu qoida <strong>juda muhim</strong> hisoblanadi.</p>",
    options: [
      "<strong>",
      "<bold>",
      "<fat>",
      "<heavy>"
    ],
    correct: 0,
    explanation: "<strong> tegi semantik jihatdan kuchli urg'uni bildiradi va matnni qalin ko'rsatadi. <b> ham qalin qiladi, lekin semantik ma'no bermaydi. <bold> esa HTML da mavjud emas."
  },
  {
    id: 10,
    category: "Formalar",
    question: "Foydalanuvchi kiritayotgan belgilar ekranda nuqta yoki yulduzcha ko'rinishida yashirin bo'lishi uchun <input> tegiga qaysi type beriladi?",
    code: null,
    options: [
      "<input type=\"text\" hidden>",
      "<input type=\"password\">",
      "<input type=\"secret\">",
      "<input type=\"hide-chars\">"
    ],
    correct: 1,
    explanation: "<input type=\"password\"> maxfiy so'zlarni kiritishda harflarni nuqta yoki yulduzcha ko'rinishida ko'rsatadi. type=\"hidden\" esa butun inputni ekrandan butunlay yashiradi."
  },
  {
    id: 11,
    category: "HTML5 Semantika",
    question: "Saytning asosiy navigatsiya havolalari (menyu) bloki uchun HTML5 da qaysi maxsus semantik teg kiritilgan?",
    code: "<nav>\n  <a href=\"#asosiy\">Asosiy</a>\n  <a href=\"#kurslar\">Kurslar</a>\n</nav>",
    options: [
      "<navigation>",
      "<nav>",
      "<menu-bar>",
      "<links>"
    ],
    correct: 1,
    explanation: "<nav> (Navigation) tegi saytning asosiy menyulari va ichki yo'naltiruvchi navigatsiya bloklari uchun kiritilgan semantik teg hisoblanadi."
  },
  {
    id: 12,
    category: "Formalar",
    question: "Foydalanuvchiga bir necha qatordan iborat katta matn, fikr yoki sharh yozish imkonini beruvchi teg qaysi?",
    code: null,
    options: [
      "<input type=\"multiline\">",
      "<textbox>",
      "<textarea rows=\"4\" cols=\"40\"></textarea>",
      "<textinput rows=\"4\">"
    ],
    correct: 2,
    explanation: "<textarea> ko'p qatorli matn kiritish maydoni bo'lib, uning eni va balandligini rows (qatorlar) va cols (ustunlar) atributlari orqali boshqarish mumkin."
  },
  {
    id: 13,
    category: "Formalar",
    question: "Ochiluvchi tanlov ro'yxati (Dropdown) yaratish uchun qaysi teglar juftligi to'g'ri qo'llaniladi?",
    code: "<select name=\"viloyat\">\n  <option value=\"toshkent\">Toshkent</option>\n  <option value=\"samarqand\">Samarqand</option>\n</select>",
    options: [
      "<dropdown> va <item>",
      "<select> va <option>",
      "<list> va <item>",
      "<choice> va <value>"
    ],
    correct: 1,
    explanation: "Tanlov ro'yxati <select> tegi bilan e'lon qilinadi va undagi har bir tanlov varianti <option> tegi yordamida yoziladi."
  },
  {
    id: 14,
    category: "Hujjat tuzilishi",
    question: "HTML5 standartida veb-sahifaning eng birinchi qatorida yozilishi shart bo'lgan to'g'ri Doctype e'loni qaysi?",
    code: null,
    options: [
      "<!DOCTYPE html>",
      "<!DOCTYPE HTML5>",
      "<doctype html5.0>",
      "<?xml html version=\"5.0\"?>"
    ],
    correct: 0,
    explanation: "<!DOCTYPE html> e'loni brauzerga sahifaning zamonaviy HTML5 standartida ekanligini bildiradi va barcha zamonaviy xususiyatlarni to'g'ri render qilishni kafolatlaydi."
  },
  {
    id: 15,
    category: "Head va Meta",
    question: "O'zbek tilidagi harflar (o', g', sh, ch) va jahon tillari belgilari brauzerda xatosiz chiqishi uchun qaysi meta kodirovka tegi qo'yiladi?",
    code: "<head>\n  <meta charset=\"UTF-8\">\n</head>",
    options: [
      "<meta charset=\"UTF-8\">",
      "<meta language=\"uzbek\">",
      "<meta encoding=\"iso-8859-1\">",
      "<meta code=\"utf-16\">"
    ],
    correct: 0,
    explanation: "<meta charset=\"UTF-8\"> tegi dunyodagi deyarli barcha harf va maxsus belgilarni to'liq qo'llab-quvvatlovchi universal UTF-8 belgilar kodirovkasini belgilaydi."
  },
  {
    id: 16,
    category: "Element turlari",
    question: "Quyidagi elementlardan qaysi biri 'Block-level' (yangi satrdan boshlanib, butun qator enini to'liq egallovchi) element hisoblanadi?",
    code: null,
    options: [
      "<span>",
      "<a>",
      "<div>",
      "<b>"
    ],
    correct: 2,
    explanation: "<div> elementi blok (block-level) bo'lib, har doim yangi qatordan boshlanadi va butun kenglikni egallaydi. <span>, <a> va <b> esa inline (matn ichida turuvchi) elementlardir."
  },
  {
    id: 17,
    category: "Sintaksis",
    question: "HTML kodida brauzer ekranga chiqarmaydigan to'g'ri izoh (kommentariya) yozish sintaksisi qaysi?",
    code: null,
    options: [
      "// Bu HTML dagi izoh",
      "/* Bu HTML dagi izoh */",
      "<!-- Bu HTML dagi izoh -->",
      "# Bu HTML dagi izoh"
    ],
    correct: 2,
    explanation: "HTML da izohlar <!-- izoh matni --> ko'rinishida yoziladi. // va /* */ esa CSS hamda JavaScript dasturlash tillarida izoh yozish uchun xizmat qiladi."
  },
  {
    id: 18,
    category: "Ulanishlar (Link)",
    question: "Alohida tashqi CSS faylini (masalan 'style.css') HTML sahifasiga to'g'ri ulash qaysi teg orqali amalga oshiriladi?",
    code: "<head>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>",
    options: [
      "<link rel=\"stylesheet\" href=\"style.css\">",
      "<style src=\"style.css\"></style>",
      "<script href=\"style.css\"></script>",
      "<css file=\"style.css\">"
    ],
    correct: 0,
    explanation: "Tashqi stillar jadvali <head> qismida <link rel=\"stylesheet\" href=\"style.css\"> orqali ulanadi. <style> esa sahifaning o'zida ichki CSS yozish uchun ishlatiladi."
  },
  {
    id: 19,
    category: "Multimedia",
    question: "Sahifaga video qo'yganingizda foydalanuvchiga videoni qo'yish (play), to'xtatish (pause) va ovozni boshqarish imkonini beruvchi atribut qaysi?",
    code: "<video src=\"dars.mp4\" controls width=\"600\"></video>",
    options: [
      "controls",
      "autoplay",
      "buttons=\"true\"",
      "playbar"
    ],
    correct: 0,
    explanation: "'controls' atributi videoning standart boshqaruv paneli (ijro etish, to'xtatish, vaqt shkalasi, ovoz boshqaruvi)ni brauzerda yoqib beradi."
  },
  {
    id: 20,
    category: "Head va Sarlavha",
    question: "Brauzerning yuqori yorlig'ida (tab paneli) va qidiruv tizimlarida sahifa nomi sifatida ko'rinadigan matn qaysi teg ichida yoziladi?",
    code: "<head>\n  <title>HTML Bo'yicha Test Sinovi</title>\n</head>",
    options: [
      "<head> ichidagi <title>",
      "<body> ichidagi <header>",
      "<head> ichidagi <name>",
      "<body> ichidagi <h1>"
    ],
    correct: 0,
    explanation: "<title> tegi <head> bo'limida joylashadi va brauzer varaqchasidagi (tab) sahifa nomi, qidiruv tizimlaridagi asosiy sarlavha hisoblanadi."
  }
];

// Holat boshqaruvi (State Management)
let currentMode = "practice"; // "practice" yoki "exam"
let currentIndex = 0;
let userAnswers = {}; // { questionId: selectedIndex }
let flaggedQuestions = new Set();
let timerInterval = null;
let secondsRemaining = 20 * 60; // 20 daqiqa (Exam mode)
let practiceSecondsElapsed = 0;
let soundEnabled = true;

// Web Audio API yordamida sof oflayn audio effektlar
class SoundEffects {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  playTone(freq, type, duration, startTime = 0) {
    if (!soundEnabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);
      
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + startTime + duration);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(this.ctx.currentTime + startTime);
      osc.stop(this.ctx.currentTime + startTime + duration);
    } catch (e) {
      console.warn("Audio xatolik:", e);
    }
  }

  correct() {
    this.init();
    // Chime (ikkita chiroyli garmonik ohang)
    this.playTone(523.25, "sine", 0.15, 0);     // C5
    this.playTone(659.25, "sine", 0.25, 0.1);   // E5
    this.playTone(783.99, "sine", 0.35, 0.2);   // G5
  }

  wrong() {
    this.init();
    // Yumshoq past tovush
    this.playTone(220, "triangle", 0.2, 0);
    this.playTone(196, "triangle", 0.3, 0.15);
  }

  click() {
    this.init();
    this.playTone(400, "sine", 0.05, 0);
  }

  finish() {
    this.init();
    // G'alaba fanfari
    this.playTone(523.25, "sine", 0.15, 0);
    this.playTone(659.25, "sine", 0.15, 0.15);
    this.playTone(783.99, "sine", 0.2, 0.3);
    this.playTone(1046.50, "sine", 0.5, 0.45);
  }
}

const sounds = new SoundEffects();

// DOM Elementlari
const screens = {
  welcome: document.getElementById("welcomeScreen"),
  quiz: document.getElementById("quizScreen"),
  results: document.getElementById("resultsScreen")
};

// Start funktsiyasi
function initApp() {
  setupEventListeners();
  loadThemePreference();
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem("html_quiz_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("html_quiz_theme", newTheme);
  updateThemeIcon(newTheme);
  sounds.click();
}

function updateThemeIcon(theme) {
  const btn = document.getElementById("themeToggleBtn");
  if (!btn) return;
  if (theme === "light") {
    btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    btn.title = "Qorong'i rejimga o'tish";
  } else {
    btn.innerHTML = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    btn.title = "Yorug' rejimga o'tish";
  }
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  const btn = document.getElementById("soundToggleBtn");
  if (!btn) return;
  if (soundEnabled) {
    btn.innerHTML = `<svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
    btn.title = "Ovozni o'chirish";
    sounds.correct();
  } else {
    btn.innerHTML = `<svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
    btn.title = "Ovozni yoqish";
  }
}

function selectMode(mode) {
  currentMode = mode;
  document.querySelectorAll(".mode-card").forEach(c => c.classList.remove("selected"));
  const targetCard = document.getElementById(mode === "practice" ? "practiceModeCard" : "examModeCard");
  if (targetCard) targetCard.classList.add("selected");
  sounds.click();
}

function startQuiz() {
  sounds.click();
  currentIndex = 0;
  userAnswers = {};
  flaggedQuestions.clear();
  secondsRemaining = 20 * 60; // 20 min
  practiceSecondsElapsed = 0;

  // Rejim belgisi
  const badge = document.getElementById("quizModeBadge");
  if (badge) {
    badge.textContent = currentMode === "practice" ? "O'rganish rejimi" : "Imtihon rejimi";
  }

  // Timer sozlash
  if (timerInterval) clearInterval(timerInterval);
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    if (currentMode === "exam") {
      secondsRemaining--;
      updateTimerDisplay();
      if (secondsRemaining <= 0) {
        clearInterval(timerInterval);
        finishQuiz(true); // Vaqt tugadi
      }
    } else {
      practiceSecondsElapsed++;
      updateTimerDisplay();
    }
  }, 1000);

  renderPalette();
  loadQuestion(currentIndex);

  // Ekranni almashtirish
  switchScreen("quiz");
}

function updateTimerDisplay() {
  const timerElem = document.getElementById("timerDisplay");
  if (!timerElem) return;

  if (currentMode === "exam") {
    const mins = Math.floor(secondsRemaining / 60);
    const secs = secondsRemaining % 60;
    timerElem.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    if (secondsRemaining < 180) { // oxirgi 3 daqiqa
      timerElem.classList.add("warning");
    } else {
      timerElem.classList.remove("warning");
    }
  } else {
    const mins = Math.floor(practiceSecondsElapsed / 60);
    const secs = practiceSecondsElapsed % 60;
    timerElem.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    timerElem.classList.remove("warning");
  }
}

function switchScreen(screenKey) {
  Object.values(screens).forEach(s => s && s.classList.remove("active"));
  if (screens[screenKey]) {
    screens[screenKey].classList.add("active");
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Savollar palitrasi (1 dan 20 gacha tugmachalar)
function renderPalette() {
  const grid = document.getElementById("paletteGrid");
  if (!grid) return;
  grid.innerHTML = "";

  questionsData.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.className = "palette-btn";
    btn.id = `palette-btn-${idx}`;
    btn.textContent = idx + 1;
    btn.title = `Savol ${idx + 1}`;

    if (idx === currentIndex) {
      btn.classList.add("active");
    }

    if (userAnswers[q.id] !== undefined) {
      if (currentMode === "practice") {
        if (userAnswers[q.id] === q.correct) {
          btn.classList.add("correct");
        } else {
          btn.classList.add("wrong");
        }
      } else {
        btn.classList.add("answered");
      }
    }

    if (flaggedQuestions.has(q.id)) {
      btn.classList.add("flagged");
    }

    btn.onclick = () => {
      sounds.click();
      jumpToQuestion(idx);
    };

    grid.appendChild(btn);
  });
}

function updatePaletteStatus(index) {
  const q = questionsData[index];
  const btn = document.getElementById(`palette-btn-${index}`);
  if (!btn) return;

  btn.className = "palette-btn";
  if (index === currentIndex) btn.classList.add("active");

  if (userAnswers[q.id] !== undefined) {
    if (currentMode === "practice") {
      if (userAnswers[q.id] === q.correct) {
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
      }
    } else {
      btn.classList.add("answered");
    }
  }

  if (flaggedQuestions.has(q.id)) {
    btn.classList.add("flagged");
  }
}

function jumpToQuestion(index) {
  if (index >= 0 && index < questionsData.length) {
    currentIndex = index;
    loadQuestion(currentIndex);
    // Barcha palitra tugmalarida faollikni yangilash
    questionsData.forEach((_, i) => updatePaletteStatus(i));
  }
}

// Joriy savolni ko'rsatish
function loadQuestion(index) {
  const q = questionsData[index];
  if (!q) return;

  // Sarlavha va tartib
  document.getElementById("currentQNumber").textContent = index + 1;
  document.getElementById("totalQNumber").textContent = questionsData.length;
  document.getElementById("categoryBadge").textContent = `# ${q.category}`;
  document.getElementById("questionText").textContent = q.question;

  // Jarayon chizig'i
  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = (answeredCount / questionsData.length) * 100;
  document.getElementById("progressFill").style.width = `${progressPercent}%`;
  document.getElementById("progressText").textContent = `${answeredCount} / ${questionsData.length} yechildi (${Math.round(progressPercent)}%)`;

  // Kod namoyishi
  const codeBox = document.getElementById("codeBox");
  const codeContent = document.getElementById("codeContent");
  if (q.code) {
    codeBox.style.display = "block";
    codeContent.textContent = q.code;
  } else {
    codeBox.style.display = "none";
  }

  // Variantlar ro'yxati
  const optionsContainer = document.getElementById("optionsList");
  optionsContainer.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  const hasAnswered = userAnswers[q.id] !== undefined;

  q.options.forEach((opt, optIdx) => {
    const optBtn = document.createElement("button");
    optBtn.className = "option-btn";
    optBtn.id = `option-${optIdx}`;

    optBtn.innerHTML = `
      <div class="option-badge">${letters[optIdx]}</div>
      <div class="option-text">${escapeHtml(opt)}</div>
    `;

    // Tanlangan holat
    if (hasAnswered) {
      if (currentMode === "practice") {
        optBtn.classList.add("disabled");
        if (optIdx === q.correct) {
          optBtn.classList.add("correct");
        } else if (optIdx === userAnswers[q.id]) {
          optBtn.classList.add("wrong");
        }
      } else {
        // Exam mode
        if (optIdx === userAnswers[q.id]) {
          optBtn.classList.add("selected");
        }
      }
    }

    optBtn.onclick = () => {
      if (currentMode === "practice" && hasAnswered) return;
      handleOptionSelect(index, optIdx);
    };

    optionsContainer.appendChild(optBtn);
  });

  // Izoh bloki (Practice Mode)
  const explCard = document.getElementById("explanationCard");
  if (currentMode === "practice" && hasAnswered) {
    explCard.classList.add("show");
    const isCorrect = userAnswers[q.id] === q.correct;
    explCard.className = `explanation-card show ${isCorrect ? 'is-correct' : 'is-wrong'}`;
    document.getElementById("explTitle").innerHTML = isCorrect
      ? `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> To'g'ri javob!`
      : `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Noto'g'ri javob! To'g'ri variant: ${letters[q.correct]}`;
    document.getElementById("explText").textContent = q.explanation;
  } else {
    explCard.classList.remove("show");
  }

  // Tugmachalar holati
  document.getElementById("prevBtn").disabled = index === 0;
  const nextBtn = document.getElementById("nextBtn");
  if (index === questionsData.length - 1) {
    nextBtn.textContent = "Testni tugatish";
    nextBtn.onclick = () => showFinishModal();
  } else {
    nextBtn.innerHTML = `Keyingisi <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
    nextBtn.onclick = () => nextQuestion();
  }

  // Bayroqcha holati
  const flagBtn = document.getElementById("flagBtn");
  if (flaggedQuestions.has(q.id)) {
    flagBtn.classList.add("active");
    flagBtn.innerHTML = `★ Belgilangan`;
  } else {
    flagBtn.classList.remove("active");
    flagBtn.innerHTML = `☆ Belgilash`;
  }

  questionsData.forEach((_, i) => updatePaletteStatus(i));
}

function handleOptionSelect(qIndex, selectedOptIndex) {
  const q = questionsData[qIndex];
  userAnswers[q.id] = selectedOptIndex;

  if (currentMode === "practice") {
    if (selectedOptIndex === q.correct) {
      sounds.correct();
    } else {
      sounds.wrong();
    }
  } else {
    sounds.click();
  }

  loadQuestion(qIndex);
  updatePaletteStatus(qIndex);
}

function toggleFlag() {
  const q = questionsData[currentIndex];
  if (flaggedQuestions.has(q.id)) {
    flaggedQuestions.delete(q.id);
  } else {
    flaggedQuestions.add(q.id);
  }
  sounds.click();
  loadQuestion(currentIndex);
}

function prevQuestion() {
  if (currentIndex > 0) {
    sounds.click();
    currentIndex--;
    loadQuestion(currentIndex);
  }
}

function nextQuestion() {
  if (currentIndex < questionsData.length - 1) {
    sounds.click();
    currentIndex++;
    loadQuestion(currentIndex);
  }
}

function showFinishModal() {
  sounds.click();
  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = questionsData.length - answeredCount;

  const modalText = document.getElementById("modalText");
  if (unansweredCount > 0) {
    modalText.innerHTML = `Siz jami <strong>${answeredCount}</strong> ta savolga javob berdingiz.<br>Hali <strong>${unansweredCount}</strong> ta savol javobsiz qolgan.<br>Rostdan ham testni yakunlamoqchimisiz?`;
  } else {
    modalText.innerHTML = `Barcha <strong>20 ta</strong> savolga to'liq javob berildi.<br>Natijalarni tekshirishga tayyormisiz?`;
  }

  document.getElementById("finishModal").classList.add("show");
}

function closeFinishModal() {
  sounds.click();
  document.getElementById("finishModal").classList.remove("show");
}

function finishQuiz(timeOut = false) {
  closeFinishModal();
  if (timerInterval) clearInterval(timerInterval);

  sounds.finish();

  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;

  questionsData.forEach(q => {
    if (userAnswers[q.id] === undefined) {
      unattemptedCount++;
    } else if (userAnswers[q.id] === q.correct) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const total = questionsData.length;
  const scorePercent = Math.round((correctCount / total) * 100);

  // Natijalar ekranini to'ldirish
  const resBadge = document.getElementById("resBadge");
  const resTitle = document.getElementById("resTitle");
  const resSubtitle = document.getElementById("resSubtitle");

  if (scorePercent >= 85) {
    resBadge.className = "result-badge passed";
    resBadge.textContent = "A'LO NATIJA (MASTER)";
    resTitle.textContent = "Qoyilmaqom! HTML bilimingiz a'lo darajada!";
    resSubtitle.textContent = `Siz ${scorePercent}% natija bilan HTML texnologiyasini chuqur o'zlashtirganingizni isbotladingiz.`;
    launchConfetti();
  } else if (scorePercent >= 65) {
    resBadge.className = "result-badge passed";
    resBadge.textContent = "YAXSHI NATIJA";
    resTitle.textContent = "Tabriklaymiz! Yaxshi natija!";
    resSubtitle.textContent = `Siz ${scorePercent}% natija qayd etdingiz. Yana ozroq mashq bilan 100% ga erishasiz.`;
    launchConfetti();
  } else {
    resBadge.className = "result-badge failed";
    resBadge.textContent = "QAYTA MASHQ QILING";
    resTitle.textContent = "Harakatdan to'xtamang!";
    resSubtitle.textContent = `Siz ${scorePercent}% ball to'pladingiz. Xatolaringiz ustida ishlab, yana urinib ko'ring!`;
  }

  // Diagramma animatsiyasi
  document.getElementById("resPercent").textContent = `${scorePercent}%`;
  document.getElementById("resFraction").textContent = `${correctCount} / ${total}`;

  // SVG Gauge
  const circle = document.getElementById("scoreCircle");
  if (circle) {
    const circumference = 2 * Math.PI * 70; // r=70 -> ~439.8
    const offset = circumference - (scorePercent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }

  // Statistik kartalar
  document.getElementById("statCorrect").textContent = correctCount;
  document.getElementById("statWrong").textContent = wrongCount + unattemptedCount;
  
  let timeStr = "";
  if (currentMode === "exam") {
    const elapsed = (20 * 60) - secondsRemaining;
    const m = Math.floor(elapsed / 60);
    const s = elapsed % 60;
    timeStr = `${m}m ${s}s`;
  } else {
    const m = Math.floor(practiceSecondsElapsed / 60);
    const s = practiceSecondsElapsed % 60;
    timeStr = `${m}m ${s}s`;
  }
  document.getElementById("statTime").textContent = timeStr;
  document.getElementById("statRate").textContent = `${scorePercent}%`;

  // Tahlil ro'yxatini render qilish
  renderReviewList("all");

  // Natijalar ekraniga o'tish
  switchScreen("results");
}

// Barcha savollarni ko'rib chiqish tahlili (Review)
function renderReviewList(filter = "all") {
  const container = document.getElementById("reviewList");
  if (!container) return;
  container.innerHTML = "";

  const letters = ["A", "B", "C", "D"];

  questionsData.forEach((q, idx) => {
    const userPick = userAnswers[q.id];
    const isCorrect = userPick === q.correct;
    const isUnanswered = userPick === undefined;

    if (filter === "wrong" && isCorrect) return;
    if (filter === "correct" && !isCorrect) return;

    const item = document.createElement("div");
    item.className = `review-item ${isCorrect ? 'is-correct' : 'is-wrong'}`;

    let statusText = isCorrect
      ? `<span style="color:var(--success)">✓ To'g'ri</span>`
      : isUnanswered
      ? `<span style="color:var(--accent-amber)">- Javobsiz</span>`
      : `<span style="color:var(--danger)">✗ Xato</span>`;

    let userPickHtml = "";
    if (!isUnanswered) {
      userPickHtml = `
        <div class="ans-pill user-pick">
          <strong>Sizning javobingiz:</strong> ${letters[userPick]}) ${escapeHtml(q.options[userPick])}
        </div>
      `;
    } else {
      userPickHtml = `
        <div class="ans-pill user-pick" style="color:var(--accent-amber);border-color:var(--accent-amber);">
          <strong>Sizning javobingiz:</strong> Belgilanmagan
        </div>
      `;
    }

    const correctPickHtml = `
      <div class="ans-pill correct-pick">
        <strong>To'g'ri javob:</strong> ${letters[q.correct]}) ${escapeHtml(q.options[q.correct])}
      </div>
    `;

    item.innerHTML = `
      <div class="review-meta">
        <span># ${idx + 1} - ${q.category}</span>
        <span>${statusText}</span>
      </div>
      <div class="review-qtext">${escapeHtml(q.question)}</div>
      ${q.code ? `<div class="code-box"><div class="code-content">${escapeHtml(q.code)}</div></div>` : ''}
      <div class="review-answers">
        ${userPickHtml}
        ${!isCorrect ? correctPickHtml : ''}
      </div>
      <div class="review-expl">
        💡 <strong>Tushuntirish:</strong> ${escapeHtml(q.explanation)}
      </div>
    `;

    container.appendChild(item);
  });
}

function filterReview(type) {
  sounds.click();
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  const btn = document.getElementById(`filter-${type}`);
  if (btn) btn.classList.add("active");
  renderReviewList(type);
}

// Sertifikat generatsiya qilish
function generateCertificate() {
  const nameInput = document.getElementById("certNameInput");
  const name = nameInput.value.trim() || "Foydalanuvchi";
  
  let correctCount = 0;
  questionsData.forEach(q => {
    if (userAnswers[q.id] === q.correct) correctCount++;
  });
  const scorePercent = Math.round((correctCount / questionsData.length) * 100);

  document.getElementById("certRecipient").textContent = name;
  document.getElementById("certScore").textContent = `${scorePercent}% (${correctCount}/20)`;
  document.getElementById("certDate").textContent = new Date().toLocaleDateString('uz-UZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  document.getElementById("certificateModal").classList.add("show");
  sounds.correct();
}

function closeCertificate() {
  sounds.click();
  document.getElementById("certificateModal").classList.remove("show");
}

function printCertificate() {
  window.print();
}

// Confetti Animatsiyasi (Canvas orqali mustaqil)
function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const count = 120;
  const colors = ["#6366f1", "#06b6d4", "#10b981", "#f59e0b", "#ec4899", "#3b82f6"];

  for (let i = 0; i < count; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 3 + 2,
      angle: Math.random() * 360,
      spin: (Math.random() - 0.5) * 8
    });
  }

  let frame = 0;
  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.y += p.speed;
      p.angle += p.spin;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.angle * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    frame++;
    if (frame < 180) {
      requestAnimationFrame(updateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  updateConfetti();
}

function restartQuiz() {
  sounds.click();
  switchScreen("welcome");
}

function retryWrongOnly() {
  // Faqat xato qilingan savollar bilan qayta boshlash
  sounds.click();
  const wrongIds = [];
  questionsData.forEach(q => {
    if (userAnswers[q.id] !== q.correct) {
      wrongIds.push(q.id);
    }
  });

  if (wrongIds.length === 0) {
    alert("Sizda xatolar mavjud emas! Barcha savollarga to'g'ri javob berdingiz.");
    return;
  }

  // To'g'ri topilganlarini saqlab, xatolarni tozalash
  wrongIds.forEach(id => {
    delete userAnswers[id];
  });

  currentMode = "practice";
  // Birinchi xato savolga o'tish
  const firstWrongIdx = questionsData.findIndex(q => wrongIds.includes(q.id));
  currentIndex = firstWrongIdx !== -1 ? firstWrongIdx : 0;

  switchScreen("quiz");
  loadQuestion(currentIndex);
}

// Yordamchi HTML tozalagich
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Barcha tugmachalar va eventlar ulanishi
function setupEventListeners() {
  document.getElementById("themeToggleBtn").addEventListener("click", toggleTheme);
  document.getElementById("soundToggleBtn").addEventListener("click", toggleSound);
  
  document.getElementById("practiceModeCard").addEventListener("click", () => selectMode("practice"));
  document.getElementById("examModeCard").addEventListener("click", () => selectMode("exam"));
  document.getElementById("startTestBtn").addEventListener("click", startQuiz);

  document.getElementById("prevBtn").addEventListener("click", prevQuestion);
  document.getElementById("flagBtn").addEventListener("click", toggleFlag);
  document.getElementById("finishQuizBtn").addEventListener("click", showFinishModal);

  document.getElementById("modalCancelBtn").addEventListener("click", closeFinishModal);
  document.getElementById("modalConfirmBtn").addEventListener("click", () => finishQuiz(false));

  document.getElementById("restartBtn").addEventListener("click", restartQuiz);
  document.getElementById("retryWrongBtn").addEventListener("click", retryWrongOnly);

  document.getElementById("genCertBtn").addEventListener("click", generateCertificate);
  document.getElementById("closeCertBtn").addEventListener("click", closeCertificate);
  document.getElementById("printCertBtn").addEventListener("click", printCertificate);

  // Klaviatura orqali boshqarish (1, 2, 3, 4 yoki A, B, C, D va strelkalar)
  window.addEventListener("keydown", (e) => {
    if (!screens.quiz.classList.contains("active")) return;
    if (document.getElementById("finishModal").classList.contains("show")) return;

    if (e.key === "ArrowLeft") {
      prevQuestion();
    } else if (e.key === "ArrowRight") {
      nextQuestion();
    } else if (e.key === "1" || e.key.toLowerCase() === "a") {
      handleOptionSelect(currentIndex, 0);
    } else if (e.key === "2" || e.key.toLowerCase() === "b") {
      handleOptionSelect(currentIndex, 1);
    } else if (e.key === "3" || e.key.toLowerCase() === "c") {
      handleOptionSelect(currentIndex, 2);
    } else if (e.key === "4" || e.key.toLowerCase() === "d") {
      handleOptionSelect(currentIndex, 3);
    }
  });

  // Oyna o'lchami o'zgarganda Canvas moslashuvi
  window.addEventListener("resize", () => {
    const canvas = document.getElementById("confettiCanvas");
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  });
}

// Boshlang'ich chaqiriq
document.addEventListener("DOMContentLoaded", initApp);
