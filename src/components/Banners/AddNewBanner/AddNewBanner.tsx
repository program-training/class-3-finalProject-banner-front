import { useState } from "react";
import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
  styled,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useFetchBanners } from "../../../utils/useFetchBanners";
import { SelectChangeEvent } from "@mui/material";
import { SubmitHandler } from "react-hook-form";
import { CategoryInterface } from "../../../utils/interfaces";
import axios from "axios";
import { toast } from "react-toastify";
import { ErrorMessage } from "@hookform/error-message";
type FormData = {
  url: string;
  title: string;
  text: string;
  category: string;
  image: File | null;
};

const StyledForm = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

const AddNewBanner = () => {
  const [formData, setFormData] = useState({
    url: "",
    title: "",
    text: "",
  });

  const [selectedCategory, setSelectedCategory] =
    useState<CategoryInterface | null>(null);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const { allCategories } = useFetchBanners("/banners/allCategories");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedImage(event.target.files ? event.target.files[0] : null);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Form data:", data);
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/banners/banner`, data);
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Error submitting the form. Please try again.");
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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledForm>
        <FormControl sx={{ marginBottom: "16px" }}>
          <TextField
            {...register("url", { required: true })}
            error={!!errors.url}
            helperText={errors.url?.message}
            //  value={formData.url}
            onChange={(event) => handleInputChange("url", event.target.value)}
            label="URL"
          />
        </FormControl>
        <ErrorMessage errors={errors} name="url" />

        <FormControl sx={{ marginBottom: "16px" }}>
          <TextField
            {...register("title")}
            label="Title"
            //  value={formData.title}
            onChange={(event) => handleInputChange("title", event.target.value)}
          />
        </FormControl>
        <ErrorMessage errors={errors} name="title" />

        <FormControl sx={{ marginBottom: "16px" }}>
          <TextField
            {...register("text")}
            label="Text"
            // value={formData.text}
            onChange={(event) => handleInputChange("text", event.target.value)}
          />
        </FormControl>
        <ErrorMessage errors={errors} name="text" />

        <FormControl sx={{ marginBottom: "16px" }}>
          <input name="file" type="file" onChange={handleImageChange} />
          {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected Image"
              style={{ width: "500px", height: "300px", marginTop: "10px" }}
            />
          )}
        </FormControl>
        <ErrorMessage errors={errors} name="image" />

        <FormControl sx={{ marginBottom: "16px" }}>
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
        <ErrorMessage errors={errors} name="Category" />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </StyledForm>
    </form>
  );
};

export default AddNewBanner;
