import { useState } from "react";

const CategoriesBar = () => {
  return <CategoriesBarLayout />;
};

const CategoriesBarLayout = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleMouseEnter = (category: string) => {
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div>
      <div className="categories-bar">
        <ul className="categories">
          <li
            onMouseEnter={() => handleMouseEnter("Gry planszowe i towarzyskie")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="category">
              Gry planszowe i towarzyskie
            </a>
            {activeCategory === "Gry planszowe i towarzyskie" && (
              <ul>
                <li>
                  <a href="#" className="subcategory">
                    Gry planszowe dla dzieci
                  </a>
                </li>
                <li>
                  <a href="#" className="subcategory">
                    Dodatki do gier
                  </a>
                </li>
                <li>
                  <a href="#" className="subcategory">
                    Rodzinne gry planszowe
                  </a>
                </li>
                <li>
                  <a href="#" className="subcategory">
                    Gry imprezowe i towarzyskie
                  </a>
                </li>
                <li>
                  <a href="#" className="subcategory">
                    Przygodowe gry planszowe
                  </a>
                </li>
                <li>
                  <a href="#" className="subcategory">
                    Strategiczne gry planszowe
                  </a>
                </li>
                <li>
                  <a href="#" className="subcategory">
                    Gry planszowe dla dorosłych
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("Karcianki kolekcjonerskie")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="category">
              Karcianki kolekcjonerskie
            </a>
            {activeCategory === "Karcianki kolekcjonerskie" && (
              <ul>
                <li>
                  <a href="#" className="subcategory">
                    Magic The Gathering
                  </a>
                </li>
                <li>
                  <a href="#" className="subcategory">
                    Pokémon
                  </a>
                </li>
                <li>
                  <a href="#" className="subcategory">
                    Dragon Ball Super
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("Gry figurkowe i bitewne")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="category">
              Gry figurkowe i bitewne
            </a>
            {activeCategory === "Gry figurkowe i bitewne" && (
              <ul>
                <li>
                  <a href="#" className="subcategory">
                    Star Wars: X-Wing
                  </a>
                </li>
                <li>
                  <a href="#" className="subcategory">
                    Warhammer 40000
                  </a>
                </li>
                <li>
                  <a href="#" className="subcategory">
                    Horus Heresy
                  </a>
                </li>
                <li>
                  <a href="#" className="subcategory">
                    Warhammer Age of Sigmar
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("Akcesoria")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="category">
              Akcesoria
            </a>
            {activeCategory === "Akcesoria" && (
              <ul>
                <li>
                  <a href="#" className="subcategory">
                    Talie tradycyjne
                  </a>
                </li>
                <li>
                  <a href="#" className="subcategory">
                    Koszulki na karty
                  </a>
                </li>
                <li>
                  <a href="#" className="subcategory">
                    Koszulki do segregatorów
                  </a>
                </li>
                <li>
                  <a href="#" className="subcategory">
                    Albumy i portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="subcategory">
                    Pudełka na karty
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoriesBar;
