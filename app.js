const EXAM_SECONDS = 50 * 60;
const EXAM_STORAGE = "stagelight-exam-v1";
const LEARN_STORAGE = "stagelight-learn-v1";
const answerLetters = ["A", "B", "C", "D"];

const examState = {
  current: 0,
  answers: Array(examQuestions.length).fill(null),
  remaining: EXAM_SECONDS,
  active: false,
  timerId: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const ui = {
  views: $$(".view"),
  nav: $(".main-nav"),
  mobileMenu: $("#mobile-menu"),
  moduleNav: $("#module-nav-list"),
  moduleList: $("#module-list"),
  search: $("#knowledge-search"),
  noResults: $("#no-search-results"),
  expandAll: $("#expand-all"),
  learnedCount: $("#learned-count"),
  learnedBar: $("#learned-bar"),
  power: $("#power-input"),
  voltage: $("#voltage-input"),
  currentOutput: $("#current-output"),
  examIntro: $("#exam-intro"),
  examShell: $("#exam-shell"),
  startExam: $("#start-exam"),
  resumeExam: $("#resume-exam"),
  grid: $("#question-grid"),
  answered: $("#answered-count"),
  progress: $("#answer-progress"),
  mobileStatus: $("#mobile-status"),
  timer: $("#exam-timer"),
  timerValue: $("#timer-value"),
  questionPosition: $("#question-position"),
  questionCategory: $("#question-category"),
  questionText: $("#question-text"),
  answers: $("#answer-list"),
  clearAnswer: $("#clear-answer"),
  previous: $("#prev-question"),
  next: $("#next-question"),
  finish: $("#finish-exam"),
  dialog: $("#finish-dialog"),
  dialogCopy: $("#dialog-copy"),
  cancelFinish: $("#cancel-finish"),
  confirmFinish: $("#confirm-finish"),
  resultSymbol: $("#result-symbol"),
  resultTitle: $("#result-title"),
  resultCopy: $("#result-copy"),
  scoreRing: $("#score-ring"),
  score: $("#score-value"),
  correct: $("#correct-value"),
  wrong: $("#wrong-value"),
  blank: $("#blank-value"),
  reviewButton: $("#review-results"),
  restart: $("#restart-exam"),
  reviewList: $("#review-list")
};

function showView(name, updateHash = true) {
  const target = $(`#${name}-view`);
  if (!target) return;
  ui.views.forEach((view) => view.classList.add("is-hidden"));
  target.classList.remove("is-hidden");
  $$("[data-view-link]").forEach((link) => link.classList.toggle("is-active", link.dataset.viewLink === name));
  ui.nav.classList.remove("is-open");
  ui.mobileMenu.setAttribute("aria-expanded", "false");
  if (updateHash) history.replaceState(null, "", `#${name}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initNavigation() {
  $$("[data-view-link]").forEach((link) => link.addEventListener("click", (event) => {
    event.preventDefault();
    showView(link.dataset.viewLink);
  }));
  ui.mobileMenu.addEventListener("click", () => {
    const open = ui.nav.classList.toggle("is-open");
    ui.mobileMenu.setAttribute("aria-expanded", String(open));
  });
  const initial = location.hash.replace("#", "");
  if (["home", "knowledge", "exam"].includes(initial)) showView(initial, false);
}

function getLearned() {
  try {
    const parsed = JSON.parse(localStorage.getItem(LEARN_STORAGE));
    return Array.isArray(parsed) ? parsed.filter((id) => knowledgeModules.some((module) => module.id === id)) : [];
  } catch {
    return [];
  }
}

function updateLearnProgress() {
  const learned = getLearned();
  ui.learnedCount.textContent = `${learned.length}/${knowledgeModules.length}`;
  ui.learnedBar.style.width = `${(learned.length / knowledgeModules.length) * 100}%`;
  $$("[data-complete-module]").forEach((button) => {
    const complete = learned.includes(button.dataset.completeModule);
    button.classList.toggle("is-complete", complete);
    button.innerHTML = complete ? "✓ Ukończono" : "Oznacz jako ukończony";
  });
  $$("[data-nav-module]").forEach((button) => button.classList.toggle("is-complete", learned.includes(button.dataset.navModule)));
}

function toggleLearned(id) {
  const learned = getLearned();
  const next = learned.includes(id) ? learned.filter((item) => item !== id) : [...learned, id];
  localStorage.setItem(LEARN_STORAGE, JSON.stringify(next));
  updateLearnProgress();
}

function renderKnowledge() {
  ui.moduleNav.innerHTML = knowledgeModules.map((module) => `
    <button type="button" data-nav-module="${module.id}"><span>${module.number}</span>${module.title}<i>✓</i></button>`).join("");

  ui.moduleList.innerHTML = knowledgeModules.map((module, index) => `
    <article class="module-card" id="module-${module.id}" data-module-card="${module.id}" data-search="${escapeAttribute(`${module.title} ${module.intro} ${module.sections.map((section) => `${section.title} ${stripTags(section.content)}`).join(" ")}`.toLowerCase())}">
      <button class="module-card__header" type="button" aria-expanded="${index === 0}">
        <span class="module-icon">${module.icon}</span>
        <span><small>MODUŁ ${module.number}</small><strong>${module.title}</strong><em>${module.intro}</em></span>
        <i class="chevron">⌄</i>
      </button>
      <div class="module-card__body ${index === 0 ? "" : "is-collapsed"}">
        ${module.sections.map((section) => `<section><h3>${section.title}</h3>${section.content}</section>`).join("")}
        <section class="checklist"><h3>Checklista</h3><div>${module.checklist.map((item) => `<span>✓ ${item}</span>`).join("")}</div></section>
        <button class="complete-button" type="button" data-complete-module="${module.id}">Oznacz jako ukończony</button>
      </div>
    </article>`).join("");

  $$(".module-card__header").forEach((header) => header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    const collapsed = body.classList.toggle("is-collapsed");
    header.setAttribute("aria-expanded", String(!collapsed));
  }));
  $$("[data-complete-module]").forEach((button) => button.addEventListener("click", () => toggleLearned(button.dataset.completeModule)));
  $$("[data-nav-module]").forEach((button) => button.addEventListener("click", () => {
    const card = $(`#module-${button.dataset.navModule}`);
    card.querySelector(".module-card__body").classList.remove("is-collapsed");
    card.querySelector(".module-card__header").setAttribute("aria-expanded", "true");
    card.scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  updateLearnProgress();
}

function escapeAttribute(text) {
  return text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function stripTags(html) {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || "";
}

function initKnowledgeTools() {
  ui.search.addEventListener("input", () => {
    const query = ui.search.value.trim().toLowerCase();
    let visible = 0;
    $$("[data-module-card]").forEach((card) => {
      const match = !query || card.dataset.search.includes(query);
      card.classList.toggle("is-hidden", !match);
      if (match) {
        visible += 1;
        if (query) {
          card.querySelector(".module-card__body").classList.remove("is-collapsed");
          card.querySelector(".module-card__header").setAttribute("aria-expanded", "true");
        }
      }
    });
    ui.noResults.classList.toggle("is-hidden", visible > 0);
  });

  ui.expandAll.addEventListener("click", () => {
    const shouldExpand = $$(".module-card__body").some((body) => body.classList.contains("is-collapsed"));
    $$(".module-card__body").forEach((body) => body.classList.toggle("is-collapsed", !shouldExpand));
    $$(".module-card__header").forEach((header) => header.setAttribute("aria-expanded", String(shouldExpand)));
    ui.expandAll.textContent = shouldExpand ? "Zwiń wszystko" : "Rozwiń wszystko";
  });

  [ui.power, ui.voltage].forEach((input) => input.addEventListener("input", updateCalculator));
  updateCalculator();
}

function updateCalculator() {
  const power = Math.max(0, Number(ui.power.value));
  const voltage = Math.max(1, Number(ui.voltage.value));
  const current = power / voltage;
  ui.currentOutput.innerHTML = `<strong>${current.toLocaleString("pl-PL", { maximumFractionDigits: 2, minimumFractionDigits: 2 })} A</strong><small>prąd obliczeniowy</small>`;
}

function buildQuestionGrid() {
  ui.grid.innerHTML = examQuestions.map((_, index) => `<button type="button" data-question="${index}" aria-label="Pytanie ${index + 1}">${index + 1}</button>`).join("");
  ui.grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-question]");
    if (button) goToQuestion(Number(button.dataset.question));
  });
}

