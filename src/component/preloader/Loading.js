import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const Loading = ({ loading }) => {
  return (
    <div className="text-lg text-center py-6">
      <SyncLoader
        color="blue"
        loading={loading}
        height={30}
        width={3}
        radius={3}
        margin={2}
      />
    </div>
  );
};

export default Loading;
