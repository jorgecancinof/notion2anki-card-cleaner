"use strict";

const body = document.querySelector("body");
const codeBefore = document.getElementById("code-before");
const codeAfter = document.getElementById("code-after");
const cleanBtn = document.getElementById("clean");
const copyBtn = document.getElementById("copy");
const resetBtn = document.getElementById("reset");
const toggleThemeBtn = document.getElementById("toggle-theme");
const THEME_STORAGE_KEY = "notion2anki-card-cleaner.theme";
const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

function cleanPatterns(code) {
  const patterns = [
    /\n/g,
    /<[/]?pre.*?>/g,
    /<[/]?summary.*?>/g,
    /<[/]?figure.*?>/g,
    /\sid=".*?"/g,
    /\sclass=""/g,
    /<style>.*?<\/style>/g,
  ];

  let cleanCode = code;
  for (const pattern of patterns) {
    cleanCode = cleanCode.replace(pattern, "");
  }

  return cleanCode;
}

function cleanWrappedImages(code) {
  return code.replace(/(?:<br>|<p>|<a.*?>)*(<img.*?>)(?:<br>|<\/p>|<\/a.*?>)*/g, "<p>$1</p>");
}

function cleanLastBreaks(code) {
  return code.replace(/(?:<br>)+((?:<\/\w+>)*)$/g, "$1");
}

function clean() {
  let code = codeBefore.value.trim();

  if (code === "") {
    alert("Paste your Anki's card HTML code to continue.");
    return;
  }

  code = cleanPatterns(code);
  code = cleanWrappedImages(code);
  code = cleanLastBreaks(code);
  code = html_beautify(code);

  codeAfter.value = code;
}

function copy() {
  codeAfter.select();
  document.execCommand("copy");
}

function reset() {
  codeBefore.value = "";
  codeAfter.value = "";
  codeBefore.focus();
}

function toggleTheme() {
  body.classList.toggle(THEME.LIGHT);
  const currentTheme = body.classList.contains(THEME.LIGHT) ? THEME.LIGHT : THEME.DARK;
  localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
  toggleThemeBtn.checked = currentTheme === THEME.LIGHT;
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === THEME.LIGHT) {
    body.classList.add(THEME.LIGHT);
    toggleThemeBtn.checked = true;
  } else {
    body.classList.remove(THEME.LIGHT);
    toggleThemeBtn.checked = false;
  }
}

codeBefore.addEventListener("click", function () {
  this.select();
});
cleanBtn.addEventListener("click", clean);
copyBtn.addEventListener("click", copy);
resetBtn.addEventListener("click", reset);
toggleThemeBtn.addEventListener("click", toggleTheme);

loadSavedTheme();
