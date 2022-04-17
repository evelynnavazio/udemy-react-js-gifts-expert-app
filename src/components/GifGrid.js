import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h1 className="card-grid animate__animated animate__swing">{category}</h1>
      {loading && <p>Loading</p>}
      <div className="card-grid animate_animated animate__swing">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
