'use server';
/**
 * @fileOverview Flujo para enviar correos electrónicos de contacto.
 * 
 * - sendEmail: Función que procesa y envía el correo.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Resend } from 'resend';
import type { EmailData } from '@/ai/schemas/email-schema';
import { EmailDataSchema } from '@/ai/schemas/email-schema';

// IMPORTANT: Add your Resend API Key to your environment variables.
// You can get one from https://resend.com/
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

// Define the main function to be called from the client
export async function sendEmail(input: EmailData): Promise<{ success: boolean }> {
  return sendContactEmailFlow(input);
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: EmailDataSchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (input) => {
    if (!resend) {
      const errorMessage = "Resend API key is not configured. Please add RESEND_API_KEY to your .env file.";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    
    const { name, email, message } = input;
    const toEmail = "gl4552458@gmail.com";

    try {
      const { data, error } = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>', // This domain is verified by Resend for free accounts
        to: [toEmail],
        subject: `Nuevo mensaje de contacto de ${name}`,
        reply_to: email, // Set the reply-to to the user's email
        html: `
          <div style="font-family: sans-serif; font-size: 16px; color: #333;">
            <h2>Nuevo Mensaje del Portafolio</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> <span className="text-primary font-medium">${email}</span></p>
            <p><strong>Mensaje:</strong></p>
            <p style="padding: 12px; border-left: 4px solid #ccc; background-color: #f4f4f4;">${message}</p>
          </div>
        `,
      });

      if (error) {
        console.error('Resend API Error:', error);
        throw new Error(error.message);
      }

      console.log('Email sent successfully:', data);
      return { success: true };

    } catch (e: any) {
      console.error('Failed to send email:', e);
      // Re-throw the error with a clear message to be caught by the client
      throw new Error(e.message || 'An unknown error occurred while sending the email.');
    }
  }
);
