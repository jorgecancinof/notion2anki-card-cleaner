"use strict";

const body = document.querySelector("body");
const codeBefore = document.getElementById("code-before");
const codeAfter = document.getElementById("code-after");
const cleanBtn = document.getElementById("clean");
const copyBtn = document.getElementById("copy");
const resetBtn = document.getElementById("reset");
const toggleThemeBtn = document.getElementById("toggle-theme");

function cleanPatterns(code) {
  const patterns = [
    /\n/g,
    /<[/]?pre.*?>/g,
    /<[/]?summary.*?>/g,
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
  return code.replace(/(?:<br>|<p>)*(<img.*?>)(?:<br>|<\/p>)*/g, "<p>$1</p>");
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
  body.classList.toggle("light");
}

codeBefore.addEventListener("click", function () {
  this.select();
});
cleanBtn.addEventListener("click", clean);
copyBtn.addEventListener("click", copy);
resetBtn.addEventListener("click", reset);
toggleThemeBtn.addEventListener("click", toggleTheme);
