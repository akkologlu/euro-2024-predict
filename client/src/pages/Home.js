import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTeamsByGroup } from "../actions/TeamActions";

function Home() {
  const { user } = useSelector((state) => state.authReducer.authData);

  const [group, setGroup] = useState("A");
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchData(group);
  }, [group]);

  const changeGroupName = (e) => {
    setGroup(e.target.value);
  };
  const fetchData = async (group) => {
    const data = await getTeamsByGroup(group);
    setTeams(data);
  };

  return (
    <div>
      {user.name}

      <button>
        <select onChange={changeGroupName}>
          <option value="A">Group A</option>
          <option value="B">Group B</option>
          <option value="C">Group C</option>
          <option value="F">Group F</option>
        </select>
      </button>

      {teams &&
        teams.map((team) => (
          <div key={team._id}>
            <h1>{team.name}</h1>
            <h1>{team.group}</h1>
          </div>
        ))}
    </div>
  );
}

export default Home;
