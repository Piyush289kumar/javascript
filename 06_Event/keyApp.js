const keyField = document.querySelector("#typeField");


  window.addEventListener("keypress", (el) => {
    el.key === " " ? document.querySelector("#key").innerHTML += ' Space ' : el.key;
    document.querySelector("#key").innerHTML += ` ${el.key}`;
  });
