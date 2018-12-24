import React, { Component } from "react";
import _ from 'lodash'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import { Sidebar } from "../containers/Sidebar";
import { MessagesList } from "../containers/MessagesList";
import { AddMessage } from "../containers/AddMessage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
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
      showModal
    } = this.state;

    let name = "Jonathan";
    return (
    
      <Modal onClose={this.closeModal} open={showModal} trigger={<Button onClick={() => this.setState({ showModal: true })}>Chat with Us</Button>}>
        <Modal.Header>Chat with {name} from BDT</Modal.Header>
        <Modal.Content image scrolling>
          <section>
            <MessagesList />
            <AddMessage />
          </section>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => this.setState({ showModal: false })} primary>
            Proceed <Icon name='chevron right' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default App;