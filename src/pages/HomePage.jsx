import { useState, useMemo } from 'react';
import HeroSection from '../components/HeroSection';
import CategoryFilter from '../components/CategoryFilter';
import ProductGrid from '../components/ProductGrid';
import { products, categories, get_category_counts } from '../data/products';

const HomePage = () => {
  const [active_category, set_active_category] = useState('All');

  // Get category counts dynamically
  const category_counts = useMemo(() => get_category_counts(), []);

  // Add counts to categories
  const categories_with_counts = useMemo(() => {
    return categories.map(cat => ({
      ...cat,
      count: category_counts[cat.name] || null
    }));
  }, [category_counts]);

  const filtered_products = useMemo(() => {
    if (active_category === 'All') {
      return products;
    }
    if (active_category === 'New') {
      return products.filter(product => product.is_new);
    }
    if (active_category === 'Picks') {
      return products.filter(product => product.is_staff_pick);
    }
    return products.filter(product => product.category === active_category);
  }, [active_category]);

  return (
    <div className="min-h-screen bg-curated-bg-light">
      <HeroSection />
      <CategoryFilter
        active_category={active_category}
        on_category_change={set_active_category}
        categories={categories_with_counts}
      />
      <ProductGrid products={filtered_products} />
    </div>
  );
};

export default HomePage;
