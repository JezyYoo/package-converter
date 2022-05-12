var encryptedValue = "";
var decryptedValue= "";

$("#submit").on("click", ()=>{
    encryptedValue = $("#encrypted-packge").val();
    decryptedValue = encryptedValue.replace(/([\])}[{(])/g, '');
    $("#encrypted-packge").val(decryptedValue);
    window.navigator.clipboard.writeText(decryptedValue)
})

function copytext(el) {
    var $tmp = $("<input>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    console.log($(el).text())
    // document.execCommand("copy");
    $tmp.remove();
}
