var encryptedValue = "";
var decryptedValue= "";

$("#submit").on("click", ()=>{
    const encrField = $("#encrypted-packge");
    encryptedValue = encrField.val();
    decryptedValue = encryptedValue.replace(/([\])}[{(])/g, '');
    encrField.val(decryptedValue);
    window.navigator.clipboard.writeText(decryptedValue);
    encrField.css("border","2px solid green");
})

$("#submit").on("change", ()=>{
    $("#encrypted-packge").css("border","2px solid black");
})

