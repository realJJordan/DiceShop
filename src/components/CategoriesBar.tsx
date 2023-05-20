import React, { useState } from 'react';

const CategoriesBar = () => {
  return <CategoriesBarLayout />;
};

const CategoriesBarLayout = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleCategoryHover = (category: string) => {
    setActiveCategory(category);
    setIsHovering(true);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
    setIsHovering(false);
  };

  return (
    <div>
      <div className="categories-bar" onMouseLeave={handleCategoryLeave}>
        <ul className="categories">
          <li onMouseEnter={() => handleCategoryHover('Gry planszowe i towarzyskie')}>
            <a href="#" className="category">Gry planszowe i towarzyskie</a>
          </li>
          <li onMouseEnter={() => handleCategoryHover('Karcianki kolekcjonerskie')}>
            <a href="#" className="category">Karcianki kolekcjonerskie</a>
          </li>
          <li onMouseEnter={() => handleCategoryHover('Gry figurkowe i bitewne')}>
            <a href="#" className="category">Gry figurkowe i bitewne</a>
          </li>
          <li onMouseEnter={() => handleCategoryHover('Akcesoria')}>
            <a href="#" className="category">Akcesoria</a>
          </li>
        </ul>

        {isHovering && (
          <div
            className="subcategories-bar"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <ul className="subcategories">
              {activeCategory === 'Gry planszowe i towarzyskie' && (
                <>
                  <li>
                    <a href="#" className="subcategory">Gry planszowe dla dzieci</a>
                  </li>
                  <li>
                    <a href="#" className="subcategory">Dodatki do gier</a>
                  </li>
                  <li>
                    <a href="#" className="subcategory">Rodzinne gry planszowe</a>
                  </li>
                  <li>
                    <a href="#" className="subcategory">Gry imprezowe i towarzyskie</a>
                  </li>
                  <li>
                    <a href="#" className="subcategory">Przygodowe gry planszowe</a>
                  </li>
                  <li>
                    <a href="#" className="subcategory">Strategiczne gry planszowe</a>
                  </li>
                  <li>
                    <a href="#" className="subcategory">Gry planszowe dla dorosłych</a>
                  </li>
                </>
              )}
              {activeCategory === 'Karcianki kolekcjonerskie' && (
                <>
                  <li>
                    <a href="#" className="subcategory">Magic The Gathering</a>
                  </li>
                  <li>
                    <a href="#" className="subcategory">Pokémon</a>
                  </li>
                  <li>
                    <a href="#" className="subcategory">Dragon Ball Super</a>
                  </li>
                </>
              )}
              {activeCategory === 'Gry figurkowe i bitewne' && (
                <>
                  <li>
                    <a href="#" className="subcategory">Star Wars: X-Wing</a>
                  </li>
                  <li>
                    <a href="#" className="subcategory">Warhammer 40000</a>
                  </li>
                  <li>
                    <a href="#" className="subcategory">Horus Heresy</a>
                  </li>
                  <li>
                    <a href="#" className="subcategory">Warhammer Age of Sigmar</a>
                  </li>
                </>
              )}
              {activeCategory === 'Akcesoria' && (
                <>
                  <li>
                    <a href="#" className="subcategory">Talie tradycyjne</a>
                  </li>
                  <li>
                    <a href="#" className="subcategory">Koszulki na karty</a>
                  </li>
                  <li>
                    <a href="#" className="subcategory">Koszulki do segregatorów</a>
                  </li>
                  <li>
                    <a href="#" className="subcategory">Albumy i portfolio</a>
                  </li>
                  <li>
                    <a href="#" className="subcategory">Pudełka na karty</a>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesBar;