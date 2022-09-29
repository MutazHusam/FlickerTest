import CardsContainer from "../../src/components/Card/CardsContainer";
import Card from "../../src/components/Card/Card";
import React, { useContext, useEffect, useState } from "react";
import { favoritesContext } from "../../src/context/FavoritesContext";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";

const Favorites = () => {
  const navigate = useNavigate();
  const { getFavItems } = useContext(favoritesContext);
  const data = getFavItems();
//   const [favData, setData] = useState<any>([]);
//   useEffect(() => {
//     setData(data);
//   }, [favData]);
  return (
    <section className="contentContainer">
      <CardsContainer>
        {data.length > 0
          ? data.map((Item: string, DummyKey: number) => {
              return <Card url={Item} key={DummyKey} />;
            })
          : "The Favorites List is empty"}
      </CardsContainer>
      <Button
        text="Back To Home"
        onClick={() => {
          navigate(`/`);
        }}
      />
    </section>
  );
};

export default Favorites;
