export function checkforfilepath  (link: string) {
    return /\.(jpg|jpeg|png|gif|pdf|docx|xlsx|txt|csv)$/i.test(link);
  };
  