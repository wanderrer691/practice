// === Функция сохранения настроек ===
function saveSettings() {
  const instrument = document.getElementById("instrument").value;
  const volume = parseFloat(document.getElementById("volume").value);
  const showNotes = document.getElementById("showNotes").checked;
  const highlightColor = document.getElementById("highlightColor").value;
  const theme = document.getElementById("theme").checked;
  const effect = document.getElementById("effect").value;
  const midi = document.getElementById("midi").checked;

  if (!instrument) {
    alert("Пожалуйста, выберите инструмент!");
    return;
  }

  // Сохраняем настройки в localStorage
  const settings = {
    instrument,
    volume,
    showNotes,
    highlightColor,
    theme,
    effect,
    midi
  };

  localStorage.setItem("pianoSettings", JSON.stringify(settings));

  alert("Настройки успешно сохранены!");

  applyTheme(theme);
}

// === Функция применения настроек на всех страницах ===
function applySettings() {
  const saved = localStorage.getItem("pianoSettings");
  if (!saved) return;

  const settings = JSON.parse(saved);

  applyTheme(settings.theme);

  console.log("Цвет подсветки:", settings.highlightColor);

  console.log("Громкость:", settings.volume);

  console.log("Эффект:", settings.effect);

  console.log("Инструмент:", settings.instrument);
}

// === Вспомогательная функция смены темы ===
function applyTheme(isDark) {
  if (isDark) {
    document.body.style.backgroundColor = "#2e2e2e";
    document.body.style.color = "white";

    document.getElementById("feedbackSection").style.backgroundColor = "#262626";
    document.getElementById("feedbackSection").style.color = "white";
  } else {
    document.body.style.backgroundColor = "#eaeaea";
    document.body.style.color = "#434242";
  }
}

// === Обработчик события: наведение на кнопки ===
function addHoverEffects() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
      button.style.transform = "scale(1.6)";
      button.style.transition = "transform 0.2s";
    });
    button.addEventListener("mouseout", () => {
      button.style.transform = "scale(1.5)";
    });
  });
}

// === Обработчик урока: всплывающее окно с confirm ===
function startLesson() {
  const lesson = document.getElementById("lesson").value;
  if (confirm(`Вы действительно хотите начать урок "${lesson}"?`)) {
    alert(`Урок "${lesson}" начался!`);
  } else {
    alert("Отмена.");
  }
}

// === Запуск при загрузке страницы ===
document.addEventListener("DOMContentLoaded", () => {
  applySettings();        
  addHoverEffects();      
});