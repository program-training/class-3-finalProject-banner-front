import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {  EditBannersInterFace } from "../../../utils/interfaces";
import { useFetchBanners } from "../../../utils/useFetchBanners";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DialogEdit(props: EditBannersInterFace) {
  const [categoryName] = useState<string>(props.category);
  const [urlValue, setUrlValue] = useState('')

  const { allCategories } = useFetchBanners('/api/banners/allCategories');

  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setUrlValue(event.target.value as string);
  };

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleClickPrevent = (event: React.MouseEvent) => {
    event.preventDefault();
  }

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title" onClick={(event) => {handleClickPrevent(event)}}>
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="Url"
            defaultValue={urlValue}
            placeholder={props.url}
            type="text"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="title"
            placeholder={props.title}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="text"
            label="text"
            placeholder={props.text}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="image_url"
            label="image url"
            placeholder={props.image.url}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="alt"
            label="image alt"
            placeholder={props.image.alt}
            type="text"
            fullWidth
          />
          {allCategories.map((category) => (
            <div>
              <FormControl sx={{margin: 1, minWidth: 120}}>
                <InputLabel id="demo-controlled-open-select-label" >Age</InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={props.open}
                  onClose={handleClose}
                  onOpen={handleClickOpen}
                  value={props.category}
               
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={category.name}>{category.name}</MenuItem>
                </Select>
              </FormControl>
            </div>
          ))}
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="category"
            placeholder={categoryName}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
