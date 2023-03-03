import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
  const { empid } = useParams();

  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/users/" + empid)
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
      <div className="card row" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>Data Pegawai</h2>
        </div>
        <div className="card-body"></div>

        {empdata && (
          <div>
            <h3>
              Nama Pegawai : <b>{empdata.nama}</b> ({empdata.id})
            </h3>
            <h4>Detail Pribadi</h4>
            <h6>Alamat : {empdata.alamat}</h6>
            <h6>Provinsi : {empdata.provinsi}</h6>
            <h6>Kota : {empdata.kota}</h6>
            <h6>Kecamatan : {empdata.kecamatan}</h6>
            <Link className="btn btn-danger" to="/">
              Back
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmpDetail;
