function showFiles()
{
    let inputField=document.getElementById("input");
    let file=inputField.files;
    let fileReader = new FileReader;
    fileReader.onload=function(event){
        let ImageURL=fileReader.result;
        $("#preview").attr("src",`${ImageURL}`);
    }
    fileReader.readAsDataURL(file[0]);
}