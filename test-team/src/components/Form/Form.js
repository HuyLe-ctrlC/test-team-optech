import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./form.css";
export const Form = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [search, setSearch] = useState("");
  const [statu, setStatu] = useState(false);
  const [id, setId] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [home, setHome] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const getUserId = useCallback(async (id) => {
    console.log(id);
    setId(id);
    setStatu(true);
    const res = await axios.get(
      `http://192.168.102.6:3000/api/user/getbyid/${id}`
    );
    setName(res.data.data.name);
    setNumber(res.data.data.phone);
    setEmail(res.data.data.email);
    setHome(res.data.data.place_of_origin);
    setAddress(res.data.data.address);
    setDate(res.data.data.date_of_birth);
  }, []);

  // get all user
  const getUser = async () => {
    const response = await axios.get(
      "http://192.168.102.6:3000/api/user/getall"
    );
    setUser(response.data.data);
  };
  // const data = [{}];

  const Submit = async (e) => {
    e.preventDefault();
    await axios.put(`http://192.168.102.6:3000/api/user/update/${id}`, {
      name: name,
      phone: number,
      email: email,
      date_of_birth: date,
      place_of_origin: home,
      address: address,
    });
    // navigate("/table");
    window.location.reload("/table");
  };
  //search user
  const handleSearch = (e) => {
    e.preventDefault();
    searchUser();
  };

  const searchUser = async () => {
    try {
      const res = await axios.get(
        `http://192.168.102.6:3000/api/user/getall?keyword=${search}`
      );

      setUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // update

  // status
  const handleUpdateState = useCallback((id, e) => {
    e.preventDefault();
    console.log(id);
    const value = e.target.value;
    console.log(value);
    const fetchApi = async () => {
      try {
        const res = await axios({
          method: "PUT",
          URL: `https://3e15-42-119-83-87.ap.ngrok.io/api/candidate/update-status/${id}`,
          headers: {
            "Content-type": "application/json",
          },
          data: { status: value },
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    getUser();
    // getUserId();
    searchUser();
  }, []);

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
              <button
                className="btn btn-primary"
                type="button"
                onClick={(e) => handleSearch(e)}
              >
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
                    <td>
                      <span
                        className={
                          item.status === 0
                            ? "bg-gradient-success"
                            : item.status === 1
                            ? "bg-gradient-danger"
                            : item.status === 2
                            ? "bg-gradient-warning"
                            : null
                        }
                      >
                        {item.status === 0
                          ? "Đạt"
                          : item.status === 1
                          ? "Không đạt"
                          : item.status === 2
                          ? "Mới"
                          : null}
                      </span>
                    </td>
                    <td>
                      <button
                        onClick={() => getUserId(item.id)}
                        style={{ marginRight: "10px", border: "none" }}
                      >
                        Edit
                      </button>
                      {statu ? (
                        <>
                          <div className="statu">
                            <div
                              className="close"
                              onClick={() => setStatu(false)}
                            >
                              X
                            </div>
                            {/* <button
                              value="dat"
                              onClick={(e) => handleUpdateState(item.id, e)}
                            >
                              đạt
                            </button>
                            <button
                            // onClick={(e) => handleUpdateNot(item.id, e)}
                            >
                              Không đạt
                            </button> */}
                            <h6>Cập nhật thông tin</h6>
                            <form onSubmit={Submit}>
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleInputEmail1"
                                  className="form-label"
                                >
                                  Họ và Tên
                                </label>
                                <input
                                  onChange={(e) => setName(e.target.value)}
                                  value={name}
                                  type="text"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleInputPassword1"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  onChange={(e) => setEmail(e.target.value)}
                                  value={email}
                                  type="email"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleInputPassword1"
                                  className="form-label"
                                >
                                  Số điện thoại
                                </label>
                                <input
                                  onChange={(e) => setNumber(e.target.value)}
                                  value={number}
                                  type="text"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleInputPassword1"
                                  className="form-label"
                                >
                                  Quê quán
                                </label>
                                <input
                                  onChange={(e) => setHome(e.target.value)}
                                  value={home}
                                  type="text"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleInputPassword1"
                                  className="form-label"
                                >
                                  Địa chỉ hiện tại
                                </label>
                                <input
                                  onChange={(e) => setAddress(e.target.value)}
                                  value={address}
                                  type="text"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleInputPassword1"
                                  className="form-label"
                                >
                                  Năm sinh
                                </label>
                                <input
                                  onChange={(e) => setDate(e.target.value)}
                                  value={date}
                                  type="text"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>

                              <button type="submit" className="btn btn-primary">
                                Submit
                              </button>
                            </form>
                          </div>
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
