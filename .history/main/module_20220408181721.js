const username = document.getElementById("tknv");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const date = document.getElementById("datepicker");
const basicSalary = document.getElementById("luongCB");
const position = document.getElementById("chucvu");
const timeWork = document.getElementById("gioLam");
const listNV = document.getElementById("tableDanhSach");
function nv() {
  this.username = username.value;
  this.name = name.value;
  this.email = email.value;
  this.password = password.value;
  this.date = date.value;
  this.basicSalary = basicSalary.value;
  this.position = position.value;
  this.timeWork = timeWork.value;
}