function renderQuestion() {
  const question = examQuestions[examState.current];
  ui.questionPosition.textContent = `PYTANIE ${examState.current + 1} Z ${examQuestions.length}`;
  ui.mobileStatus.textContent = `Pytanie ${examState.current + 1} z ${examQuestions.length}`;
  ui.questionCategory.textContent = question.category.toUpperCase();
  ui.questionText.textContent = question.text;
  ui.answers.innerHTML = question.answers.map((answer, index) => `
    <label class="answer-option">
      <input type="radio" name="exam-answer" value="${index}" ${examState.answers[examState.current] === index ? "checked" : ""} />
      <span>${answerLetters[index]}</span><em>${answer}</em>
    </label>`).join("");
  ui.answers.querySelectorAll("input").forEach((input) => input.addEventListener("change", () => {
    examState.answers[examState.current] = Number(input.value);
    updateExamProgress();
    saveExam();
  }));
  ui.previous.disabled = examState.current === 0;
  ui.next.textContent = examState.current === examQuestions.length - 1 ? "Do początku ↻" : "Następne →";
  ui.clearAnswer.classList.toggle("is-invisible", examState.answers[examState.current] === null);
  updateExamProgress();
}

function updateExamProgress() {
  const answered = examState.answers.filter((answer) => answer !== null).length;
  ui.answered.textContent = `${answered} / ${examQuestions.length}`;
  ui.progress.style.width = `${(answered / examQuestions.length) * 100}%`;
  ui.grid.querySelectorAll("button").forEach((button, index) => {
    button.classList.toggle("is-current", index === examState.current);
    button.classList.toggle("is-answered", examState.answers[index] !== null);
  });
  ui.clearAnswer.classList.toggle("is-invisible", examState.answers[examState.current] === null);
}

