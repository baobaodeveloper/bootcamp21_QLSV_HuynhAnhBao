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

let arrNv = [];
function renderNv() {}

addNv.addEventListener("click", () => {
  const nv = new Nv(
    username,
    name,
    password,
    date,
    basicSalary,
    position,
    timeWork,
    listNV
  );
  arrNv.push(nv);
  if (!Array.isArray(arrNv) || arrNv.length === 0) return;
  // renderNv
});