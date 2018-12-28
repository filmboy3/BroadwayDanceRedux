import React, { Component } from "react";
import { Button, Header, Icon, Image, Modal, Form, Confirm } from 'semantic-ui-react'
import { MessagesList } from "../containers/MessagesList";
import { AddMessage } from "../containers/AddMessage";
import { withCookies, Cookies } from 'react-cookie';

import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    const { cookies } = props;

    // Forcing previous session cookies on page reload
    cookies.set('tokenInfo', []);


    this.state = {
      token: [],
      showModal: false,
      password: '',
      errorMessage: 'Something went wrong...',
      name: '',
      open: false
    }
    this.show = this.show.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.adminLogout = this.adminLogout.bind(this);
  }

  show = (message) => this.setState({ 
    errorMessage: message,
    open: true 
  });
  handleConfirm = () => this.setState({ open: false });
  
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
        this.show(`Welcome back, ${this.state.name}!`);
        console.log("Triggered success saving of JWT token to cookie on client with token: ", res.token);
        cookies.set('tokenInfo', res.token);
        this.setState({
          password: '',
          token: res.token
        })
      } else {
        cookies.set('tokenInfo', []);
        this.setState({
          password: '',
          token: []
        });
        this.show("Incorrect Admin Login Password -- Please try again!");
      }
    })
  };

  adminLogout(evt) {
    evt.preventDefault()
    const { cookies } = this.props;
    cookies.set('tokenInfo', []);
    this.show("Logout successful!");
    this.setState({
      token: [],
      name: ''
    });
    console.log("Erased JWT-token in Cookies/State");
  }


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
            this.show(`We're sorry, all BDT staff are busy with other customers at this time. Please email Lorinda@Broadwaydancetheatre.com or call (908) 791-9494 and we'll get right back to you!`);
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
    .then(res => {
        if (res.success === false) {
          this.show("For security purposes, please login again.");
        } else {
          if (res === true) {
            this.show(`You are now available in Chat.`);
          } else {
            this.show(`You are now unavailable for Chat.`);
          }
        }
        console.log(res)
      });
  }} primary>
            Toggle Chat <Icon name='chevron right' />
  </Button>
  <Confirm
          open={this.state.open}
          content={this.state.errorMessage}
          onCancel={this.handleConfirm}
          onConfirm={this.handleConfirm}
          confirmButton="Back to BDT"
    />
  <Button onClick={this.adminLogout}>Logout Admin</Button>
      </div>
    )
  }
}

export default withCookies(App);