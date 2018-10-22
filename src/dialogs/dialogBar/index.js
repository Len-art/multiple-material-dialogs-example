import React from "react"
import { Dialog, DialogTitle, DialogContent, Button } from "@material-ui/core"

export default props => (
  <Dialog open={props.open}>
    <DialogTitle>This is dialogBar</DialogTitle>
    <DialogContent>
      Many contents can be had here. Props as event handlers can be added as
      well.
    </DialogContent>
    <Button onClick={props.toggle}>Close me</Button>
  </Dialog>
)
