import React, { useState } from "react";
import { RiImageEditLine } from "react-icons/ri";

const ProfileUpload = () => {

  const [profile, setProfile] = useState('/images/dashboard/default-profile.png');

  const handleChangeProfle = (event) => {
    if (event.target.files.length == 0) {
      setProfile('/images/dashboard/default-profile.png')
    }
    else {
      setProfile(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <React.Fragment>
      <div className="flex md:flex-row sm:flex-col items-center md:space-x-3 sm:space-x-0">
        <div className="h-[100px] w-[100px] rounded-full flex items-center justify-center overflow-clip ring-4 ring-ascent relative group">
          <div className="h-full w-full z-10 absolute bg-black bg-opacity-10 hidden group-hover:block transition duration-300 ease-in-out group-hover:ease-in-out">
            <input onChange={(event) => handleChangeProfle(event)} type="file" className="h-full w-full cursor-pointer opacity-0 absolute" />
            <div className="flex flex-col space-y-2 items-center justify-center h-full w-full">
              <RiImageEditLine size={20} />
              <p className="font-medium text-xs">Edit Image</p>
            </div>
          </div>
          <img src={profile} alt="profile-img" />
        </div>
        <div>
          <button className="btn-primary-md">Upload Image</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProfileUpload;