import Link from 'next/link';

export default function ArticleCard({ article }) {
  return (
    <div className="col-span-1 reveal">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg h-full flex flex-col hover:translate-y-[-5px] transition-transform duration-200">
        <div className="p-4 flex flex-col flex-grow">
          <h5 className="text-xl font-bold mb-2 dark:text-gray-100">{article.title}</h5>
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
            {article.source} · {article.date}
          </p>
          <p className="text-gray-700 dark:text-gray-200 flex-grow">{article.description}</p>
          <div className="mt-auto">
            <Link href={article.link}>
              <a className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition">
                Read More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
