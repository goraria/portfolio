import { portfolioConfig } from "@/configs/portfolio.config";
import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";
import { getSecret } from "astro:env/server";
import { Resend } from "resend";
export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({ name: z.string().trim().min(1).max(120), email: z.email().max(254), message: z.string().trim().min(1).max(5000) }),
    handler: async ({ name, email, message }) => {
      const key = getSecret("RESEND_API_KEY");
      if (!key) throw new ActionError({ code: "SERVICE_UNAVAILABLE", message: "Email is not configured. Please contact us directly." });
      try {
        const { error } = await new Resend(key).emails.send({ from: getSecret("RESEND_FROM") || "Contact Form <onboarding@resend.dev>", to: portfolioConfig.email, replyTo: email, subject: `${name} — Portfolio contact`, text: `From: ${name} <${email}>\n\n${message}` });
        if (error) throw new Error("Email delivery failed");
      } catch { throw new ActionError({ code: "BAD_GATEWAY", message: "Unable to send your message. Please try again later." }); }
      return { sent: true };
    },
  }),
};
