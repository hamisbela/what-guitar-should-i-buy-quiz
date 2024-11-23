import React from 'react';
import { Calendar } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Acoustic vs Electric Guitar: Which One Is Right for You?',
      excerpt: 'A comprehensive comparison of acoustic and electric guitars to help you make an informed decision...',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Best Beginner Guitars in 2024',
      excerpt: 'Discover the top guitars for beginners, balancing quality, playability, and value...',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Essential Guitar Features for Every Player',
      excerpt: 'A guide to must-have features when choosing your next guitar...',
      date: '2024-03-05',
      image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Guitar Guide Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay up to date with the latest guitar technology, buying guides, and maintenance tips.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <h2 className="text-xl font-bold mb-2 hover:text-blue-600">
                <a href="#">{post.title}</a>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}