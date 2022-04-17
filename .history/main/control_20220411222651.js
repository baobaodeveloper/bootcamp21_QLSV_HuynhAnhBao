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
  if (checkNameIsvalid(name.value)) ShowSuccess(name);

  arrNv.push(nv);
  if (!Array.isArray(arrNv) || arrNv.length === 0) return;
  // renderNv
  tableDanhSach.innerHTML = "";
  renderNv(arrNv);
});
