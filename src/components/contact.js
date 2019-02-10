import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { List, ListItem, ListItemContent } from 'react-mdl';
class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Entre em contato</h2>
                        <hr />
                        <div className="contact-list">
                            <List style={{textAlign: 'center'}}>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '18px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (55) 11-9-5315-7683
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '18px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        gabriel.chimenezleme@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '18px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        gabriel.leme@bandtec.com.br
                                    </ListItemContent>
                                </ListItem>


                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;