import React from 'react';
import Layout from '../components/Layout/Layout';
import { BiSupport, BiPhoneCall, BiMailSend } from 'react-icons/bi';

function Contact() {
  return (
    <Layout title={"Contact Us - Tech World"}>
    <div className="row contactus ">
    <div className="col-md-6 ">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYH9OJ5-Ai8NL_7X_sSOGP4aeEOjcV3HgXQcdpfpnberZNJZsNeZ0oGtDOyeG9HNC-8U&usqp=CAU"
        alt="contactus"
        style={{ width: "80%" }}
      />
    </div>
    <div className="col-md-4">
      <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
      <p className="text-justify mt-2">
        any query and info about prodduct feel free to call anytime we 24X7
        vaialible
      </p>
      <p className="mt-3">
        <BiMailSend /> : www.help@techworld.com
      </p>
      <p className="mt-3">
        <BiPhoneCall /> : 012-3456789
      </p>
      <p className="mt-3">
        <BiSupport /> : 1800-0000-0000 (toll free)
      </p>
    </div>
  </div>
    </Layout>
  )
}

export default Contact