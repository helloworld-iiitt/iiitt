import NoticePage from "@/components/NoticePage/NoticePage";

export default function Tenders() {
  return (
    <NoticePage
      pageTitle="Tenders"
      documentTitle="Tenders | IIIT Tiruchirappalli"
      jsonPath="/json/general/tenders.json"
      newSectionTitle="Open Tenders"
      oldSectionTitle="Close Tenders"
    />
  );
}
