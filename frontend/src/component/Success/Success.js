import React from "react";
import "./Success.css";
import errorqrcode from "../../assets/barcode.png";

const Success = () => {
  return (
    <>
      <div class="main-body">
        <div class="container">
          <h3 style={{ color: "rgb(65, 141, 241)" }}>
            QR CODE Generated successfully
          </h3>
          <img src={errorqrcode} style={{ height: "350px" }} alt="wallet_img" />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Success;
