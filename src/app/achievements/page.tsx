/**
 * Achievements Page
 *
 * Fetches data from /json/general/achievements.json
 * seperates into new and old notices
 * filters based on time frame
 * utilizes Notice Component
 *
 */

/**
 * Notices Page
 *
 * fetches data from
 * utilizes NoticeSection
 *
 */
import NoticePage from "@/components/NoticePage/NoticePage";
export default function Achievements() {
  return (
    <NoticePage
      pageTitle="Achievements"
      documentTitle="Notices | IIIT Tiruchirappalli"
      jsonPath="/json/general/achievements.json"
      newSectionTitle="Achievements"
      oldSectionTitle="Old Achievements"
    />
  );
}
