import { useState, useEffect, useCallback } from "react";

interface Member {
  name: string;
  designation: string;
  role?: string;
  senate?: string;
}

interface Meeting {
  title: string;
  description: string;
  url: string;
}

// List of committees for which meeting JSON is available
const committeesWithMeetings = ["bog", "bwc", "fc","senate"];

export const useCommitteeData = (committee: string) => {
  const [members, setMembers] = useState<Member[] | null>(null);
  const [meetings, setMeetings] = useState<Meeting[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isMeetingJsonAvailable, setIsMeetingJsonAvailable] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const membersResponse = await fetch(`/json/committee/members/${committee}.json`);
      if (membersResponse.ok) {
        const membersJson = await membersResponse.json();
        setMembers(membersJson.data as Member[]);
      }

      if (committeesWithMeetings.includes(committee)) {
        const meetingsResponse = await fetch(`/json/committee/meetings/${committee}_meeting.json`);
        if (meetingsResponse.ok) {
          const meetingsJson = await meetingsResponse.json();
          setMeetings(
            Object.entries(meetingsJson).map(([title, details]) => ({
              title,
              description: (details as { description: string }).description,
              url: (details as { url: string }).url,
            }))
          );
        } else {
          setIsMeetingJsonAvailable(false);
        }
      } else {
        setIsMeetingJsonAvailable(false);
      }
    } catch (error) {
      console.error(`Error fetching ${committee} data:`, error);
      setIsMeetingJsonAvailable(false);
    }
    setLoading(false);
  }, [committee]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { members, meetings, loading, isMeetingJsonAvailable };
};
