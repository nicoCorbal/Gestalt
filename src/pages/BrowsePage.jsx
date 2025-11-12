import { Link } from 'react-router-dom';
import { collections } from '../data/products';
import { ArrowRight } from 'lucide-react';

const BrowsePage = () => {
  return (
    <div className="min-h-screen bg-curated-bg-light">
      {/* Hero Section */}
      <div className="max-w-curated mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-[48px] md:text-[64px] font-normal text-curated-text mb-6 leading-tight">
            Collections for
            <br />
            <span className="font-medium">every moment</span>
          </h1>

          <p className="text-[17px] text-curated-text-muted leading-relaxed max-w-[600px] mx-auto">
            Thoughtfully assembled product collections. Each one designed to enhance a specific part of your daily life with intention and care.
          </p>
        </div>

      {/* Collections Grid */}
      <div>
        <div className="mb-12">
          <h2 className="text-[28px] font-medium text-curated-text mb-3">Explore our collections</h2>
          <p className="text-[15px] text-curated-text-muted">
            {collections.length} curated collections, each with its own story and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.id}`}
              className="group bg-white rounded-2xl border-2 border-curated-border overflow-hidden hover:border-curated-text hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/3] bg-curated-bg overflow-hidden">
                {collection.image ? (
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-curated-bg to-curated-bg-light">
                    <span className="text-[48px] font-bold text-curated-text-muted opacity-20">{collection.product_count}</span>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-full border-2 border-curated-text shadow-lg">
                  <span className="text-[11px] font-bold uppercase tracking-wide">{collection.product_count} items</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-[20px] font-bold text-curated-text mb-2 leading-tight transition-colors">
                  {collection.name}
                </h3>
                <p className="text-[14px] text-curated-text-muted leading-relaxed mb-4">
                  {collection.description || 'A carefully curated selection of exceptional products.'}
                </p>
                <div className="flex items-center gap-2 text-curated-text font-medium text-[13px] uppercase tracking-wide">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-[36px] md:text-[48px] font-normal text-curated-text mb-6 leading-tight">
            Looking for something specific?
          </h2>
          <p className="text-[16px] text-curated-text-muted mb-8">
            Join our weekly newsletter. We share new discoveries, design insights, and special selections you won't find anywhere else.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-curated-text text-white text-[15px] font-medium rounded-full hover:bg-opacity-90 transition-all shadow-lg"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BrowsePage;
