function validation(){
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let comment=document.getElementById('comment').value;

    if(name=='' || email=='' || comment==''){
        /*Swal function for the Sweet alert pop-up*/
        swal({
            title: "Fields empty!!!",
            text: "Please check the missing field!",
            icon: "warning",
            button: "Ok",
          });
          document.getElementById("form").reset();
    }else{
        swal({
            title: "We have received your message "+name+" !!",
            text: "Thank you for reaching out to us.",
            icon: "success",
            button: "Ok",
          });
          document.getElementById("form").reset();
    }

}
