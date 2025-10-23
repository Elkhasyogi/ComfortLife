import Newsletter from '@/components/Blog/Newsletter';
import PopularArticle from '@/components/Blog/PopularArticle';
import SingleBlog from '@/components/Blog/SingleBlog';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Features from '@/components/Features';
import Service from '@/components/Services';
import { getAllPosts, getPostBySlug } from '@/utils/markdown';
import markdownToHtml from '@/utils/markdownToHtml';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const posts = getAllPosts(['title', 'date', 'excerpt', 'coverImage', 'slug']);
  const post = getPostBySlug(slug, ['title', 'author', 'content', 'metadata']);

  const siteName = process.env.SITE_NAME || 'Your Site Name';
  const authorName = process.env.AUTHOR_NAME || 'Your Author Name';

  if (post) {
    const metadata = {
      title: `${post.title || 'Single Post Page'} | ${siteName}`,
      author: authorName,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };

    return metadata;
  } else {
    return {
      title: 'Not Found',
      description: 'No blog article has been found',
      author: authorName,
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  }
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const posts = getAllPosts(['title', 'date', 'excerpt', 'coverImage', 'slug']);
  const post = getPostBySlug(slug, [
    'title',
    'author',
    'authorImage',
    'content',
    'coverImage',
    'date',
  ]);

  const content = await markdownToHtml(post.content || '');

  return (
    <>
      <Breadcrumb pageName={post?.title} />

      <section className="pb-10 dark:bg-dark lg:pb-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <Service />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
