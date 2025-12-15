import React from "react";
import Image from "next/image";
import DoctorProfile from "../../assets/images/doctor-profile.png";
import ShareIcon from "../../assets/icons/share.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import LocationIcon from "../../assets/icons/location.svg";
import GlobeIcon from "../../assets/icons/globe.svg";
import StarBoldIcon from "../../assets/icons/star-bold.svg";
import MessageIcon from "../../assets/icons/message.svg";
import DoctorIcon from "../../assets/icons/doctor.svg";
import HouseImage from "../../assets/images/house.png";
import TurtleImage from "../../assets/icons/turtle.svg";
import AssociationImage from "../../assets/images/association.png";

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Doctor Information */}
      <div className="w-full bg-[#F7F2EF] min-h-111.25 p-4 lg:px-50.25">
        <div className="flex flex-row justify-end gap-x-4 mb-4 lg:mb-10">
          <a href="">
            <Image src={ShareIcon} alt="Share icon" className="w-5 h-5" />
            {/* <img src={"../../assets/icons/share.svg"} alt="Share icon" className="w-5 h-5" /> */}
          </a>
          <a href="">
            <Image src={HeartIcon} alt="Heart icon" className="w-5 h-5" />
            {/* <img src={"../../assets/icons/heart.svg"} alt="Heart icon" className="w-5 h-5" />  */}
          </a>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col lg:flex-row lg:gap-x-6">
            <div className="w-full lg:w-50.25 h-auto">
              <Image
                src={DoctorProfile}
                alt="Doctor image"
                className="w-full h-full object-cover rounded-tl-[30%] rounded-br-[30%]"
              />
              {/* <img src={"./../assets/images/doctor-profile.png"} className="w-full h-full object-cover rounded-tl-[30%] rounded-br-[30%]" alt="Doctor image" /> */}
            </div>

            <div>
              <div className="w-full text-center mt-4 lg:text-start">
                <h2 className="text-[#3E3735] text-4xl font-bold">
                  Dr. Meseret
                </h2>
              </div>

              <div className="flex flex-col mt-6 gap-y-2.5">
                <div className="flex flex-row items-center">
                  <Image
                    src={LocationIcon}
                    alt="Location icon"
                    className="w-6 h-6 mt-1 mr-2"
                  />
                  {/* <img
              src={"../../assets/icons/location.svg"}
              alt="Location icon"
              className="w-7 h-7 mt-1 mr-2"
            /> */}
                  <span className="text-[#3E3735] text-[14px] font-semibold leading-5">
                    Virginia, USA |
                  </span>
                </div>
                <div className="flex flex-row items-center">
                  <Image
                    src={GlobeIcon}
                    alt="Globe icon"
                    className="w-5 h-5 mt-1 mr-2"
                  />
                  {/* <img
              src={"../../assets/icons/globe.svg"}
              alt="Globe icon"
              className="w-7 h-7 mt-1 mr-2"
            /> */}
                  <p className="text-[#3E3735] text-[14px] font-semibold leading-5">
                    +1 234 567 890
                  </p>
                </div>{" "}
                <div className="flex flex-row items-center">
                  <Image
                    src={DoctorIcon}
                    alt="Globe icon"
                    className="w-5 h-5 mt-1 mr-2"
                  />
                  {/* <img
              src={"../../assets/icons/globe.svg"}
              alt="Globe icon"
              className="w-7 h-7 mt-1 mr-2"
            /> */}
                  <p className="text-[#3E3735] text-[14px] font-semibold leading-5">
                    25 patients today
                  </p>
                </div>{" "}
                <div className="flex flex-row items-center">
                  <Image
                    src={StarBoldIcon}
                    alt="Star icon"
                    className="w-5 h-5 mt-1 mr-2"
                  />
                  {/* <img
              src={"../../assets/icons/star-bold.svg"}
              alt="Star-Bold icon"
              className="w-7 h-7 mt-1 mr-2"
            /> */}
                  <p className="text-[#3E3735] text-[14px] font-semibold leading-5">
                    4.5 | 200 Reviews | Cardiology
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <Image
                    src={MessageIcon}
                    alt="Message icon"
                    className="w-6 h-6 mt-1 mr-2"
                  />
                  {/* <img
              src={"../../assets/icons/message.svg"}
              alt="Message icon"
              className="w-7 h-7 mt-1 mr-2"
            /> */}
                  <p className="text-[#3E3735] text-[14px] font-semibold leading-5">
                    Message | Book Appointment | Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden text-black lg:flex lg:gap-x-4">
            <button className="bg-[#3E3735] rounded-2xl w-fit h-fit flex items-center justify-center px-4 py-2 text-white">
              Book now
            </button>
            <button className="bg-gray-500 rounded-full w-10 h-10 flex items-center justify-center ">
              Bo
            </button>
          </div>
        </div>
      </div>

      <div className=" text-black! p-4 lg:px-50.25">
        {/* Tab */}
        <div className="flex flex-row text-[18px] overflow-x-scroll scrollbar-hide gap-x-3.5 lg:mb-15">
          <p className="underline">Home</p>
          <p>|</p>
          <p className="">About</p>
          <p>|</p>
          <p>Service</p>
          <p>|</p>
          <p>Hours</p>
          <p>|</p>
          <p>Check-in</p>
          <p>|</p>
          <p>Home</p>
          <p>|</p>
          <p>Home</p>
          <p>|</p>
          <p>Home</p>
          <p>|</p>
          <p>Home</p>
        </div>

        {/* Descrption */}
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-x-6">
          <div className="flex flex-col gap-y-6">
            <h4 className="text-2xl font-bold mt-6 lg:mt-0">Description</h4>
            <p className="text-[18px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              sit nesciunt quo est laborum sint iusto, cum et aliquam recusandae
              eos dicta reprehenderit? Consectetur nam sunt repellendus
              necessitatibus ad eveniet. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Fuga, quaerat.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              sit nesciunt quo est laborum sint iusto, cum et aliquam recusandae
              eos dicta reprehenderit? Consectetur nam sunt repellendus
              necessitatibus ad eveniet. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Fuga, quaerat.
            </p>
            <a href="#" className="text-[#3E3735] underline">
              Read more
            </a>
          </div>
          <Image
            src={HouseImage}
            alt="House image"
            className="w-full h-auto mt-6 lg:mt-0"
          />
          {/* <img
            src={"../../assets/images/house.png"}
            alt="House image"
            className="w-full h-auto mt-6 lg:mt-0"
          /> */}
        </div>

        {/* Additional Information*/}
        <div className="flex flex-col mt-6! lg:gap-y-6 lg:mt-15!">
          <h4 className="text-2xl font-bold">ADDITIONAL INFORMATION</h4>
          <div className="flex flex-col gap-y-6!">
            <div className="w-full bg-white! shadow-lg! rounded-lg! text-[18px]! p-6 flex flex-col gap-y-3! lg:p-10!">
              <div className="w-full flex flex-col lg:flex-row lg:gap-x-36!">
                <h4 className="font-semibold! w-[9%]!">Specialty</h4>
                <p className="mt-2! lg:mt-0!">Plastic Surgeon</p>
              </div>
              <hr className="border border-[#E4CFC6]! my-4" />
              <div className="w-full flex flex-col lg:flex-row lg:gap-x-36!">
                <h4 className="font-semibold! w-[9%]!">Role</h4>
                <ul className="list-disc list-inside mt-2! lg:mt-0!">
                  <li className="">
                    Senior surgeon in the Department of Plastic Surgery at Assaf
                    Harofeh Hospital;{" "}
                  </li>
                  <li>
                    Director of a private clinic in the Ramat HaHayal
                    neighborhood of Tel Aviv.
                  </li>
                </ul>
              </div>
              <hr className="border border-[#E4CFC6]! my-4" />
              <div className="w-full flex flex-col lg:flex-row lg:gap-x-36!">
                <h4 className="font-semibold! w-[9%]!">Experience</h4>
                <ul className="list-disc list-inside mt-2! lg:mt-0!">
                  <li className="">
                    Senior surgeon in the Department of Plastic Surgery at Assaf
                    Harofeh Hospital;{" "}
                  </li>
                  <li>
                    Director of a private clinic in the Ramat HaHayal
                    neighborhood of Tel Aviv.
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full bg-white! shadow-lg! rounded-lg! text-[18px]! p-6 flex flex-col gap-y-3! lg:p-10!">
              <div className="w-full flex flex-col lg:flex-row lg:gap-x-36!">
                <h4 className="font-semibold! w-[9%]!">Clinics</h4>
                <div className="flex flex-row justify-between"></div>
              </div>
              <hr className="border border-[#E4CFC6]! my-4" />
              <div>
                <div className="w-full flex flex-col gap-y-4! lg:flex-row lg:gap-x-20!">
                  <div className="flex flex-row w-full lg:w-[18%]!">
                    <h4 className="font-semibold!">Tel Aviv</h4>
                    <Image
                      src={LocationIcon}
                      alt="Location icon"
                      className="w-5! h-5! mt-1! ml-2!"
                    />
                    <Image
                      src={TurtleImage}
                      alt="Location icon"
                      className="w-4.5! h-5! mt-1! ml-2!"
                    />
                    {/* <img
                      src={"app/assets/icons/location.svg"}
                      alt="Location icon"
                      className="cmt-1! ml-2!"
                    />
                    <img
                      src={"app/assets/icons/location.svg"}
                      alt="Location icon"
                      className="w-5! h-5! mt-1! ml-2!"
                    /> */}
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-row gap-x-2!">
                      <span>Barzel 21 str. </span>
                      <span>|</span>
                      <span>4th floor, B entrance</span>
                      <span>|</span>
                      <span>
                        <Image
                          src={LocationIcon}
                          alt="Location icon"
                          className="w-5! h-5! mt-1!"
                        />
                      </span>{" "}
                      <span>052-456 1231 PM</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-y-2! mt-4! lg:flex-row lg:gap-x-20! lg:mt-3!">
                  <p className="w-full font-semibold! lg:w-[18%]! ">
                    Reception Hours
                  </p>
                  <div>
                    <p>Tue 10:00-17:00</p>
                    <p>Thu 10:00-17:00</p>
                    <p>Fri 10:00-17:00</p>
                  </div>
                </div>
              </div>
              <hr className="border border-[#E4CFC6]! my-4" />
              <div>
                <div className="w-full flex flex-col gap-y-4! lg:flex-row lg:gap-x-20!">
                  <div className="flex flex-row w-full lg:w-[18%]!">
                    <h4 className="font-semibold!">Kfar Saba</h4>
                    <Image
                      src={LocationIcon}
                      alt="Location icon"
                      className="w-5! h-5! mt-1! ml-2!"
                    />
                    <Image
                      src={TurtleImage}
                      alt="Location icon"
                      className="w-4.5! h-5! mt-1! ml-2!"
                    />
                    {/* <img
                      src={"app/assets/icons/location.svg"}
                      alt="Location icon"
                      className="mt-1! ml-2!"
                    />
                    <img
                      src={"app/assets/icons/location.svg"}
                      alt="Location icon"
                      className="w-5! h-5! mt-1! ml-2!"
                    /> */}
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-row gap-x-2!">
                      <span>Barzel 21 str. </span>
                      <span>|</span>
                      <span>4th floor, B entrance</span>
                      <span>|</span>
                      <span>
                        <Image
                          src={LocationIcon}
                          alt="Location icon"
                          className="w-5! h-5! mt-1"
                        />
                      </span>{" "}
                      <span>052-456 1231 PM</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-y-2! mt-4! lg:flex-row lg:gap-x-20! lg:mt-3!">
                  <p className="w-full font-semibold! lg:w-[18%]! ">
                    Reception Hours
                  </p>
                  <div>
                    <p>Sun 10:00-17:00</p>
                    <p>Mon 10:00-17:00</p>
                    <p>Wed 10:00-17:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-white! shadow-lg! rounded-lg! text-[18px]! p-6 flex flex-col gap-y-3! lg:p-10!">
              <h3 className="font-semibold! text-[18px]!">Education</h3>
              <div className="w-full flex flex-col">
                <h4 className="font-semibold! w-fit">General Medicine, MD</h4>
                <p className="mt-2! lg:mt-0!">
                  tel-aviv university | 2008-2018
                </p>
              </div>
              <hr className="border border-[#E4CFC6]! my-4!" />
              <div className="w-full flex flex-col">
                <h4 className="font-semibold! w-fit">
                  Business Administration MBA
                </h4>
                <p className="mt-2! lg:mt-0!">
                  tel-aviv university | 2008-2018
                </p>
              </div>
            </div>

            <div className="w-full bg-white! shadow-lg! rounded-lg! text-[18px]! p-6 flex flex-col gap-y-3! lg:p-10!">
              <h3 className="font-semibold! text-[18px]!">
                Professional Associations
              </h3>
              <div className="w-full flex flex-row gap-x-10!">
                <Image src={AssociationImage} alt="Assocation Image" />
                <p className="mt-2! lg:mt-0!">חבר באיגוד הישראלי</p>
              </div>
              <hr className="border border-[#E4CFC6]! my-4!" />
              <div className="w-full flex flex-row gap-x-10!">
                <Image src={AssociationImage} alt="Assocation Image" />
                <p className="mt-2! lg:mt-0!">חבר באיגוד הישראלי</p>
              </div>
            </div>

            <div className="w-full bg-white! shadow-lg! rounded-lg! text-[18px]! p-6 flex flex-col gap-y-3! lg:p-10!">
              <h3 className="font-semibold! text-[18px]!">
                Insurance Companies & HMOs
              </h3>
              <div className="w-full flex flex-col lg:flex-row gap-x-10!">
                <Image src={AssociationImage} alt="Assocation Image" />
                <Image src={AssociationImage} alt="Assocation Image" />
                <Image src={AssociationImage} alt="Assocation Image" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-2xl">Staff Members</h4>
              <div className="w-full bg-white! shadow-lg! rounded-lg! text-[18px]! p-6 flex flex-col gap-y-3! lg:p-10! lg:flex-row lg:gap-x-6">
                <div className="full lg:w-1/3">
                  <div className="flex flex-row">
                    <Image
                      src={DoctorProfile}
                      alt="Doctor Image"
                      className="w-36 h-36 object-cover rounded-tl-[30%] rounded-br-[30%]"
                    />
                    <div className="flex flex-col justify-between ml-4">
                      <div>
                        <h4 className="font-semibold!">Dr. Meseret</h4>
                        <p className="text-[#524B46] text-[16px]">
                          Plastic Surgeon
                        </p>
                      </div>
                      <div className="flex flex-row text-[16px]!">
                        <Image
                          src={StarBoldIcon}
                          alt="Star Icon"
                          className="w-3! h-3! mt-1! mr-2!"
                        />
                        4.5 | 200 Reviews
                      </div>
                    </div>
                  </div>
                  <button className="w-full border! mt-4! rounded-2xl! text-[16px]!">See Profile</button>
                </div>
                             <div className="full lg:w-1/3">
                  <div className="flex flex-row">
                    <Image
                      src={DoctorProfile}
                      alt="Doctor Image"
                      className="w-36 h-36 object-cover rounded-tl-[30%] rounded-br-[30%]"
                    />
                    <div className="flex flex-col justify-between ml-4">
                      <div>
                        <h4 className="font-semibold!">Dr. Meseret</h4>
                        <p className="text-[#524B46] text-[16px]">
                          Plastic Surgeon
                        </p>
                      </div>
                      <div className="flex flex-row text-[16px]!">
                        <Image
                          src={StarBoldIcon}
                          alt="Star Icon"
                          className="w-3! h-3! mt-1! mr-2!"
                        />
                        4.5 | 200 Reviews
                      </div>
                    </div>
                  </div>
                  <button className="w-full border! mt-4! rounded-2xl! text-[16px]!">See Profile</button>
                </div>
                             <div className="full lg:w-1/3">
                  <div className="flex flex-row">
                    <Image
                      src={DoctorProfile}
                      alt="Doctor Image"
                      className="w-36 h-36 object-cover rounded-tl-[30%] rounded-br-[30%]"
                    />
                    <div className="flex flex-col justify-between ml-4">
                      <div>
                        <h4 className="font-semibold!">Dr. Meseret</h4>
                        <p className="text-[#524B46] text-[16px]">
                          Plastic Surgeon
                        </p>
                      </div>
                      <div className="flex flex-row text-[16px]!">
                        <Image
                          src={StarBoldIcon}
                          alt="Star Icon"
                          className="w-3! h-3! mt-1! mr-2!"
                        />
                        4.5 | 200 Reviews
                      </div>
                    </div>
                  </div>
                  <button className="w-full border! mt-4! rounded-2xl! text-[16px]!">See Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
