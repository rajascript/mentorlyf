import React from "react";
import ReactApexChart from "react-apexcharts";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Header from "./Header";
import Footer from "./Footer";
import {
  StarRateRounded,
  TurnedInRounded,
  SupervisorAccountRounded,
} from "@material-ui/icons";

const faces = [
  "https://i.ibb.co/t3PtS2Z/main-thumb-35164-200-mzeuozkmsoauksecixrxpkhgnnaztwyh.jpg",
];
const sections = [
  { title: "UI Design", url: "#" },
  { title: "UX Design", url: "#" },
  { title: "Product Design", url: "#" },
  { title: "Product Management", url: "#" },
  { title: "Web Developer", url: "#" },
  { title: "Journalist", url: "#" },
  { title: "Life Coach", url: "#" },
  { title: "Doctor", url: "#" },
];
const defs = (
  <defs>
    <linearGradient id="0" x1="0" x2="0" y1="1" y2="0">
      <stop offset="0%" stopColor="#17EAD9" />
      <stop offset="100%" stopColor="#6078EA" />
    </linearGradient>
    <linearGradient id="1" x1="0" x2="0" y1="1" y2="0">
      <stop offset="0%" stopColor="#FCE38A" />
      <stop offset="100%" stopColor="#F38181" />
    </linearGradient>
    <linearGradient id="2" x1="0" x2="0" y1="1" y2="0">
      <stop offset="0%" stopColor="#42E695" />
      <stop offset="100%" stopColor="#3BB2B8" />
    </linearGradient>
    <linearGradient id="3" x1="0" x2="0" y1="1" y2="0">
      <stop offset="0%" stopColor="#F4Ea0A" />
      <stop offset="100%" stopColor="#df4081" />
    </linearGradient>
  </defs>
);

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      medianSalarySeries: [
        {
          name: "Median Salary",
          data: [
            "819256",
            "1012334",
            "912356",
            "922211",
            "1235023",
            "1235023",
            "1285153",
            "1335132",
            "1135023",
          ],
        },
      ],
      medianSalaryOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Median Salary Of A Data Scientist",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025",
          ],
        },
      },
      series: [
        {
          name: "Low",
          data: [552524],
        },
        {
          name: "Median",
          data: [854326],
        },
        {
          name: "High",
          data: [169283],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },
        title: {
          text: "Salary Range",
        },
        xaxis: {
          categories: [2021],
          labels: {
            formatter: function (val) {
              return val + "K";
            },
          },
        },
        yaxis: {
          title: {
            text: undefined,
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K";
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: 40,
        },
      },
    };
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="" sections={sections} />
          <main>
            <Typography variant="h4" component="h2">
              Explore Career in Data Science
            </Typography>
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                margin: "2rem 0",
              }}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/de7ZUb1fH3s?autoplay=1"
                title="Career in data science"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="">
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <img
                      src={faces[0]}
                      height="100px"
                      alt="avatar"
                      style={{ borderRadius: "50%" }}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginLeft: "2rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <StarRateRounded />
                        4.6 Mentor Rating
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <TurnedInRounded /> 332 Reviews
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <SupervisorAccountRounded /> 12,232 Mentees
                      </div>
                    </div>
                  </div>
                  <div>Mentor</div>
                  <div>Prashant Kathuria</div>
                  <div>Data Scientist at Upgrad</div>
                  <div style={{ marginTop: ".35rem" }}>
                    Prashant is a data scientist with 10+ years of experience in
                    data analysis and data science. He has publications and
                    patents in various fields such as microfluidics, materials
                    science, and data science technologies. Over the course of
                    his career he has developed a skill set in analyzing data
                    and he hopes to use his experience in data science.
                  </div>
                </div>
                <Button
                  style={{
                    backgroundColor: "black",
                    width: "100%",
                    fontSize: "1.6rem",
                  }}
                  variant="contained"
                >
                  Consult now
                </Button>
              </div>
            </div>
            <div
              style={{
                margin: "2rem 0",
              }}
            >
              <div>
                <ReactApexChart
                  options={this.state.medianSalaryOptions}
                  series={this.state.medianSalarySeries}
                  type="line"
                  height={350}
                />
                <ReactApexChart
                  options={this.state.options}
                  series={this.state.series}
                  type="bar"
                  height={350}
                />
              </div>
            </div>
          </main>
        </Container>
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </React.Fragment>
    );
  }
}
