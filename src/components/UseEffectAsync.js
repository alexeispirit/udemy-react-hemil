import React, { useState, useEffect } from "react";

const initProfile = {
  followers: null,
  publicRepos: null
};

function UseEffectAsync() {
  const [profile, setProfile] = useState(initProfile);

  const getProfile = async () => {
    const response = await fetch("https://api.github.com/users/alexeispirit");
    const json = await response.json();

    setProfile({
      followers: json.followers,
      publicRepos: json.public_repos
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <h2>Fetch Data</h2>
      <h3>{`followers: ${profile.followers}, repos: ${profile.publicRepos}`}</h3>
    </>
  );
}

export default UseEffectAsync;
