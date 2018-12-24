import React, { Component } from "react";
import Modal from 'react-awesome-modal';
import { Sidebar } from "../containers/Sidebar";
import { MessagesList } from "../containers/MessagesList";
import { AddMessage } from "../containers/AddMessage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <section>
        <h1> REACT-Modal Examples</h1>
        <input type="button" value="Open" onClick={() => this.openModal()} />
        <Modal
          width= "100%"
          height= "100%"
          visible={this.state.visible}
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div>
          <div id="container">
          <Sidebar />
                <section id="main">
                  <MessagesList />
                  <AddMessage />
                  <a href="javascript:void(0);" onClick={() => this.closeModal()}>End Conversation</a>
                </section>
            </div>
          </div>
        </Modal>
      </section>
    )
  }
}

export default App;