const username = document.getElementById("tknv");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const date = document.getElementById("datepicker");
const basicSalary = document.getElementById("luongCB");
const position = document.getElementById("chucvu");
const timeWork = document.getElementById("gioLam");
const listNV = document.getElementById("tableDanhSach");
function nv(
  username,
  name,
  email,
  password,
  date,
  basicSalary,
  position,
  timeWork
) {
  this.username = username;
  this.name = name;
  this.email = email;
  this.password = password;
  this.date = date;
  this.basicSalary = basicSalary;
  this.position = position;
  this.timeWork = timeWork;
}
