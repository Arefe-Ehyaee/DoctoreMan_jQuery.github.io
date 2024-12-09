
var posts = [
    {id : 1, titel : "نور آبی", category : "چشم", image: "../assets/images/blue.png", text : "یوگا یکی از ورزش‌هایی است که می‌تواند شما را قوی و انعطاف پذیر کند و احساس تمرکز و هوشیاری بیشتری ببخشد. این ورزش آرامش‌بخش کمک می‌کند احساس عال"},
    {id : 2, titel : "روغن زیتون", category : "تغذیه", image: "../assets/images/oil-ezgif.com-webp-to-jpg-converter.jpg", text : "یوگا یکی از ورزش‌هایی است که می‌تواند شما را قوی و انعطاف پذیر کند و احساس تمرکز و هوشیاری بیشتری ببخشد. این ورزش آرامش‌بخش کمک می‌کند احساس عال"},
    {id : 3, titel : "ویتامین ث", category : "تغذیه", image: "../assets/images/Vc-ezgif.com-webp-to-jpg-converter.jpg", text : "یوگا یکی از ورزش‌هایی است که می‌تواند شما را قوی و انعطاف پذیر کند و احساس تمرکز و هوشیاری بیشتری ببخشد. این ورزش آرامش‌بخش کمک می‌کند احساس عال"},
    {id : 4, titel : "حساسیت فصلی", category : "ریه", image: "../assets/images/asthma-ezgif.com-webp-to-jpg-converter.jpg", text : "یوگا یکی از ورزش‌هایی است که می‌تواند شما را قوی و انعطاف پذیر کند و احساس تمرکز و هوشیاری بیشتری ببخشد. این ورزش آرامش‌بخش کمک می‌کند احساس عال"},
    {id : 5, titel : "ورزش", category : "تغذیه", image: "../assets/images/running.PNG", text : "یوگا یکی از ورزش‌هایی است که می‌تواند شما را قوی و انعطاف پذیر کند و احساس تمرکز و هوشیاری بیشتری ببخشد. این ورزش آرامش‌بخش کمک می‌کند احساس عال"},
    {id : 6, titel : "آلزایمر", category : "تغذیه", image: "../assets/images/alzheimer-s-disease.jpg", text : "بیماری آلزایمر که از آن با نام فراموشی نیز یاد می‌شود، بیماری است که با زوال عقل مشکلات فراوانی را برای فرد مبتلا به وجود می‌آورد. مغز، این مرکز پردازش و مدیریت حیات..."},
    {id : 7, titel : "رژیم کتوژنیک", category : "تغذیه", image: "../assets/images/keto-diet.jpg", text : "رژیم کتوژنیک یکی از محبوب‌ترین و پرطرفدارترین رژیم‌های لاغری در جهان است که بر پایه پروتئین و چربی سالم بنا شده است. در دنیای رژیم‌های کاهش‌وزن، برنامه‌های غذایی کم‌کربوهیدرات و پروتئین بالا، اغلب توجه..."},
    {id : 8, titel : "پارکینسون", category : "تغذیه", image: "../assets/images/Parkinsons.jpg", text : "ارکینسون بیماری عصبی مزمنی است که بر اساس کاهش تولید دوپامین در مغز رخ می‌دهد. این بیماری باعث اختلال در حرکت و کنترل عضلات می‌شود و تاثیرات جدی روی کیفیت زندگی..."},
    {id : 0, titel : "سلامت", category : "تغذیه", image: "../assets/images/obesity.jpg", text : "یوگا یکی از ورزش‌هایی است که می‌تواند شما را قوی و انعطاف پذیر کند و احساس تمرکز و هوشیاری بیشتری ببخشد. این ورزش آرامش‌بخش کمک می‌کند احساس عال"},
    {id : 10, titel : "میوه", category : "تغذیه", image: "../assets/images/calorie.PNG", text : "یوگا یکی از ورزش‌هایی است که می‌تواند شما را قوی و انعطاف پذیر کند و احساس تمرکز و هوشیاری بیشتری ببخشد. این ورزش آرامش‌بخش کمک می‌کند احساس عال"}
]


$(document).ready(function(){

    $.get("article_Template.html", function(data) {
        var template = $.parseHTML(data);

        posts.forEach(function(post) {
            fillTemplate(post, template);
        });
    });
});

function fillTemplate(post, template) {
    var $templateCopy = $(template).clone();
    $templateCopy.find('.card-img-top').attr('src', post.image);
    $templateCopy.find('.card-title').text(post.titel);
    $templateCopy.find('.card-text').text(post.text);
    $('#articles').append($templateCopy);
}





