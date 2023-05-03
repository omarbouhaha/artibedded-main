import React from "react";
import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

const Footer = () => {
  return (

      <CDBBox
        display="flex"
        justifyContent="around"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{
          width: "100%",
          backgroundColor: "#f5f5f5",
          position: "sticky",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <big style={{ color: "#a77bce" }}>Artibedded</big>
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">
            &copy; Artibedded, 2022. All rights reserved.
          </small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn
            flat
            style={{ backgroundColor: "#a77bce", border: "none" }}
            className="p-2"
          >
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn
            flat
            style={{ backgroundColor: "#a77bce", border: "none" }}
            className="mx-3 p-2"
          >
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn
            flat
            style={{ backgroundColor: "#a77bce", border: "none" }}
            className="p-2"
          >
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>

  );
};

export default Footer;
