import ArticleFour from "@/components/article_details/articleFour/articleFour";
import ArticleOne from "@/components/article_details/articleOne/articleOne";
import ArticleThree from "@/components/article_details/articleThree/articleThree";
import ArticleTwo from "@/components/article_details/articleTwo/articleTwo";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div>
      {+id === 1 && <ArticleOne />}
      {+id === 2 && <ArticleTwo />}
      {+id === 3 && <ArticleThree />}
      {+id === 4 && <ArticleFour />}
    </div>
  );
}

export default Page;
