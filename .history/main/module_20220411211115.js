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
    this.username = username.value;
    this.name = name.value;
    this.password = password.value;
    this.date = date.value;
    this.basicSalary = basicSalary.value;
    this.position = position.value;
    this.timeWork = timeWork.value;
    this.listNV = listNV.value;
  }
}

function showError(input) {
  const formGroup = input.closest(".form-group").querySelector("#tbTKNV");
  console.log(formGroup);
}
