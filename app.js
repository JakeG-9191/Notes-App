removeLocal = () => localStorage.removeItem("test");

initialLocal = () => localStorage.setItem("test", "another")

document.getElementById("listen").onclick = () => {initialLocal()}
document.getElementById("remove").onclick = () => {removeLocal()}