import emailjs from "@emailjs/browser";

const useEmail = () => {
  emailjs.init({
    publicKey: "j_L8aV8sxHC_zNAv-",
  });
  // 发送邮件
  const send = ({ email, name, content }) => {
    return emailjs.send("service_u48sep7", "template_g24q8df", {
      from_name: name,
      to_name: "ISCI",
      form_email: email,
      message: content,
    });
  };
  return {
    send,
  };
};
export default useEmail;
