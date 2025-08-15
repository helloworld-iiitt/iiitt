"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ClubDetails from "@/components/Clubpage/ClubDetails";
import { Club } from "@/types/common.types";
import { CircularProgress } from "@mui/material";

interface Event {
  title: string;
  date: string;
  description: string;
  time?: string;
  venue?: string;
}

const ClubPage: React.FC = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [club, setClub] = useState<Club | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

  useEffect(() => {
    document.title = "Club Details | IIIT Tiruchirappalli";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    // Fetch clubs data to find the matching club by slug
    fetch("/json/general/clubs.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch clubs data");
        }
        return response.json();
      })
      .then((data) => {
        const allClubs: Club[] = data.data;
        
        // Find the club that matches the slug
        const foundClub = allClubs.find((club) => {
          const clubSlug = club.name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').trim();
          return clubSlug === slug;
        });

        if (foundClub) {
          setClub(foundClub);
          // You can also fetch events for this specific club here if you have an events API
          // For now, we'll use empty events array
          setUpcomingEvents([]);
        } else {
          // Club not found
          console.error("Club not found for slug:", slug);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching club data:", error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <CircularProgress />
      </div>
    );
  }

  if (!club) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '50vh',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h1>Club Not Found</h1>
        <p>The club you're looking for doesn't exist.</p>
        <a href="/clubs" style={{ color: '#007bff', textDecoration: 'none' }}>
          ← Back to Clubs
        </a>
      </div>
    );
  }

  return <ClubDetails club={club} upcomingEvents={upcomingEvents} />;
};

export default ClubPage;
