/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/CallbackChat.js
class CallbackChat {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.isFormVisible = false;
    this.render();
    this.initEventListeners();
  }
  render() {
    this.chatButton = document.createElement("button");
    this.chatButton.className = "chat-button";
    this.container.appendChild(this.chatButton);
    this.chatForm = document.createElement("div");
    this.chatForm.className = "chat-form";
    this.chatForm.innerHTML = `
      <div class="chat-form-header">
        <h3>Напишите нам</h3>
        <button class="close-button">x</button>
      </div>
      <textarea></textarea>
      <button class="submit-button">Отправить</button>
    `;
    this.container.appendChild(this.chatForm);
  }
  initEventListeners() {
    this.chatButton.addEventListener("click", () => this.toggleForm());
    this.chatForm.querySelector(".close-button").addEventListener("click", () => this.toggleForm());
    this.chatForm.querySelector(".submit-button").addEventListener("click", () => this.submitForm());
  }
  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
    this.chatButton.style.display = this.isFormVisible ? "none" : "block";
    this.chatForm.classList.toggle("show", this.isFormVisible);
  }
  submitForm() {
    const textarea = this.chatForm.querySelector("textarea");
    const message = textarea.value.trim();
    if (message) {
      alert(`Сообщение отправлено: ${message}`);
      textarea.value = "";
      this.toggleForm();
    } else {
      alert("Пожалуйста, введите сообщение.");
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  new CallbackChat("callback-chat-container");
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;