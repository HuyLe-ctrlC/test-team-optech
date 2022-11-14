import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object({
  firstName: Yup.string().required("* First name is required!"),
  lastName: Yup.string().required("* Last name is required!"),
  numberPhone: Yup.string().required("* Số điện thoại là bắt buộc!"),
  email: Yup.string().required("* Email là bắt buộc!"),
  address: Yup.string().required("* Địa chỉ là bắt buộc!"),
  selectPosition: Yup.string().required("Vị trí ứng tuyển là bắt buộc!"),
  domicile: Yup.string().required("Nguyên quán là bắt buộc!"),
  addressCurrent: Yup.string().required("Địa chỉ hiện tại là bắt buộc!"),
  experience: Yup.string().required("Địa chỉ hiện tại là bắt buộc!"),
  file: Yup.mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "File size too large, max file size is 1 Mb",
      (value) => value && value.size <= 1100000
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) =>
        value && ["image/png", "image/jpg", "image/jpeg"].includes(value.type)
    ),
});

const select = {
  position: ["", "Full Stack", "Front End", "Back End", "Tester"],
  domicile: ["", "Tiền Giang", "Cần Thơ", "Đồng Tháp", "TPHCM"],
  addressCurrent: ["", "Bình Thạnh", "Thủ Đức", "Dĩ An", "Quận 12"],
};

export const Apply = () => {
  //formik
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      numberPhone: "",
      email: "",
      address: "",
      selectPosition: "",
      domicile: "",
      addressCurrent: "",
      experience: "",
    },
    onSubmit: (values) => {
      //dispatch the action
      // dispatch(loginUserAction(values));
      console.log(values);
    },
    validationSchema: formSchema,
  });
  return (
    <div className="container-md">
      <h2 className="text-center text-dark">Ứng tuyển lập trình viên</h2>
      <form className="row" onSubmit={formik.handleSubmit}>
        <div className="col-md-6 my-2">
          <label className="form-label">Họ</label>
          {/* Error Email */}
          <input
            type="text"
            className="form-control"
            value={formik.values.firstName}
            onChange={formik.handleChange("firstName")}
            onBlur={formik.handleBlur("firstName")}
          />
          <h6 className="text-danger fs-6 mt-1">
            {formik.touched.firstName && formik.errors.firstName}
          </h6>
        </div>
        <div className="col-md-6 my-2">
          <label className="form-label">Tên</label>
          {/* Error Email */}
          <input
            type="text"
            className="form-control"
            value={formik.values.lastName}
            onChange={formik.handleChange("lastName")}
            onBlur={formik.handleBlur("lastName")}
          />
          <h6 className="text-danger fs-6 mt-1">
            {formik.touched.lastName && formik.errors.lastName}
          </h6>
        </div>
        <div className="col-md-6 my-2">
          <label className="form-label">Số điện thoại</label>
          {/* Error Email */}
          <input
            type="text"
            className="form-control"
            value={formik.values.numberPhone}
            onChange={formik.handleChange("numberPhone")}
            onBlur={formik.handleBlur("numberPhone")}
          />
          <div className="text-danger fs-6 mt-1">
            {formik.touched.numberPhone && formik.errors.numberPhone}
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
        <div className="col-md-12 my-2">
          <label className="form-label">Địa chỉ</label>
          <input
            type="text"
            className="form-control"
            value={formik.values.address}
            onChange={formik.handleChange("address")}
            onBlur={formik.handleBlur("address")}
          />
          <div className="text-danger fs-6 mt-1">
            {formik.touched.address && formik.errors.address}
          </div>
        </div>
        <div className="col-md-4 my-2">
          <label className="form-label">Nguyên quán</label>
          <select
            name=""
            id=""
            className="form-select"
            value={formik.values.domicile}
            onChange={formik.handleChange("domicile")}
            onBlur={formik.handleBlur("domicile")}
          >
            {select.domicile.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <h6 className="text-danger fs-6 mt-1">
            {formik.touched.domicile && formik.errors.domicile}
          </h6>
        </div>
        <div className="col-md-4 my-2">
          <label className="form-label">Địa chỉ hiện tại</label>
          <select
            name=""
            id=""
            className="form-select"
            value={formik.values.addressCurrent}
            onChange={formik.handleChange("addressCurrent")}
            onBlur={formik.handleBlur("addressCurrent")}
          >
            {select.addressCurrent.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <h6 className="text-danger fs-6 mt-1">
            {formik.touched.addressCurrent && formik.errors.addressCurrent}
          </h6>
        </div>
        <div className="col-md-4 my-2">
          <label className="form-label">Vị trí ứng tuyển</label>
          <select
            controls="select"
            name="selectPosition"
            id=""
            className="form-select"
            value={formik.values.selectPosition}
            onChange={formik.handleChange("selectPosition")}
            onBlur={formik.handleBlur("selectPosition")}
          >
            {select.position.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <h6 className="text-danger fs-6 mt-1">
            {formik.touched.selectPosition && formik.errors.selectPosition}
          </h6>
        </div>
        <div className="col-md-2 my-2">
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
        <div className="col-md-10 my-2">
          <label className="form-label">File CV</label>
          <input type="file" className="form-control" />
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
