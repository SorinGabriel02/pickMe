import React, { useContext } from "react";

import { AppContext } from "../context/appContext";
import Image from "../components/Image";
import { getClass } from "../utils";

export default function Photos() {
  const { photos } = useContext(AppContext);
  const images =
    photos.length === 0 ? (
      <h1>Loading...</h1>
    ) : (
      photos.map((pic, index) => (
        <Image key={pic.id} img={pic} className={getClass(index)} />
      ))
    );

  return <main className="photos">{images}</main>;
}
