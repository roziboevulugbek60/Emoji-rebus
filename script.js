
const $ = id => document.getElementById(id);

const questions = {
  easy: [
    ["🐱 + 🏠", "mushukxona", "Mushuk yashaydigan joy"],
    ["🌞 + 🌻", "kungaboqar", "Quyoshga qarab turadigan gul"],
    ["🍎 + 🥧", "olmapirog", "Olmadan tayyorlanadigan pishiriq"],
    ["🐟 + 🌊", "baliq", "Suvda yashaydigan jonivor"],
    ["❄️ + 👨", "qorbobo", "Yangi yil qahramoni"],
    ["🌙 + ⭐", "tun", "Qorong‘i vaqt"],
    ["🍯 + 🐝", "asalari", "Asal yig‘adigan hasharot"],
    ["🌳 + 🍎", "olma", "Daraxtda o‘sadigan meva"],
    ["🐰 + 🥕", "quyon", "Sabzini yaxshi ko‘radigan jonivor"],
    ["🚗 + 🛣️", "avtomobil", "Yo‘lda yuradigan transport"],
    ["📚 + 🎒", "maktab", "O‘quvchilar bilim oladigan joy"],
    ["☀️ + 🕶️", "ko‘zoynak", "Ko‘zga taqiladigan buyum"],
    ["🐄 + 🥛", "sut", "Sigirdan olinadigan ichimlik"],
    ["🌧️ + ☂️", "soyabon", "Yomg‘irdan himoyalaydi"],
    ["🍞 + 🧈", "buterbrod", "Non bilan tayyorlanadigan yegulik"],
    ["🐔 + 🥚", "tuxum", "Tovuq qo‘yadigan narsa"],
    ["🌷 + 💐", "guldasta", "Gullardan tayyorlanadi"],
    ["🐕 + 🦴", "it", "Uy hayvoni"],
    ["🍋 + 🍵", "limonli choy", "Limon qo‘shilgan ichimlik"],
    ["🚲 + 🛞", "velosiped", "Ikki g‘ildirakli transport"],
    ["🎂 + 🎉", "tug‘ilgan kun", "Bayram kuni"],
    ["📱 + 📞", "telefon", "Aloqa vositasi"],
    ["🧊 + 💧", "muz", "Suvning qattiq holati"],
    ["🌈 + ☁️", "kamalak", "Yomg‘irdan keyin ko‘rinishi mumkin"],
    ["🐝 + 🍯", "asal", "Asalarilar tayyorlaydi"],
    ["🌲 + 🎄", "archa", "Yangi yil daraxti"],
    ["🍇 + 🍷", "uzum", "Shingilda o‘sadigan meva"],
    ["🐈 + 🐾", "mushuk", "Miyovlaydigan jonivor"],
    ["🧀 + 🥪", "pishloqli non", "Pishloq qo‘shilgan yegulik"],
    ["🌍 + 🌎", "dunyo", "Biz yashaydigan olam"],
    ["🦋 + 🌸", "kapalak", "Guldan gulga uchadi"],
    ["🕰️ + ⏰", "soat", "Vaqtni ko‘rsatadi"],
    ["🍉 + ☀️", "tarvuz", "Yozgi katta meva"],
    ["🧹 + 🏠", "tozalash", "Uyni ozoda qilish"],
    ["🐘 + 🌳", "fil", "Katta quloqli hayvon"],
    ["🌙 + 😴", "uyqu", "Dam olish holati"]
  ],

  medium: [
    ["🐝 + 🏠", "asalari uyasi", "Asalarilar yashaydigan joy"],
    ["🌊 + 🏠", "suvosti", "Suvning tagidagi hudud"],
    ["☀️ + 🕰️", "quyosh soati", "Quyosh yordamida vaqtni aniqlaydi"],
    ["📖 + ❤️", "kitobsevar", "Kitob o‘qishni yaxshi ko‘radigan inson"],
    ["🌧️ + 🌈", "kamalak", "Yomg‘irdan keyin chiqadi"],
    ["🐎 + 🏇", "chavandoz", "Ot minadigan inson"],
    ["🌳 + 🪵", "yog‘och", "Daraxtdan olinadigan material"],
    ["🧠 + 💡", "fikr", "Miyada paydo bo‘ladi"],
    ["🐦 + 🪺", "qush uyasi", "Qushlar yashaydigan joy"],
    ["🌌 + ⭐", "yulduzli osmon", "Kechasi ko‘rinadi"],
    ["🍎 + 🥗", "meva salati", "Mevalardan tayyorlanadi"],
    ["🚀 + 🌕", "kosmos", "Sayyoralar va yulduzlar olami"],
    ["📷 + 🖼️", "surat", "Kamera bilan olinadi"],
    ["🎨 + 🖌️", "rassom", "Rasm chizadigan inson"],
    ["🧑‍🍳 + 🍲", "oshpaz", "Taom tayyorlaydigan inson"],
    ["🧑‍⚕️ + 🏥", "shifokor", "Bemorlarni davolaydi"],
    ["🌱 + 💧", "o‘simlik", "Suv bilan o‘sadi"],
    ["📚 + 🧠", "bilim", "O‘qish orqali orttiriladi"],
    ["🚦 + 🚗", "svetofor", "Yo‘l harakatini boshqaradi"],
    ["🐟 + 🎣", "baliq ovlash", "Qarmoq yordamida bajariladi"],
    ["🌍 + 🧭", "sayohat", "Turli joylarga borish"],
    ["🎵 + 🎤", "qo‘shiq", "Kuylab ijro etiladi"],
    ["🏔️ + ❄️", "qorli tog‘", "Qor bilan qoplangan balandlik"],
    ["🦷 + 🪥", "tish cho‘tkasi", "Tishlarni tozalaydi"],
    ["🍯 + 🍰", "asal tort", "Asal bilan tayyorlangan shirinlik"],
    ["📅 + 🎂", "tug‘ilgan sana", "Inson dunyoga kelgan kun"],
    ["🌳 + 🌲 + 🌳", "o‘rmon", "Ko‘plab daraxtlar o‘sadigan joy"],
    ["🛏️ + 🌙", "yotoqxona", "Uxlash uchun mo‘ljallangan xona"],
    ["🎓 + 📚", "ta’lim", "Bilim olish jarayoni"],
    ["🌞 + 🏖️", "yozgi ta’til", "Yoz faslidagi dam olish"],
    ["🐢 + 🏁", "sekinlik", "Toshbaqaning harakatiga xos"],
    ["🧊 + 🏔️", "muzlik", "Tog‘larda uchraydigan katta muz"],
    ["🔑 + 🚪", "kalit", "Eshikni ochishga yordam beradi"],
    ["🧑‍🚒 + 🔥", "o‘t o‘chiruvchi", "Yong‘in bilan kurashadi"],
    ["🌾 + 🍞", "bug‘doy", "Undan un tayyorlanadi"],
    ["🌻 + 🌱", "kungaboqar", "Urug‘i ham foydali o‘simlik"]
  ],

  hard: [
    ["🧠 + 💪", "aql kuchi", "Fikrlash va mehnat bilan bog‘liq"],
    ["🌍 + ❤️", "ona tabiat", "Biz yashaydigan tabiiy olam"],
    ["⏳ + 🏃", "vaqt tezligi", "Vaqtning o‘tishi bilan bog‘liq"],
    ["📖 + 🔑", "bilim kaliti", "Bilim nimaning kaliti deyiladi?"],
    ["🌱 + 🌳 + 🍎", "hayot daraxti", "O‘sish va rivojlanish ramzi"],
    ["🔥 + ❤️", "olovli yurak", "Kuchli his-tuyg‘u ifodasi"],
    ["🌙 + ☀️", "kecha va kunduz", "Bir-birini almashtiradigan vaqtlar"],
    ["🧭 + 🌍", "yo‘l ko‘rsatuvchi", "Yo‘nalishni aniqlashga yordam beradi"],
    ["🐜 + 🏗️", "mehnatsevarlik", "Chumoliga xos xususiyat"],
    ["💡 + 🧠 + ⭐", "buyuk g‘oya", "Ajoyib fikr"],
    ["🌊 + 🪨", "suv va tosh", "Tabiatdagi ikki xil narsa"],
    ["🕊️ + 🌍", "tinchlik", "Osoyishta hayot holati"],
    ["📚 + 🏆", "bilimdon", "Ko‘p bilimga ega inson"],
    ["🌞 + 🕊️", "yorug‘ kelajak", "Yaxshi kelajakni ifodalaydi"],
    ["🧩 + 🧠", "mantiqiy fikrlash", "Rebus yechishda kerak bo‘ladi"],
    ["🏔️ + 🚶 + 🏁", "tog‘ sayohati", "Tog‘ bo‘ylab yurish"],
    ["🌧️ + 🌱 + 🌸", "bahor", "Tabiat uyg‘onadigan fasl"],
    ["🐝 + 🌸 + 🍯", "guldan asal", "Asalari nima yig‘adi?"],
    ["🌍 + 🛡️", "tabiatni asrash", "Atrof-muhitga g‘amxo‘rlik"],
    ["🎯 + 🏹", "aniq nishon", "Mo‘ljalga to‘g‘ri yo‘naltirish"],
    ["🌟 + 🛤️", "orzular yo‘li", "Maqsad sari harakat"],
    ["🧑‍🎓 + 🎓 + 🏆", "muvaffaqiyat", "Mehnat natijasida erishiladi"],
    ["🕰️ + 💎", "vaqt qadri", "Vaqtning qimmatligi"],
    ["❤️ + 🤝", "do‘stlik", "O‘zaro hurmat va ishonch"],
    ["🌳 + 🌍 + 💚", "yashil sayyora", "Tabiat bilan bog‘liq nom"],
    ["🧠 + 🔍 + 💡", "kashfiyot", "Izlanish natijasida topiladi"],
    ["📖 + 🌍 + 🧠", "dunyoqarash", "Insonning olam haqidagi fikrlari"],
    ["🚀 + 🌌 + ⭐", "kosmik sayohat", "Koinotga parvoz"],
    ["🛡️ + ❤️ + 🌍", "vatanparvarlik", "Vatanni sevish tuyg‘usi"],
    ["🌅 + 🏃 + 🎯", "yangi imkoniyat", "Har tong boshlanadigan narsa"],
    ["💧 + 🌍 + 🌱", "hayot manbai", "Suvning muhim o‘rni"],
    ["🎨 + 🧠 + ✨", "ijodkorlik", "Yangi narsalar yaratish qobiliyati"],
    ["🧑‍🤝‍🧑 + ❤️ + 🌍", "insoniylik", "Mehr va yaxshilikka asoslangan fazilat"],
    ["🏁 + 💪 + 🏆", "g‘alaba", "Harakat va mehnat natijasi"],
    ["🌈 + ⛈️ + 🌞", "umid", "Qiyinchilikdan keyingi ishonch"],
    ["🔑 + 🧠 + 🚪", "imkoniyat", "Yangi yo‘l ochadigan narsa"]
  ]
};

