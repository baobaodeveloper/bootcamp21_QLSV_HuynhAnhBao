const username = document.getElementById("tknv");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const date = document.getElementById("datepicker");
const basicSalary = document.getElementById("luongCB");
const position = document.getElementById("chucvu");
const timeWork = document.getElementById("gioLam");
const listNV = document.getElementById("tableDanhSach");

class Nv {
  constructor(
    username,
    name,
    password,
    date,
    basicSalary,
    position,
    timeWork,
    listNV
  ) {
    username = this.username;
    name = this.username;
    password = this.password;
    date = this.date;
    basicSalary = this.basicSalary;
    position = this.position;
    timeWork = this.timeWork;
    listNV = this.listNV;
  }
}
