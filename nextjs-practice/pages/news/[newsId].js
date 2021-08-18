import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  const route = router.query.newsId;

  return <h1>{route}</h1>;
};

export default DetailPage;
