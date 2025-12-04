import { Layers, Award, Smartphone, Briefcase, ShoppingBag, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const CategoryFilter = ({ active_category, on_category_change, categories }) => {
  const category_icons = {
    All: Layers,
    Featured: Award,
    Gaming: Smartphone,
    Tech: Briefcase,
    Streetwear: ShoppingBag,
    Carry: ShoppingBag,
    Lifestyle: Heart
  };

  const category_translations = {
    All: 'Todos',
    Featured: 'Del Mes',
    Gaming: 'Tecnología',
    Tech: 'Audio',
    Streetwear: 'Moda',
    Carry: 'Mochilas',
    Lifestyle: 'Hogar'
  };

  return (
    <div className="bg-curated-bg-light">
      <div className="max-w-curated mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center gap-2 py-4 sm:py-6 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const Icon = category_icons[category.name];
            const is_active = active_category === category.name;

            return (
              <motion.button
                key={category.name}
                onClick={() => on_category_change(category.name)}
                className={`
                  flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full whitespace-nowrap text-[14px] sm:text-[15px] flex-shrink-0
                  ${is_active
                    ? 'bg-curated-text text-white'
                    : 'bg-white text-curated-text-secondary border border-curated-border'
                  }
                `}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  boxShadow: is_active
                    ? '0 4px 12px rgba(20, 20, 20, 0.3)'
                    : '0 4px 12px rgba(0, 0, 0, 0.08)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                layout
              >
                {Icon && (
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Icon className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
                  </motion.div>
                )}
                <span className="font-medium">{category_translations[category.name] || category.name}</span>
                {category.count && (
                  <span className={`text-[12px] sm:text-[13px] ${is_active ? 'text-gray-400' : 'text-curated-text-muted'}`}>
                    {category.count}
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
