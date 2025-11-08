import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { getBlogPosts, getCategories } from '@/lib/blog-posts'

export default function BlogPage() {
  const posts = getBlogPosts()
  const categories = getCategories()

  return (
    <div className="container mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Insights, guides, and updates from the JamSheed AI team
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        <Badge variant="outline" className="cursor-pointer hover:bg-muted">
          All Posts
        </Badge>
        {categories.map((category) => (
          <Badge 
            key={category} 
            variant="outline" 
            className="cursor-pointer hover:bg-muted"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
              {post.image && (
                <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-24 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Ready to try JamSheed AI?
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Start using AI-powered voice commands today
        </p>
        <Link href="/download">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Download for Free
          </button>
        </Link>
      </div>
    </div>
  )
}
