"use strict";

const container = document.querySelector(".container");
const codeBefore = document.getElementById("code-before");
const codeAfter = document.getElementById("code-after");
const cleanBtn = document.getElementById("clean");
const copyBtn = document.getElementById("copy");
const resetBtn = document.getElementById("reset");
const toggleThemeBtn = document.getElementById("toggle-theme");

function cleanPatterns(code) {
  const patterns = [
    /<[/]?summary.*?>/g,
    /<[/]?pre.*?>/g,
    / id=".*?"/g,
    / class=""/g,
    /<style>.*?<\/style>/g,
    /<\w+>(\n)?<\/\w+>/g,
  ];

  let cleanCode = code;
  for (const pattern of patterns) {
    cleanCode = cleanCode.replace(pattern, "");
  }

  return cleanCode;
}

function insertImageBreaks(code) {
  return code.replace(/([^>\s])(<img)/g, "$1<br><br>$2");
}

function cleanLastBreaks(code) {
  const lastBreak = /<br>(<\/\w+>)?$/g;

  let cleanCode = code;
  while (cleanCode.match(lastBreak) !== null) {
    cleanCode = cleanCode.replace(lastBreak, "$1");
  }

  return cleanCode;
}

function clean() {
  let code = codeBefore.value.trim();

  if (code === "") {
    alert("Paste your Anki's card HTML code to continue.");
    return;
  }

  code = cleanPatterns(code);
  code = insertImageBreaks(code);
  code = cleanLastBreaks(code);

  codeAfter.value = html_beautify(code);
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
  container.classList.toggle("light");
}

codeBefore.addEventListener("click", function () {
  this.select();
});
cleanBtn.addEventListener("click", clean);
copyBtn.addEventListener("click", copy);
resetBtn.addEventListener("click", reset);
toggleThemeBtn.addEventListener("click", toggleTheme);
