function sendMail(event){
    event.preventDefault();

    const parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    };

    emailjs.send("service_bw1nh2h", "template_xhmoy4h", parms)
    .then(function(response){
        alert("Email sent successfully!");
        location.reload();
    })
    .catch(function(error){
        alert("Failed to send email");
        console.log(error);
    });
}