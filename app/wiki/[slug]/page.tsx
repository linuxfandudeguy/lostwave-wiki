import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { WikiArticle } from "@/components/wiki-article";

export async function generateStaticParams() {
  // Resolve the absolute path to the "songs" directory
  const songsDir = path.resolve(process.cwd(), "songs");
  const filenames = fs.readdirSync(songsDir);

  // Generate paths from filenames
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""), // Remove ".md" extension
  }));
}

export default async function WikiPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Resolve the absolute path to the specific Markdown file
  const songsDir = path.resolve(process.cwd(), "songs");
  const filePath = path.join(songsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Parse Markdown using gray-matter
  const { content, data: metadata } = matter(fileContent);

  return (
    <div className="container mx-auto">
      <WikiArticle content={content} metadata={metadata} />
    </div>
  );
}
