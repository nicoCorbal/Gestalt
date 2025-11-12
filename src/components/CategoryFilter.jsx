import { Layers, Sparkles, Award, Smartphone, Briefcase, Home as HomeIcon, ShoppingBag, BookOpen, Heart } from 'lucide-react';

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
    Gaming: 'Gaming',
    Tech: 'Tech',
    Streetwear: 'Streetwear',
    Carry: 'Carry',
    Lifestyle: 'Lifestyle'
  };

  return (
    <div className="bg-curated-bg-light sticky top-[64px] sm:top-[72px] z-40">
      <div className="max-w-curated mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center gap-2 py-4 sm:py-6 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const Icon = category_icons[category.name];
            const is_active = active_category === category.name;

            return (
              <button
                key={category.name}
                onClick={() => on_category_change(category.name)}
                className={`
                  flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full whitespace-nowrap transition-all text-[14px] sm:text-[15px] flex-shrink-0
                  ${is_active
                    ? 'bg-curated-text text-white'
                    : 'bg-white text-curated-text-secondary hover:bg-white/80 border border-curated-border'
                  }
                `}
              >
                {Icon && <Icon className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />}
                <span className="font-medium">{category_translations[category.name] || category.name}</span>
                {category.count && (
                  <span className={`text-[12px] sm:text-[13px] ${is_active ? 'text-gray-400' : 'text-curated-text-muted'}`}>
                    {category.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
