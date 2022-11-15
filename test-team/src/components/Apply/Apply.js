import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  selectProvinces,
  provincesAction,
} from "../../redux/slices/provinces/provincesSlices";
import { useDispatch, useSelector } from "react-redux";
import {
  appliesAction,
  selectApplies,
} from "../../redux/slices/applies/appliesSlice";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
import * as ROUTES from "../../constants/routes/routes";
import {
  levelsAction,
  selectLevels,
} from "../../redux/slices/levels/levelsSlice";
import {
  districtsAction,
  selectDistricts,
} from "../../redux/slices/districts/districtsSlice";

const formSchema = Yup.object({
  name: Yup.string().required("* Họ tên là bắt buộc!"),
  phone: Yup.string().required("* Số điện thoại là bắt buộc!"),
  email: Yup.string().required("* Email là bắt buộc!"),
  address: Yup.string().required("* Địa chỉ tỉnh là bắt buộc!"),
  district: Yup.string().required("* Đại chỉ huyện là bắt buộc!"),
  date_of_birth: Yup.string().required("* Ngày sinh là bắt buộc!"),
  job_level: Yup.string().required("Vị trí ứng tuyển là bắt buộc!"),
  place_of_origin: Yup.string().required("Nguyên quán là bắt buộc!"),
  experience: Yup.string().required("Kinh nghiệm ứng viên là bắt buộc!"),
  image: Yup.mixed().required("File CV là bắt buộc!"),
});

