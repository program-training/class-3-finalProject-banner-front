
import { Box, TextField } from "@mui/material";
import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { BannersInterFace } from "../../../utils/interfaces";

type FormValues = {
    _id: string;
    url: string;
    category: string;
    image: {
      url: string;
      alt: string;
    };
    title: string;
    text: string;
    createdAt: Date;
    author: string;
}

export default function Edit(props: BannersInterFace) {
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data) 

  return (
    <Box sx={{width: 800}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register("_id")} label= 'id' fullWidth type="text"  margin="dense" defaultValue={props._id}/>
        <TextField {...register("author")} label= 'author' fullWidth type="text"  margin="dense" defaultValue={props._id}/>
        <TextField {...register("category")} label= 'category' fullWidth type="text"  margin="dense" defaultValue={props._id}/>
        <TextField {...register("createdAt")} label= 'createdAt' fullWidth type="text"  margin="dense" defaultValue={props._id}/>
        <TextField {...register("image.url")} label= 'image.url' fullWidth type="text"  margin="dense" defaultValue={props._id}/>
        <TextField {...register("image.alt")} label= 'image.alt' fullWidth type="text"  margin="dense" defaultValue={props._id}/>
        <TextField {...register("text")} label= 'text' fullWidth type="text"  margin="dense" defaultValue={props._id}/>
        <TextField {...register("title")} label= 'title' fullWidth type="text"  margin="dense" defaultValue={props._id}/>
        <TextField {...register("url")} label= 'url' fullWidth type="text"  margin="dense" defaultValue={props._id}/>

        <input type="submit" className="inputSubMit"/>
      </form>
    </Box>
  )
}

