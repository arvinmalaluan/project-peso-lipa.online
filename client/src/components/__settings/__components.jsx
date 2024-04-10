import { useContext } from "react";
import svgExports from "../../assets/svg/exports";
import { InputWithIcon, InputWithLabel, TextAreaWithLabel, TabLink } from "./__sub_components"; // prettier-ignore
import authenticatedContext from "../../context/authentication/authenticatedContext";
import { updateProfileFetch } from "../../apis/patch.api";
import { createProfileFetch } from "../../apis/post.api";

export const PublicProfile = () => {
  const { profile, profFound, setProfFound, updateProfile } =
    useContext(authenticatedContext);

  function createUserProfile() {
    console.log(profile);

    createProfileFetch(profile)
      .then((data) => {
        if (data.success) {
          console.log(data);
          setProfFound(true);
        } else {
          console.log(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function updateUserProfile() {
    updateProfileFetch(profile, profile.fkid_account)
      .then((data) => {
        if (data.success) {
          console.log(data);
        } else {
          console.log(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    profile && (
      <div className="px-0 md:pl-8 md:pr-4">
        <p className="mb-1 text-sm font-semibold">Public Profile</p>
        <hr />

        <div className="grid grid-cols-1 sm:grid-cols-3 pb-[50px]">
          <div className="col-span-2 pr-4 mt-4">
            <div className="block col-span-1 pt-4 sm:hidden">
              <div className="relative flex flex-col mb-4">
                <p className="text-sm font-[500] mb-4">Profile Picture</p>
                <input
                  type="text"
                  className="px-4 py-2 text-sm bg-gray-100 rounded-md outline-none"
                  id="s-name"
                  hidden
                />
                <img
                  className="w-[40%] rounded-full"
                  src="https://cdn.shopify.com/s/files/1/1140/8354/files/Aang_the_last_airbender_480x480.jpg?v=1661733149"
                  alt="Rounded avatar"
                />
                <button className="absolute bottom-[20px] h-10 p-2 w-10 bg-gray-100 rounded-full ">
                  <svgExports.CameraIcon />
                </button>
              </div>
            </div>

            <InputWithLabel
              label="Name"
              value={profile.name}
              name="name"
              onchange={updateProfile}
            />
            <TextAreaWithLabel
              label="Bio"
              id="s-bio"
              value={profile.bio}
              name="bio"
              onchange={updateProfile}
            />
            <InputWithLabel
              label="Current Address"
              value={profile.location}
              name="location"
              onchange={updateProfile}
            />
            <InputWithLabel
              label="Portfolio Link"
              value={profile.portfolio_link}
              name="portfolio_link"
              onchange={updateProfile}
            />
            <InputWithLabel
              label="Gender"
              value={profile.gender}
              name="gender"
              onchange={updateProfile}
            />
            <InputWithLabel
              label="Educational Attainment"
              value={profile.educational_attainment}
              name="educational_attainment"
              onchange={updateProfile}
            />

            <p className="mt-8 mb-1 text-sm font-semibold">Social Links</p>
            <hr />

            <div className="mt-4">
              <InputWithIcon
                placeholder="https://facebook.com"
                value={profile.fb_link}
                icon={<svgExports.FacebookIcon />}
                name="fb_link"
                onchange={updateProfile}
              />
              <InputWithIcon
                placeholder="https://instagram.com"
                value={profile.ig_link}
                icon={<svgExports.InstagramIcon />}
                name="ig_link"
                onchange={updateProfile}
              />
              <InputWithIcon
                placeholder="https://linkedin.com"
                value={profile.ln_link}
                icon={<svgExports.LinkedInIcon />}
                name="ln_link"
                onchange={updateProfile}
              />
            </div>

            <button
              className="px-4 py-2 mt-4 text-xs text-white rounded bg-secondary-900"
              onClick={profFound ? updateUserProfile : createUserProfile}
            >
              {profFound ? "Update Profile" : "Create Profile"}
            </button>
          </div>

          <div className="hidden col-span-1 pt-4 pl-8 sm:block">
            <div className="relative flex flex-col mb-4">
              <p className="text-sm font-[500] mb-4">Profile Picture</p>
              <input
                type="text"
                className="px-4 py-2 text-sm bg-gray-100 rounded-md outline-none"
                id="s-name"
                hidden
              />
              <img
                className="w-[75%] rounded-full"
                src="https://cdn.shopify.com/s/files/1/1140/8354/files/Aang_the_last_airbender_480x480.jpg?v=1661733149"
                alt="Rounded avatar"
              />
              <button className="absolute bottom-[20px] h-10 p-2 w-10 bg-gray-100 rounded-full ">
                <svgExports.CameraIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export const TabLinks = () => {
  return (
    <div className="hidden col-span-1 md:block">
      <TabLink
        icon={<svgExports.ProfileIcon />}
        name="Public Profile"
        id="public-profile"
      />
      <TabLink icon={<svgExports.SettingsIcon />} name="Account" id="account" />
      <TabLink
        icon={<svgExports.FilterIcon />}
        name="Appearances"
        id="appearances"
      />
      <TabLink
        icon={<svgExports.NotifOnIcon />}
        name="Notifications"
        id="notifications"
      />
    </div>
  );
};
