import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://media.licdn.com/dms/image/C5603AQGEnvevPR8YpQ/profile-displayphoto-shrink_200_200/0?e=1555545600&v=beta&t=QpIWnxk_fRZzSSdvPwU8QFesf9iXPGiaSW51STE9Ezw"
                            alt="avatar"
                            className="avatar-image"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr/>
                            <p>Angular CLI | Javascript | React | Java | NodeJS | Express | MongoDB | SQL</p>
                            <div className="social-links">

                                <a href="https://www.linkedin.com/in/gabriel-leme-71325b150/" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                <a href="https://github.com/GabLeme" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;