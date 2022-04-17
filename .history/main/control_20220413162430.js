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
const myModal = document.getElementById("myModal");
const body = document.querySelector("body");
date.value = new Intl.DateTimeFormat("en-US").format(date.value);

// reset form
addNvList.addEventListener("click", () => {
  reset();
});
let arrCurrent;
let arrNv;

window.addEventListener("load", () => {
  arrCurrent = JSON.parse(localStorage.getItem("arrNv"));
  arrNv = arrCurrent || [];
  if (!Array.isArray(arrNv) || arrNv.length === 0) return;
  // renderNv
  tableDanhSach.innerHTML = "";
  renderNv(arrNv);
});

// render nv
function renderNv(arr) {
  arr.forEach((nv, index) => {
    const markup = `
    <tr id="nv-item">
        <td>${nv.username}</td>
        <td>${nv.name}</td>
        <td>${nv.email}</td>
        <td>${nv.date}</td>
        <td>${nv.position}</td>
        <td>${new Intl.NumberFormat("vn-VI", {
          style: "currency",
          currency: "VND",
        }).format(salaryDirector(nv))}</td>
        <td>${employeeRating(nv)}</td>
        <td><button class="btn btn-danger btn-sm"  id="btn-delete">Delete</button></td>
    </tr>
    `;
    tableDanhSach.insertAdjacentHTML("afterbegin", markup);

    // Event listener
    const nvItem = document.getElementById("nv-item");
    // Delete nv
    document.getElementById("btn-delete").addEventListener("click", () => {
      if (arrNv.length > 0) {
        arrNv.splice(index, 1);
        localStorage.setItem("arrNv", JSON.stringify(arrNv));
        nvItem.remove();
      }
    });

    // update nv
    nvItem.addEventListener("click", (e) => {
      console.log(e.target.id);
      if (e.target !== document.getElementById("btn-delete")) {
        console.log(e.target === document.getElementById("btn-delete"));
        // show from and modal
        myModal.style.display = "block";
        myModal.classList.add("show");
        creatModal();
        // show infor nv on form
        showInfor(arrNv[index]);
      }
    });
  });
}
// add nv
addNv.addEventListener("click", (e) => {
  e.preventDefault();
  isCheck = true;
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

  // Check condition valid
  const valid = checkConditionValid();

  if (valid) {
    arrNv.push(nv);
    localStorage.setItem("arrNv", JSON.stringify(arrNv));
    if (!Array.isArray(arrNv) || arrNv.length === 0) return;
    // renderNv
    tableDanhSach.innerHTML = "";
    renderNv(arrNv);
    reset();
  }
});
