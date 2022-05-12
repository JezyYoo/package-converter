var encryptedValue = "";
var decryptedValue= "";
const encrField = $("#encrypted-packge");
const infoText = $(".info-text")
$("#submit").on("click", ()=>{

    encryptedValue = encrField.val();
    decryptedValue = encryptedValue.replace(/([\])}[{(])/g, '');
    encrField.val(decryptedValue);
    window.navigator.clipboard.writeText(decryptedValue);
    encrField.css("border","2px solid green");
    infoText.css("display","block");
    setTimeout(clearInfo,3000)
})

var clearInfo = ()=>{
    encrField.css("border","2px solid black");
    infoText.css("display","none");
}

