import NoticePage from "@/components/NoticePage/NoticePage";

export default function Events() {
  return (
    <NoticePage
      pageTitle="Events"
      documentTitle="Events | IIIT Tiruchirappalli"
      jsonPath="/json/events/events.json"
      newSectionTitle="Current Events"
      oldSectionTitle="Archived Events"
    />
  );
}
