const addNv = document.getElementById("btnThemNV");
const username = document.getElementById("tknv");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const date = document.getElementById("datepicker");
const basicSalary = document.getElementById("luongCB");
const position = document.getElementById("chucvu");
const timeWork = document.getElementById("gioLam");
const listNV = document.getElementById("tableDanhSach");
const tableDanhSach = document.getElementById("tableDanhSach");
date.value = new Intl.DateTimeFormat("en-US").format(date.value);

let arrNv = [];
function renderNv(arr) {
  arr.forEach((nv) => {
    const markup = `
    <tr>
        <td>${nv.username}</td>
        <td>${nv.name}</td>
        <td>${nv.email}</td>
        <td>${nv.date}</td>
        <td>${nv.position}</td>
        <td>Tong luong</td>
        <td>Xep loai</td>
       
    </tr>
    `;
    tableDanhSach.insertAdjacentHTML("afterbegin", markup);
  });
}

addNv.addEventListener("click", () => {
  const nv = new Nv(
    username,
    name,
    email,
    password,
    date,
    basicSalary,
    position,
    timeWork,
    listNV
  );

  function checkValid() {
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
    if (checkNameIsvalid(name.value)) {
      showSuccess(name);
    } else {
      showError(name, `${getNameFiel(name)} is invalid`);
    }

    // check email
    if (checkEmail(email.value)) {
      showSuccess(email);
    } else {
      showError(email, `${getNameFiel(email)} is invalid`);
    }

    // check password

    if (checkPassWord(password.value)) {
      showSuccess(password);
    } else {
      showError(
        password,
        `${getNameFiel(
          password
        )} include (6-10) charactor (at least 1 uppercase letter,1 number and 1 special character:)`
      );
    }
    // Check Basic Salary
    checkNumber(basicSalary, 1000000, 20000000);

    // Check position
    checkPosition(position);
    // Check time work
    checkNumber(timeWork, 80, 200);

    return isCheck;
  }

  const valid = checkValid();
  console.log(valid);

  arrNv.push(nv);
  if (!Array.isArray(arrNv) || arrNv.length === 0) return;
  // renderNv
  tableDanhSach.innerHTML = "";
  renderNv(arrNv);
});
