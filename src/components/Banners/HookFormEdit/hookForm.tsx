import { Box, TextField , Button} from "@mui/material";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
 import { useState } from "react";
 import { CategoryInterface } from "../../../utils/interfaces";
import { useFetchBanners } from "../../../utils/useFetchBanners";
import { SelectChangeEvent } from "@mui/material";
import { MenuItem, Select,  FormControl, InputLabel } from "@mui/material";
import { useNavigate } from "react-router";


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
};

export default function HookFormEdit({
  defaultValues,
}: {
  defaultValues: FormValues;
}) {

  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] =
  useState<CategoryInterface | null>(null);

  const { allCategories } = useFetchBanners("/banners/allCategories");


  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BASE_URL}/banners/banner/${defaultValues._id}`,
        data
      );
      console.log(data);
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  };

  const handleCategoryChange = (event: SelectChangeEvent<unknown>) => {
    const selectedCategoryName = event.target.value as string;
    const selectedCategoryObject =
      allCategories.find(
        (category) => category.name === selectedCategoryName
      ) || null;
    setSelectedCategory(selectedCategoryObject);
  };


  return (
    <Box sx={{ width: 800 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("_id")}
          label="id"
          fullWidth
          type="text"
          margin="dense"
          placeholder={defaultValues._id}
          defaultValue={defaultValues._id}
          helperText = {defaultValues._id}
        />
        <TextField
          {...register("url")}
          label="url"
          fullWidth
          type="text"
          margin="dense"
          placeholder={defaultValues.url}
          defaultValue={defaultValues.url}
          helperText={defaultValues.url}
        />
        <FormControl sx={{  width: '100%' }}>
          <InputLabel id="demo-simple-select-label" style={{ width: '100%'}}>
            category: {defaultValues.category}
          </InputLabel> 
          <Select
            {...register("category", { required: true })}
            label="Category"
            onChange={handleCategoryChange}
            value={selectedCategory ? selectedCategory.name : ""}
          >
            {allCategories.map((category) => (
              <MenuItem key={category._id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          {...register("image.url")}
          label="image.url"
          fullWidth
          type="text"
          margin="dense"
          defaultValue={defaultValues.image.url}
          placeholder={defaultValues.image.url}
          helperText={defaultValues.image.url}


        />
        <TextField
          {...register("image.alt")}
          label="image.alt"
          fullWidth
          type="text"
          margin="dense"
          defaultValue={defaultValues.image.alt}
          placeholder={defaultValues.image.alt}
          helperText={defaultValues.image.alt}


        />
        <TextField
          {...register("title")}
          label="title"
          fullWidth
          type="text"
          margin="dense"
          defaultValue={defaultValues.title}
          placeholder={defaultValues.title}
          helperText={defaultValues.title}


        />
        <TextField
          {...register("text")}
          label="text"
          fullWidth
          type="text"
          margin="dense"
          defaultValue={defaultValues.text}
          placeholder={defaultValues.text}
          helperText={defaultValues.text}


        />
        <TextField
          {...register("createdAt")}
          label="createdAt"
          fullWidth
          type="text"
          margin="dense"
          defaultValue={
            defaultValues.createdAt
              ? defaultValues.createdAt.toLocaleString()
              : ""
          }
        />
        <TextField
          {...register("author")}
          label="author"
          fullWidth
          type="text"
          margin="dense"
          defaultValue={defaultValues.author}
          placeholder={defaultValues.author}
          helperText={defaultValues.author}
        />


      <Button type="submit" sx={{backgroundColor: "aqua" ,width: '100%'}}>
        Submit
      </Button>
      </form>
    </Box>
  );
}
