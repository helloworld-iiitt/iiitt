/**
 * Notices Page
 *
 * fetches data from
 * utilizes NoticeSection
 *
 */
import NoticePage from "@/components/NoticePage/NoticePage";
export default function Notices() {
  return (
    <NoticePage
      pageTitle="Notices"
      documentTitle="Notices | IIIT Tiruchirappalli"
      jsonPath="/json/general/notices.json"
      newSectionTitle="New Notices"
      oldSectionTitle="Old Notices"
    />
  );
}
