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
let isCheck = true;

function getNameFiel(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function showError(input, message) {
  const fromGroup = input.closest(".form-group");
  const spanAlert = fromGroup.querySelector(".form-group > span");

  spanAlert.style.display = "inline-block";
  spanAlert.textContent = message;
  isCheck = false;
}
function showSuccess(input) {
  const fromGroup = input.closest(".form-group");
  const spanAlert = fromGroup.querySelector(".form-group > span");

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

function checkNameIsvalid(input, arr) {
  const re = /^[a-z ,.'-]+$/i;
  const name = re.test(String(input.value).toLowerCase());
  let index;
  if (arr.length > 0) {
    console.log(arr);
    index = arr.findIndex((x) => String(x.username) === String(username.value));
    console.log(index);
  }
  if (name && index === -1) {
    showSuccess(input);
  } else if (name) {
    showError(input, `${getNameFiel(input)} already exists`);
  } else {
    showError(input, `${getNameFiel(input)} is invalid`);
  }
}

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = re.test(String(input.value));
  if (email) {
    showSuccess(input);
  } else {
    showError(input, `${getNameFiel(input)} is invalid`);
  }
}

function checkPassWord(input) {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;

  const password = re.test(String(input.value).trim());
  if (password) {
    showSuccess(input);
  } else {
    showError(
      input,
      `${getNameFiel(
        input
      )} include (6-10) charactor (at least 1 uppercase letter,1 number and 1 special character:)`
    );
    console.log(isCheck);
  }
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
  if (
    input.value === "Giám đốc" ||
    input.value === "Trưởng phòng" ||
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

function reset() {
  username.value =
    name.value =
    email.value =
    password.value =
    basicSalary.value =
    timeWork.value =
      "";
  position.value = "Chọn chức vụ";
}
