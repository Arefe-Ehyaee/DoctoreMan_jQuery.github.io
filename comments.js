var comments = [
    {id : 11, fullName : "نرگس قلیپور", text : "یوگا یکی از ورزش‌هایی است که می‌تواند شما را قوی و انعطاف پذیر کند و احساس تمرکز و هوشیاری بیشتری ببخشد. این ورزش آرامش‌بخش کمک می‌کند احساس عال"},
    {id : 22, fullName : "امیرعلی محسنی", text : "یوگا یکی از ورزش‌هایی است که می‌تواند شما را قوی و انعطاف پذیر کند و احساس تمرکز و هوشیاری بیشتری ببخشد. این کمک می‌کند احساس عال"},
    {id : 33, fullName : "فرناز ", text : "یوگا یکی از ورزش‌هایی است که می‌تواند شما را قوی و انعطاف پذیر کند و احساس تمرکز و هوشیاری بیشتری ببخشد. این ورزش آرامش‌بخش کمک می‌کند احساس عال"}
]



$(document).ready(function(){

    $.get("comments_template.html", function(data) {
        var commentsTemplate = $.parseHTML(data);

        comments.forEach(function(comment) {
            fillCommentsTemplate(comment, commentsTemplate);
        });
    });
});

function fillCommentsTemplate(comment, commentsTemplate) {
    var $CommentsTemplateCopy = $(commentsTemplate).clone();
    $CommentsTemplateCopy.find('.card-text').text(comment.text);
    $CommentsTemplateCopy.find('.person').text(comment.fullName);
    $('#comments').append($CommentsTemplateCopy);
}

