import React from "react";
import M1 from "../assets/img/east-or-west-india-is-the-best.gif"
import M2 from "../assets/img/couple-indian.gif"
import M3 from "../assets/img/king-kohli.gif"
import { Box } from "@mui/system";
import CheerComp from "../components/CheerComp";
import PageHead from "../components/PageHead";

export default function Cheers() {
  const newLocal = "heading";
  const imgList = [
    {
      src: M1,
      title: "East or West INDIA is the Best"
    },
    {
      src: M2,
      title: "Indiaaa Indiaaa"
    },
    {
      src: M3,
      title: "Kohlii Kohlii"
    }
  ];
  return (
    // <div>
    //   <div className="cheer">
    //     <div className="heading">East or West INDIA is the Best</div>
    //     <img src={M1} alt="Loading..." />
    //   </div>
    //   <div className="cheer">
    //     <div className="heading">Indiaaaa Indiaaaa</div>
    //     <img src={M2} alt="Loading..." />
    //   </div>
    //   <div className="cheer">
    //     <div className={newLocal}>Kohlii Kohlii</div>
    //     <img src={M3} alt="Loading..." />
    //   </div>
    // </div>
    <Box
    >
      <PageHead
        title="Cheers"
      />
      <Box
      display = "flex"
      flexDirection = "column"
      gap = "1rem"
      backgroundColor = "white"
      >
        {imgList.map((item, i) => (
          <CheerComp
            key={i}
            title={item.title}
            imgSrc={item.src}
          />
        ))}
      </Box>
    </Box>
  );
}
