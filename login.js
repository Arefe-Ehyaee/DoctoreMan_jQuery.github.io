var people = [
    { id: 1, username: "Ali", password: "819" },
    { id: 2, username: "Ahmad", password: "193" },
    { id: 3, username: "Sara", password: "sara19" },
];

$(document).ready(function (){
    $(".enter").click(function(event){
        event.preventDefault();
        login();
    })
})

function login() {
    var valid = false;
    var username = $("#inputEmail").val();
    var password = $("#inputPassword").val();
    
    for(var i=0; i<people.length; i++){
        if(people[i].username == username){
            if(people[i].password == password){
                valid = true ;
                console.log("hi");
                // localStorage.setItem("username", people[i].username);
                window.location.href = "dashboard.html";
            }
        }
    }
}