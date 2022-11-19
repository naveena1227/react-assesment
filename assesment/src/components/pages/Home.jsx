import { useEffect, useState, React } from "react";
import {GetParticularDataForButton,} from "../../services/getData";
import Button from "react-bootstrap/Button";
import DisplayData from "./DisplayData";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonGroupData from "./ButtonGroupData";
import { toast } from "react-toastify";
import DisplayPagination from "./DisplayPagination";

const Home = () => {
  const [filterKey, setFilterKey] = useState("american");
  const [loading, setLoading] = useState(false);
  const [responeData, setResponseData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalLength, setTotalLength] = useState(0);
  const [buttonValue, setButtonValue] = useState("");
  const [searchValue, setSearchValue] = useState("american");

  useEffect(() => {
    const getPageData = async () => {
      setLoading(true);
      try {
          const dataResponse = await GetParticularDataForButton(filterKey,page,buttonValue);
          setResponseData(dataResponse[0]);
          setTotalLength(Math.ceil(dataResponse[1]));
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getPageData();
  }, [page,buttonValue,filterKey]);

  return (
    <>
      <div className={`text-dark`}>
        <h1>Video Catalog</h1>
        <hr />
      </div>
        <div className="container">
          <div className="row">
          
            <div className="col-sm  my-3">
            {!loading && (
              <DisplayPagination
                length={totalLength}
                setPage={setPage}
                page={page}
              />
            )}
            </div>
          
            <div className="col-sm">
              <InputGroup className="my-3">
                <Form.Control
                  placeholder="search"
                  aria-label="Search Value"
                  aria-describedby="basic-addon2"
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  value={searchValue}
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon1"
                  onClick={() => {setFilterKey(searchValue);setPage(1);setButtonValue("")}}
                >
                  Search
                </Button>
              </InputGroup>
            </div>
            <div className="col-sm my-3">
              <ButtonGroupData
                setButtonValue={setButtonValue}
                searchValue={searchValue}
                setFilterKey={setFilterKey}
                setPage={setPage}
              />
            </div>
          </div>
        </div>
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!loading && responeData.length !== 0 && (
        <DisplayData responeData={responeData} />
      )}
    </>
  );
};

export default Home;
