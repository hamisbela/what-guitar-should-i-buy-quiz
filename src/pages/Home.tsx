import React from 'react';
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">What Guitar Should I Buy? - Quiz</h1>
        <Quiz />
      </section>

      <section id="guide" className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose lg:prose-lg mx-auto">
          <div className="mb-8">
            <p className="text-lg">
              If you're wondering, <strong>"What guitar should I buy?"</strong>, you're not alone! Choosing the perfect guitar can be overwhelming with so many options available. From acoustic to electric, classical to bass guitars, finding the best guitar for your needs requires careful consideration. But don't worry – we've got you covered! Our interactive <strong>What Guitar Should I Buy? Quiz</strong> will help you narrow down your choices and find the ideal instrument for your musical journey.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Take the "What Guitar Should I Buy?" Quiz?</h2>
            <p>
              With countless guitars on the market, deciding on the right one can feel overwhelming. Whether you're a beginner, intermediate player, or professional musician, our <strong>What Guitar Should I Buy? Quiz</strong> is designed to match you with a guitar that fits your style, budget, and playing requirements.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features Our Quiz Considers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Guitar Type:</strong> Acoustic, Electric, Classical, or Bass</li>
              <li><strong>Sound Quality:</strong> Tonewoods, pickups, and construction</li>
              <li><strong>Usage:</strong> Practice, performance, or recording</li>
              <li><strong>Budget:</strong> Find the perfect guitar within your price range</li>
              <li><strong>Playing Style:</strong> Match your instrument to your musical genre</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Guitar Categories</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Best for Beginners:</strong> Easy-to-play guitars with great value</li>
              <li><strong>Best for Performers:</strong> Professional-grade instruments with superior sound</li>
              <li><strong>Best for Recording:</strong> Studio-quality guitars with excellent tone</li>
              <li><strong>Best for Practice:</strong> Reliable guitars for daily practice sessions</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How the "What Guitar Should I Buy?" Quiz Works</h2>
            <p>
              Taking our quiz is quick and easy! Simply answer a few questions about your playing needs, preferred features, and budget, and we'll recommend the best guitars for you. Our recommendations are based on extensive research and real-world testing.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Guitar Buying Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consider Build Quality:</strong> Look for solid construction and quality materials</li>
              <li><strong>Test the Sound:</strong> Listen to the guitar's tone and resonance</li>
              <li><strong>Check Playability:</strong> Ensure comfortable playing experience</li>
              <li><strong>Research Reviews:</strong> Read user experiences and expert opinions</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust Our Guitar Recommendations?</h2>
            <p>
              Our team consists of experienced musicians and guitar experts who stay up-to-date with the latest instruments and technologies. We regularly update our <strong>What Guitar Should I Buy? Quiz</strong> to include new models and features, ensuring you get the most current recommendations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect Guitar?</h2>
            <p>
              Don't waste hours researching – let our <strong>What Guitar Should I Buy? Quiz</strong> guide you to the perfect instrument. Whether you're buying your first guitar or upgrading your current one, we'll help you make an informed decision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}