import React, { Component } from "react"
import { Button } from "@material-ui/core"

import allDialogs from "./dialogs"

const AllDialogButtons = props => (
  <>
    {Object.keys(allDialogs).map(dialogName => (
      <Button
        key={dialogName}
        onClick={() => props.toggleDialog({ selectedDialog: dialogName })}
      >
        {dialogName}
      </Button>
    ))}
  </>
)

class App extends Component {
  state = { selectedDialog: "dialogBar", isOpen: false }

  toggleDialog = ({ selectedDialog }) => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    if (selectedDialog) this.changeSelectedDialog(selectedDialog)
  }

  changeSelectedDialog = selectedDialog => this.setState({ selectedDialog })

  render() {
    const SelectedDialog = allDialogs[this.state.selectedDialog]
    return (
      <div className="App">
        <AllDialogButtons toggleDialog={this.toggleDialog} />
        <SelectedDialog open={this.state.isOpen} toggle={this.toggleDialog} />
      </div>
    )
  }
}

export default App
