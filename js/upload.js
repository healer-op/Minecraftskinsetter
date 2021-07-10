function reportInfo(vars, showType = false) {
    if (showType === true) console.log(typeof vars);
    console.log(vars);
}

function addImg(ele, content) {
    var myDIV = document.querySelector(ele);
    var newContent = document.createElement('div');
    newContent.innerHTML = content;

    while (newContent.firstChild) {
        myDIV.appendChild(newContent.firstChild);
    }
}

var feedback = function(res) {
    reportInfo(res, true);
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        document.querySelector('.status').classList.add('bg-success');
        var npcskin = "/npc skin "+ get_link;
        var skinset = "/skin set " + get_link;
        var content =
            '<div class ="gg"'+
            'npc : ' + '<br><input class="image-url" value=\"' + npcskin + '\"/><br>'+
            '<input class="image-url" value=\"' + skinset + '\"/><br>' 
             + '<img class="img" alt="Imgur-Upload" src=\"' + get_link + '\"/></div>';
        addImg('.status', content);
    }
};

new Imgur({
    clientid: '4409588f10776f7', //You can change this ClientID
    callback: feedback
});
