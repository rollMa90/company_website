import emailjs from "@emailjs/browser";

emailjs.init({
  publicKey: "iC4S9bkay4liWsjH-",
});

export default sendEmail = (email, name) => {
  emailjs.send("service_123456789", "template_123456789", {
    to_email: email,
    from_name: name,
  });
};
