import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h2>About me</h2>
      <p>
        Walking and running are great, but cycling allows you to travel further
        than by foot, taking you out of town and into freedom. I have lost count
        of the number of times that new cyclists return from a ride and talk
        about the new places they have discovered just a few miles from their
        own doorstep. Nothing lets you experience the country and the
        countryside like cycling. When you are pedalling hard into a headwind,
        tired, freezing cold and with the rain running down the back of your
        neck you could be forgiven for wondering what you are doing this for.
        Cycling can very easily become addictive, putting you in a position
        where you feel you ‘have’ to go out no matter the weather, or how you
        feel. Sadly, for some, this means cycling becomes a chore, but one that
        still leaves them feeling very agitated if they don’t get their biking
        fix.
      </p>
      <p>
        Need a bike mechanic? <Link to="/contact">Contact me</Link>
      </p>
      <p>
        Need a bike mechanic? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
