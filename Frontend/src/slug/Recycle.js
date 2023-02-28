import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Recycle({ logged, isTicket, setIsTicket }) {
  let navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      return navigate("/");
    }
    if (!isTicket) {
      return navigate("/scan");
    }
  }, [logged]);
  return <div>Recycle</div>;
}
