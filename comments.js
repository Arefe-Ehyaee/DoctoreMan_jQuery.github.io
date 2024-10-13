var comments = [
    {id : 11, fullName : "نرگس علیپور", text : "یوگا یکی از ورزش‌هایی است که می‌تواند شما را قوی و انعطاف پذیر کند و احساس تمرکز و هوشیاری بیشتری ببخشد. این ورزش آرامش‌بخش کمک می‌کند احساس عال"},
    {id : 22, fullName : "امیرعلی محسنی", text : "یوگا یکی از ورزش‌هایی است که می‌تواند شما را قوی و انعطاف پذیر کند و احساس تمرکز و هوشیاری بیشتری ببخشد. این ورزش آرامش‌بخش کمک می‌کند احساس عال"},
    {id : 33, fullName : "فرناز ", text : "یوگا یکی از ورزش‌هایی است که می‌تواند شما را قوی و انعطاف پذیر کند و احساس تمرکز و هوشیاری بیشتری ببخشد. این ورزش آرامش‌بخش کمک می‌کند احساس عال"}
]


window.onload = function (){
    bindComments();
}

function bindComments() {
    var comments = document.getElementById("comments");
    for(var c=0; c<comments.length; c++){
        alert('hi');
        var col = document.createElement("div");
        col.classList.add("col-12", "col-lg-4");
        var card = document.createElement("div");
        card.style.width = "100%";
        card.style.height = "18rem";
        card.classList.add("border","rounded")
        body = document.createElement("div");
        body.classList.add("card-body");
        p = document.createElement("p");
        p.innerText = comments[c].text;
        p.classList.add("card-text","mb-5","fs-5");
        body.appendChild(p);
        // var hr = document.createElement("hr");
        // body.appendChild(hr);
        var span = document.createElement("span");
        span.classList.add("fw-bold");
        span.innerText = comments[c].fullName;
        body.appendChild(span);
        card.appendChild(body);
        col.appendChild(card);
        comments.appendChild(col);
    }

}