const TOTAL_PER_LEVEL = 36;
const ROUND_TIME = 45;

let level = "easy";
let questionIndex = 0;
let score = 0;
let record = Number(localStorage.getItem("emojiRebusRecord")) || 0;
let correctCount = 0;
let solvedCount = 0;
let hintsUsed = 0;
let timeLeft = ROUND_TIME;
let timerId = null;
let answered = false;
let soundEnabled = true;
let daily = {
  date: new Date().toLocaleDateString("en-CA"),
  solved: 0,
  correct: 0,
  points: 0
};

try {
  const savedDaily = JSON.parse(localStorage.getItem("emojiRebusDaily") || "null");
  if (savedDaily && savedDaily.date === daily.date) daily = savedDaily;
} catch (e) {}

let currentQuestions = [...questions.easy];
let usedQuestions = [];

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function normalize(text) {
  return text.toLowerCase()
    .replace(/[‘’`']/g, "")
    .replace(/[.,!?;:]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function save() {
  localStorage.setItem("emojiRebusRecord", record);
  localStorage.setItem("emojiRebusDaily", JSON.stringify(daily));
}

function playSound(kind) {
  if (!soundEnabled) return;

  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";

    osc.frequency.value = kind === "good" ? 760 : kind === "bad" ? 230 : 500;
    gain.gain.setValueAtTime(.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .25);

    osc.start();
    osc.stop(ctx.currentTime + .27);
    osc.onended = () => ctx.close();
  } catch (e) {}
}

let toastTimer;

function toast(message) {
  const el = $("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
}

function levelName() {
  return level === "easy" ? "Oson" : level === "medium" ? "O‘rta" : "Qiyin";
}

function setLevel(newLevel) {
  level = newLevel;
  questionIndex = 0;
  usedQuestions = [];
  currentQuestions = shuffle(questions[level]);

  document.querySelectorAll(".difficulty-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.level === level);
  });

  $("levelBadge").textContent = levelName().toUpperCase();
  $("sideLevel").textContent = levelName();

  loadQuestion();
}

function startTimer() {
  clearInterval(timerId);
  timeLeft = ROUND_TIME;
  updateTimer();

  timerId = setInterval(() => {
    if (answered) return;

    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      clearInterval(timerId);
      answered = true;
      $("feedback").textContent = "⏰ Vaqt tugadi! To‘g‘ri javob: " + currentQuestions[questionIndex][1];
      $("feedback").className = "feedback bad";
      $("nextBtn").disabled = false;
      solvedCount++;
      daily.solved++;
      save();
      updateAll();
    }
  }, 1000);
}

function updateTimer() {
  $("timer").textContent = timeLeft;
  $("timerBar").style.width = (timeLeft / ROUND_TIME * 100) + "%";

  if (timeLeft <= 10) {
    $("timerBar").style.background = "linear-gradient(90deg,#fb7185,#ef4444)";
  } else {
    $("timerBar").style.background = "linear-gradient(90deg,#4ade80,#facc15)";
  }
}

function loadQuestion() {
  if (questionIndex >= currentQuestions.length) {
    showResult();
    return;
  }

  answered = false;
  const q = currentQuestions[questionIndex];

  $("emojiDisplay").textContent = q[0];
  $("questionNumber").textContent = `Savol ${questionIndex + 1} / ${TOTAL_PER_LEVEL}`;
  $("sideQuestion").textContent = questionIndex + 1;
  $("answerInput").value = "";
  $("answerInput").disabled = false;
  $("feedback").textContent = "Omad! Javobingni kutyapmiz.";
  $("feedback").className = "feedback";
  $("checkBtn").disabled = false;
  $("hintBtn").disabled = false;
  $("nextBtn").disabled = true;

  $("emojiDisplay").style.animation = "none";
  void $("emojiDisplay").offsetWidth;
  $("emojiDisplay").style.animation = "";

  startTimer();
  updateAll();

  if (document.activeElement === $("answerInput")) {
    $("answerInput").focus();
  }
}

function checkAnswer() {
  if (answered) return;

  const input = $("answerInput").value.trim();
  if (!input) {
    toast("Javobni yozing!");
    $("answerInput").focus();
    return;
  }

  const correctAnswer = currentQuestions[questionIndex][1];

  solvedCount++;
  daily.solved++;
  answered = true;
  clearInterval(timerId);

  $("answerInput").disabled = true;
  $("checkBtn").disabled = true;
  $("hintBtn").disabled = true;
  $("nextBtn").disabled = false;

  if (normalize(input) === normalize(correctAnswer)) {
    const earned = level === "easy" ? 10 : level === "medium" ? 15 : 20;
    const bonus = Math.floor(timeLeft / 10);

    score += earned + bonus;
    correctCount++;
    daily.correct++;
    daily.points += earned + bonus;

    $("feedback").textContent = `🎉 To‘g‘ri! +${earned + bonus} ball. Javob: ${correctAnswer}`;
    $("feedback").className = "feedback good";
    playSound("good");
    toast("Ajoyib! To‘g‘ri javob! ⭐");
  } else {
    $("feedback").textContent = `❌ Noto‘g‘ri. To‘g‘ri javob: ${correctAnswer}`;
    $("feedback").className = "feedback bad";
    playSound("bad");
  }

  if (score > record) record = score;
  save();
  updateAll();
}

function showHint() {
  if (answered) return;

  const q = currentQuestions[questionIndex];
  const hint = q[2];

  if (hintsUsed >= 999) return;

  hintsUsed++;
  $("feedback").textContent = "💡 Yordam: " + hint;
  $("feedback").className = "feedback";
  $("hintsUsed").textContent = hintsUsed;
  $("statHints").textContent = hintsUsed;

  playSound("hint");
  toast("Yordam ko‘rsatildi!");
}

function nextQuestion() {
  if (!answered) {
    toast("Avval javobni tekshiring!");
    return;
  }

  questionIndex++;
  loadQuestion();
}

function showResult() {
  clearInterval(timerId);
  $("resultTitle").textContent = "🏆 Bosqich tugadi!";
  $("resultText").textContent =
    `${levelName()} darajasini yakunlading! Ball: ${score}. To‘g‘ri javoblar: ${correctCount}.`;

  $("resultModal").classList.add("show");
}

function restartGame() {
  clearInterval(timerId);
  score = 0;
  correctCount = 0;
  solvedCount = 0;
  hintsUsed = 0;
  questionIndex = 0;
  answered = false;
  usedQuestions = [];
  currentQuestions = shuffle(questions[level]);

  $("resultModal").classList.remove("show");
  loadQuestion();
  updateAll();
  toast("O‘yin qayta boshlandi!");
}

function updateMissions() {
  const m1 = Math.min(3, daily.solved);
  const m2 = Math.min(5, daily.correct);
  const m3 = Math.min(20, daily.points);

  $("mission1").textContent = `${m1}/3`;
  $("mission2").textContent = `${m2}/5`;
  $("mission3").textContent = `${m3}/20`;

  $("missionBar1").style.width = (m1 / 3 * 100) + "%";
  $("missionBar2").style.width = (m2 / 5 * 100) + "%";
  $("missionBar3").style.width = (m3 / 20 * 100) + "%";
}

function updateRewards() {
  const rewards = [
    ["rewardFirst", correctCount >= 1, "🥇 Birinchi g‘alaba"],
    ["rewardFive", correctCount >= 5, "⭐ 5 ta to‘g‘ri javob"],
    ["rewardTen", correctCount >= 10, "🏅 10 ta to‘g‘ri javob"],
    ["rewardPerfect", score >= 100, "💎 100 ball yig‘ish"]
  ];

  rewards.forEach(([id, unlocked, label]) => {
    const el = $(id);
    el.classList.toggle("unlocked", unlocked);
    el.textContent = (unlocked ? "✅ " : "🔒 ") + label;
  });
}

function updateAll() {
  $("score").textContent = score;
  $("record").textContent = record;
  $("topScore").textContent = score;
  $("topRecord").textContent = record;

  $("correctCount").textContent = correctCount;
  $("accuracy").textContent = solvedCount
    ? Math.round(correctCount / solvedCount * 100) + "%"
    : "0%";

  $("sideScore").textContent = score + " ⭐";
  $("hintsUsed").textContent = hintsUsed;

  $("statSolved").textContent = solvedCount;
  $("statCorrect").textContent = correctCount;
  $("statHints").textContent = hintsUsed;

  updateMissions();
  updateRewards();
  save();
}

function startGame() {
  $("gameSection").scrollIntoView({ behavior: "smooth" });
  setLevel(level);
}

$("startBtn").addEventListener("click", startGame);
$("checkBtn").addEventListener("click", checkAnswer);
$("hintBtn").addEventListener("click", showHint);
$("nextBtn").addEventListener("click", nextQuestion);
$("restartBtn").addEventListener("click", restartGame);
$("modalRestart").addEventListener("click", restartGame);

$("answerInput").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    if (answered) nextQuestion();
    else checkAnswer();
  }
});

document.querySelectorAll(".difficulty-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    setLevel(btn.dataset.level);
    toast(levelName() + " darajasi tanlandi!");
  });
});

$("soundToggle").addEventListener("change", e => {
  soundEnabled = e.target.checked;
  toast(soundEnabled ? "Ovoz yoqildi 🔊" : "Ovoz o‘chirildi 🔇");
});

$("resultModal").addEventListener("click", e => {
  if (e.target === $("resultModal")) {
    $("resultModal").classList.remove("show");
  }
});

$("sideLevel").textContent = levelName();
$("levelBadge").textContent = levelName().toUpperCase();
currentQuestions = shuffle(questions.easy);
loadQuestion();
updateAll();
