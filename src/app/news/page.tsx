import NoticePage from "@/components/NoticePage/NoticePage";

export default function News() {
  return (
    <NoticePage
      pageTitle="News"
      documentTitle="News | IIIT Tiruchirappalli"
      jsonPath="/json/general/news.json"
      newSectionTitle="Updates"
      oldSectionTitle="Archived"
    />
  );
}
