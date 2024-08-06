import React, { useEffect, useState } from "react";
import { Button, Dropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateAccessToken, updateUserToken } from '../../store/actions';
import { useSelector } from 'react-redux';
import EditProfileModal from "../Modals/EditProfileModal";

const UserSideBar = ({ wardrobes = [] }) => {

  const dispatch = useDispatch();
  const [showNotifications, setShowNotifications] = useState(true);
  const userToken = useSelector(state => state.userToken);
  const accessToken = useSelector(state => state.token);
  console.log("HASSAN" + userToken["displayName"])

  const [photo, setPhoto] = useState(
    userToken.photoURL ? userToken.photoURL : "/images/sidebr-prf-image.png"
  );

  const [name, setName] = useState(
    userToken.displayName ? userToken.displayName : "User"
  );

  const [showNavs, setShowNavs] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const navigate = useNavigate();
  const [dropdownStates, setDropdownStates] = useState([
    { id: 0, name: "Wardrobe", isOpen: false },
    { id: 1, name: "notification", isOpen: false },
    { id: 2, name: "profile", isOpen: false },
  ]);
  let timeoutId;

  const handleWardrobeClick = async (wardrobeId) => {
    try {

      // Navigate to wardrobe details page with wardrobeId as a parameter
      navigate("/wardrobe", { state: { wardrobeId } }); // Assuming '/wardrobe/:wardrobeId' is your route
    } catch (error) {
      console.error("Error navigating to wardrobe details:", error);
    }
  };

  const Logout = () => {
    localStorage.clear();
    dispatch(updateAccessToken(""));
    dispatch(updateUserToken(""));

    navigate("/");
  }

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // Check the window width and set the state accordingly
      if (window.innerWidth > 991) setShowNavs(true);
      else setShowNavs(false);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutId);
    setDropdownStates((prevStates) => {
      const newState = [...prevStates];
      newState[index].isOpen = true;
      return newState;
    });
  };

  const handleMouseLeave = (index) => {
    timeoutId = setTimeout(() => {
      setDropdownStates((prevStates) => {
        const newState = [...prevStates];
        newState[index].isOpen = false;
        return newState;
      });
    }, 200); // Set the desired time duration in milliseconds (e.g., 500ms)
  };
  console.log("check  ", dropdownStates);

  const handleCloseNotifications = () => {
    const newState = [...dropdownStates];
    newState[1].isOpen = false;
    setDropdownStates(newState);
  };

  const handleShowEditProfileModal = () => setShowEditProfileModal(true);

  return (
    <>
      <div className="UserSidebar">
        <Navbar>
          <ul className="p-0 m-0 d-flex align-items-center flex-row flex-lg-column gap-lg-4 gap-3">
            <li className="firstUr">
              <Link to="/createwardrobe" className="me-0">
                <img src="/images/white-star-Group.svg" alt="icon" />
              </Link>
            </li>
            <div className="innerOrder d-flex flex-row flex-lg-column align-items-center align-items-lg-start gap-lg-4 gap-3">
              <li className="active" onClick={() => setShowNavs(false)}>
                <Link to="/home">
                  <img
                    className="sideBarIcon active"
                    src="/images/noun-home.svg"
                    alt="home"
                  />

                  <span className="prnName ">Home</span>
                </Link>
              </li>
              {showNavs !== true && (
                <Button
                  className="bg-transparent border-0 d-lg-none"
                  onClick={() => setShowNavs(true)}
                >
                  <img src="/images/right-arrow-Icon.svg" alt="Icon" />
                </Button>
              )}
              {showNavs && (
                <>
                  <li>
                    <Link to="#">
                      <Dropdown
                        className="showDtl"
                        show={dropdownStates[0].isOpen}
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={() => handleMouseLeave(0)}
                      >
                        <Dropdown.Toggle id="dropdown-basic">
                          <img
                            className="sideBarIcon"
                            src="/images/noun-wardrobe.svg"
                            alt="home"
                          />
                          <Link to="/WardrobesCollection">
                            <span className="sameStl ">My Wardrobes</span>
                          </Link>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <p className="whoDay">Today</p>
                          {wardrobes.map((wardrobeItem, index) => (
                            <Dropdown.Item
                              key={index}
                            >
                              <Link to={`/wardrobe/${wardrobeItem.wardrobe_id}`}>{wardrobeItem.name}</Link>

                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Link>
                  </li>
                  <li>
                    <Link to="/favourite">
                      <img
                        className="sideBarIcon"
                        src="/images/Generic-heart.svg"
                        alt="favrt"
                      />
                      <span className="sameStl ">Favorites</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <Dropdown
                        className="showDtl Notification position-relative"
                        show={dropdownStates[1].isOpen}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={() => handleMouseLeave(1)}
                      >
                        <Dropdown.Toggle id="dropdown-basic">
                          <img
                            className="sideBarIcon"
                            src="/images/noun-bell.svg"
                            alt="home"
                          />
                          <span className="sameStl ">Notifications</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <div className="ntfHdr d-flex justify-content-between align-items-center p-3 pb-0">
                            <p className="hding">Notifications</p>
                            <Button onClick={handleCloseNotifications} className="btnSimple">
                              <img src="/images/close-Icon.svg" alt="icon" />
                            </Button>
                          </div>
                          <hr />
                          <p className="whoDay">3 New Notifications</p>
                          <div className="Notifctns">
                            <Dropdown.Item href="#" className="notificationNew">
                              <div>
                                <p className="newNft">
                                  Your variation just got an update!
                                </p>
                                <span className="newNft">
                                  <strong className="NftNmbr">
                                    Wardrobe 1
                                  </strong>{" "}
                                  has 4 new items you would like
                                </span>
                              </div>
                              <h4 className="tagNft">New</h4>
                            </Dropdown.Item>
                            <Dropdown.Item href="#" className="notificationNew">
                              <div>
                                <p className="newNft">
                                  Your variation just got an update!
                                </p>
                                <span className="newNft">
                                  <strong className="NftNmbr">
                                    Wardrobe 1
                                  </strong>{" "}
                                  has 4 new items you would like
                                </span>
                              </div>
                              <h4 className="tagNft">New</h4>
                            </Dropdown.Item>
                            <Dropdown.Item href="#" className="notificationNew">
                              <div>
                                <p className="newNft">
                                  Your variation just got an update!
                                </p>
                                <span className="newNft">
                                  <strong className="NftNmbr">
                                    Wardrobe 1
                                  </strong>{" "}
                                  has 4 new items you would like
                                </span>
                              </div>
                              <h4 className="tagNft">New</h4>
                            </Dropdown.Item>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Link>
                  </li>
                </>
              )}
            </div>
            <li>
              <Link to="#" className="userPrf">
                <Dropdown
                  className="showDtl mainProfile"
                  show={dropdownStates[2].isOpen}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={() => handleMouseLeave(2)}
                >
                  <Dropdown.Toggle id="dropdown-basic">
                    <img
                      src={photo}
                      alt="Profile Icon"
                      style={{
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '50%' 
                      }}
                    />
                    <span className="prnName fw-bold ">{name}</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {<Dropdown.Item href="#" className="profiledrp" onClick={handleShowEditProfileModal}>
                      <img
                        className="me-3"
                        src="/images/profile-icon.svg"
                        alt="icon"
                      />
                      Profile
                    </Dropdown.Item>}
                    <Dropdown.Item href="#" className="profiledrp">

                      <Button className="btn-sm btn-light" onClick={Logout}>
                        <img
                          className="me-3"
                          src="/images/logout-icon.svg"
                          alt="icon"
                        />
                        <b>Sign Out</b>
                      </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Link>
            </li>
          </ul>
        </Navbar>
      </div>

      <EditProfileModal show={showEditProfileModal} onHide={() => setShowEditProfileModal(false)} />
    </>
  );
};

export default UserSideBar;
