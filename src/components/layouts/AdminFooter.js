import React from "react";

export default function AdminFooter() {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          MediCare ReactJS Project // <i>&nbsp;Pharmacy Module</i>
          <div className="copyright ml-auto">
            {" "}
            Copyright &copy;&nbsp;
            {new Date().getFullYear()}, made by Ajay Jha
          </div>
        </div>
      </footer>
    </>
  );
}
