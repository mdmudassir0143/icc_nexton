import { Box } from "@mui/material";
import React from "react";
import PageHead from "../components/PageHead";

// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

export default function Social({ isTicket, setIsTicket }) {
  return (
    <Box>
      <PageHead title="Social Endorsements" />
      <div style={{ maxWidth: "100%", width: "500px", margin: "auto" ,background:"white"}}>
        <p style={{ margin: "10px 20px", lineHeight: "2", textAlign: "center" }}>
          Get starred ⭐ on stadium screen. <br /> Post yourself with #icc2023 and
          #zor_se_bol
        </p>
        <h2
          style={{ maxWidth: "80%", width: "fit-content", margin: "20px auto" }}
        >
          Our highlights
        </h2>
        <div
          className="social-posts"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "gray",
              margin: "20px",
            }}
          ></div>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "gray",
              margin: "20px",
            }}
          ></div>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "gray",
              margin: "20px",
            }}
          ></div>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "gray",
              margin: "20px",
            }}
          >
          </div>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "gray",
              margin: "20px",
            }}
          ></div>
        </div>
      </div>
    </Box>
  );
}
