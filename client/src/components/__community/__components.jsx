import svgExports from "../../assets/svg/exports";

export const RecentPost = (props) => {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-4 h-4 rounded-full"
        src="https://cdn.shopify.com/s/files/1/1140/8354/files/Aang_the_last_airbender_480x480.jpg?v=1661733149"
        alt="Rounded avatar"
      />
      <p className="font-[400] text-xs">why do birds suddenly appear?</p>
    </div>
  );
};

export const Post = (props) => {
  return (
    <div className="col-span-7 px-4 sm:col-span-4 lg:col-span-4 xl:col-span-3 sm:pl-0 md:col-span-4 sm:pr-8 xl:pr-0 h-100">
      <div className="my-4">
        <input
          type="text"
          placeholder="What is on your mind?"
          className="w-full px-4 py-2 text-sm bg-gray-100 rounded-full"
        />
      </div>

      <div className="border rounded">
        <div className="flex gap-2 p-4 pb-0">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="https://cdn.shopify.com/s/files/1/1140/8354/files/Aang_the_last_airbender_480x480.jpg?v=1661733149"
              alt="Rounded avatar"
            />
          </div>

          <div className="w-full ">
            <p className="text-sm">Arvin Malaluan</p>
            <p className="text-xs text-[gray]">10 mins. ago</p>
          </div>
          <div className="flex gap-3">
            <button className="w-4 h-4">
              <svgExports.MoreButton />
            </button>
            <button className="w-4 h-4">
              <svgExports.CloseIcon />
            </button>
          </div>
        </div>

        <p className="px-4 mt-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sit
          fugit tempora aperiam, optio quam aspernatur laborum reprehenderit
          dicta impedit.
        </p>

        <div>
          <img
            src="https://66.media.tumblr.com/2b541e70a482b5882f610e88d645ee23/tumblr_o8nixwzuhj1t08v6fo1_500.gif"
            alt=""
            className="w-full my-2"
          />
        </div>

        <div className="flex items-center gap-3 p-4">
          <button className="flex-shrink-0 w-8 h-8 p-2 bg-gray-100 rounded-full">
            <svgExports.LikeIcon />
          </button>
          <button className="flex-shrink-0 w-8 h-8 p-2 bg-gray-100 rounded-full">
            <svgExports.DislikeIcon />
          </button>
          <input
            type="text"
            placeholder="Comment your thoughts here"
            className="w-full px-4 py-2 text-xs bg-gray-100 rounded-full outline-none"
          />
        </div>
      </div>
    </div>
  );
};
