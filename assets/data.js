export const cardSections = [
    {
      id: 1,
      title: "Featured",
      snippet: "These are recent projects that I found particularly rewarding. Usually requires learning a new skill.",
      cards: [
          {
            id: 13,
            title: "Contact",
            url: "",
            tags: ["code", "electronics", "CAD", "team"],
            snippet: `A children's bike helmet attachment that detects crashes and notifies parents.
            Wrote firmware for IMU, localization, and event detection. Used Mahony filter and IMU data to characterize true/false positives. Manufactured custom PCB. Made with the 2.009 Product Design Purple Team.`,
            image: "contact.jpg",
            date: "December 2024"
          },
          {
            id: 11,
            title: "Muon Wind Chime",
            url: "",
            tags: ["code", "research", "electronics", "CAD"],
            snippet: `Detects Muons and other high energy particles and uses their intensity
            as input into a custom synthesizer. Muon detector is based off the CosmicWatch.
            Synthesizer is written in PureData and runs on a spare Jetson Nano. Next iteration
            includes a light display and proper housing.`,
            image: "Muon.png",
            date: "July 2024"
          },
          {
            id: 15,
            title: "Warehouse Localization",
            url: "",
            tags: ["code", "research", "electronics", "CAD"],
            snippet: `Sourced, prototyped, and deployed a localization system in 10 days for a project involving carts moving in a 150,000sq. ft warehouse. Used 15 ESP32 + UWB time-of-flight beacons to localize 6 carts along known paths using least squares regression and moving average. Manufactured UWB PCBs by hand.`,
            image: "UWB.png",
            date: "July 2024"
          },
        ],
      },

      {
          id: 2,
          title: "Past Projects",
          snippet: "These projects range from a few days to a few months of work. Sorted SOMEWHAT chronologically.",
          cards: [
          {
            id: 21,
            title: "Teaching at the American University of Bahrain",
            url: "",
            tags: ["art"],
            snippet: `Developed open-source digital and physical fabrication cirriculum for Actuacted Xperiences at AUBH. Taught 30 juniors and seniors. Personally led robotics labs introducing basic motor control and sensors through light following and wall following on custom robot. 
            Check it out here: https://mit-gtl-bahrain-2025.github.io/`,   
            image: "AUBH.png",
            date: "July 2024",
            importance: 2
          },
          {
            id: 21,
            title: "Didgeridoo Stand",
            url: "",
            tags: ["art"],
            snippet: `Stand for my homemade didgeridoo (also listed here). Made from an old lamp I found in an electronics waste bin.`,   
            image: "DidgeridooStand.png",
            date: "July 2024"
          },
          {
            id: 21,
            title: "WaveForm",
            url: "",
            tags: ["art", "woodworking"],
            snippet: `Interactive modular synthesizer controlled by hand motion, where manipulating on-screen objects adjusts synth parameters in latent space. Presented at MIT's new music building opening gala. `,   
            image: "waveform.png",
            date: "June 2024"
          },
          {
            id: 21,
            title: "Gilded Queen Necklace",
            url: "",
            tags: ["art"],
            snippet: `Chess Queen gilded with 23K gold. Used vinyl cutter to make patterns. Gift for a graduating friend.`,   
            image: "GoldQueen.png",
            date: "May 2024"
          },
          {
            id: 12,
            title: "FPV Glider",
            url: "",
            tags: ["code", "team", "CAD"],
            snippet: `Long range FPV glider on the ZOHD Drift airframe. Equipped with R9 slim+,
            Speedybee F405 Mini, GPS, VTX and camera. Capable of one hour flight and 1 mile range w/ video.
            Can fly missions and return to home using iNav.`,
            image: "FPVGlider.png",
            date: "July 2024",
            importance: 2
          },
          {
            id: 21,
            title: "TV Stand",
            url: "",
            tags: ["art", "woodworking"],
            snippet: `Needed a TV stand. The inner rods are actually a shower curtain with a dowel inside. Pretty fond of the asymmetry.`,   
            image: "TVStand.png",
            date: "June 2024"
          },
          {
            id: 21,
            title: "Motion Planning with LiDAR Car",
            url: "",
            tags: ["code", "team", "CAD"],
            snippet: `Implemented Monte Carlo Localization and A* path planning on robotic car in MIT Stata Basement.
            Developed and tested in ROS and RViz before deploying to real platform. Final challenge of
              mini city navigation and full speed line following. MIT 16.405 Robotic Science and Systems.`,
            image: "RSS.png",
            date: "July 2024",
            importance: 2
          },
          {
            id: 21,
            title: "Didgeridoo Research",
            url: "",
            tags: ["art"],
            snippet: `PVC pipe didgeridoo painted after research project investigating the effects of geometric changes (twists/diameter) on acoustics.`,   
            image: "Didgeridoo.png",
            date: "Feb 2024"
          },
          {
            id: 21,
            title: "Efficient Blimp V2",
            url: "",
            tags: ["code", "research", "electronics", "CAD"],
            snippet: `Successor to the autonomous shark blimp. Incorporates the PCB also listed here
            for efficiency. Look at my GITHUB for docs!`,
            image: "BEANV2.jpg",
            date: "April 2023"
          },
          {
            id: 21,
            title: "Handmade Flag",
            url: "",
            tags: ["art"],
            snippet: `Puerto Rican flag on one side, Dominican on the other. Made for my friend who is both.`,   
            image: "Flag.png",
            date: "May 2023"
          },
          {
            id: 12,
            title: "Decanter Tray",
            url: "",
            tags: ["art", "CAD"],
            snippet: `Simple decanter tray milled from scrap piece of red oak and laser engraved.
            Present for a graduating friend who had a passion for nice whiskeys.`,
            image: "DecanterTray.jpg",
            date: "May 2023"
          },
          {
            id: 11,
            title: "PCB for Efficient Autonomous Robots",
            url: "",
            tags: ["code", "research", "electronics", "CAD"],
            snippet: `Telemetry and motor control shield for flight computer raspberry pi.
            Self taught Altium and manufactured by JLCPCB. Made during my research work in the MIT LEAN lab.
            Shown is implementation on miniature robotic car equipped with motion capture reflectors.`,
            image: "Shrimpy.jpg",
            date: "May 2023",
            importance: 2
          },
          {
            id: 12,
            title: "Mock Wind Tunnel",
            url: "",
            tags: ["art", "electronics", "CAD"],
            snippet: `Purely aesthetic wind tunnel featuring a model Cessna 172. Powered using a computer fan and 3D printed
            nozzle to direct airflow. Housing made of acrylic paneling slot joined maple plywood fitted with edge-banding.
            Much trouble was had getting the airflow to properly spin the propeller and flap the streamer. The final fan
            nozzle does an adequate job, but is not ideal.`,
            image: "WindTunnel.jpg",
            importance: 2
          },
          {
            id: 12,
            title: "PongBot",
            url: "",
            tags: ["code", "electronics", "CAD", "team"],
            snippet: `A robotic shooter for ping pong balls that could apply different amounts of spin and speed depending on input from app. Made for MakeMIT 2023.`,
            image: "pongBot.png",
            date: "Feb 2023",
          },
          {
            id: 12,
            title: "Efficient Blimp V1",
            url: "",
            tags: ["code", "research", "electronics", "CAD"],
            snippet: `A low power autonomous blimp platform to test motion planning algorithms.
            Attempts 1-1 actuation and computational power use. Check my GITHUB for extensive documentation.`,
            image: "BEANFront.jpg",
            date: "Dec 2022"
          },
          {
            id: 12,
            title: "Autonomous Robot Design and Manufacturing",
            url: "",
            tags: ["code", "electronics", "CAD"],
            snippet: `Three unique robots to complete tasks on MIT’s 2.S007’s autonomous
            robotic competition gameboard. Developed suite of autonomous sequences that could be remotely
            triggered. Sensing, positioning, and accurate driving performed with use of IMU, encoders,
            line-following sensors, and multiple PID controllers. Used 3D printing, sheet metal fabrication and prebuilt parts to assemble each robot.`,
            image: "RobotFleet.jpg",
            date: "May 2023",
            importance: 2
          },
          {
            id: 14,
            title: "maker|XAVIER",
            url: "",
            tags: ["code", "art"],
            snippet: `Made the website you are looking at right now. My first website. Built with HTML, CSS, Nuxt, Vue, and Tailwind.
            I try to update every semester, but never do.`,
            image: "WebsiteFront.png"
          },
          {
            id: 11,
            title: "MagBall",
            url: "MagBall",
            tags: ["team", "electronics", "CAD"],
            snippet: `Final project for MIT 2.00b team Stegosaurus. Air hockey like game with magnetic walls, paddles, and puck.
              I lead hardware design, manufacturing by 3D printing and lasercutting, and final assembly`,
            image: "MagBallPro.jpeg"
          },
          {
            id: 13,
            title: "VIP Lounge",
            url: "",
            tags: ["art", "team", "CAD", "woodworking"],
            snippet: 'Redid an unused room. Painted, made two benches, two laser engraved tables, and a illuminated silhouette of the house',
            image: "VIPBench.jpg"
          },
          {
            id: 16,
            title: "RACER",
            url: "",
            tags: ["code", "team", "electronics"],
            snippet: `MIT class to build computer vision and motion planning/control software for given hardware. Used camera to detect
            and follow a line in final race`,
            image: "RACER.jpg"
          },
          {
            id: 12,
            title: "Unified Engineering Flight Competition",
            url: "",
            tags: ["code", "electronics", "CAD"],
            snippet: `Designed and manufactured plane with wire-cut foam polyhedral wings to maximize an
            objective function of payload weight and turn rate. Considering design constraints, optimized
            objective function using various MATLAB scripts and plot analysis. Determined size of wings and twist, payload mass and placement,
            and stability margin. Placed 4th in competition..`,
            image: "UEFC.jpg",
            date: "May 2022",
            importance: 2
          },
          {
            id: 28,
            title: "Giant Die",
            url: "",
            tags: ["woodworking", "art"],
            snippet: `Centerpiece for party hung from stairwell. Very light and easy to disassemble. Cool pic`,
            image: "DieAbove.png"
          },
          {
            id: 23,
            title: "Coffee Table",
            url: "",
            tags: ["woodworking"],
            snippet: `Made for my room from scrap wood I found in the basement. Used biscuit joiner`,
            image: "CoffeeTable.jpg"
          },
          {
            id: 21,
            title: "Spinning Ball",
            url: "",
            tags: ["woodworking", "electronics", "CAD", "art"],
            snippet: "Gift made for my friend who was a graduating player on the MIT basketball team. Ball spins to show signatures",
            image: "BrendtBall.png"
          },
          {
            id: 24,
            title: "Aerospace Plasma Group",
            url: "",
            tags: ["team", "CAD"],
            snippet: `Built test stand for researching the effects of nanosecond pulsed plasma on combustion.
            Applicable to jet afterburners`,
            image: "APGsetup.jpg"
          },
          {
            id: 27,
            title: "Balcony Additions",
            url: "",
            tags: ["woodworking"],
            snippet: `My favorite place. Surprising difficult to drill into brick to mount hammock and lights. Worth it`,
            image: "Hammock.jpg"
          },
          {
            id: 25,
            title: "Liquid Propulsion",
            url: "",
            tags: ["team", "research"],
            snippet: `Subteam of MIT Rocket Team. Worked on a test stand for LOX and ethanol engine. Machined custom fittings, ran leak 
            and pressure tests`,
            image: "coldflow.jpg"
          },
          {
            id: 15,
            title: "ULA Soil Rover",
            url: "",
            tags: ["team", "electronics", "CAD"],
            snippet: `Parachute deployed rover-hub system to collect soil samples and return to the hub for
            rudimentary analysis`,
            image: "rover2021.png"
          },
          {
            id: 32,
            title: "Music Production",
            url: "",
            tags: ["code", "art"],
            snippet: `Did various sorts of music production for 10 years. Used Logic Pro, Cakewalk, Fl Studio, and MAX to make
            original songs and covers`,
            image: "FlStudio.png"
          },
          {
            id: 26,
            title: "Soft Robotics",
            url: "",
            tags: ["CAD", "team", "research"],
            snippet: `Researched the application of 3D printing to manufacture soft, “finger-like,” multi-material pneumatic actuators
            Optimized dual material printer for highly flexibile TPU`,
            image: "SingleFinger.jpg"
          },
          {
            id: 31,
            title: "Lathe Pawn",
            url: "",
            tags: ["CAD"],
            snippet: `Made a pawn to learn how to use a lathe`,
            image: "Pawn.jpg"
          },
          {
            id: 14,
            title: "ULA Folding Drone",
            url: "",
            tags: ["team", "electronics", "CAD"],
            snippet: `First multi-month long project and introduction to drones. Competed in ULA challenge to make a drone
            with long range, advanced telemetry, and long range.`,
            image: "2019drone.jpg"
          },
          {
            id: 34,
            title: "Lithophane",
            url: "",
            tags: ["CAD", "art"],
            snippet: `One of the coolest applications of 3D printing. Made from photo of my grandparents wedding`,
            image: "Lithophane.jpg"
          },
          {
            id: 28,
            title: "Covid Face Shields",
            url: "",
            tags: ["CAD", "team",],
            snippet: `Mass printed face shields during the beginning of COVID. Optimized printing to 3x efficiency.
            Shields were sanitized and given to medical staff`,
            image: "facesheilds.png"
          },
          {
            id: 22,
            title: "Bottle Lamp",
            url: "",
            tags: ["woodworking", "electronics", "CAD", "art"],
            snippet: `Gift made for a family friend. Bottles rest on gears to
            revolve around center and spin independently`,
            image: "RotateBottle.png"
          },
          {
            id: 33,
            title: "Phone Stand",
            url: "",
            tags: ["CAD"],
            snippet: `This is only here because its the first thing I ever 3D printed. Still on my desk`,
            image: "phonestand.jpg"
          },
      ]
    }
    // {
    //   id: 3,
    //   title: "Trinkets",
    //   snippet: "These are one day projects meant for gifts or learning",
    //   cards: [
        
    //   ]
    // }
  ]