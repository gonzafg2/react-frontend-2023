import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TitleH from "./components/TitleH";
import axios from "axios";

const API_KEY = "8EhxRXHFFDaQJBJSJiqUBv7lx0o7VgPpz0bnwJZp";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("photos"))
      return setPhotos(JSON.parse(localStorage.getItem("photos")));
    const getNASA_API = async () => {
      const URL =
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key=" +
        API_KEY;

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        const res = await axios.get(URL, config);
        const { data } = res;
        setPhotos(data.photos);
        localStorage.setItem("photos", JSON.stringify(data.photos));
        console.log(data.photos);
      } catch (error) {
        console.log(error);
      }
    };
    getNASA_API();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <TitleH />

      <p className="read-the-docs">Martian Photos - Rover Curiosity</p>

      <div className="container">
        <div className="row">
          {photos.map((photo) => (
            <div className="col-4" key={photo.id}>
              <div className="card mx-auto mb-5" style={{ maxWidth: "22rem" }}>
                <img src={photo.img_src} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{photo?.camera?.full_name}</h5>

                  <p className="card-text">
                    Rover {photo?.rover?.name} <br />{" "}
                    {photo?.rover?.landing_date}
                  </p>

                  <p className="card-text text-center">
                    Camera: {photo?.camera?.name}
                  </p>
                  <a
                    href={photo.img_src}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Full view
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
