import React from 'react';
import '../style.scss';
import pic from '../assets/pic1.jpg';
import Rights from '../Rights';



function Home() {
    return (
        <>
        <div className='home-container'>

        
           <div className='left-container'>
                <div className='photo'>
                    <img src={pic} />
                <div className='info'>
                <p>CHINTAN MILAN MAKWANA</p>
                <p>Gender: <br />male</p>
                <p>BOD: <br />20-11-1999</p>
                <p>Email: <br />chintanmakwana2011@gmail.com</p>
                <p>Address: <br />301, B-10, sec-10, Mira Road(e),<br />Thane-401107</p>
                <p>Language: <br />English, Hindi, Gujrati</p>
                <p>Hobbies: <br />Reading</p>
                </div>
                <br />
                <div className="fa-div">
              <a
                href="https://www.linkedin.com/in/chintan-makwana-5560b712b/"
                class="fa fa-linkedin"
              ></a>
              <a
                href="https://twitter.com/chintanmak20"
                class="fa fa-twitter"
              ></a>
              <a
                href="https://www.instagram.com/Chintan.mak"
                class="fa fa-instagram"
              ></a>
              <a href="https://github.com/chintanmak"
              class="fa fa-github"
              ></a>
              <a
                // href="https://www.facebook.com/hackxsecure"
                class="fa fa-facebook"
              ></a>
            </div>
                </div>
           </div>
           <div className='right-container'>
                <div className='Summary'>
                    <h1>Summary</h1>
                    <p>Hello i am chintan makwana </p>
                    <br />

                    <h1>Experiences</h1>
                    <div className='box'>

                    <div className='e-box'>
                    <h2> HACK-X Security</h2>
                    <p>Software Developer intern</p>
                    <p>nov-2021 - current</p>
                    </div>
                    <div className='e-box'>
                    <h2> Trinity Gaming India</h2>
                    <p>Social Media Marketing</p>
                    <p>Dec-2019 - Apr-2020</p>
                    </div>

                    <div className='e-box'>
                    <h2> Eltech Engineers pvt ltd</h2>
                    <p>Website Developer</p>
                    <p>Feb-2019 - Jun-2019</p>
                    </div>
                    <div className='e-box'>
                    <h2> Global Web Desk</h2>
                    <p>Website Developer and Blogger</p>
                    <p>Jul-2017 - Oct-2017</p>
                    </div>
                    </div>

                    <h1>Education</h1>
                    <div className='box'>

                    <div className='e-box'>
                    <h2>MSc Computer Science</h2>
                    <p>MIT World Peace University(Pune)</p>
                    <p>2020 - 2022</p>
                    </div>
                    <div className='e-box'>
                    <h2>BSc Information Technology</h2>
                    <p>Nagindas Khandwala College(Mumbai)</p>
                    <p>2017 -2020</p>
                    </div>
                    </div>

                    <h1>Projects</h1>
                    <div className='pbox'>

                    <div className='p-box'>
                    <h2>Best Practices in Education Protal</h2>
                    <p><b>Key Skill: </b> HTML, CSS, Bootstrap, .net, MYSQL </p>
                    </div>
                    <div className='p-box'>
                    <h2>Career Counselling</h2>
                    <p><b>Key Skill: </b> HTML, CSS, Bootstrap, Advance Java. MYSQL</p>
                    </div>
                    <div className='p-box'>
                    <h2>Bitcoin Prize Prediction</h2>
                    <p><b>Key Skill: </b> R-language </p>
                    </div>
                    </div>

                </div>
           </div>
           </div>
<Rights />
        </>
        );
}

export default Home;
