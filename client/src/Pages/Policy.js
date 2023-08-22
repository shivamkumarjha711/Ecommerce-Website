import React from 'react'
import Layout from '../components/Layout/Layout'

function Policy() {
  return (
    <Layout title={"Privacy Policy"}>
    <div className="row contactus ">
    <div className="col-md-6 ">
      <img
        src="https://termshub.io/v3/assets/images/products/privacy_policy_hero.svg"
        alt="contactus"
        style={{ width: "100%" }}
      />
    </div>
    <div className="col-md-4">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
      officiis obcaecati esse tempore unde ratione, eveniet mollitia,
      perferendis eius temporibus dicta blanditiis doloremque explicabo
      quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
      accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
      commodi illum quidem neque tempora nam.</p>
    </div>
  </div>
    </Layout>
  )
}

export default Policy