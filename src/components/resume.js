import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Gabriel Leme</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #033fb2', width: '50%' }} />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                        <hr style={{ borderTop: '3px solid #033fb2', width: '50%' }} />
                        <h5>Email</h5>
                        <p>gabriel.chimenezleme@gmail.com</p>
                        <p>gabriel.leme@bandtec.com.br</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2018}
                            endYear={2020}
                            schoolName={`Faculdade Bandtec`}
                            schoolDescription={`
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            `}
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2018}
                            endYear={`Until now`}
                            jobName={`Full Stack Developer Intern at Digisystem`}
                            jobDescription={`
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            `}
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill={`Angular CLI`}
                            progress={60}
                        />
                        <Skills
                            skill={`Javascript`}
                            progress={80}
                        />
                        <Skills
                            skill={`React`}
                            progress={25}
                        />
                        <Skills
                            skill={`Java`}
                            progress={68}
                        />
                        <Skills
                            skill={`NodeJS`}
                            progress={45}
                        />
                        <Skills
                            skill={`Express`}
                            progress={57}
                        />
                        <Skills
                            skill={`MongoDB`}
                            progress={80}
                        />
                        <Skills
                            skill={`SQL`}
                            progress={67}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;