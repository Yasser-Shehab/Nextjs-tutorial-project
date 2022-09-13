import { useRouter } from "next/router";
import { useEffect } from "react";

//ourDoman-name/news/somethingImportant

function DetailPage() {
  const router = useRouter();

  console.log(router.query.newsId);

  useEffect(() => {
    console.log("Use Effect Running boy");
  }, []);

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
