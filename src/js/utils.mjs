//import { response } from 'express';
/* import { initCartIcon } from './Cart.mjs';
 */
// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}

// get url parameters
export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const movie = urlParams.get(param);
  return movie;
}

// render a list 
export function renderListWithTemplate(template, parentElement, list, position = 'afterbegin', clear = false) {
  const htmlStrings = list.map(template);
  if (clear) {
    parentElement.innerHTML = '';
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(''));
}

// render a template
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML('afterbegin', template);
  if(callback) {
      callback(data);
  }
}

async function loadTemplate(path){
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter(headerData, headerCallback) {
  const headerTemplate = await loadTemplate('../partials/header.html');
  const headerExport = document.querySelector('#main-header');
  const footerTemplate = await loadTemplate('../partials/footer.html');
  const footerExport = document.querySelector('#main-footer');
  const navTemplate = await loadTemplate('../partials/nav.html');
  const navExport = document.querySelector('#main-nav');
  
  renderWithTemplate(navTemplate, navExport);
  renderWithTemplate(headerTemplate, headerExport, headerData, headerCallback);
  renderWithTemplate(footerTemplate, footerExport);
} 

