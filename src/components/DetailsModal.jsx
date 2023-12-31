import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const DetailsModal = ({ data, isOpen, setIsOpen }) => {
  return (
    <Dialog onClose={() => setIsOpen(false)} open={isOpen}>
      <DialogTitle>Candidate details</DialogTitle>
      <DialogContent>
        <Grid
          container
          direction="column"
          minWidth={{ md: 400 }}
          p="16px"
          spacing={2}
        >
          <Grid item>
            <Typography fontSize={18}>Age:</Typography>
            {data?.age || "-"}
          </Grid>
          <Grid item>
            <Typography fontSize={18}>Languages:</Typography>
            {data?.languages || "-"}
          </Grid>
          <Grid item>
            <Typography fontSize={18}>Grade:</Typography>
            {data?.grade || "-"}
          </Grid>
          <Grid item>
            <Typography fontSize={18}>Skills:</Typography>
            {data?.skills || "-"}
          </Grid>
          <Grid item>
            <Typography fontSize={18}>Studies:</Typography>
            {data?.studies || "-"}
          </Grid>
          {data?.notes?.length && (
            <Grid item>
              <Typography fontSize={18}>Notes:</Typography>
              {notes.map((note) => (
                <div key={note}>- {note}</div>
              ))}
            </Grid>
          )}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsModal;
