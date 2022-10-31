import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ user }) => {
  if (user?.name?.first === "Levi") {
    throw new Error("Fraudulent User");
  }

  return (
    <>
      <div className="profile_card">
        <div className="image_card">
          <img src={user?.picture?.large} alt="User's preferred avi" />
        </div>

        <div className="user_bio">
          <h4>ABOUT {user?.name?.first}</h4>
          <div className="navigation">
            <nav>
              <Link className="nav_link" to="contact">
                Contact
              </Link>{" "}
              <Link className="nav_link" to="location">
                Location
              </Link>
            </nav>
          </div>
          <p>
            {user?.name?.title} {user?.name?.first} {user?.name?.last} lorem
            ipsum dolor sit amet, mel an iisque regione utroque, tota dicant
            elaboraret pro eu, alia soleat ad vix. An purto nemore iracundia
            eum. Vix ex bonorum dolores. Erat facete alterum ut eam.
            <br /> <br />
            Pri copiosae perfecto scribentur an, quot volutpat petentium vim et,
            dico scriptorem dissentiunt ex ius. <br />
            <br />
            Cu est putent denique expetendis, munere legendos vis ad, cibo
            evertitur at vis. Ut ferri theophrastus cum. Luptatum explicari pro
            an. Nam saperet fastidii torquatos ei.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
