import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import { Link } from 'react-router-dom';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://media.licdn.com/dms/image/C5603AQGEnvevPR8YpQ/profile-displayphoto-shrink_200_200/0?e=1555545600&v=beta&t=QpIWnxk_fRZzSSdvPwU8QFesf9iXPGiaSW51STE9Ezw"
                                alt="avatar"
                                style={{ height: '200px' }}
                                className="avatar-image"
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Gabriel Leme</h2>
                        <h4 style={{ color: 'grey' }}>Desenvolvedor</h4>
                        <hr style={{ borderTop: '3px solid #c3073f', width: '50%' }} />
                        <p>
                            Olá, tudo bem?
                            Meu nome é Gabriel Leme e trabalho com desenvolvimento há 3 anos. Meu primeiro contato com programação foi com Java realizando um pequeno projeto de um sistema PDV.
                            Hoje atuo como desenvolvedor full stack e busco sempre aprender novas tecnologias.
                            Dê uma conferida nos meus projetos! <Link style={{ textDecoration: 'none', color: '#6f2232' }} to="/projects">Ir para projetos.</Link>
                        </p>
                        <hr style={{ borderTop: '3px solid #c3073f', width: '50%' }} />
                        <h5>Email</h5>
                        <p><i class="fa fa-envelope" aria-hidden="true" /> gabriel.chimenezleme@gmail.com</p>
                        <p><i class="fa fa-envelope" aria-hidden="true" /> gabriel.leme@bandtec.com.br</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Educação</h2>

                        <Education
                            startYear={2018}
                            endYear={2020}
                            schoolName={`Técnologo - Faculdade Bandtec`}
                            schoolDescription={`    
                                Ingressou no ensino superior através do projeto geração futura. Uma simbiose entre empresas & acadêmia.
                            `}
                            knowledge={`
                                SCRUM, Itil, Cobit, Engenharia de Software, Sistemas Operacionais, Estrutura de Dados e Armazenamento, Orientação a Objetos, Paradigma Funcional, Programação Web, 
                                Design de Interfaces, Socioemocional, Banco de dados, Analise de sistemas.
                            `}
                        />
                        <hr style={{ borderTop: '3px solid #c3073f' }} />
                        <h2>Experiência</h2>
                        <Experience
                            startYear={`Jul 2018`}
                            endYear={`Até o momento.`}
                            jobName={`Full Stack Developer Intern at Digisystem`}
                            jobDescription={`
                                Desenvolvimento de serviços REST utilizando NodeJS + Express, MongoDB. Barramento utilizando IBM Integration BUS, criação de APIs utilizando ApiConnect.
                                Desenvolvimento de aplicações web utilizando Angular5+, Javascript, Typescript.
                            `}
                        />
                        <hr style={{ borderTop: '3px solid #c3073f' }} />
                        <h2>Technical Skills</h2>
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
                        <Skills
                            skill={`REST`}
                            progress={59}
                        />
                        <Skills
                            skill={`ASP.NET`}
                            progress={43}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;