import { Resend } from "resend";
import { redirect } from "next/navigation";

// EMAIL SENDGING FUCTIONALITY
// ADD RESEND_API_KEY IN YOUR .ENV FILE
const sendEmail = async (formdata) => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      error: "RESEND_API_KEY is not configured",
    };
  }

  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");
  if (!message) {
    return {
      error: "Invalid message",
    };
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: `gorariagroup@gmail.com`,
    subject: `${name} From Contact Form.`,
    reply_to: `${SenderEmail}`,
    text: `sender email: ${SenderEmail} 
     ${message}`,
  });

  return redirect("/");
};

export { sendEmail };
