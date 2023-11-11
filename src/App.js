import "./App.css";
import logo from "./Images/png-transparent-pexels-logo-thumbnail.png";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=dnRplCUNFqltkqyTCabBfrtxSVj_xUnFDC-ADDTwqY8&query=${value}&orientation=squarish&page=${page}&per_page=21`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  };

  return (
    <>
      <section class="section_1">
        <div class="section_1_overlay">
          <nav class="navbar navbar-expand-lg navbar-light bg-transperant">
            <div class="container-fluid">
              <img
                src={logo}
                class="Remove_BG"
                alt=""
                width="160"
                height="50"
              />
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a
                      class="nav-link active text-light mt-2 fw-bold"
                      aria-current="page"
                      href="#"
                    >
                      Explore
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active text-light mt-2 fw-bold"
                      aria-current="page"
                      href="#"
                    >
                      License
                    </a>
                  </li>
                  <li class="nav-item me-2">
                    <a class="nav-link active" aria-current="page" href="#">
                      <button
                        type="button"
                        class="btn btn-light pt-2 pb-2 ps-4 pe-4"
                      >
                        Upload
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="Text">
            <h3>
              The best free stock photos, royalty free <br />
              images & videos shared by creators.
            </h3>
            <div class="search_components">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button
                  class="btn btn-success"
                  type="button"
                  onClick={() => fetchImages()}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="gallery">
          {results.map((item) => {
            return (
              <img
                className="item"
                key={item.id}
                src={item.urls.regular}
                alt="images"
              />
            );
          })}
        </div>
      </div>
      <div className="container1 container mt-5 mb-5">
        <button
          type="button"
          class="btn btn-dark"
          onClick={() => setPage(page - 1)}
        >
          &larr; Preview
        </button>

        <button
          type="button"
          class="btn btn-dark"
          onClick={() => setPage(page + 1)}
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
}

export default App;
