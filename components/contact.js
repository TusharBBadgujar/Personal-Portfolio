export function Contact() {
  return `
    <section id="contact" class="section">
      <h2>Get In Touch</h2>
      <form onsubmit="event.preventDefault(); alert('Thank you! Your message has been sent.');">
        <input type="text" placeholder="Your Name" required>
        <input type="email" placeholder="Your Email" required>
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  `;
}
