import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <title>Contact</title>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Love to hear from you!</h3>
            <h5>Issue with your live order?</h5>
            <p>
              Click on the 'Support' or 'Online ordering help' section in your
              app to connect to our customer support team.
            </p>
            <h5>Need support?</h5>
            <p>
              Click on the 'Pro help' section in your app to connect to our Pro
              support team.
            </p>
            <h5>Report a Safety Emergency.</h5>
            <p>We are committed to the safety of everyone.</p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email address</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
