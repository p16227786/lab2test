const hello=document.getElementById("hello");

//console.log(hello);

function greeting(){
  alert("Hello!");
  hello.textContent="Bye";
}

hello.addEventListener("click",greeting);
