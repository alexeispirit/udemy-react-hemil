import React, { useState } from "react";

import useCustomFetch from "../hooks/useCustomFetch";

function UseCustonFetchHook() {
  const [url, setUrl] = useState(null);
  const [data, loading, error] = useCustomFetch(url);

  const getFollowers = e => {
    if (e.key === "Enter") {
      setUrl(`https://api.github.com/users/${e.target.value}`);
    }
  };

  return (
    <>
      <h2>
        GitId:
        <input onKeyPress={getFollowers} />
        {loading && url && <div>Loading....</div>}
        {!loading && data && data.rData && data.rData.followers && (
          <div>followers: {data.rData.followers}</div>
        )}
        {error && <div>error: {error}</div>}
      </h2>
    </>
  );
}

export default UseCustonFetchHook;
