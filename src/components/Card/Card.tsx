// import React from "react";
import "./style.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import React, { useContext } from "react";
import { favoritesContext } from "../../context/FavoritesContext";
interface CardProps {
  url: string;
}

const Card: React.FC<CardProps> = ({ url }) => {
  const { handlePushFavorites } = useContext(favoritesContext);
  const { getFavItems } = useContext(favoritesContext);
  const data = getFavItems();
  const [icon, setIcon] = useState(false);
  return (
    <div className="Card" onClick={()=>{data.indexOf(url) === -1 ? setIcon(false) : setIcon(true)}}>
      <img src={url} alt="" />
      <div
        className="IconButton"
        onClick={() => {
          handlePushFavorites(url);
          data.indexOf(url) === -1 ? setIcon(false) : setIcon(true);
          console.log(data);
        }}
      >
        {data.indexOf(url) === -1 ? (
          <FavoriteBorderIcon fontSize="large" />
        ) : (
          <FavoriteIcon fontSize="large" sx={{ color: "#f00" }} />
        )}
      </div>
    </div>
  );
};

export default Card;
