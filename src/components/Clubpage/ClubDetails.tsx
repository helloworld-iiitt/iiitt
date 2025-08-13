import React, { useState } from 'react';
import Image from "next/image";
import styles from './ClubDetails.module.css';

// Type definitions
interface Coordinator {
  name: string;
}

interface Club {
  name: string;
  motto: string;
  facultyIncharge: string;
  emoji: string;
  tag: string;
  coordinator: Coordinator[];
  logo: string;
}

interface Event {
  title: string;
  date: string;
  description: string;
  time?: string;
  venue?: string;
}

interface ClubDetailsProps {
  club: Club;
  upcomingEvents?: Event[]; // Optional events prop
}

const ClubDetails: React.FC<ClubDetailsProps> = ({ club, upcomingEvents = [] }) => {
  const [activeTab, setActiveTab] = useState<'members' | 'events'>('members');

  return (
    <div className={styles.clubContainer}>
      {/* Club Header with Logo */}
      <div className={styles.clubHeader}>
        <div className={styles.logoSection}>
          {club.logo && (
            <Image
              src={club.logo}
              alt={`${club.name} logo`}
              width={120}
              height={120}
              className={styles.logo}
            />
          )}
        </div>
        
        <div className={styles.clubInfo}>
          <h1 className={styles.clubName}>
            {club.emoji} {club.name}
          </h1>
          <p className={styles.clubMotto}>"{club.motto}"</p>
          <span className={styles.clubTag}>{club.tag}</span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className={styles.tabNavigation}>
        <button
          className={`${styles.tabButton} ${activeTab === 'members' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('members')}
        >
          Members & Faculty
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'events' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('events')}
        >
          Upcoming Events
        </button>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {activeTab === 'members' && (
          <div className={styles.membersTab}>
            {/* Faculty Section */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Faculty In-Charge</h3>
              <div className={styles.facultyCard}>
                <span className={styles.facultyName}>{club.facultyIncharge}</span>
              </div>
            </div>

            {/* Coordinators Section */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Coordinators</h3>
              <div className={styles.coordinatorsList}>
                {club.coordinator.map((coordinator, index) => (
                  <div key={index} className={styles.coordinatorCard}>
                    <span className={styles.coordinatorName}>{coordinator.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className={styles.eventsTab}>
            {upcomingEvents.length > 0 ? (
              <div className={styles.eventsList}>
                {upcomingEvents.map((event, index) => (
                  <div key={index} className={styles.eventCard}>
                    <h4 className={styles.eventTitle}>{event.title}</h4>
                    <div className={styles.eventDetails}>
                      <span className={styles.eventDate}>📅 {event.date}</span>
                      {event.time && (
                        <span className={styles.eventTime}>🕒 {event.time}</span>
                      )}
                      {event.venue && (
                        <span className={styles.eventVenue}>📍 {event.venue}</span>
                      )}
                    </div>
                    <p className={styles.eventDescription}>{event.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.noEvents}>
                <p>No upcoming events at the moment.</p>
                <p>Stay tuned for exciting activities!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClubDetails;