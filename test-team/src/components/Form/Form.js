import React from "react";

export const Form = () => {
  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Tables</h1>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{" "}
        <a target="_blank" href="https://datatables.net">
          official DataTables documentation
        </a>
        .
      </p>
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
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
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Jennifer Chang</td>
                  <td>Regional Director</td>
                  <td>Singapore</td>
                  <td>28</td>
                  <td>2010/11/14</td>
                  <td>$357,650</td>
                </tr>
                <tr>
                  <td>Brenden Wagner</td>
                  <td>Software Engineer</td>
                  <td>San Francisco</td>
                  <td>28</td>
                  <td>2011/06/07</td>
                  <td>$206,850</td>
                </tr>
                <tr>
                  <td>Fiona Green</td>
                  <td>Chief Operating Officer (COO)</td>
                  <td>San Francisco</td>
                  <td>48</td>
                  <td>2010/03/11</td>
                  <td>$850,000</td>
                </tr>
                <tr>
                  <td>Shou Itou</td>
                  <td>Regional Marketing</td>
                  <td>Tokyo</td>
                  <td>20</td>
                  <td>2011/08/14</td>
                  <td>$163,000</td>
                </tr>
                <tr>
                  <td>Michelle House</td>
                  <td>Integration Specialist</td>
                  <td>Sidney</td>
                  <td>37</td>
                  <td>2011/06/02</td>
                  <td>$95,400</td>
                </tr>
                <tr>
                  <td>Suki Burks</td>
                  <td>Developer</td>
                  <td>London</td>
                  <td>53</td>
                  <td>2009/10/22</td>
                  <td>$114,500</td>
                </tr>
                <tr>
                  <td>Prescott Bartlett</td>
                  <td>Technical Author</td>
                  <td>London</td>
                  <td>27</td>
                  <td>2011/05/07</td>
                  <td>$145,000</td>
                </tr>
                <tr>
                  <td>Gavin Cortez</td>
                  <td>Team Leader</td>
                  <td>San Francisco</td>
                  <td>22</td>
                  <td>2008/10/26</td>
                  <td>$235,500</td>
                </tr>
                <tr>
                  <td>Martena Mccray</td>
                  <td>Post-Sales support</td>
                  <td>Edinburgh</td>
                  <td>46</td>
                  <td>2011/03/09</td>
                  <td>$324,050</td>
                </tr>
                <tr>
                  <td>Unity Butler</td>
                  <td>Marketing Designer</td>
                  <td>San Francisco</td>
                  <td>47</td>
                  <td>2009/12/09</td>
                  <td>$85,675</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
