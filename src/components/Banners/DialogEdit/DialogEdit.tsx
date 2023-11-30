import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {  BannersInterFace, EditBannersInterFace } from "../../../utils/interfaces";
import { useFetchBanner } from "../../../utils/useFetchBanners";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {  SubmitHandler, useForm } from 'react-hook-form';

export default function DialogEdit(props: EditBannersInterFace) {
  const [categoryName] = useState<string>(props.category);
  const [urlValue, setUrlValue] = useState('')

  const { allCategories } = useFetchBanner('/api/banners/allCategories');

  const { allBanners, setAllBanners } = useFetchBanner('/api/banners/allBanners');

  const {
    register, 
    handleSubmit,
    formState: {errors},
  } = useForm<EditBannersInterFace>();

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleClickPrevent = (event: React.MouseEvent) => {
    event.preventDefault();
  }

  const onSubmit: SubmitHandler<EditBannersInterFace> = async(data) => {
    alert(data)
      try{
        await axios.put(`${import.meta.env.VITE_BASE_URL_API_RENDER}/api/banners/banner/${props._id}`, data);
        toast.success("Banner update successfully!")
        console.log(data)
      }
      catch(err) {
        toast.error("Failed to update the banner.");
        handleClose();
        throw err;
      }
  } 

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            id="id"
            label="id"
            placeholder={props._id}
            type="text"
            fullWidth
            {...register('_id')} 
          />
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="Url"
            placeholder={props.url}
            type="text"
            fullWidth
            {...register('url')} 
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="title"
            placeholder={props.title}
            type="text"
            fullWidth
            {...register('title')} 
          />
          <TextField
            autoFocus
            margin="dense"
            id="text"
            label="text"
            placeholder={props.text}
            type="text"
            fullWidth
            {...register('text')} 
          />
          <TextField
            autoFocus
            margin="dense"
            id="image_url"
            label="image url"
            placeholder={props.image.url}
            type="text"
            fullWidth
            {...register('image.url')} 
          />
          <TextField
            autoFocus
            margin="dense"
            id="image_alt"
            label="image alt"
            placeholder={props.image.alt}
            type="text"
            fullWidth
            {...register('image.alt')} 
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="category"
            placeholder={props.category}
            type="text"
            fullWidth
            {...register('category')} 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <input type="submit" color="primary">
              Submit
            </input>
        </DialogActions>
        <ToastContainer />
      </Dialog>
      </form>

  );
}
