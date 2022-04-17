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
    this.email = email.value;
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
  const fromGroup = input.closest(".form-group");
  const spanAlert = fromGroup.querySelector(".form-group > span");
  console.log(spanAlert);
  spanAlert.style.display = "inline-block";
  spanAlert.textContent = message;
}
function showSuccess(input) {
  const fromGroup = input.closest(".form-group");
  const spanAlert = fromGroup.querySelector(".form-group > span");
  console.log(spanAlert);
  spanAlert.style.display = "none";
  spanAlert.textContent = "";
}

function checkRequired(arr) {
  arr.forEach((item) => {
    if (item.value.trim() === "") {
      showError(item, `${getNameFiel(item)} is required`);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getNameFiel(input)} must be at least ${min}`);
  } else if (input.value.length > max) {
    showError(input, `${getNameFiel(input)} must be less than ${max}`);
  } else {
    showSuccess(input);
  }
}

function checkNameIsvalid(input) {
  const re = /^[a-z ,.'-]+$/i;
  return re.test(String(input).toLowerCase());
}

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(input));
}

function checkPassWord(input) {
  const re = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{6,10}$/;
  return re.test(String(input));
}

function checkNumber(input, min, max) {
  if (+input.value < min || +input.value > max) {
    showError(
      input,
      `${getNameFiel(input)} must be at least ${min} and less than ${max}`
    );
  } else {
    showSuccess(input);
  }
}

function checkPosition(input) {
  console.log(input.value !== "Giám đốc");
  if (
    input.value === "Giám đốc" ||
    input.value === "Trưởng Phòng" ||
    input.value === "Nhân Viên"
  ) {
    showSuccess(input);
  } else {
    showError(
      input,
      `${getNameFiel(input)} must be (Giám đốc, Trưởng Phòng, Nhân Viên)`
    );
  }
}
