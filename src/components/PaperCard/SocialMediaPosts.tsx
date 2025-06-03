'use client';

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import "./SocialMediaPosts.css"

const Loader = () => (
  <Box display="flex" justifyContent="center" alignItems="center" height={400}>
    <CircularProgress />
  </Box>
);

// Twitter Embed Component
const TwitterEmbed = ({ tweetUrl }: { tweetUrl: string }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <i>{tweetUrl}</i>
      {!loaded && <Loader />}
      <div style={{ maxHeight: '560px', overflow: 'hidden', margin: '0 auto' }}>
        <blockquote
          className="twitter-tweet mx-auto"
          style={{ width: '10%', maxWidth: 500 }}
        >
          <a href={tweetUrl}></a>
        </blockquote>
      </div>
    </>
  );
};

// Instagram Embed Component
const InstagramEmbed = ({ postUrl }: { postUrl: string }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.instgrm) window.instgrm.Embeds.process();
      setLoaded(true);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
        <i>{postUrl}</i>
      {!loaded && <Loader />}
      <blockquote
        className="instagram-media mx-auto"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{ width: '100%', maxWidth: 500 }}
      ></blockquote>
    </>
  );
};

// Facebook Embed Component
const FacebookEmbed = ({ postUrl }: { postUrl: string }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
    script.async = true;
    script.defer = true;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);
  }, []);

  return (
    <>
        <i>{postUrl}</i>
      {!loaded && <Loader />}
      <div
        className="fb-post"
        data-href={postUrl}
        data-width="100%"
        style={{ maxWidth: 500, margin: 'auto' }}
      ></div>
    </>
  );
};

const platformDetailsMap: Record<
  string,
  { name: string; icon: React.ReactNode; className: string }
> = {
  twitter: { name: 'Twitter', icon: <FaTwitter />, className: 't' },
  instagram: { name: 'Instagram', icon: <FaInstagram />, className: 'i' },
  facebook: { name: 'Facebook', icon: <FaFacebook />, className: 'f' },
  linkedin: { name: 'LinkedIn', icon: <FaLinkedin />, className: 'l' },
  youtube: { name: 'YouTube', icon: <FaYoutube />, className: 'y' },
};

type SocialPostsData = Record<string, string[]>;

const SocialMediaPosts = () => {
  const [postsData, setPostsData] = useState<SocialPostsData | null>(null);

  useEffect(() => {
    fetch('/json/general/social-posts.json')
      .then(res => res.json())
      .then(data => setPostsData(data))
      .catch(err => console.error('Failed to load social posts:', err));
  }, []);

  if (!postsData) return <Loader />;

  return (
    <div className="social-media-container">

      <div className="social-media-grid">
        {Object.entries(postsData).map(([platform, urls]) => {
          const platformInfo = platformDetailsMap[platform.toLowerCase()] || {
            name: platform,
            icon: null,
            className: 'default-platform',
          };

          return (
            <div
              key={platform}
              className={`social-media-card ${platformInfo.className}`}
            >
              <div className='social-icon-container'>
              <div className="social-icon">{platformInfo.icon}</div>
              <div className="social-media-name">{platformInfo.name}</div>
              </div>
              <div>
              <div className="social-media-marquee-wrapper">
                <div className="social-media-marquee">
                  {urls.map((url, index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-media-url"
                    >
                      {url}
                    </a>
                  ))}
                </div>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMediaPosts;