function goToQuestion(index) {
  examState.current = Math.max(0, Math.min(index, examQuestions.length - 1));
  renderQuestion();
  saveExam();
  if (window.innerWidth < 900) window.scrollTo({ top: 60, behavior: "smooth" });
}

function updateTimer() {
  const minutes = Math.floor(examState.remaining / 60);
  const seconds = examState.remaining % 60;
  ui.timerValue.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  ui.timer.classList.toggle("is-urgent", examState.remaining <= 300);
}

function runTimer() {
  window.clearInterval(examState.timerId);
  examState.timerId = window.setInterval(() => {
    examState.remaining = Math.max(0, examState.remaining - 1);
    updateTimer();
    saveExam();
    if (examState.remaining === 0) finishExam(true);
  }, 1000);
}

function startExam(resume = false) {
  if (!resume) {
    examState.current = 0;
    examState.answers = Array(examQuestions.length).fill(null);
    examState.remaining = EXAM_SECONDS;
  }
  examState.active = true;
  ui.examIntro.classList.add("is-hidden");
  ui.examShell.classList.remove("is-hidden");
  showView("exam");
  renderQuestion();
  updateTimer();
  runTimer();
  saveExam();
}

function saveExam() {
  if (!examState.active) return;
  localStorage.setItem(EXAM_STORAGE, JSON.stringify({
    current: examState.current,
    answers: examState.answers,
    remaining: examState.remaining,
    savedAt: Date.now()
  }));
}

function readSavedExam() {
  try {
    const saved = JSON.parse(localStorage.getItem(EXAM_STORAGE));
    if (!saved || !Array.isArray(saved.answers) || saved.answers.length !== examQuestions.length) return null;
    const elapsed = Math.max(0, Math.floor((Date.now() - saved.savedAt) / 1000));
    saved.remaining = Math.max(0, Number(saved.remaining) - elapsed);
    return saved.remaining > 0 ? saved : null;
  } catch {
    return null;
  }
}

function resumeExam() {
  const saved = readSavedExam();
  if (!saved) return;
  examState.current = saved.current;
  examState.answers = saved.answers;
  examState.remaining = saved.remaining;
  startExam(true);
}

function openFinishDialog() {
  const blank = examState.answers.filter((answer) => answer === null).length;
  ui.dialogCopy.textContent = blank
    ? `Pozostało ${blank} ${blank === 1 ? "pytanie" : blank < 5 ? "pytania" : "pytań"} bez odpowiedzi. Po zatwierdzeniu nie będzie można wrócić do testu.`
    : "Wszystkie pytania mają odpowiedź. Po zatwierdzeniu nie będzie można ich zmienić.";
  ui.dialog.classList.remove("is-hidden");
  ui.cancelFinish.focus();
}

