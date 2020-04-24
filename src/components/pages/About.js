import React from 'react';

function About (){
    return (
        <React.Fragment>
        <h1 className="page-title">About</h1>
        <div className="content-page">
            <div className="grid-2">
                <p>During the Covid-19 crisis, this app was developed by Meg Phillips of MSP-Media, a parent of two students at CHES, as open source software for use by teachers, and parents of Dare County, North Carolina to help keep track of homeschool assignments. In this case, "Free" is correct in both contexts. </p>
                <p>As this is a gift, prepared in her spare time just the same as if she had baked brownies for a PTA Bake Sale, it would be really rude to complain about this app. Constructive suggestions can be submimtted to Meg via the contact form at <a href="https://msp-media.org/contact/">msp-media.org</a></p>  
                <div style={{display: 'flex'}}>
                    <div>
                        <h2>Components, Packages, Dependancies</h2>
                        <p>This application is a React Single Page Application. It was developed using Node.js and NPM package dependancies. It is the availability of these open source technologies that enabled the development of this application in less than 8 hours of development time. If you are interested in learning more about open source software or want to support the people who maintain these open source projects, take a look at the links below.</p>
                    </div>
                    <div>
                        <h2>WordPress and the JAMStack</h2>
                        <p>This application is a React Single Page Application. It was developed using Node.js and NPM package dependancies. It is the availability of these open source technologies that enabled the development of this application in less than 8 hours of development time. If you are interested in learning more about open source software or want to support the people who maintain these open source projects, take a look at the links below.</p>
                    </div>
                </div>
            </div>                
        </div>
        </React.Fragment>
    )
}

export default About
