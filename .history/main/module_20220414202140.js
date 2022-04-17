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
    this.employeeRatings = employeeRating;
  }
  employeeRating() {
    if (this.timeWork >= 192) {
      return "xuất sắc";
    } else if (this.timeWork >= 176) {
      return " giỏi";
    } else if (this.timeWork >= 160) {
      return " khá";
    } else {
      return "trung bình";
    }
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

function checkDulicate(input, arr, min, max) {
  if (arr.length > 0) {
    const index = arr.findIndex((x) => x.username === input.value);
    if (index === -1 && input.value >= min && input.value <= max) {
      showSuccess(input);
    } else if (index !== -1) {
      console.log("aa");
      showError(input, `${getNameFiel(input)} already exist`);
    }
  }
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
  const name = re.test(String(input.value).toLowerCase());
  if (name) {
    showSuccess(input);
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
  const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,10}$/;

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
    input.value === "Nhân viên"
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

function salaryDirector(nv) {
  if (nv.position === "Giám đốc") {
    return nv.basicSalary * 3;
  } else if (nv.position === "Trưởng phòng") {
    return nv.basicSalary * 2;
  } else if (nv.position === "Nhân viên") {
    return nv.basicSalary;
  }
}

function checkConditionValid() {
  // Check emty input
  checkRequired([
    username,
    name,
    password,
    date,
    basicSalary,
    position,
    email,
    timeWork,
  ]);
  // Check length username and password
  checkLength(username, 4, 6);
  checkLength(password, 6, 10);
  checkDulicate(username, arrNv, 4, 6);

  // Check name
  checkNameIsvalid(name);

  // check email
  checkEmail(email);

  // check password
  checkPassWord(password);

  // Check Basic Salary
  checkNumber(basicSalary, 1000000, 20000000);

  // Check position
  checkPosition(position);
  // Check time work
  checkNumber(timeWork, 80, 200);
  return isCheck;
}
function checkConditionValidNotDulucated() {
  // Check emty input
  checkRequired([
    username,
    name,
    password,
    date,
    basicSalary,
    position,
    email,
    timeWork,
  ]);
  // Check length username and password
  checkLength(username, 4, 6);
  checkLength(password, 6, 10);

  // Check name
  checkNameIsvalid(name);

  // check email
  checkEmail(email);

  // check password
  checkPassWord(password);

  // Check Basic Salary
  checkNumber(basicSalary, 1000000, 20000000);

  // Check position
  checkPosition(position);
  // Check time work
  checkNumber(timeWork, 80, 200);
  return isCheck;
}

// creat div modal
function creatModal() {
  let markup = `<div class="modal-backdrop fade show"></div>`;
  return body.insertAdjacentHTML("beforeend", markup);
}
// show infor nv on from
function showInfor(arrObj) {
  username.value = arrObj.username;
  name.value = arrObj.name;
  email.value = arrObj.email;
  password.value = arrObj.password;
  date.value = arrObj.date;
  basicSalary.value = arrObj.basicSalary;
  position.value = arrObj.position;
  timeWork.value = arrObj.timeWork;
}

function updateCurrentNv(obj) {
  obj.username = username.value;
  obj.name = name.value;
  obj.email = email.value;
  obj.password = password.value;
  obj.date = date.value;
  obj.basicSalary = basicSalary.value;
  obj.position = position.value;
  obj.timeWork = timeWork.value;
}
