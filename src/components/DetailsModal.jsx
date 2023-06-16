import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const DetailsModal = ({ data, isOpen, setIsOpen }) => {
  const { age, city, english_level, grade, notes, skills, studies } = data;
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
            {age || "-"}
          </Grid>
          <Grid item>
            <Typography fontSize={18}>City:</Typography>
            {city || "-"}
          </Grid>
          <Grid item>
            <Typography fontSize={18}>English level:</Typography>
            {english_level || "-"}
          </Grid>
          <Grid item>
            <Typography fontSize={18}>Grade:</Typography>
            {grade || "-"}
          </Grid>
          <Grid item>
            <Typography fontSize={18}>Skills:</Typography>
            {skills || "-"}
          </Grid>
          <Grid item>
            <Typography fontSize={18}>Studies:</Typography>
            {studies || "-"}
          </Grid>
          {notes?.length && (
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
