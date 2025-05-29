'use client';

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


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

const SocialMediaPosts = () => {
  const [socialPosts, setSocialPosts] = useState<{
    twitter?: string;
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  } | null>(null);

  useEffect(() => {
    fetch('/json/general/social-posts.json')
      .then(res => res.json())
      .then(data => setSocialPosts(data))
      .catch(err => console.error('Failed to load social posts:', err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!socialPosts) return <Loader />;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 overflow-hidden max-h-[560px]">
      <Slider {...settings}>
        {socialPosts.twitter && (
          <div style={{ maxHeight: '560px' }}>
            <TwitterEmbed tweetUrl={socialPosts.twitter} />
          </div>
        )}
        {socialPosts.instagram && (
          <div>
            <InstagramEmbed postUrl={socialPosts.instagram} />
          </div>
        )}
        {socialPosts.facebook && (
          <div>
            <FacebookEmbed postUrl={socialPosts.facebook} />
          </div>
        )}
        {/* {socialPosts.linkedin && (
          <div>
            <LinkedInEmbed embedUrl={socialPosts.linkedin} />
          </div>
        )} */}
      </Slider>
    </div>
  );
};

export default SocialMediaPosts;
