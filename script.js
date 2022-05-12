var encryptedValue = "";
var decryptedValue="";

$("#submit").on("click", ()=>{
    encryptedValue = $("#encrypted-packge").val();
    decryptedValue = encryptedValue.replace(/[\])}[{(]/g, '');
    $("#decrypted-pacakge").val(decryptedValue);
})