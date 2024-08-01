import './App.css'
import myImage from '../public/house.svg'
import mebel from '../public/mebel.svg'
import three from '../public/sec_three.svg'
import play from '../public/play.svg'
import four from '../public/four.svg'
import firste from '../public/first.svg'
import sec from '../public/seccond.svg'
import therd from '../public/therd.svg'

function App() {

  return (
    <>
      <div className="container">
        <header className="header">
          <div className="left">
            <img src={myImage} alt="" />
            <h1>Locus</h1>
          </div>

          <ul className="midle">
            <li>
              <a>Home</a>
              <div className="line"></div>
            </li>
            <li>
              <a>Contact</a>
              <div className="line_sec"></div>
            </li>
            <li>
              <a>Location</a>
              <div className="line_therd"></div>
            </li>
            <li>
              <a>About Us</a>
              <div className="line_fourth"></div>
            </li>
          </ul>

          <div className="right">
            <button>Sing Up</button>
          </div>
        </header>

        <div className="sec_one">
          <div className="left">
            <h1>Get the inspiration <br />
              of interior design <br />
              here</h1>
            <p>
              architecture not only about engineering, it even <br />
              lands to art and aesthetics. With us, you will get <br />
              a residentical design with an extraordinary touch <br />
              of art.
            </p>
            <button>Let's go</button>
          </div>
          <div className="right">
            <img src={mebel} alt="" />
          </div>
        </div>



        <div className="sec_three">
          <h1>How it works</h1>
          <p>Spice up your space even simpler <br />
            than you think</p>
          <div className="box">

            <div className="play">
              <img src={play} alt="Проиграть" />
            </div>


            <div className="left">
              <img src={three} alt="" />
            </div>
            <div className="right">
              <p>We provide design and build <br />
                for commercial building, <br />
                interior and furniture to improve <br />
                the better life. </p>
              <h6>S E E  V I D E O</h6>
            </div>
          </div>
        </div>

        <div className="sec_four">


          <div className="left">
            <img src={four} alt="" />
          </div>


          <div className="right">
            <h1>Our mission is to <br />
              deliver aesthetic visual <br />
              for your home</h1>
            <p>
              By applying bacis psychology principles, <br />
              we are going to explain how perception <br />
              works and how we can use this understanding <br />
              to maximise the space that we occupy in <br />
              our homes.

            </p>
          </div>

        </div>

        <div className="sec_five">
          <h1>Our project </h1>
          <p>Introducing our first official project</p>
          
          <div className="boxes">
          <div className="box">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          </div>

          <div className="big_box">
            <div className="left">
              <h1>Project Livingroom</h1>
              <p>A simple guide to create the perfect livingro- <br />
                om for . Night Watc works beautifully in a wi- <br />
                de gamut of arrangements.</p>
              <img src={firste} alt="" />
            </div>
            <div className="midle">
              <img src={sec} alt="" />
              <h1>Project workspace</h1>
              <p>A simple guide to create the perfect livingro- <br />
                om for . Night Watc works beautifully in a wi- <br />
                de gamut of arrangements.</p>
            </div>
            <div className="right">
              <h1>Library</h1>
              <p>A simple guide to create the perfect livingro- <br />
                om for . Night Watc works beautifully in a wi- <br />
                de gamut of arrangements.</p>
              <img src={therd} alt="" />
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default App