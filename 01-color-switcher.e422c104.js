console.log("Hello ");const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");t.disabled=!0;let l=null;e.addEventListener("click",(()=>{l=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3),e.disabled=!0})),t.addEventListener("click",(()=>{clearInterval(l),l=null,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.e422c104.js.map