export const Apply = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(provincesAction());
    dispatch(levelsAction());
  }, [dispatch]);

  const dataProvinces = useSelector(selectProvinces);
  const dataLevels = useSelector(selectLevels);

  //formik
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      date_of_birth: "",
      job_level: "",
      place_of_origin: "",
      experience: "",
      image: "",
    },
    onSubmit: (values) => {
      //dispatch the action
      values.address = `${values.address} - ${values.district}`;
      console.log("data sent >>>", values);

      dispatch(appliesAction(values));
    },
    validationSchema: formSchema,
  });

  const store = useSelector(selectApplies);
  const { data, serverError, appError } = store;

  useEffect(() => {
    dispatch(districtsAction(formik.values.district));
  }, [dispatch, formik.values.district]);

  useEffect(() => {
    if (data) {
      navigate(ROUTES.APPLY_MESSAGE);
    }
  }, [navigate, data]);

  const dataDistricts = useSelector(selectDistricts);

  return (
    <div className="container-md">
      <h2 className="text-center text-dark">Ứng tuyển lập trình viên</h2>
      <form className="row" onSubmit={formik.handleSubmit}>
        {/* display error message*/}
        {appError || serverError ? (
          <div className="text-red-400 text-xs mb-3">
            {serverError}: {appError}
          </div>
        ) : null}
        <div className="col-md-6 my-2">
          <label className="form-label">Họ tên</label>
          {/* Error Email */}
          <input
            type="text"
            className="form-control"
            value={formik.values.name}
            onChange={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
          />
          <h6 className="text-danger fs-6 mt-1">
            {formik.touched.name && formik.errors.name}
          </h6>
        </div>
        <div className="col-md-6 my-2">
          <label className="form-label">Số điện thoại</label>
          {/* Error Email */}
          <input
            type="text"
            className="form-control"
            value={formik.values.phone}
            onChange={formik.handleChange("phone")}
            onBlur={formik.handleBlur("phone")}
          />
          <div className="text-danger fs-6 mt-1">
            {formik.touched.phone && formik.errors.phone}
          </div>
        </div>
        <div className="col-md-6 my-2">
          <label className="form-label">Email</label>
          {/* Error Email */}
          <input
            type="email"
            className="form-control"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
          />
          <div className="text-danger fs-6 mt-1">
            {formik.touched.email && formik.errors.email}
          </div>
        </div>
        {/* Date of birth */}
        <div className="col-md-6 my-2">
          <label className="form-label">Ngày sinh</label>
          <input
            type="date"
            className="form-control"
            value={formik.values.date_of_birth}
            onChange={formik.handleChange("date_of_birth")}
            onBlur={formik.handleBlur("date_of_birth")}
          />
          <div className="text-danger fs-6 mt-1">
            {formik.touched.date_of_birth && formik.errors.date_of_birth}
          </div>
        </div>
        <div className="col-md-12 my-2">
          <label className="form-label">Địa chỉ hiện tại</label>
          <select
            name=""
            id=""
            className="form-select"
            value={formik.values.district}
            onChange={formik.handleChange("district")}
            onBlur={formik.handleBlur("district")}
          >
            <option value="">Chọn tỉnh</option>
            {dataProvinces?.data?.data?.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <select
            name=""
            id=""
            className="form-select"
            value={formik.values.address}
            onChange={formik.handleChange("address")}
            onBlur={formik.handleBlur("address")}
          >
            <option value="">Chọn huyện</option>
            {dataDistricts?.data?.data?.districts?.map((item) => (
              <option value={item.name} key={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <div className="text-danger fs-6 mt-1">
            {formik.touched.address && formik.errors.address}
          </div>
        </div>
        {/* Place of origin */}
        <div className="col-lg-4 my-2">
          <label className="form-label">Nguyên quán</label>
          <select
            name=""
            id=""
            className="form-select"
            value={formik.values.place_of_origin}
            onChange={formik.handleChange("place_of_origin")}
            onBlur={formik.handleBlur("place_of_origin")}
          >
            <option value="">Chọn nguyên quán</option>
            {dataProvinces?.data?.data?.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <h6 className="text-danger fs-6 mt-1">
            {formik.touched.place_of_origin && formik.errors.place_of_origin}
          </h6>
        </div>
        <div className="col-md-4 my-2">
          <label className="form-label">Vị trí ứng tuyển</label>
          <select
            controls="select"
            id=""
            className="form-select"
            value={formik.values.job_level}
            onChange={formik.handleChange("job_level")}
            onBlur={formik.handleBlur("job_level")}
          >
            <option value="">Chọn vị trí</option>
            {dataLevels?.data?.data?.map((item) => (
              <option value={item.level} key={item.id}>
                {item.level}
              </option>
            ))}
          </select>
          <h6 className="text-danger fs-6 mt-1">
            {formik.touched.job_level && formik.errors.job_level}
          </h6>
        </div>
        <div className="col-lg-4 my-2">
          <label className="form-label">Số năm kinh nghiệm</label>
          <input
            type="text"
            className="form-control"
            value={formik.values.experience}
            onChange={formik.handleChange("experience")}
            onBlur={formik.handleBlur("experience")}
          />
          <h6 className="text-danger fs-6 mt-1">
            {formik.touched.experience && formik.errors.experience}
          </h6>
        </div>
        <div className="col-lg-4 my-2">
          <label className="form-label">File CV</label>
          <Dropzone
            onBlur={formik.handleBlur("image")}
            onDrop={(acceptedFiles) => {
              formik.setFieldValue("image", acceptedFiles[0]);
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div className="container">
                <div
                  {...getRootProps({
                    className: "dropzone",
                    onDrop: (event) => event.stopPropagation(),
                  })}
                >
                  <input {...getInputProps()} />
                  <button className="text-dark fs-5 rounded-pill border border-1 bg-success bg-gradient w-full">
                    <i class="fa-solid fa-upload"></i>
                    <span>Tải lên CV của bạn</span>
                  </button>
                </div>
              </div>
            )}
          </Dropzone>
          <h6 className="text-danger fs-6 mt-1">
            {formik.touched.image && formik.errors.image}
          </h6>
        </div>
        <div className="col-md-12 my-2">
          <br />
          <button type="submit" className="btn btn-primary form-control">
            Ứng tuyển
          </button>
        </div>
      </form>
    </div>
  );
};
