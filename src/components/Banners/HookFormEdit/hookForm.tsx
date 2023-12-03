import { Box, TextField , Button} from "@mui/material";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

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
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BASE_URL}/api/banners/banner/${defaultValues._id}`,
        data
      );
      console.log(data);
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
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
        <TextField
          {...register("category")}
          label="category"
          fullWidth
          type="text"
          margin="dense"
          defaultValue={defaultValues.category}
          placeholder={defaultValues.category}
          helperText={defaultValues.category}

        />
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
