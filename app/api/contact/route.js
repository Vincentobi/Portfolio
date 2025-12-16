import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json()

        // Save to Supabase
        const { error: supabaseError } = await supabase.from('messages').insert([{ name, email, subject, message }])

        if (supabaseError) {
            console.error('Supabase error:', supabaseError)
            return Response.json({ error: 'Failed to save to database' }, { status: 500 })
        }

        // Send Email
        try {
            await resend.emails.send({
                from: 'Portfolio <onboarding@resend.dev>',
                to: process.env.OWNER_EMAIL,
                subject: `New Portfolio Message: ${subject}`,
                html: `
            <h3>New Contact Message</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Subject:</b> ${subject}</p>
            <p><b>Message:</b><br/>${message}</p>
          `,
            })
        } catch (resendError) {
            console.error('Resend error:', resendError)
            // We continue even if email fails, but log it
        }

        // WhatsApp redirect message - NOTE: This won't work in a backend API response unless the frontend handles the redirectUrl.
        // The frontend code shows it alerts and resets. It doesn't use the whatsappUrl.
        // I will include it as the user had it.
        const whatsappText = encodeURIComponent(
            `New Portfolio Message\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
        )

        const whatsappUrl = `https://wa.me/${process.env.WHATSAPP_NUMBER}?text=${whatsappText}`

        return Response.json({ success: true, whatsappUrl })
    } catch (error) {
        console.error('API Error:', error)
        return Response.json({ error: 'Failed to send message' }, { status: 500 })
    }
}