function closeFinishDialog() {
  ui.dialog.classList.add("is-hidden");
  ui.finish.focus();
}

function finishExam(timeExpired = false) {
  window.clearInterval(examState.timerId);
  examState.active = false;
  localStorage.removeItem(EXAM_STORAGE);
  ui.dialog.classList.add("is-hidden");
  const correct = examState.answers.reduce((sum, answer, index) => sum + (answer === examQuestions[index].correct ? 1 : 0), 0);
  const blank = examState.answers.filter((answer) => answer === null).length;
  const wrong = examQuestions.length - correct - blank;
  const score = Math.round((correct / examQuestions.length) * 100);
  const passed = score >= 70;
  ui.resultSymbol.textContent = passed ? "✓" : "!";
  ui.resultSymbol.classList.toggle("failed", !passed);
  ui.resultTitle.textContent = passed ? "Dobra robota!" : "Jeszcze trochę praktyki";
  ui.resultCopy.textContent = timeExpired
    ? `Czas minął. ${passed ? "Osiągasz treningowy próg zaliczenia." : "Przejrzyj odpowiedzi i uzupełnij bazę wiedzy."}`
    : passed ? "Osiągasz treningowy próg 70%. Sprawdź wyjaśnienia, aby utrwalić materiał." : "Wróć do wskazanych modułów, przejrzyj wyjaśnienia i spróbuj ponownie.";
  ui.score.textContent = `${score}%`;
  ui.scoreRing.style.setProperty("--score", score);
  ui.scoreRing.classList.toggle("failed", !passed);
  ui.correct.textContent = correct;
  ui.wrong.textContent = wrong;
  ui.blank.textContent = blank;
  buildReview();
  ui.reviewList.classList.add("is-hidden");
  ui.reviewButton.textContent = "Przejrzyj odpowiedzi";
  showView("result");
}

function buildReview() {
  ui.reviewList.innerHTML = examQuestions.map((question, index) => {
    const selected = examState.answers[index];
    const correct = selected === question.correct;
    return `<article class="review-item ${correct ? "correct" : "wrong"}">
      <h3>${index + 1}. ${question.text}</h3>
      <p><strong>Twoja odpowiedź:</strong> ${selected === null ? "Brak odpowiedzi" : `${answerLetters[selected]}. ${question.answers[selected]}`}</p>
      ${correct ? "" : `<p><strong>Poprawna:</strong> ${answerLetters[question.correct]}. ${question.answers[question.correct]}</p>`}
      <p>${question.explanation}</p>
    </article>`;
  }).join("");
}

function initExam() {
  buildQuestionGrid();
  ui.startExam.addEventListener("click", () => startExam(false));
  ui.resumeExam.addEventListener("click", resumeExam);
  ui.previous.addEventListener("click", () => goToQuestion(examState.current - 1));
  ui.next.addEventListener("click", () => goToQuestion(examState.current === examQuestions.length - 1 ? 0 : examState.current + 1));
  ui.clearAnswer.addEventListener("click", () => {
    examState.answers[examState.current] = null;
    renderQuestion();
    saveExam();
  });
  ui.finish.addEventListener("click", openFinishDialog);
  ui.cancelFinish.addEventListener("click", closeFinishDialog);
  ui.confirmFinish.addEventListener("click", () => finishExam(false));
  ui.dialog.querySelector(".dialog__backdrop").addEventListener("click", closeFinishDialog);
  ui.reviewButton.addEventListener("click", () => {
    const hidden = ui.reviewList.classList.toggle("is-hidden");
    ui.reviewButton.textContent = hidden ? "Przejrzyj odpowiedzi" : "Ukryj odpowiedzi";
    if (!hidden) ui.reviewList.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  ui.restart.addEventListener("click", () => {
    ui.examIntro.classList.remove("is-hidden");
    ui.examShell.classList.add("is-hidden");
    startExam(false);
  });
  ui.resumeExam.classList.toggle("is-hidden", !readSavedExam());
  window.addEventListener("beforeunload", saveExam);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !ui.dialog.classList.contains("is-hidden")) closeFinishDialog();
  });
}

renderKnowledge();
initKnowledgeTools();
initNavigation();
initExam();
