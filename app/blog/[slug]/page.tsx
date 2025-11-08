import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import { getBlogPost, getBlogPosts } from '@/lib/blog-posts'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <Link href="/blog">
        <Button variant="ghost" className="mb-8 gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Button>
      </Link>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pb-6 border-b">
            <div className="flex items-center gap-4">
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>

            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Article Image */}
        {post.image && (
          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8 bg-muted">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">
            Try JamSheed AI Today
          </h3>
          <p className="mb-6 opacity-90">
            Experience the power of voice-controlled AI on your desktop
          </p>
          <Link href="/download">
            <Button size="lg" variant="secondary">
              Download for Free
            </Button>
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {getBlogPosts()
            .filter(p => p.slug !== post.slug && p.category === post.category)
            .slice(0, 3)
            .map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <Badge variant="secondary" className="mb-3">
                    {relatedPost.category}
                  </Badge>
                  <h3 className="font-bold mb-2 hover:text-blue-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
