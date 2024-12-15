import React, { useState } from "react";
import "./App.css";
import Logo from "./public/logo.svg";
import Input from "./public/input.svg";
import Add from "./public/Button.svg";
import Sort from "./punblic/Sort.svg";
import Edit from "./public/Edit.svg";
import Delete from "./public/Delete.svg";
import More from "./public/More.svg";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [rate, setRate] = useState("");
  const [balance, setBalance] = useState("");
  const [deposit, setDeposit] = useState("");
  const [active, setActive] = useState(false);
  const [inactive, setInactive] = useState(false);
  const [res, setRes] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function validate() {
    if (name.length < 3) {
      alert("Ism Notog'ri");
      return false;
    }
    return true;
  }

  function handleSave(e) {
    e.preventDefault();
    let isValid = validate();
    if (!isValid) {
      return;
    }
    const data = {
      name,
      rate,
      balance,
      deposit,
      active,
      inactive,
    };
    let copied = [...res];
    copied.push(data);
    setRes(copied);
    console.log(data);
    setName("");
    setRate("");
    setBalance("");
    setDeposit("");

    setIsModalOpen(false);
  }

  return (
    <>
      <header>
        <div className="header">
          <div className="container">
            <div className="head">
              <div className="logo-search">
                <div className="logo">
                  <img src={Logo} alt="" />
                </div>
                <div className="search">
                  <img src={Input} alt="" />
                  <form>
                    <input type="text" id="search" placeholder="Search" />
                  </form>
                </div>
              </div>
              <div className="add-customer" onClick={openModal}>
                <img src={Add} alt="" />
                <h2>Add Customer</h2>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="users">
        <div className="container">
          <div className="top-chart">
            <form>
              <input type="checkbox" id="chekbox-of-chart" />
            </form>
            <div className="name">
              <h2>NAME</h2>
              <img src={Sort} alt="" />
            </div>
            <div className="name">
              <h2>DESCRIPTION</h2>
            </div>
            <div className="rate">
              <h2>RATE</h2>
            </div>
            <div className="rate">
              <h2>BALANCE</h2>
            </div>
            <div className="rate">
              <h2>DEPOSIT</h2>
            </div>
            <div className="status name">
              <h2>STATUS</h2>
              <img src={Sort} alt="" />
            </div>
            <div className="options">
              <img src={More} alt="" />
            </div>
          </div>
        </div>
      </div>

      {res.length > 0 &&
        res.map(function (value, index) {
          return (
            <div
              key={index}
              className={index % 2 == 0 ? "bg-white" : "bg-[#F4F7FC]"}
            >
              <div className="container">
                <div className="user">
                  <div className="checkbox">
                    <form>
                      <input type="checkbox" id="chekbox-of-user" />
                    </form>
                  </div>
                  <div className="user-name">
                    <h2>{value.name}</h2>
                    <p>5684236583</p>
                  </div>
                  <div className="user-desc">
                    <p>Lorem ipsum dolor sit amet, consectetur...</p>
                  </div>
                  <div className="user-rate">
                    <h2>{value.rate}.00</h2>
                    <p className="inr">INR</p>
                  </div>
                  <div
                    className={
                      value.balance < 0
                        ? "text-[#E01A1A] user-balance"
                        : "text-[#008400] user-balance"
                    }
                  >
                    <h2>{value.balance}.00</h2>
                    <p className="inr">INR</p>
                  </div>
                  <div className="user-deposit">
                    <h2>{value.deposit}.00</h2>
                    <p className="inr">INR</p>
                  </div>
                  <div
                    className={!value.active ? "user-status-in" : "user-status"}
                  >
                    <h2>{!value.active ? "INACTIVE" : "ACTIVE"}</h2>
                  </div>
                  <div className="user-options">
                    <img src={Edit} alt="Edit Icon" />
                    <img src={Delete} alt="Delete Icon" />
                    <img src={More} alt="More Icon" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add Customer</h2>
            <form>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Name"
              />
              <input
                value={rate}
                onChange={(e) => {
                  setRate(e.target.value);
                }}
                type="number"
                placeholder="Rate"
                required
              />
              <input
                value={balance}
                onChange={(e) => {
                  setBalance(e.target.value);
                }}
                type="number"
                placeholder="Balance"
                required
              />
              <input
                value={deposit}
                onChange={(e) => {
                  setDeposit(e.target.value);
                }}
                type="number"
                placeholder="Deposit"
                required
              />
              <div className="status-radio">
                <label>
                  <input
                    type="radio"
                    name="status"
                    value={active}
                    onChange={(e) => {
                      setActive(e.target.checked);
                    }}
                  />{" "}
                  Active
                </label>
                <label>
                  <input
                    type="radio"
                    name="status"
                    value={inactive}
                    onChange={(e) => {
                      setInactive(e.target.checked);
                    }}
                  />
                  Inactive
                </label>
              </div>
              <div className="modal-buttons">
                <button type="button" className="close" onClick={closeModal}>
                  Close
                </button>
                <button onClick={handleSave} className="save">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
