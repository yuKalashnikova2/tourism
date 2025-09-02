import nodemailer from "nodemailer"

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<{ name: string; email: string; phone: string }>(event)
    const { name, email, phone } = body

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.PASS_USER,
      },
    })

    const mail = {
      from: process.env.EMAIL_USER,
      to: ["narrissovannaya@mail.ru"],
      subject: "Запись на консультацию с сайта zdorovyeiturizm.ru",
      text: `Имя: ${name} \nEmail: ${email} \nТелефон: ${phone}`,
    }

    await transporter.sendMail(mail)

    return { message: "Письмо успешно отправлено!" }
  } catch (error) {
    console.error("MAIL ERROR:", error)

    if (error instanceof Error) {
      throw createError({
        statusCode: 500,
        statusMessage: "Ошибка при отправке письма: " + error.message,
      })
    }

    throw createError({
      statusCode: 500,
      statusMessage: "Неизвестная ошибка",
    })
  }
})
