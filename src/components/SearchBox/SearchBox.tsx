import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

interface SearchProps {
  getPhotosArray: Function;
  numOfItemPerPage?: number;
  numOfPage?: number;
  getTotalPage: Function;
}

const SearchBox: React.FC<SearchProps> = ({
  getPhotosArray,
  numOfItemPerPage,
  numOfPage,
  getTotalPage,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [perPage, setPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState<any>([]);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setSearchTerm(value);
  };
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4ab599f28c01704d5d52d3435551e6c9&tags=technology&text=${searchTerm}&per_page=${numOfItemPerPage}&page=${numOfPage}&format=json&nojsoncallback=1`
      );
      const formattedData = data.photos.photo.map((item: any) => {
        return {
          url: `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`,
        };
      });
      setData(formattedData);
      data && getPhotosArray(formattedData);
      data && getTotalPage(data.photos.pages);
    };
    fetchData();
    // const timeOut = setTimeout(() => {
    //   fetchData();
    // }, 1000);

    // return () => {
    //   clearTimeout(timeOut);
    // };
  }, [searchTerm, numOfItemPerPage, numOfPage]);

  return (
    <div className="searchBox">
      <label>Search by</label>
      <input
        type="text"
        placeholder="Search term"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
