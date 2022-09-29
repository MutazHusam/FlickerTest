import React, { useState } from "react";
import SearchBox from "../../src/components/SearchBox/SearchBox";
import CardsContainer from "../../src/components/Card/CardsContainer";
import Card from "../../src/components/Card/Card";
import Button from "../../src/components/Button/Button";
import SelectBox from "../../src/components/SelectBox/SelectBox";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
interface DataItem {
  url: string;
}
const Home = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [numOfItemPerPage, setNumOfItemPerPage] = useState<number>();
  const [pageSelectedFromPagination, setPageNumber] = useState<number>();
  const getPhotosArray = (arr: any) => setData(arr);
  const getTotalPage = (arr: any) => setTotalPage(arr);
  const ItemsPerPage = (num: number) => setNumOfItemPerPage(num);
  const navigate = useNavigate();
  const handlePagesNumber = (e: any) => {
    setPageNumber(e.target.textContent);
    window.scroll(0, 0);
  };

  return (
    <div className="pageContainer">
      <SearchBox
        getPhotosArray={(arr: any) => getPhotosArray(arr)}
        getTotalPage={(arr: any) => getTotalPage(arr)}
        numOfItemPerPage={numOfItemPerPage || 10}
        numOfPage={pageSelectedFromPagination}
      />
      <section className="contentContainer">
        <div className="buttons">
          <SelectBox setNumOfItemPerPage={(num: number) => ItemsPerPage(num)} />
          <Button
            onClick={() => {
              navigate(`/favorites`);
            }}
            text="My Favorites"
          />
        </div>
        <CardsContainer>
          {data.map((Item, DummyKey) => {
            return <Card url={Item.url} key={DummyKey} />;
          })}
        </CardsContainer>
      </section>
      <Stack spacing={2} sx={{ margin: "auto" }}>
        <Pagination count={totalPage} onClick={handlePagesNumber} />
      </Stack>
    </div>
  );
};

export default Home;
