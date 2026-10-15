"use client";

import { useState, type FormEvent } from "react";

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
    event.currentTarget.reset();
  }
  return <div className="demo-form-wrap"><div className="form-status"><span className="status-dot" />DEMONSTRATION FORM · NO DATA IS SENT</div>{submitted ? <div className="success-panel" role="status" aria-live="polite"><span className="success-icon">✓</span><h2>Form preview complete.</h2><p>Your information was not sent or saved. To contact the practice, please call or use the published email address.</p><a className="button button-dark" href="tel:+353567775126">Call the practice <span aria-hidden="true">↗</span></a><button type="button" className="text-button" onClick={() => setSubmitted(false)}>Start a new preview</button></div> : <form onSubmit={handleSubmit} noValidate={false}><div className="form-heading"><span className="eyebrow">FORM PREVIEW</span><h2>See how an enquiry<br /><em>could work.</em></h2><p>This form stays in your browser. It does not transmit or store your details. Do not enter sensitive health information.</p></div><div className="form-grid"><div className="field"><label htmlFor="name">Your name <span>*</span></label><input id="name" name="name" type="text" autoComplete="name" required minLength={2} placeholder="Full name" /></div><div className="field"><label htmlFor="email">Email address <span>*</span></label><input id="email" name="email" type="email" autoComplete="email" required placeholder="name@example.com" /></div><div className="field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Your contact number" /></div><div className="field"><label htmlFor="topic">General topic <span>*</span></label><select id="topic" name="topic" required defaultValue=""><option value="" disabled>Choose a topic</option><option value="hip">Hip enquiry</option><option value="knee">Knee enquiry</option><option value="other">Other enquiry</option></select></div></div><div className="field"><label htmlFor="message">Short message</label><textarea id="message" name="message" rows={4} maxLength={400} placeholder="Please avoid sensitive medical details in this demo." /></div><button className="button button-dark submit-button" type="submit">Preview form state <span aria-hidden="true">↗</span></button><p className="form-fineprint">* Required for this browser-only preview. For a real request, contact the practice directly.</p></form>}</div>;
}
