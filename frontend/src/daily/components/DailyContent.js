import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/daily/1.jpg";
import img2 from "../../images/daily/2.jpg";
import img3 from "../../images/daily/3.jpg";
import img4 from "../../images/daily/4.jpg";

export const DailyContent = (daily) => {
  let eva;
  if (daily.evaluation === "perfect") {
    eva = img1;
  } else if (daily.evaluation === "good") {
    eva = img2;
  } else if (daily.evaluation === "soso") {
    eva = img3;
  } else {
    eva = img4;
  }
  return (
    <div>
      <Link to={`daily/${daily.id}`}>
        {" "}
        <h1>{daily.date}</h1>{" "}
      </Link>
      <img src={eva} />
    </div>
  );
};
