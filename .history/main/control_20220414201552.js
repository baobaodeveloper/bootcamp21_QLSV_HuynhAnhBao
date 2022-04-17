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
const btnClose = document.getElementById("btnDong");
const btnUpdate = document.getElementById("btnCapNhat");
const searchName = document.getElementById("searchName");
let modalBackdrop;

date.value = new Intl.DateTimeFormat("en-US").format(date.value);

// reset form
let modal;
addNvList.addEventListener("click", () => {
  addNv.disabled = false;
  btnUpdate.disabled = true;
  reset();
});
let arrCurrent;
let arrNv;

// Event load
window.addEventListener("load", () => {
  arrCurrent = JSON.parse(localStorage.getItem("arrNv"));
  arrNv = arrCurrent || [];
  if (!Array.isArray(arrNv) || arrNv.length === 0) return;
  // renderNv
  tableDanhSach.innerHTML = "";
  renderNv(arrNv);
});

//
// render nv
function renderNv(arr) {
  arr.forEach((nv, index) => {
    console.log(nv);
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
        <td>${nv.employeeRatings}</td>
        <td><button class="btn btn-danger btn-sm"  id="btn-delete">Delete</button></td>
    </tr>
    `;
    tableDanhSach.insertAdjacentHTML("afterbegin", markup);
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
      if (e.target.id !== "btn-delete") {
        addNv.disabled = true;
        btnUpdate.disabled = false;
        // show from and modal
        myModal.style.display = "block";
        myModal.classList.add("show");
        creatModal();
        modalBackdrop = document.querySelector(".modal-backdrop");
        // show infor nv on form
        showInfor(arrNv[index]);
        // check conditon valid
        btnUpdate.addEventListener("click", () => {
          isCheck = true;
          let check = true;
          if (username.value === arrNv[index].username) {
            check = checkConditionValidNotDulucated();
          } else {
            check = checkConditionValid();
          }

          if (check) {
            updateCurrentNv(arrNv[index]);

            localStorage.setItem("arrNv", JSON.stringify(arrNv));
            myModal.style.display = "none";
            myModal.classList.remove("show");
            modalBackdrop.remove();

            tableDanhSach.innerHTML = "";
            renderNv(arrNv);
          }
        });
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
    timeWork
  );

  console.log(nv);

  // Check condition valid
  const valid = checkConditionValid();

  if (valid) {
    arrNv.push(nv);
    localStorage.setItem("arrNv", JSON.stringify(arrNv));
    if (!Array.isArray(arrNv) || arrNv.length === 0) return;
    // renderNv
    myModal.style.display = "none";
    myModal.classList.remove("show");
    modalBackdrop = document.querySelector(".modal-backdrop");
    modalBackdrop.remove();
    tableDanhSach.innerHTML = "";
    console.log(arrNv);
    renderNv(arrNv);
    reset();
  }
});

// Event close form

btnClose.addEventListener("click", () => {
  myModal.style.display = "none";
  myModal.classList.remove("show");
  if (modalBackdrop) modalBackdrop.remove();
});

// Event search
searchName.addEventListener("input", () => {
  const searchWord = searchName.value;
  console.log(arrNv);
});
