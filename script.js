"use strict";
//////////// Selectors////////////
let loginInput = document.getElementById("login");
const adminSection = document.querySelector(".admin-section");
const sellerSection = document.querySelector(".seller-Section");
const header = document.querySelector(".login-header");
const loginAs = document.querySelector(".login-as");
const sectionContainer = document.querySelector(".section-container");
//////////// Selectors BTN////////////
const btnExit = document.querySelector(".login-exit");
const btnLogin = document.querySelector(".login-enter");
const btnAdmin = document.querySelector(".login-as-admin");
const btnSeller = document.querySelector(".login-as-seller");

//---------Workers Object--------
const workers = [
  {
    firstName: "eitai",
    id: 305126252,
    role: ["admin", "seller"],
    workHours: [],
  },
  {
    firstName: "koral",
    id: 205749518,
    role: ["admin", "seller"],
  },
  { firstName: "meir", id: 112233445, role: ["seller"], workHours: [] },
  {
    firstName: "michal",
    id: 554433221,
    role: ["admin"],
    workHours: [],
  },
];

class Work {
  currentAccount;
  constructor(btnEnter, btnExit, btnAdmin, btnSeller, workers) {
    this.btnEnter = btnEnter;
    this.btnExit = btnExit;
    this.btnAdmin = btnAdmin;
    this.btnSeller = btnSeller;
    this.workers = workers;
  }
  /////// Validate ////////////
  validationInputCheck(value) {
    const valToStr = value.toString();
    if (valToStr.length >= 9 && valToStr.length <= 9 && !isNaN(value))
      return true;
  }

  //login Worker
  login() {
    this.btnEnter.addEventListener("click", () => {
      this.currentAccount = this.workers.find(
        (key) => key.id === +loginInput.value
      );
      ///////validating current account /////////////
      if (this.validationInputCheck(+loginInput.value)) {
        this.btnEnter.style.display = "none";
        header.textContent = `Welcome Back ${
          this.currentAccount.firstName[0].toUpperCase() +
          this.currentAccount.firstName.slice(1)
        }`;
        this.displaySection(this.currentAccount);
      } else throw Error(alert("Employee Does not Exist or Worng ID number"));

      this.setWorkingTime();
    });

    return this;
  } ////Login End//////

  exit() {
    // if (!this.currentAccount) return false;
    this.btnExit.addEventListener("click", () => {
      loginInput.value = "";
      loginAs.style.display = "none";
      sectionContainer.innerHTML = "";
      header.textContent = "Bye Bye";
      setTimeout(function () {
        header.textContent = "Welcome";
      }, 3000);
    });
    return this;
  }

  ///////////displaying Role Menu///////////
  displaySection(acc) {
    if (acc.role.length === 2) {
      loginAs.style.display = "block";
      loginAs.innerHTML = `
      <h3>Login as</h3>
      <button class="login-as-admin" id="admin">${acc.role[0]}</button>
      <button class="login-as-seller" id="seller">${acc.role[1]}</button>`;
    } else if ((acc.role.length = 1)) {
      let accountRole = acc.role[0];

      accountRole = "seller"
        ? this.sellerSectionDisplay()
        : this.adminSectionDisplay();
    }

    return this;
  }

  adminBtn() {
    document.body.addEventListener("click", (e) => {
      if (e.target.id === "admin") this.adminSectionDisplay();
      if (e.target.id === "seller") this.sellerSectionDisplay();
    });
    return this;
  }

  adminSectionDisplay() {
    loginAs.style.display = "none";
    sectionContainer.innerHTML = `<div class="admin-section">
<h2>Admin Section</h2>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
  impedit deserunt eveniet illum aliquam culpa dicta cupiditate qui
  necessitatibus provident.
</p>
</div>`;
  }
  sellerSectionDisplay() {
    loginAs.style.display = "none";
    sectionContainer.innerHTML = `<div class="seller-section">
    <h2>Seller Section</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
      impedit deserunt eveniet illum aliquam culpa dicta cupiditate qui
      necessitatibus provident.
    </p>
    </div>`;
  }
  //push working hours to object array
  setWorkingTime(currAcc) {
    let today = new Date();

    let newWorkDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let newWorkHours = today.getHours() + ":" + today.getMinutes();

    let newWorkday = [{ date: newWorkDate, time: newWorkHours }];

    if (this.currentAccount.workHours.slice(-1).length === 2) {
      this.currentAccount.workHours.push(newWorkday);
    } else {
    }
    console.log(this.currentAccount.workHours.slice(-1));
    return this;
  }

  //Push hours to local storage
  WorkingTime() {
    window.localStorage.setItem(
      `${this.currentAccount.firstName}`,
      JSON.stringify(`${this.currentAccount.workHours}`)
    );
  }
}

const employee = new Work(btnLogin, btnExit, btnAdmin, btnSeller, workers)
  .login()
  .adminBtn()
  .exit();
