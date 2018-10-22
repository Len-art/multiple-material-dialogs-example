import React from "react"
import { Dialog, DialogContent, Button } from "@material-ui/core"

export default props => (
  <Dialog open={props.open}>
    <DialogContent>
      Minimalistic dialogs can also be had. As you can see, they can change
      their parent's state as well. Look at this dialog closing iself when you
      click on "close me". Majestic and great!
    </DialogContent>
    <Button onClick={props.toggle}>Close me</Button>
  </Dialog>
)
