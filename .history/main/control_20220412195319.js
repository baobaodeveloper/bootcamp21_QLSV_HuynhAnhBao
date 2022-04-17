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
const addNvList = document.getElementById("btnThem");

function check() {
  username.value = "123456";
  name.value = "baobao";
  email.value = "bao@gmail.com";
  password.value = "fasf";
  basicSalary.value = "5000000";
  position.value = "Giám đốc";
  timeWork.value = "100";
}

addNvList.addEventListener("click", () => {
  check();
});

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
let isCheck = true;
addNv.addEventListener("click", (e) => {
  e.preventDefault();

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
    checkNameIsvalid(name, arrNv);

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
  const valid = checkValid();
  console.log(valid);

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
  if (valid) {
    arrNv.push(nv);
    if (!Array.isArray(arrNv) || arrNv.length === 0) return;
    // renderNv
    tableDanhSach.innerHTML = "";
    renderNv(arrNv);
    reset();
  }
});
