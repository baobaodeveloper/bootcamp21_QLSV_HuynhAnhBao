const username = document.getElementById("tknv");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const date = document.getElementById("datepicker");
const basicSalary = document.getElementById("luongCB");
const position = document.getElementById("chucvu");
const timeWork = document.getElementById("gioLam");
const listNV = document.getElementById("tableDanhSach");

document.getElementById("btnThemNV").addEventListener("click", () => {
  const jonas = new NV(
    username,
    name,
    email,
    password,
    date,
    basicSalary,
    position,
    timeWork
  );
  console.log(jonas);
});
