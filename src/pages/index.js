import React from "react"
import beer from "./beer-bike.jpg"
import hero from "./super-hero.jpg"
import friend from "./bike-friend.jpg"
import challenge from "./bike-challenge.jpg"
import workout from "./workout.jpg"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h3>
        Here's a few reasons why I love mountain biking - and why you should
        love it too!
      </h3>
      <h2>MOUNTAIN BIKING CONNECTS US TO THE NATURAL WORLD.</h2>
      <p>
        We truly believe that mountain biking is one of the best ways to connect
        with nature and escape the city. It's becoming increasingly difficult to
        disconnect from technology and live in the moment - both of which become
        much easier if you're pedalling through forested singletrack, navigating
        roots and rocks and focusing on the trail ahead.
      </p>
      <h2>MOUNTAIN BIKING IS CHALLENGING. </h2>
      <p>
        If you've never tried mountain biking, it's easy to watch professional
        mountain bikers race or compete and think "it's just like riding a bike,
        right?" Well, not really. Mountain biking takes a high degree of mental
        and physical stamina, whether you're competing or just trying to keep up
        with your mountain bike fanatic friend. It allows us to recognize our
        weaknesses and work on our skills to become better riders. Every
        mountain biker will crash, but mountain biking is a great way to push
        your comfort zone and gain confidence. Ride with mountain bikers that
        are faster than you and more technically strong - instead of feeling
        defeated by their skills, power through to keep up with them and improve
        your technique.
      </p>
      <img src={challenge} alt="" />
      <h2>MOUNTAIN BIKING MAKES US FEEL SUPERHUMAN.</h2>
      <p>
        Yes, mountain biking can be an incredible challenge, but on the opposite
        side... it can also make us feel superhuman. Nothing beats the feeling
        when you finally ride a drop, obstacle or skinny you've been trying to
        conquer for months (or years), or when you dig deep in your lungs to
        power through a gruelling climb to reach the summit. These moments of
        perseverance and success offer up incredible motivators to increase our
        confidence both on and off the bike, as well as feel stronger and more
        capable.
      </p>
      <img src={hero} alt="super-hero" />
      <h2>MOUNTAIN BIKING CREATES CONNECTIONS</h2>
      <p>
        The mountain biking community is incredible, and it spans across the
        globe. There's a certain magic that happens when people come together to
        ride bikes. You end up not only motivating each other on the bike, but
        also creating life-long memories over delicious meals and post-ride
        beverages. You end up learning together and elevating each other's
        experience through a shared connection. You also share that passion and
        love of sport with the people around you, offering inspiration and new
        perspectives to people that are new to the sport.
      </p>
      <img src={friend} alt="friends" />
      <h2>MOUNTAIN BIKING IS A DYNAMIC WORK-OUT. </h2>
      <p>
        From technical skills that require balance, focus and proper body
        positioning to cardio sprints - mountain biking offers up a dynamic
        work-out that makes us stronger. Whether testing our your balance when
        riding over a skinny or pushing your cardio limits on an excruciating
        climb, mountain biking requires strength, focus and healthy lungs.
      </p>
      <img src={workout} alt="" />
      <h2>MOUNTAIN BIKING AND BEER.</h2>
      <p>
        Do we need to say more?! Beer (or a beverage of your choice) seems to go
        hand-in-hand with mountain biking. After breaking a good sweat with good
        friends, chatting about the day's ride over a cold one is the perfect
        way to decompress and top off the ride.
      </p>
      <img src={beer} alt="beer" />
    </Layout>
  )
}
export default IndexPage
