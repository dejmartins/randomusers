import "../styles/user.css";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function User() {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [user, setUser] = useState({});
  const [pageNumber, setPageNumber] = useState(1);

  // let client_id = "WEKSYQTJSTaDn3zhpUHtN9o2cqw2xb-BAhQiVHFxl8o";
  // let imageEndpoint = `https://api.unsplash.com/photos/?client_id=${client_id}`;

  const handleNext = (event) => {
    event.preventDefault();
    if (pageNumber < 11) {
      setPageNumber((prev) => prev + 1);
    }
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };

  useEffect(() => {
    axios.get("https://source.unsplash.com/random/?music").then((response) => {
      setBackgroundImage(response.config.url);
    });

    axios
      .get(`https://randomuser.me/api/?page=${pageNumber}&results=1&seed=abc`)
      .then((response) => {
        setUser(response.data.results[0]);
      });
  }, [pageNumber]);

  return (
    <div className="User">
      <div className="background_information">
        <div className="background_image">
          <img src={backgroundImage} alt="User preferred background" />
        </div>
      </div>

      <div className="profile_card">
        <div className="image_card">
          <img src={user?.picture?.large} alt="User's preferred avi" />
        </div>

        <div>
          <div className="user_bio">
            <h4>ABOUT {user?.name?.first}</h4>
            <div className="navigation">
              <nav>
                <Link to="contact">Contact</Link>{" "}
                <Link to="location">Location</Link>
              </nav>
            </div>
            <p>
              {user?.name?.title} {user?.name?.first} {user?.name?.last} lorem
              ipsum dolor sit amet, mel an iisque regione utroque, tota dicant
              elaboraret pro eu, alia soleat ad vix. An purto nemore iracundia
              eum. Vix ex bonorum dolores. Erat facete alterum ut eam.
              <br /> <br />
              Pri copiosae perfecto scribentur an, quot volutpat petentium vim
              et, dico scriptorem dissentiunt ex ius. <br />
              <br />
              Cu est putent denique expetendis, munere legendos vis ad, cibo
              evertitur at vis. Ut ferri theophrastus cum. Luptatum explicari
              pro an. Nam saperet fastidii torquatos ei.
            </p>
          </div>
        </div>
      </div>

      <Outlet />

      <div>
        <button
          disabled={pageNumber === 1 ? true : false}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          disabled={pageNumber === 10 ? true : false}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default User;

// WEKSYQTJSTaDn3zhpUHtN9o2cqw2xb-BAhQiVHFxl8o
// https://api.unsplash.com/photos/500x200?client_id=WEKSYQTJSTaDn3zhpUHtN9o2cqw2xb-BAhQiVHFxl8o
