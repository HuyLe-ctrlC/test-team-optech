import axios from "axios";
import React, { useEffect, useState } from "react";
import "./form.css";
export const Form = () => {
  const [user, setUser] = useState();
  const [search, setSearch] = useState("");
  const [statu, setStatu] = useState(false);

  const handleStatu = () => {
    setStatu(!statu);
  };

  // get all user
  const getUser = async () => {
    const response = await axios.get(
      "http://192.168.102.6:3000/api/user/getall  "
    );
    setUser(response.data.data);
  };
  useEffect(() => {
    getUser();
  }, []);

  //search user

  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Tables</h1>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the .
      </p>
      {/* DataTales Example */}
      <div className="card shadow mb-4 ">
        <div className="card-header py-3 group">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
          <div className="input-group">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm" />
              </button>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th>Họ và tên</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Quê quán</th>
                  <th>Địa chỉ hiện tại</th>
                  <th>Năm sinh</th>
                  <th>Trạng thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {user?.map((item, id) => (
                  <tr key={id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.place_of_origin}</td>
                    <td>{item.address}</td>
                    <td>{item.date_of_birth}</td>
                    <td>{item.status}</td>
                    <td>
                      <button
                        onClick={handleStatu}
                        style={{ marginRight: "10px", border: "none" }}
                      >
                        Edit
                      </button>
                      {statu ? (
                        <>
                          <div className="statu">1</div>
                        </>
                      ) : (
                        <></>
                      )}
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "red",
                          color: "white",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
