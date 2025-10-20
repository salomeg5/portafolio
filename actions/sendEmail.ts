"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalido el email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalido el email",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Formulario - Contacto <onboarding@resend.dev>",
      to: "sgallegoa11@gmail.com",
      subject: "Mensaje por Portafolio - Salomé Gallego A",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};