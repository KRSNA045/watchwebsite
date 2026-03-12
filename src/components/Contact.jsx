import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

function Contact() {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

   emailjs
  .sendForm(
    import.meta.env.VITE_EMAIL_SERVICE,
    import.meta.env.VITE_EMAIL_TEMPLATE,
    form.current,
    import.meta.env.VITE_EMAIL_PUBLIC
  )
  .then((result) => {
    console.log("SUCCESS", result.text)
    setStatus("success")
    setLoading(false)
    form.current.reset()
  })
  .catch((error) => {
    console.log("FAILED", error)
    setStatus("error")
    setLoading(false)
  })
np
  }

  return (
    <section id="contact" className="contact-premium">
      <div className="contact-container">

        <h2 className="contact-title">Let's Work Together</h2>
        <p className="contact-subtitle">
          Have a project in mind? Send me a message 🚀
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <div className="input-group">
            <input type="text" name="name" required />
            <label>Your Name</label>
          </div>

          <div className="input-group">
           <input type="email" name="email" required />
            <label>Your Email</label>
          </div>

          <div className="input-group">
            <textarea name="message" required></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="success-msg">Message sent successfully ✅</p>
          )}

          {status === "error" && (
            <p className="error-msg">Something went wrong ❌</p>
          )}

        </form>
      </div>
    </section>
  )
}

export default Contact
