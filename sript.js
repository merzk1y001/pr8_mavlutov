function GeneratePassword() {
  lcase = document.getElementById("lcase");
  ucase = document.getElementById("ucase");
  resultText = document.getElementById("resultText");
  count = document.getElementById("count");
  let lcasesym = "abcdefghijklmnopqrstuvwxyz";
  let ucasesym = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let scasesym = "!@#$%^&*()_-+=[{]};:<>|./?";
  let available = "";
  if (count.value == "") {
    return;
  }
  let index = Number(count.value);
  if (lcase.checked) {
    available = available + lcasesym;
  }
  if (ucase.checked) {
    available = available + ucasesym;
  }
  if (scase.checked) {
    available = available + scasesym;
  }
  if (available.length == 0) return;
  let result = "";
  for (let i = 0; i < index; i++) {
    result = result + available[random(0, available.length)];
  }
  resultText.value = result;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
