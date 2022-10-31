import "../styles/user.css";
import axios from "axios";
import Pagination from "./Pagination";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import ErrorBoundary from "./ErrorBoundary";

function User() {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

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

  const paginate = (number) => setPageNumber(number);

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      setLoading(true);
      const res = await axios.get("https://source.unsplash.com/random/?music");
      setBackgroundImage(res.config.url);
      setLoading(false);
    };
    fetchBackgroundImage();

    axios
      .get(`https://randomuser.me/api/?page=${pageNumber}&results=1&seed=abc`)
      .then((response) => {
        setUser(response.data.results[0]);
      });
  }, [pageNumber]);

  return (
    <div className="User">
      <div className="background_information">
        {loading ? (
          <div className="loading">Background Image Loading...</div>
        ) : (
          <div className="background_image">
            <img src={backgroundImage} alt="User preferred background" />
          </div>
        )}
      </div>

      <ErrorBoundary>
        <ProfileCard user={user} />
      </ErrorBoundary>

      <Outlet />

      <Pagination
        paginate={paginate}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default User;

// WEKSYQTJSTaDn3zhpUHtN9o2cqw2xb-BAhQiVHFxl8o
// https://api.unsplash.com/photos/500x200?client_id=WEKSYQTJSTaDn3zhpUHtN9o2cqw2xb-BAhQiVHFxl8o
