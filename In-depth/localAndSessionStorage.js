let friends = ['Varun', 'Sagar']
localStorage.setItem("Name", "Vikas");
localStorage.setItem("Friends", JSON.stringify(friends));

console.log(window.localStorage.getItem('Friends'));

//localStorage.clear();

sessionStorage.setItem("Name", "Skanda");
sessionStorage.setItem("Friends", friends);
