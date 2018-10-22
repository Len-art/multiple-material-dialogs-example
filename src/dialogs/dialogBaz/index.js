import React from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  TextField
} from "@material-ui/core"

export default class extends React.Component {
  state = { input: "" }

  handleInputChange = e => this.setState({ input: e.target.value })

  render() {
    return (
      <Dialog open={this.props.open}>
        <DialogTitle>This is dialogBaz</DialogTitle>
        <DialogContent>
          Dialogs can even have their own state, event handlers and DOM
          elements!.
          <div>
            <TextField
              label="Enter the texts"
              value={this.state.input}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            I will repeat the texts here to prove to you i have state:{" "}
            {this.state.input}
          </div>
        </DialogContent>
        <Button onClick={this.props.toggle}>Close me</Button>
      </Dialog>
    )
  }
}
