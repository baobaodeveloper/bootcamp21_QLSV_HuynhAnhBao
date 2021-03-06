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

function checkDulicate(input, arr) {
  if (arr.length > 0) {
    const index = arr.findIndex((x) => x.username === input.value);
    if (index === -1) {
      showSuccess(input);
    } else if (index !== -1) {
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
    input.value === "Gi??m ?????c" ||
    input.value === "Tr?????ng ph??ng" ||
    input.value === "Nh??n vi??n"
  ) {
    showSuccess(input);
  } else {
    showError(
      input,
      `${getNameFiel(input)} must be (Gi??m ?????c, Tr?????ng Ph??ng, Nh??n Vi??n)`
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
  position.value = "Ch???n ch???c v???";
}

function salaryDirector(nv) {
  if (nv.position === "Gi??m ?????c") {
    return nv.basicSalary * 3;
  } else if (nv.position === "Tr?????ng ph??ng") {
    return nv.basicSalary * 2;
  } else if (nv.position === "Nh??n vi??n") {
    return nv.basicSalary;
  }
}

function employeeRating(nv) {
  if (nv.timeWork >= 192) {
    return "xu???t s???c";
  } else if (nv.timeWork >= 176) {
    return " gi???i";
  } else if (nv.timeWork >= 160) {
    return " kh??";
  } else {
    return "trung b??nh";
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

  checkDulicate(username, arrNv);

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

// show infor nv on from
function showInfor(arrObj) {
  for (const [key, value] of Object.entries(arrObj)) {
  }
}
