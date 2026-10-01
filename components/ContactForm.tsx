"use client";

import { useState, type FormEvent } from "react";

const interests = [
  "Bespoke Commission",
  "Engagement Ring",
  "Wedding Rings",
  "A Piece I Saw Online",
  "Visiting the Studio",
  "Other",
];

export function ContactForm({
  initialInterest = "",
}: {
  initialInterest?: string;
}) {
  const [preferred, setPreferred] = useState("Email");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    // This concept deliberately keeps enquiry data in the browser only.
    event.currentTarget.reset();
    setPreferred("Email");
    setSubmitted(true);
  }

  return (
    <div className="form-wrap">
      <p className="demo-note">
        <strong>Demo form.</strong> No message will be sent to Yvonne Ross or
        stored.
      </p>
      {submitted ? (
        <div className="form-success" role="status">
          <span aria-hidden="true">✓</span>
          <h3>Enquiry flow preview complete.</h3>
          <p>
            This was a demonstration. Your details were not sent or saved.
            Please use the official website to contact Yvonne.
          </p>
          <button
            type="button"
            className="text-link"
            onClick={() => setSubmitted(false)}
          >
            Start again &gt;
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
          <div className="form-row">
            <label>
              Name <span aria-hidden="true">*</span>
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Email <span aria-hidden="true">*</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Phone {preferred === "Phone" && <span aria-hidden="true">*</span>}
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                required={preferred === "Phone"}
              />
            </label>
            <label>
              I&apos;m interested in <span aria-hidden="true">*</span>
              <select name="interest" defaultValue={initialInterest} required>
                <option value="" disabled>
                  Choose an option
                </option>
                {interests.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
          </div>
          <label>
            Message <span aria-hidden="true">*</span>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell us a little about what you have in mind"
            />
          </label>
          <fieldset className="contact-method">
            <legend>Preferred contact method</legend>
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="Email"
                checked={preferred === "Email"}
                onChange={() => setPreferred("Email")}
              />{" "}
              Email
            </label>
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="Phone"
                checked={preferred === "Phone"}
                onChange={() => setPreferred("Phone")}
              />{" "}
              Phone
            </label>
          </fieldset>
          <button
            className="action action-dark"
            type="submit"
            data-event="contact_form_submit_demo"
          >
            Send my enquiry <span aria-hidden="true">&gt;</span>
          </button>
        </form>
      )}
    </div>
  );
}
