export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  category: string
  readTime: string
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'introducing-jamsheed-ai',
    title: 'Introducing JamSheed AI: Your Voice-Powered Desktop Assistant',
    excerpt: 'Learn how JamSheed AI is revolutionizing the way we interact with our computers through natural voice commands and advanced AI.',
    content: `
# Introducing JamSheed AI

We're excited to introduce JamSheed AI, a revolutionary voice-powered desktop assistant that transforms how you interact with your computer.

## The Problem

In today's fast-paced world, efficiency is everything. Yet, we're still spending countless hours on repetitive tasks:
- Manually composing emails
- Searching through documents
- Switching between applications
- Copying and pasting information

## The Solution

JamSheed AI brings the power of advanced AI models directly to your desktop, accessible through simple voice commands. Whether you're:
- **A professional** who needs to draft reports quickly
- **A researcher** analyzing documents
- **A developer** writing code
- **A content creator** generating ideas

JamSheed AI adapts to your workflow.

## Key Features

### 1. Voice-First Interface
Simply speak to JamSheed AI. No need to type long prompts or navigate complex menus.

### 2. Multiple AI Models
Access Claude Sonnet 4.5, GPT-4o, and Gemini 2.5 models - all from one interface.

### 3. Privacy-Focused
All your conversations stay on your device. We don't track or store your data.

### 4. Semantic Search
JamSheed AI understands context and can search through your documents intelligently.

## Getting Started

1. Download JamSheed AI for your platform
2. Activate your license
3. Start speaking to your AI assistant

[Download Now](/download)

## What's Next?

We're continuously improving JamSheed AI with new features:
- Custom voice commands
- Integration with more applications
- Advanced automation workflows
- Team collaboration features

Stay tuned for updates!
    `,
    author: 'JamSheed Team',
    publishedAt: '2025-01-15',
    category: 'Product Updates',
    readTime: '3 min read',
  },
  {
    slug: 'voice-commands-productivity',
    title: '10 Voice Commands That Will 10x Your Productivity',
    excerpt: 'Discover the most powerful voice commands in JamSheed AI that can transform your daily workflow.',
    content: `
# 10 Voice Commands That Will 10x Your Productivity

Voice commands are the heart of JamSheed AI. Here are the top 10 commands our power users rely on daily.

## 1. "Summarize this document"

Point to any document and ask JamSheed AI to summarize it. Perfect for:
- Research papers
- Long emails
- Meeting notes
- Legal documents

## 2. "Draft an email to..."

Compose professional emails in seconds. JamSheed AI understands context and tone.

**Example:** "Draft an email to John thanking him for the project update and asking about timeline"

## 3. "Explain this code"

Developers love this one. Highlight any code snippet and ask JamSheed AI to explain it.

## 4. "Create a report from..."

Generate comprehensive reports from your data, notes, or research.

## 5. "Search for documents about..."

Semantic search across all your files. JamSheed AI understands meaning, not just keywords.

## 6. "Translate this to..."

Instant translation to any language while preserving context and tone.

## 7. "Generate ideas for..."

Brainstorm with AI. Perfect for:
- Blog post topics
- Marketing campaigns
- Product features
- Business strategies

## 8. "Compare these documents"

Identify differences between versions, contracts, or proposals.

## 9. "Create a presentation outline about..."

Quick presentation structures for your next meeting.

## 10. "Analyze this data"

Upload spreadsheets or data files and get instant insights.

## Pro Tips

- **Be specific:** The more context you provide, the better results you'll get
- **Use follow-ups:** JamSheed AI remembers conversation context
- **Save favorites:** Create custom shortcuts for your most-used commands

## Your Turn

What voice commands would make your workflow easier? Let us know on [Twitter](https://twitter.com/jamsheedai)!

[Start Using JamSheed AI](/download)
    `,
    author: 'Sarah Johnson',
    publishedAt: '2025-01-10',
    category: 'Productivity',
    readTime: '5 min read',
  },
  {
    slug: 'ai-models-comparison',
    title: 'Claude vs GPT vs Gemini: Which AI Model Should You Use?',
    excerpt: 'A comprehensive guide to choosing the right AI model in JamSheed AI for your specific tasks.',
    content: `
# Claude vs GPT vs Gemini: Which AI Model Should You Use?

JamSheed AI gives you access to the best AI models. But which one should you use? Let's break it down.

## Claude Sonnet 4.5

**Best for:**
- Long-form content creation
- Code analysis and generation
- Complex reasoning tasks
- Detailed explanations

**Strengths:**
- Excellent at following instructions
- Great for nuanced writing
- Strong coding capabilities
- Large context window

**Use cases:**
- Writing research papers
- Generating documentation
- Code reviews
- Legal document analysis

## GPT-4o

**Best for:**
- General-purpose tasks
- Creative writing
- Quick responses
- Versatile applications

**Strengths:**
- Fast response times
- Good balance of quality and speed
- Strong general knowledge
- Great for brainstorming

**Use cases:**
- Email drafting
- Quick summaries
- Idea generation
- General Q&A

## Gemini 2.5 Flash

**Best for:**
- Speed-critical tasks
- High-volume requests
- Quick queries
- Free tier usage

**Strengths:**
- Fastest response time
- Cost-effective
- Good for simple tasks
- Available on free plan

**Use cases:**
- Quick translations
- Simple summaries
- Fast searches
- Testing and exploration

## Choosing the Right Model

Consider these factors:

### 1. Task Complexity
- **Simple tasks:** Gemini Flash
- **Medium complexity:** GPT-4o
- **Complex tasks:** Claude Sonnet 4.5

### 2. Response Time
- **Need it now:** Gemini Flash
- **Balanced:** GPT-4o
- **Quality over speed:** Claude Sonnet 4.5

### 3. Use Case
- **Coding:** Claude Sonnet 4.5
- **Writing:** Claude or GPT-4o
- **Quick queries:** Gemini Flash
- **Creative work:** GPT-4o

### 4. Token Limits
Pro and Team users can use all models unlimited. Free tier users should stick with Gemini Flash.

## Real-World Examples

### Writing a Business Proposal
**Recommended:** Claude Sonnet 4.5
- Needs detailed analysis
- Formal tone
- Comprehensive coverage

### Drafting Social Media Posts
**Recommended:** GPT-4o
- Quick turnaround
- Creative and engaging
- Multiple variations

### Translating Menu Items
**Recommended:** Gemini Flash
- Simple task
- Fast results
- Good accuracy

## Pro Tip: Mix and Match

You don't have to stick to one model! Use:
1. Gemini Flash for initial drafts
2. GPT-4o for refinement
3. Claude for final polish

## Conclusion

There's no "best" model - it depends on your needs. Experiment with all three and find what works for your workflow.

[Try All Models with JamSheed AI](/pricing)
    `,
    author: 'Michael Chen',
    publishedAt: '2025-01-05',
    category: 'Guides',
    readTime: '7 min read',
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.category === category)
    .sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
}

export function getCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)))
}
