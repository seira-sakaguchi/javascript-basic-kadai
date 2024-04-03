const getButton = document.getElementById("btn");

// getButton.addEventListener("click",()=>{
//   const getText = document.getElementById("text");
//   setTimeout(()=>{
//     getText.textContent="ボタンをクリックしました";
//   },5000);

// });

getButton.addEventListener("click",()=>{
  setTimeout(()=>{
    const getText = document.getElementById("text");
    getText.textContent="ボタンをクリックしました";
  },2000);
});

