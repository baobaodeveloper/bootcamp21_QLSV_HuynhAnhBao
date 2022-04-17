class Nv {
  constructor(
    username,
    name,
    email,
    password,
    date,
    basicSalary,
    position,
    timeWork,
    listNV
  ) {
    this.username = username.value;
    this.email = email;
    this.name = name.value;
    this.password = password.value;
    this.date = date.value;
    this.basicSalary = basicSalary.value;
    this.position = position.value;
    this.timeWork = timeWork.value;
    this.listNV = listNV.value;
  }
}

function getNameFiel(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function showError(input, message) {
  const alertError = input.closest(".form-group").querySelector("#tbTKNV");
  alertError.style.display = "inline-block";
  alertError.textContent = message;
}

function checkRequired(arr) {
  arr.forEach((item) => {
    console.log(item.trim());
    if (item.trim() === "") {
      showError(username, `${getNameFiel(username)} is required`);
    }
  });
}
