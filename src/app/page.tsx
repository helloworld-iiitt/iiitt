"use client";

import MainCarousel from "@/components/Carousel/MainCarousel";
import LiveStreamPopup from "@/components/LiveEvents/LiveStream";
import Marquee from "@/components/marquee/marquee";
import MissionVision from "@/components/mission_vision/missionVision";
import { PaperCard } from "@/components/PaperCard/PaperCard";
import SocialMediaPosts from "@/components/PaperCard/SocialMediaPosts";
import PlacementStats from "@/components/Placementdata/PlacementStats";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useRef, useEffect, useState } from "react";
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

interface PlacementRawData {
  [company: string]: {
    CTC: string;
    'students Placed': number;
  };
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
  const [mainTab, setMainTab] = useState(0);
  const [twitterTab, setTwitterTab] = useState(0);
  const [carouselData, setCarouselData] = useState<{ data: any[] }>({ data: [] });
  const [data, setData] = useState({
    notice: [] as Item[],
    events: [] as Item[],
    news: [] as Item[],
    achievements: [] as Item[],
    loading: true,
  });

  let mainTabInterval: NodeJS.Timeout;
  let twitterTabInterval: NodeJS.Timeout;
  const mainTabIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const twitterTabIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const resetMainTabCycle = (startFrom: number) => {
    if (mainTabIntervalRef.current) clearInterval(mainTabIntervalRef.current);
    mainTabIntervalRef.current = setInterval(() => {
      setMainTab(prev => (prev + 1) % 3);
    }, 10000);
  };

  const resetTwitterTabCycle = (startFrom: number) => {
    if (twitterTabIntervalRef.current) clearInterval(twitterTabIntervalRef.current);
    twitterTabIntervalRef.current = setInterval(() => {
      setTwitterTab(prev => (prev + 1) % 2);
    }, 10000);
  };

  useEffect(() => {
    document.title = "IIIT Tiruchirappalli";
    const fetchData = async () => {
      try {
        const [achRes, newsRes, eventsRes, noticeRes, carouselRes,] = await Promise.all([
          fetch("/json/general/achievements.json").then(res => res.json()),
          fetch("/json/general/news.json").then(res => res.json()),
          fetch("/json/events/events.json").then(res => res.json()),
          fetch("/json/general/notices.json").then(res => res.json()),
          fetch("/json/carousel/home_carousel.json").then(res => res.json()),
          //fetch("/json/general/socialmediaposts.json").then(res => res.json()),
        ]);

        setData({
          achievements: achRes.data,
          news: sortData(newsRes.data),
          events: sortData(eventsRes.data),
          notice: sortData(noticeRes.data),
          loading: false,
          //SocialMediaPost:SocialMediaPost

        });
        setCarouselData(carouselRes);
      } catch (error) {
        console.error("Error loading JSON data:", error);
        setData(prev => ({ ...prev, loading: false }));
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    resetMainTabCycle(0);
    resetTwitterTabCycle(0);

    return () => {
      if (mainTabIntervalRef.current) clearInterval(mainTabIntervalRef.current);
      if (twitterTabIntervalRef.current) clearInterval(twitterTabIntervalRef.current);
    };
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

  const handleMainTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setMainTab(newValue);
    resetMainTabCycle(newValue);
  };

  const handleTwitterTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTwitterTab(newValue);
    resetTwitterTabCycle(newValue);
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
            <Tabs value={mainTab} onChange={handleMainTabChange} aria-label="news events notices">
              <Tab label="News" {...a11yProps(0)} className="tab" />
              <Tab label="Events" {...a11yProps(1)} className="tab" />
              <Tab label="Notices" {...a11yProps(2)} className="tab" />
            </Tabs>

            <TabPanel value={mainTab} index={0}>
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

            <TabPanel value={mainTab} index={1}>
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

            <TabPanel value={mainTab} index={2}>
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
          <Paper elevation={3} className="tabbedPane" id="twitter_timeline">
            <Tabs value={twitterTab} onChange={handleTwitterTabChange} aria-label="Placements-SocialMedia">
              <Tab label="Placements" {...a11yProps(0)} className="tab" />
              <Tab label="Social Media" {...a11yProps(1)} className="tab" />
            </Tabs>

            <TabPanel value={twitterTab} index={0}>

              <PlacementStats />

              <Button href="http://placement.iiitt.ac.in/" sx={{ mt: 2 }}>
                View Detailed Placement Stats
              </Button>

            </TabPanel>
            <TabPanel value={twitterTab} index={1}>
              <SocialMediaPosts />
            </TabPanel>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Home;
