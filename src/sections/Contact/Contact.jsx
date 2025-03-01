import React from 'react'
import styles from './ContactStyle.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className='sectionTitle'>Contacts</h1>
      <form action="https://formspree.io/f/movjgdwo" method='post'>
        <div className="formGroup">
            <label htmlFor="name" hidden>
                Name
            </label>
            <input type="text" name="name" id="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
            <label htmlFor="email" hidden>
                E-Mail
            </label>
            <input type="email" name="email" id="email" placeholder="E-Mail" required />
        </div>
        <div className="formGroup">
            <label htmlFor="number" hidden>
                Phone Number
            </label>
            <input type="number" name="number" id="numebr" placeholder="Contact:(+91)" required />
        </div>
        <div className="formGroup">
            <label htmlFor="message" hidden>
                Message
            </label>
            <textarea type="text" name="message" id="message" placeholder="Something for me..." required />
        </div>

        <input className='hover btn' type="submit" value="Submit" />
      </form>
    </section>
  )
}

export default Contact
