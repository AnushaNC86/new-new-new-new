import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { restaurantListAsyncThunk } from "../../redux/reducers/restaurantListSlice";
import "./restaurantList.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import RestaurantSubHeader from "../../components/restaurantSubHeader/restaurantSubHeader";

const RestaurantList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let data = useSelector((state: any) => state.restaurantList);
  let restDetails = data?.data?.pageResults;

  useEffect(() => {
    dispatch(restaurantListAsyncThunk());
    console.log(restDetails);
  }, []);

  //rest routing
  const goToRestaurantPageFn = (i: any) => {
    navigate("/restaurantDetails");
    localStorage.setItem("id", i);
  };

  //mapping restauarant
  let e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  let e2 = e.splice(0, 3);

  //accordian mui

  //open checkbox state
  const [openNowValue, setopenNowValue] = useState(false);

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const [selectedValue2, setSelectedValue2] = useState("");

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue2(event.target.value);
  };

  const [selectedValue3, setSelectedValue3] = useState("");

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue3(event.target.value);
  };

  const resetFn = () => {
    setSelectedValue("");
    setSelectedValue2("");
    setSelectedValue3("");
  };

  return (
    <>
      <div className="restaurantListContainer">
        {/* <div className="searchBarDiv">
                    <form className='placeDate'>
                        <img src={require("../../assets/icn_pin.png")} className='pinImage' alt='pin' />
                        <input type='text' placeholder='' className='placeName' />
                        <img src={require('../../assets/icn_gps_indicator.png')} alt="" className='gps' />
                    </form>
                    <form className='foodForm'>
                        <img src={require("../../assets/icn_search_home copy.png")} className='searchIcon' alt="glass" />
                        <input type='text' placeholder='Search your restaurant or cuisines' className='searchFeild' />
                    </form>
                    <div className="datePicker">
                        <img src={require("../../assets/now_button.png")} alt="" className='dateNow' />
                    </div>
                </div> */}
        {/* routeDIV */}
        {/* <div className="routeDiv">
                    Home &#62; UAE  &#62; Explore  &#62;  Great breakfasts
                </div> */}
        <RestaurantSubHeader />
        {/* restaurant list div  */}
        <div className="restaurantContent">
          <div className="topSectionRC">
            <span className="rcHeading">Breakfast in Dubai</span>
            <div className="sort">
              <div className="listBy">
                <span className="option">List By :</span>
                <span className="optionList">All</span>
              </div>
              <div className="sortBy">
                <span className="option">Sort By :</span>
                <span className="optionList">Rating &#8642;</span>
              </div>
            </div>
          </div>
          <div className="bottomSectionRC">
            <form className="leftSideRC">
              <div className="filterHead">
                <span className="filterText">Filter</span>
                <button className="resetText" onClick={resetFn}>
                  Reset All
                </button>
              </div>
              <div className="filterContent">
                <Accordion
                  sx={{
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<span>+</span>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    {/* <Typography>Accordion 1</Typography> */}
                    <span className="accordian1Styling">
                      Time & Average meal cost
                    </span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="openstatusDiv">
                      <span className="showResText">Show restaurant with</span>
                      <div
                        className="openCloseBox"
                        onClick={() => setopenNowValue(!openNowValue)}
                      >
                        {openNowValue ? (
                          <img
                            src={require("../../assets/filter_checkbox.png")}
                            alt="check"
                            className="checkBox"
                          />
                        ) : (
                          <div className="checkBox"></div>
                        )}
                        {openNowValue ? (
                          <span className="OpenNowText">Open Now</span>
                        ) : (
                          <span className="OpenNowTextDisabled">Open Now</span>
                        )}
                      </div>
                    </div>
                    <div className="deliveryTimeDiv">
                      <span className="headingStyling">Delivery Time</span>
                      <div className="optionOne">
                        <Radio
                          checked={selectedValue === "30"}
                          onChange={handleChange}
                          value="30"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "30" }}
                          sx={{
                            color: "#F78713",
                            "&.Mui-checked": {
                              color: "#F78713",
                            },
                          }}
                        />
                        <span className="optionTextStyling">30 min</span>
                      </div>
                      <div className="optionTwo">
                        <Radio
                          checked={selectedValue === "45"}
                          onChange={handleChange}
                          value="45"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "45" }}
                          sx={{
                            color: "#F78713",
                            "&.Mui-checked": {
                              color: "#F78713",
                            },
                          }}
                        />
                        <span className="optionTextStyling">45min</span>
                      </div>
                      <div className="optionThree">
                        <Radio
                          checked={selectedValue === "60"}
                          onChange={handleChange}
                          value="60"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "60" }}
                          sx={{
                            color: "#F78713",
                            "&.Mui-checked": {
                              color: "#F78713",
                            },
                          }}
                        />
                        <span className="optionTextStyling">60 min</span>
                      </div>
                    </div>
                    <div className="avgMealCostDiv">
                      <span className="headingStyling">Average Meal Cost</span>
                      <div className="optionOne">
                        <Radio
                          checked={selectedValue2 === "30AED"}
                          onChange={handleChange2}
                          value="30AED"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "30AED" }}
                          sx={{
                            color: "#F78713",
                            "&.Mui-checked": {
                              color: "#F78713",
                            },
                          }}
                        />
                        <span className="optionTextStyling">Upto 30 AED</span>
                      </div>
                      <div className="optionTwo">
                        <Radio
                          checked={selectedValue2 === "60AED"}
                          onChange={handleChange2}
                          value="60AED"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "60AED" }}
                          sx={{
                            color: "#F78713",
                            "&.Mui-checked": {
                              color: "#F78713",
                            },
                          }}
                        />
                        <span className="optionTextStyling">Upto 60 AED</span>
                      </div>
                      <div className="optionThree">
                        <Radio
                          checked={selectedValue2 === "100AED"}
                          onChange={handleChange2}
                          value="100AED"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "100AED" }}
                          sx={{
                            color: "#F78713",
                            "&.Mui-checked": {
                              color: "#F78713",
                            },
                          }}
                        />
                        <span className="optionTextStyling">Upto 100 AED</span>
                      </div>
                    </div>
                    <div className="minimumOrderCostDiv">
                      <span className="headingStyling">Minimum Order</span>
                      <div className="optionOne">
                        <Radio
                          checked={selectedValue3 === "60AED"}
                          onChange={handleChange3}
                          value="60AED"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "60AED" }}
                          sx={{
                            color: "#F78713",
                            "&.Mui-checked": {
                              color: "#F78713",
                            },
                          }}
                        />
                        <span className="optionTextStyling">Upto 60 AED</span>
                      </div>
                      <div className="optionTwo">
                        <Radio
                          checked={selectedValue3 === "100AED"}
                          onChange={handleChange3}
                          value="100AED"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "100AED" }}
                          sx={{
                            color: "#F78713",
                            "&.Mui-checked": {
                              color: "#F78713",
                            },
                          }}
                        />
                        <span className="optionTextStyling">Upto 100 AED</span>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    boxShadow: "none",
                    borderBottom: "1px solid #E1E1E1",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<span>+</span>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    {/* <Typography>Accordion 2</Typography> */}
                    <span className="accordian2Styling">Cuisine</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="CuisineList">
                      <div>
                        <Checkbox
                          sx={{
                            color: "#F78713",
                            "&.Mui-checked": {
                              color: "#F78713",
                            },
                          }}
                          value="Indian"
                        />
                        <span>Indian</span>
                      </div>
                      <div>
                        <Checkbox
                          sx={{
                            color: "#F78713",
                            "&.Mui-checked": {
                              color: "#F78713",
                            },
                          }}
                          value="Chinese"
                        />
                        <span>Chinese</span>
                      </div>
                      <div>
                        <Checkbox
                          sx={{
                            color: "#F78713",
                            "&.Mui-checked": {
                              color: "#F78713",
                            },
                          }}
                          value="Continental"
                        />
                        <span>Continental</span>
                      </div>
                      <div>
                        <Checkbox
                          sx={{
                            color: "#F78713",
                            "&.Mui-checked": {
                              color: "#F78713",
                            },
                          }}
                          value="Sea Food"
                        />
                        <span>Sea Food</span>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <button className="ApplyButtonDiv">APPLY</button>
              </div>
            </form>
            <div className="rightSideRC">
              {/* {
                                restDetails?.map((e: any, i: any) => {
                                    return (
                                        <div className="eachRestaurant" key={i} onClick={() => goToRestaurantPageFn(i)}>
                                            <img className='imageDiv' src={e?.profilePic} alt="profilepic" />
                                            <div className="detailsDiv">
                                                <div className="headDetails">
                                                    <span className='headingRestaurantName'>{e?.restaurantName}</span>
                                                    <span className='restaurantAddress'>{e?.addressDesc}</span>
                                                </div>
                                                <div className="subDetails">
                                                    <span className="cuisine">{e?.restaurantType}</span>
                                                    {e?.opened ? <span className='statusGreen'>Open Now</span> : <span className='statusRed'>Closed</span>}
                                                    <span className="moreDetails">&#8231; 63 mins  &#8231; AED{e?.minimumCost} min order  &#8231; AED{e?.avgMealCost} avg meal cost</span>
                                                </div>
                                            </div>
                                            <div className="ratingDiv">{e?.overAllRating}</div>
                                            <img src={require("../../assets/menu.png")} alt="menu" className='menuButton' />
                                        </div>
                                    );
                                })
                            } */}

              {/* no api so data do rendering this */}
              <div className="rightSideRCList">
                {e2.map((e: any, i: any) => {
                  return (
                    <div
                      className="eachRestaurant"
                      key={i}
                      onClick={() => goToRestaurantPageFn(i)}
                    >
                      <img
                        className="imageDiv"
                        src="https://images.rawpixel.com/image_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY2MTU3Ny13aWtpbWVkaWEtaW1hZ2Uta293YXBlZWouanBn.jpg"
                        alt="profilepic"
                      />
                      <div className="detailsDiv">
                        <div className="headDetails">
                          <span className="headingRestaurantName">
                            Ocean Pearl
                          </span>
                          <span className="restaurantAddress">Manipal</span>
                        </div>
                        <div className="subDetails">
                          <span className="cuisine">Indian</span>
                          <span>Open Now</span>
                          <span className="moreDetails">
                            &#8231; 63 mins &#8231; AED30 min order &#8231;
                            AED60 avg meal cost
                          </span>
                        </div>
                      </div>
                      <div className="ratingDiv">3.5</div>
                      <img
                        src={require("../../assets/menu.png")}
                        alt="menu"
                        className="menuButton"
                      />
                    </div>
                  );
                })}
              </div>

              {/* popuar brands */}

              <div className="popularBrandsDiv">
                <div className="pbHeading">
                  <span className="brandsHeading">Brands Nearby</span>
                  <span className="moreBrandsButton">
                    More{" "}
                    <img src={require("../../assets/right_arrow.png")} alt="" />{" "}
                  </span>
                </div>
                <div className="brandListDiv">
                  {e.map((e: any, i: any) => {
                    return (
                      <div className="eachBrandDiv">
                        <img
                          src={require("../../assets/Bitmap.png")}
                          alt="brandLogo"
                          className="brandLogo"
                        />
                        <span className="brandName">Pizza Hut</span>
                        <span className="brandOutletCount">2 outlets</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rightSideRCList">
                {e.map((e: any, i: any) => {
                  return (
                    <div
                      className="eachRestaurant"
                      key={i}
                      onClick={() => goToRestaurantPageFn(i)}
                    >
                      <img
                        className="imageDiv"
                        src="https://images.rawpixel.com/image_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY2MTU3Ny13aWtpbWVkaWEtaW1hZ2Uta293YXBlZWouanBn.jpg"
                        alt="profilepic"
                      />
                      <div className="detailsDiv">
                        <div className="headDetails">
                          <span className="headingRestaurantName">
                            Ocean Pearl
                          </span>
                          <span className="restaurantAddress">Manipal</span>
                        </div>
                        <div className="subDetails">
                          <span className="cuisine">Indian</span>
                          <span>Open Now</span>
                          <span className="moreDetails">
                            &#8231; 63 mins &#8231; AED30 min order &#8231;
                            AED60 avg meal cost
                          </span>
                        </div>
                      </div>
                      <div className="ratingDiv">3.5</div>
                      <img
                        src={require("../../assets/menu.png")}
                        alt="menu"
                        className="menuButton"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantList;
