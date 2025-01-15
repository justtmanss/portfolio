import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_email: 'manasvi.g.agrawal@gmail.com',
    };

    const response = await emailjs.send(
      'service_portfolio',
      'template_contact',
      templateParams,
      'FSVtBJVyMxbQ451Mk'
    );

    return response.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};