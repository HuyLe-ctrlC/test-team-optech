import React from "react";

export const Apply = () => {
  return (
    <div className="container-md">
      <form className="row">
        <div className="col-md-6">
          <label className="form-label">Họ</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Tên</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Số điện thoại</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="col-md-12">
          <label className="form-label">Địa chỉ</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Nguyên quán</label>
          <select name="" id="" className="form-select">
            <option value="">Punjab</option>
            <option value="">Sindh</option>
            <option value="">Kpk</option>
            <option value="">Balochistan</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">Địa chỉ hiện tại</label>
          <select name="" id="" className="form-select">
            <option value="">Punjab</option>
            <option value="">Sindh</option>
            <option value="">Kpk</option>
            <option value="">Balochistan</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">Vị trí ứng tuyển</label>
          <select name="" id="" className="form-select">
            <option value="">Punjab</option>
            <option value="">Sindh</option>
            <option value="">Kpk</option>
            <option value="">Balochistan</option>
          </select>
        </div>
        <div className="col-md-2">
          <label className="form-label">Số năm kinh nghiệm</label>
          <input type="number" className="form-control" />
        </div>
        <div className="col-md-10">
          <label className="form-label">File CV</label>
          <input type="file" className="form-control" />
        </div>
        <div className="col-md-12">
          <br />
          <button className="btn btn-primary form-control">Submit</button>
        </div>
      </form>
    </div>
  );
};
