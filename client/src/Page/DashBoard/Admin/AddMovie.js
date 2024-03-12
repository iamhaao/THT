import React, { useEffect, useState } from "react";
import SideBar from "../Index";
import Uploder from "../../../components/Uploader";
import { MdDelete } from "react-icons/md";
import { ImUpload } from "react-icons/im";
import { Input, Select } from "../../../shared/input";
import { FaEdit } from "react-icons/fa";
import CastsModal from "../../../shared/modal/CastsModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { movieValidation } from "../../../shared/validation/movieValidation";
import { InlineError } from "../../../shared/Notification/Error";
import { ImagePreview } from "../../../components/ImagePreview";
import Toast from "../../../shared/Toast";
function AddMovie() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cast, setCast] = useState(null);
  const [imageWithoutTitle, setImageWithoutTitle] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //getAllCategory
  const { categories } = useSelector((state) => state.categories);
  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.createMovie
  );
  const { casts } = useSelector((state) => state.casts);

  //validate movie
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(movieValidation),
  });
  //onsubmit
  const onSubmit = (data) => {
    // dispatch(
    //   createMovieActin({
    //     ...data,
    //     image: imageWithoutTitle,
    //     titleImage: imageTitle,
    //     video: videoUrl,
    //     casts,
    //   })
    // );
  };
  //delete cast handler
  const deleteCastHandler = (id) => {
    // dispatch(removeCastAction(id));
    Toast("Cast deleted successfully", "SUCCESS");
  };

  useEffect(() => {
    //if modal is false hen reset cast
    if (modalOpen === false) {
      setCast();
    }
    //if its success then reset form and naviage to add movies
    if (isSuccess) {
      reset({
        name: "",
        time: 0,
        language: "",
        year: 0,
        category: "",
        desc: "",
      });
      setImageTitle("");
      setImageWithoutTitle("");
      setVideoUrl("");
      dispatch({ type: "CREATE_MOVIE_RESET" });
      navigate("/addMovie");
    }
    if (isError) {
      Toast("Something went wrong", "ERROR");

      dispatch({ type: "CREATE_MOVIE_RESET" });
    }
  }, [modalOpen, isSuccess, isError, dispatch, reset, navigate]);
  return (
    <SideBar>
      <CastsModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        cast={cast}
      />
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Create Movie </h2>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <div className="w-full">
            <Input
              register={register("name")}
              bg={true}
              label="Movie Title"
              placeholder="Name of Movie"
              type="text"
              name="name"
            />
            {errors.name && <InlineError text={errors.name.message} />}
          </div>
          <div className="w-full">
            <Input
              register={register("time")}
              label="Hours"
              placeholder="Time of movie"
              type="text"
              bg={true}
              name="time"
            />
            {errors.time && <InlineError text={errors.time.message} />}
          </div>
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <div className="w-full">
            <Input
              register={register("language")}
              label="Language "
              placeholder="Language of Movie"
              type="text"
              bg={true}
              name="language"
            />
            {errors.language && <InlineError text={errors.language.message} />}
          </div>
          <div className="w-full">
            <Input
              register={register("year")}
              label="Year of Release"
              placeholder="2023"
              type="text"
              bg={true}
              name="year"
            />
            {errors.year && <InlineError text={errors.year.message} />}
          </div>
        </div>
        {/*Iamges */}
        <div className="w-full grid md:grid-cols-2 gap-6">
          {/*Images without title */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image without Title
            </p>
            <Uploder setImageUrl={setImageWithoutTitle} />
            <ImagePreview image={imageWithoutTitle} name="image withou title" />
          </div>
          {/*Image with title */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image with Title
            </p>
            <Uploder setImageUrl={setImageTitle} />
            <ImagePreview image={imageTitle} name="image title" />
          </div>
        </div>
        {/*Description */}
        <Input
          bg={true}
          name="des"
          register={{ ...register("des") }}
          label="Description"
          placeholder="Write a sumary of movie"
        />
        {errors.des && <InlineError text={errors.des.message} />}

        {/*Category */}

        <div className="text-sm w-full">
          <Select
            label="Movie Category"
            options={categories?.length > 0 ? categories : []}
            name="category"
            register={{ ...register("category") }}
          />
          {errors.category && <InlineError text={errors.category.message} />}
        </div>
        {/*Movie video */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-border font-semibold text-sm">
            Movie video
          </label>
          <div className={`w-full grid ${videoUrl && "md:grid-cols-2"} gap-6`}>
            {videoUrl && (
              <div className="w-full bg-main text-sm text-subMain py-4 border border-border rounded flex-colo ">
                Video Uploaded!!!
              </div>
            )}

            <Uploder setImageUrl={setVideoUrl} />
          </div>
        </div>
        {/*Casts */}
        <div className="w-full grid lg:grid-cols-2 gap-6 items-start">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full py-4 bg-main border border-subMain border-dashed text-white rounded"
          >
            Add Cast
          </button>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-3 2xl:grid-cols-4">
            {casts?.length > 0 &&
              casts.map((user) => (
                <div
                  key={user.id}
                  className="p-2 italic text-xs text-text rounded flex-col bg-main border border-border"
                >
                  <img
                    src={`${user?.image ? user.image : "/images/user.png"}`}
                    alt={user.name}
                    className="w-full h-24 object-cover rounded-full mb-2"
                  />
                  <p>{user.name}</p>
                  <div className="flex flex-row mt-2 w-full gap-2">
                    <button
                      onClick={() => deleteCastHandler(user.id)}
                      className="w-6 h-6 flex-col bg-dry border border-border text-red-600 rounded"
                    >
                      <MdDelete />
                    </button>
                    <button
                      onClick={() => {
                        setCast(user);
                        setModalOpen(true);
                      }}
                      className="w-6 h-6 flex-col bg-dry border border-border text-subMain rounded"
                    >
                      <FaEdit />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/*Submit */}
        <button
          disabled={isLoading || !imageTitle || !imageWithoutTitle || !videoUrl}
          onClick={handleSubmit(onSubmit)}
          className="bg-subMain w-full flex-rows gap-6 font-medium  text-white py-3 rounded"
        >
          {isLoading ? (
            "Please wait..."
          ) : (
            <>
              <ImUpload /> Publish Movie
            </>
          )}
        </button>
      </div>
    </SideBar>
  );
}

export default AddMovie;
