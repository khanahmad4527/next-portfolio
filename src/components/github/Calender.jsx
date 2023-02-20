import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

function Calender() {
  const selectLast12Months = (contributions) => {
    const today = new Date();
    const startTimestamp = new Date(
      today.getFullYear(),
      today.getMonth() - 11,
      1
    ).getTime();
    const endTimestamp =
      new Date(today.getFullYear(), today.getMonth() + 1, 1).getTime() - 1;

    return contributions.filter((day) => {
      const contributionTimestamp = new Date(day.date).getTime();

      return (
        contributionTimestamp >= startTimestamp &&
        contributionTimestamp <= endTimestamp
      );
    });
  };

  return (
    <div className="github-main">
      <h1 className="github-heading">GitHub</h1>
      <div className="github-calender">
        <GitHubCalendar
          transformData={selectLast12Months}
          username="khanahmad4527"
          color={"#005685"}
          blockSize={20}
          fontSize={20}
          hideColorLegend
          hideTotalCount
          style={{ padding: "10px 20px" }}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      </div>
      <div className="github-stats">
        <div>
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=khanahmad4527&theme=sea&hide_border=true&border_radius=10&date_format=j%20M%5B%20Y%5D&background=005685"
            alt="Ahmad Stats"
            id="github-streak-stats"
          />
        </div>
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=khanahmad4527&title_color=005685&text_color=005685&icon_color=005685&bg_color=ffffff&border_radius=10&border_color=005685"
            alt="Ahmad Language"
            id="github-top-langs"
          />
        </div>
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api?username=khanahmad4527&show_icons=true&title_color=005685&text_color=005685&icon_color=005685&bg_color=ffffff&border_radius=10&border_color=005685"
            alt="Ahmad Stats"
            id="github-stats-card"
          />
        </div>
      </div>
    </div>
  );
}

export default Calender;
