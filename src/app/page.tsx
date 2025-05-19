"use client";

import { useEffect, useState } from "react";
import {
  Paper,
  Tabs,
  Tab,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";
import { PaperCard } from "@/components/PaperCard/PaperCard";
import MainCarousel from "@/components/Carousel/MainCarousel";
import MissionVision from "@/components/mission_vision/missionVision";
import Marquee from "@/components/marquee/marquee";
import TwitterTimeline from "@/components/PaperCard/twitterTimeline";

import carouselData from "../../public/json/carousel/home_carousel.json";

import "./globals.css";

interface Item {
  title: string;
  link: string;
  date?: string;
  isNew?: boolean;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box p={2}>
        <Typography component="div">{children}</Typography>
      </Box>
    )}
  </div>
);

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    notice: [] as Item[],
    events: [] as Item[],
    news: [] as Item[],
    achievements: [] as Item[],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [achRes, newsRes, eventsRes, noticeRes] = await Promise.all([
          fetch("/json/general/achievements.json").then(res => res.json()),
          fetch("/json/general/news.json").then(res => res.json()),
          fetch("/json/events/events.json").then(res => res.json()),
          fetch("/json/general/notices.json").then(res => res.json()),
        ]);

        setData({
          achievements: achRes.data,
          news: sortData(newsRes.data),
          events: sortData(eventsRes.data),
          notice: sortData(noticeRes.data),
          loading: false,
        });
      } catch (error) {
        console.error("Error loading JSON data:", error);
        setData(prev => ({ ...prev, loading: false }));
      }
    };

    fetchData();
  }, []);

  const sortData = (items?: Item[]) =>
    items
      ?.map(item => {
        if (item.isNew !== undefined) return item;

        const postedDate = new Date(item.date || "");
        const today = new Date();
        const diffDays = (today.getTime() - postedDate.getTime()) / (1000 * 3600 * 24);

        return {
          ...item,
          isNew: diffDays <= 15,
        };
      })
      .sort(
        (a, b) =>
          new Date(b.date || "").getTime() - new Date(a.date || "").getTime()
      ) ?? [];


  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });

  return (
    <div className="page-container">
      <div className="container">
        <div className="customeflex">
          <div className="mission">
            <MissionVision />
          </div>
          <div className="carousel">
            <MainCarousel images={carouselData.data} />
          </div>
          <div className="marquee" id="announcements_marquee">
            <Marquee />
          </div>
        </div>

        <div className="row">
          {/* Tabbed Section */}
          <Paper elevation={3} className="tabbedPane" id="news_event_notice">
            <Tabs value={activeTab} onChange={handleTabChange} aria-label="news events notices">
              <Tab label="News" {...a11yProps(0)} className="tab" />
              <Tab label="Events" {...a11yProps(1)} className="tab" />
              <Tab label="Notices" {...a11yProps(2)} className="tab" />
            </Tabs>

            <TabPanel value={activeTab} index={0}>
              {data.loading ? (
                <CircularProgress />
              ) : (
                <PaperCard
                  title="News"
                  items={data.news.slice(0, 6)}
                  linkToOlder="/news"
                />
              )}
            </TabPanel>

            <TabPanel value={activeTab} index={1}>
              {data.loading ? (
                <CircularProgress />
              ) : (
                <PaperCard
                  title="Events"
                  items={data.events.slice(0, 5)}
                  linkToOlder="/events"
                />
              )}
            </TabPanel>

            <TabPanel value={activeTab} index={2}>
              {data.loading ? (
                <CircularProgress />
              ) : (
                <PaperCard
                  title="Notices"
                  items={data.notice.slice(0, 6)}
                  linkToOlder="/notices"
                />
              )}
            </TabPanel>
          </Paper>

          {/* Achievements Section */}
          <Paper elevation={3} className="achievements">
            {data.loading ? (
              <CircularProgress />
            ) : (
              <PaperCard
                title="Achievements"
                items={data.achievements.slice(0, 6)}
                linkToOlder="/achievements"
              />
            )}
          </Paper>

          {/* Twitter Timeline Section */}
          <Paper elevation={3} className="twittertimeline" id="twitter_timeline">
            <TwitterTimeline username="iiittrichy" />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Home;
