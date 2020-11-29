import React from 'react'
import foto from './Pictures/IMG_9827.JPG'

function About() {
    return (
        <div className="aboutContainer">
            <h1 className="aboutTitle">Who am i?</h1>
            <div>
                <h3 className="aboutBoxTitle"> Let me introduce myself...</h3>
                <div className="aboutMeBox" >
                    <img className="picture" src={foto} alt="Picture of me"/>
                    <div className="aboutMeTextBox">
                        <h4>My name is Alexander de Jongh</h4>
                        <p className="aboutMeText">
                            I am born in 1992, in the city The Hague!  <br/>
                            Grown up in the place called Scheveningen untill my parents divorced. <br/>
                            Then i moved to a small place called <a href="https://www.h-i-ambacht.nl/">Hendrik Ido Ambacht! </a><br/>
                            There i lived for 12 years, did the Chef's training and became a chef! <br/>
                            In 2020 after the measures taken by covid-19 i unfortunately lost my job as a chef <br/>
                            I was thinking to change career, so i starded learning about Web-development.<br/>
                        </p>
                        <h4>Why Web-development?</h4>
                        <p className="aboutMeText">
                            I love creating stuff, i've produced many kinds of electric music!<br/>
                            Creating a track is almost the same as creating a web page!. <br/>
                            I've used Fruityloops for producing my music! Here is where i put my music:<br/>
                            
                            So creating stuff is one thing i realy like! <br/>
                            The other thing was that i lost my love for being a chef!<br/>
                            So by losing my job and have time because of the lockdown i started my Web-development career!<br/>
                        </p>
                        <h4>Why this website?</h4>
                        <p className="aboutMeText">
                            This is my second school project on React!<br/>
                            I realy love React, it's very logical! <br/>
                            I hope you enjoy this website! <br/>
                            If you like this page or you want a new feature, you can go to my LinkedIn <br/>
                            <a href="https://www.linkedin.com/in/sander-j-84480b165/">My LinkedIn</a><br/>
                            Hope to speak with you about it!<br/>
                        </p>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default About
