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
  },
  {
    firstName: "koral",
    id: 205749518,
    role: ["admin", "seller"],
  },
  { firstName: "meir", id: 112233445, role: ["seller"] },
  {
    firstName: "michal",
    id: 554433221,
    role: ["admin"],
  },
];

class Work {
  WorkHours = [];
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
        (key) => key?.id === +loginInput.value
      );
      ///////validating current Account /////////////
      if (this.validationInputCheck(+loginInput.value)) {
        this.btnEnter.style.display = "none";
        header.textContent = `Welcome Back ${
          this.currentAccount.firstName[0].toUpperCase() +
          this.currentAccount.firstName.slice(1)
        }`;
        console.log(this.currentAccount);
        this.displaySection(this.currentAccount);
      }
    });
    return this;
  } ////Login End//////

  exit() {
    if (!this.currentAccount) return false;
  }

  ///////////displaying Role Menu///////////
  displaySection(acc) {
    if (acc.role.length === 2) {
      loginAs.style.display = "block";
      loginAs.innerHTML = `
      <h3>Login as</h3>
      <button class="login-as-admin">${acc.role[0]}</button>
      <button class="login-as-seller">${acc.role[1]}</button>`;
    } else if ((acc.role.length = 1)) {
      let accountRole = acc.role[0];

      accountRole = "seller"
        ? this.sellerSectionDisplay()
        : this.adminSectionDisplay();
    }

    return this;
  }

  adminSectionDisplay() {
    sectionContainer.innerHTML = `<div class="admin-section hidden">
<h2>Admin Section</h2>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
  impedit deserunt eveniet illum aliquam culpa dicta cupiditate qui
  necessitatibus provident.
</p>
</div>`;
  }
  sellerSectionDisplay() {
    sectionContainer.innerHTML = `<div class="seller-section hidden">
    <h2>Seller Section</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
      impedit deserunt eveniet illum aliquam culpa dicta cupiditate qui
      necessitatibus provident.
    </p>
    </div>`;
  }
}

const eitai = new Work(btnLogin, btnExit, btnAdmin, btnSeller, workers).login();

// if (this.validationInputCheck(+loginInput.value)) {
//   this.btnEnter.style.color = "gray";
//   header.textContent = `Welcome Back ${
//     key.firstName[0].toUpperCase() + key.firstName.slice(1)
//   }`;

//   loginAs.style.display = "block";
//   // this.currentAccount = this.workers[];
//   console.log(this.currentAccount);
// }

`<div class="admin-section hidden">
<h2>Admin Section</h2>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
  impedit deserunt eveniet illum aliquam culpa dicta cupiditate qui
  necessitatibus provident.
</p>
</div>

<div class="seller-section hidden">
<h2>Seller Section</h2>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
  impedit deserunt eveniet illum aliquam culpa dicta cupiditate qui
  necessitatibus provident.
</p>
</div>
`;
