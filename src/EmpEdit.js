import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
  const { empid } = useParams();

  //   const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/users/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        namachange(resp.nama);
        alamatchange(resp.alamat);
        provinsichange(resp.provinsi);
        kotachange(resp.kota);
        kecamatanchange(resp.kecamatan);
        activechange(resp.isactive);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [id, idchange] = useState("");
  const [nama, namachange] = useState("");
  const [alamat, alamatchange] = useState("");
  const [provinsi, provinsichange] = useState("");
  const [kota, kotachange] = useState("");
  const [kecamatan, kecamatanchange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = { id, nama, alamat, provinsi, kota, kecamatan, active };

    fetch("http://localhost:3001/users/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Data Berhasil Di Update");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Edit Pegawai</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Nama</label>
                      <input
                        required
                        value={nama}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => namachange(e.target.value)}
                        className="form-control"
                      ></input>
                      {nama.length == 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Alamat</label>
                      <input
                        value={alamat}
                        onChange={(e) => alamatchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Provinsi</label>
                      <input
                        value={provinsi}
                        onChange={(e) => provinsichange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Kota</label>
                      <input
                        value={kota}
                        onChange={(e) => kotachange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Kecamatan</label>
                      <input
                        value={kecamatan}
                        onChange={(e) => kecamatanchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={active}
                        onChange={(e) => activechange(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      ></input>
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpEdit;
