const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="rounded-full border p-[2px] w-16 h-16"
        src="https://d14u0p1qkech25.cloudfront.net/291140541_ec032d98-da31-4999-9055-567e77c2ebed_thumbnail_250x250"
        alt=""
      />

      <div className="flex-1 mx-4">
        <h2 className="font-medium">aswin_asok</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
