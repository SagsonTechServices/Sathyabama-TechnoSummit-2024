import React from "react";

function RegisteredList_dept() {
  return (
    <div>
      <div className="overflow-x-auto container max-w-screen-2xl md:px-20 px-0">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Event</th>
              <th>Team</th>
              <th>Leader's Name</th>
              <th>Leader's Contact</th>
              <th>No. of members</th>
              <th>Fee amount</th>
              <th>Payment status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Hackathon</td>
              <td>SagsonTech</td>
              <td>Syed Abrar Ahmed G</td>
              <td>9176738877</td>
              <td>1</td>
              <td>100.00</td>
              <td>
              <input type="checkbox" className="checkbox checkbox-primary" />
              </td>
            </tr>

            <tr>
              <th>1</th>
              <td>Hackathon</td>
              <td>SagsonTech</td>
              <td>Syed Abrar Ahmed G</td>
              <td>9176738877</td>
              <td>1</td>
              <td>100.00</td>
              <td>
              <input type="checkbox" className="checkbox checkbox-primary" />
              </td>
            </tr>

            <tr className="text-primary font-bold">
              <th>1</th>
              <td>Hackathon</td>
              <td>SagsonTech</td>
              <td>Syed Abrar Ahmed G</td>
              <td>9176738877</td>
              <td>1</td>
              <td>100.00</td>
              <td>
              <input type="checkbox" defaultChecked disabled className="checkbox checkbox-primary" />
              </td>
            </tr>

            <tr>
              <th>1</th>
              <td>Hackathon</td>
              <td>SagsonTech</td>
              <td>Syed Abrar Ahmed G</td>
              <td>9176738877</td>
              <td>1</td>
              <td>100.00</td>
              <td>
              <input type="checkbox" className="checkbox checkbox-primary" />
              </td>
            </tr>

            <tr>
              <th>1</th>
              <td>Hackathon</td>
              <td>SagsonTech</td>
              <td>Syed Abrar Ahmed G</td>
              <td>9176738877</td>
              <td>1</td>
              <td>100.00</td>
              <td>
              <input type="checkbox" className="checkbox checkbox-primary" />
              </td>
            </tr>

            <tr>
              <th>1</th>
              <td>Hackathon</td>
              <td>SagsonTech</td>
              <td>Syed Abrar Ahmed G</td>
              <td>9176738877</td>
              <td>1</td>
              <td>100.00</td>
              <td>
              <input type="checkbox" className="checkbox checkbox-primary" />
              </td>
            </tr>

            <tr>
              <th>1</th>
              <td>Hackathon</td>
              <td>SagsonTech</td>
              <td>Syed Abrar Ahmed G</td>
              <td>9176738877</td>
              <td>1</td>
              <td>100.00</td>
              <td>
              <input type="checkbox" className="checkbox checkbox-primary" />
              </td>
            </tr>

            <tr>
              <th>1</th>
              <td>Hackathon</td>
              <td>SagsonTech</td>
              <td>Syed Abrar Ahmed G</td>
              <td>9176738877</td>
              <td>1</td>
              <td>100.00</td>
              <td>
              <input type="checkbox" className="checkbox checkbox-primary" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegisteredList_dept;
