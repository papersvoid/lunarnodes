function SendMail(){
				var params = {
								name : document.getElementById("name").value,
								email : document.getElementById("email").value,
								phone : document.getElementById("phone").value,
								msg : document.getElementById("msg").value
				}
				emailjs.send("sendgrid", "lunar", params).then(function (res) {
								alert("Mail Sent Successfully");
				})
}