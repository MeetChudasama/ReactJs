import React, { useEffect, useState } from "react";

const Pictureupload = () => {
  const [picture, setPicture] = useState("");

//   useEffect(() => {
//     console.log({ picture });
//   }, [picture]);

  const handlePicture = (e) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setPicture(url); // Uncomment this line if you have a setPicture function to update the state
    }
  };

  return (
    <div>
      <input
        type="file"
        name=""
        id=""
        onChange={handlePicture}
      />
      {picture != "" && <img alt="image" src={picture} />}
    </div>
  );
};

export default Pictureupload;
