import React, { Component } from "react";
import { Button, Header, Icon, Image, Modal, Form } from 'semantic-ui-react'
import { MessagesList } from "../containers/MessagesList";
import { AddMessage } from "../containers/AddMessage";
import { withCookies, Cookies } from 'react-cookie';

import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      token: cookies.get('tokenInfo') || [0],
      showModal: false,
      password: '',
      name: 'staff'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { cookies } = this.props;
    let url = `http://localhost:2468/adminLogin?pword=${this.state.password}&name=${this.state.name}`;
    fetch(url, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "GET"
    })
    .then(res => {return res.json()})
    .then(res => {
      console.log("Login Attempted.");
      console.log("Res: ", res);

      if (res.success) {
        console.log("Triggered success saving of JWT token to cookie on client with token: ", res.token);
        cookies.set('tokenInfo', res.token);
      }
    })
    this.setState({ password: ''})
  };

  handleCreateButton(evt) {
    evt.preventDefault()
    this.closeModal();
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    const {
      showModal, name, password
    } = this.state;
    
    return (
      <div id="container">
      <Modal onClose={this.closeModal} open={showModal} trigger={<Button onClick={() => {
        fetch('http://localhost:2468/chatCheck', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: "GET",
        })
        .then(res => {return res.json()})
        .then(res => {
          if (res.chat == false) {
            console.log("Too many chatters");
            alert("We're sorry, all BDT staff are busy with other customers at this time. Please email Lorinda@Broadwaydancetheatre.com or call (908) 791-9494 and we'll get right back to you!");
            return
          } else if (res.chat == true) {
             this.setState({ showModal: true })
          }
          console.log("Res: ", res);
        })
        }
      }
      >Live Chat with Staff
    </Button>}>

        <Modal.Header>Chat with {name} from BDT</Modal.Header>
        <Modal.Content image scrolling>
          <section>
            <MessagesList />
            <AddMessage />
          </section>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => this.setState({ showModal: false })} primary>
            Leave Chat <Icon name='chevron right' />
          </Button>
        </Modal.Actions>
      </Modal>
  
  <Form onSubmit={this.handleSubmit}>
    <Form.Group>
      <Form.Input placeholder='BDT Staff Name' name='name' value={name} onChange={this.handleChange} />
      <Form.Input placeholder='Password' name='password' value={password} onChange={this.handleChange} />
      <Form.Button content='Staff Login' />
    </Form.Group>
  </Form>

  <Button onClick={() => {
    let url = `http://localhost:2468/toggleChat?token=${this.state.token}`;
    

    fetch(url, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: "GET",
    })
    .then(res => {return res.json()})
    .then(res => console.log(res));
  }} primary>
            Turn Off Chat <Icon name='chevron right' />
  </Button>
      </div>
    )
  }
}

export default withCookies(App);