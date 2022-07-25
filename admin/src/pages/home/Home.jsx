import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useState } from "react";
import axios from "axios"
import { useMemo } from "react";

export default function Home() {

  const MONTHS = useMemo(()=>[
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
    ],[]
    );
  const [userStats,setUserStats]=useState([])

  useEffect(()=>{
    const getStats=async ()=>{ 
      try{
      const res=await axios.get("users/stats",{
      headers:{
        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTVmYzAwM2ZiYTk5ODE4YTA4YmE5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDA4NDE4MywiZXhwIjoxNjU0Njg4OTgzfQ.I5G4ZQhVuEMeG3O3Pu5ynrc724YGkhiMewI48DBy8ww"
      }
    })
    const statsList = res.data.sort(function (a, b) {
      return a._id - b._id;
    });
    console.log(res.data)
    statsList.map((item) =>
      setUserStats((prev) => [
        ...prev,
        { name: MONTHS[item._id - 1], "New User": item.total },
      ])
    );
  } catch (err) {
    console.log(err);
  }
};
getStats();
}, [MONTHS]);



  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
