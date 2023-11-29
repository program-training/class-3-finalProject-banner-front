import { useState } from "react";
import {
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  styled,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useFetchBanners } from "../../../utils/useFetchBanners";
import { SelectChangeEvent } from "@mui/material";
import { CategoryInterface } from "../../../utils/interfaces";
import { SubmitHandler } from "react-hook-form";

type FormData = {
  url: string;
  title: string;
  text: string;
  category: string;
};

const StyledForm = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

const AddNewBanner = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [urlValue, setUrlValue] = useState("");
  const [TitleValue, setTitleValue] = useState("");
  const [TextValue, setTextValue] = useState("");
  const { allCategories, setAllCategories } = useFetchBanners(
    "/api/banners/allCategories"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedImage(event.target.files ? event.target.files[0] : null);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form data:", data);
  };

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const selectedCategory = event.target.value as CategoryInterface[];
    setAllCategories(selectedCategory);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledForm>
        <FormControl sx={{ "margin-bottom": "16px" }}>
          <TextField
            {...register("url", { required: true })}
            error={!!errors.url}
            helperText={errors.url?.message}
            value={urlValue}
            label="URL"
          />
        </FormControl>

        <FormControl sx={{ "margin-bottom": "16px" }}>
          <TextField
            {...register("title")}
            label="Title"
            value={TitleValue}
            onChange={(event) => setTitleValue(event.target.value)}
          />
        </FormControl>

        <FormControl sx={{ "margin-bottom": "16px" }}>
          <TextField
            {...register("text")}
            label="Text"
            value={TextValue}
            onChange={(event) => setTitleValue(event.target.value)}
          />
        </FormControl>

        <FormControl sx={{ "margin-bottom": "16px" }}>
          <InputLabel>Image</InputLabel>
          <input name="file" type="file" onChange={handleImageChange} />
        </FormControl>

        <FormControl sx={{ "margin-bottom": "16px" }}>
          <InputLabel>Category</InputLabel>
          <Select
            {...register("category", { required: true })}
            label="Category"
            onChange={(event) => handleChange(event)}
            value={allCategories.length > 0 ? allCategories[0]._id : ""}
          >
            {allCategories.map((category) => (
              <MenuItem key={category._id} value={category._id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </StyledForm>
    </form>
  );
};

export default AddNewBanner;
