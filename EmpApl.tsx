import axios from "axios";
import { useEffect, useState } from "react";

export default function EmpApl() {
  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setEmpData(res.data); // Make sure to set data after fetching
      });
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          {empData.map((x) => (
            <tr key={x.id}> {/* Add a unique 'key' prop */}
              <td>{x.name}</td>
              <td>{x.email}</td>
              <td>{x.phone}</td>
              <td>{x.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
