import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/users/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/users/edit/" + id);
  };
  const Deletefunction = (id) => {
    if (window.confirm("Apakah anda yakin ingin menghapus?")) {
      fetch("http://localhost:3001/users/" + id, {
        method: "DELETE"
      })
        .then((res) => {
          alert("Data Berhasil Di Hapus");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Daftar Pegawai</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="users/create" className="btn btn-success">
              Add +
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Nama</td>
                <td>Alamat</td>
                <td>Provinsi</td>
                <td>Kota</td>
                <td>Kecamatan</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nama}</td>
                    <td>{item.alamat}</td>
                    <td>{item.provinsi}</td>
                    <td>{item.kota}</td>
                    <td>{item.kecamatan}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          Deletefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </a>
                      <a
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Detail
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
