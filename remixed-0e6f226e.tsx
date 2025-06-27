import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TRANSLATIONS = {
  "en-US": {
    "createFlashcardsTitle": "Create flashcards",
    "pasteTextTab": "Paste text",
    "describeTopicTab": "Describe topic",
    "describeTopicPlaceholder": "Describe a topic Claude will generate the details...\n\ne.g. capitals of the world\ne.g. fun facts about San Diego",
    "pasteTextPlaceholder": "Paste your text here...",
    "generateFlashcardsButton": "Generate flashcards",
    "generatingTitle": "Generating your flashcard set...",
    "generatingSubtitle": "This may take a while depending on the upload...",
    "flipInstruction": "Use ↑↓ arrows or click to flip",
    "createNewFlashcardsLink": "Create new flashcards"
  },
  /* LOCALE_PLACEHOLDER_START */
  "es-ES": {
    "createFlashcardsTitle": "Crear tarjetas de estudio",
    "pasteTextTab": "Pegar texto",
    "describeTopicTab": "Describir tema",
    "describeTopicPlaceholder": "Describe un tema y Claude generará los detalles...\n\nej. capitales del mundo\nej. datos curiosos sobre San Diego",
    "pasteTextPlaceholder": "Pega tu texto aquí...",
    "generateFlashcardsButton": "Generar tarjetas de estudio",
    "generatingTitle": "Generando tu conjunto de tarjetas...",
    "generatingSubtitle": "Esto puede tomar un tiempo dependiendo de la carga...",
    "flipInstruction": "Usa las flechas ↑↓ o haz clic para voltear",
    "createNewFlashcardsLink": "Crear nuevas tarjetas de estudio"
  }
  /* LOCALE_PLACEHOLDER_END */
};

const appLocale = '{{APP_LOCALE}}';
const browserLocale = navigator.languages?.[0] || navigator.language || 'en-US';
const findMatchingLocale = (locale) => {
  if (TRANSLATIONS[locale]) return locale;
  const lang = locale.split('-')[0];
  const match = Object.keys(TRANSLATIONS).find(key => key.startsWith(lang + '-'));
  return match || 'en-US';
};
const locale = (appLocale !== '{{APP_LOCALE}}') ? findMatchingLocale(appLocale) : findMatchingLocale(browserLocale);
const t = (key) => TRANSLATIONS[locale]?.[key] || TRANSLATIONS['en-US'][key] || key;

// Complete flashcard dataset for NYC Food Protection Certificate
const FLASHCARD_DATA = `[
  {
    "front": "NYC Food Service Permit",
    "back": "All food service establishments must have a current and valid permit issued by NYC Health Department"
  },
  {
    "front": "Health Inspector Rights",
    "back": "Have right to inspect any operating food service establishment and must be given access to all areas"
  },
  {
    "front": "Food Protection Certificate",
    "back": "Required for supervisors of all food service establishments per NYC Health Code"
  },
  {
    "front": "Food Definition",
    "back": "Any edible substance, ice, beverage or ingredient used or sold for human consumption"
  },
  {
    "front": "Potentially Hazardous Foods (PHFs)",
    "back": "Foods that support rapid growth of microorganisms - includes raw/cooked meats, poultry, milk products, fish, shellfish, tofu, cooked rice, pasta, beans, potatoes, garlic in oil"
  },
  {
    "front": "Temperature Danger Zone",
    "back": "Between 41°F and 140°F - range where most harmful microorganisms reproduce rapidly"
  },
  {
    "front": "Approved Thermometer Types",
    "back": "Bimetallic stem (0°F to 220°F), thermocouple, and thermistor (digital). Glass thermometers are prohibited by law"
  },
  {
    "front": "USDA Inspection Stamp",
    "back": "Meat inspected by USDA must have a USDA inspection stamp"
  },
  {
    "front": "Smoked Fish Storage",
    "back": "Must be held at or below 38°F to prevent Clostridium botulinum growth"
  },
  {
    "front": "Shellfish Tags",
    "back": "Must be received with shellfish tags and kept on file for at least 90 days after product is used"
  },
  {
    "front": "Milk Storage Requirements",
    "back": "Pasteurized milk: 9-day sell-by dates; Ultra-pasteurized milk: 45-day sell-by dates"
  },
  {
    "front": "Raw Fruits and Vegetables",
    "back": "All fruits and vegetables served raw must be thoroughly washed before serving"
  },
  {
    "front": "Modified Atmosphere Packaging",
    "back": "All commercial foods in modified atmosphere packaging must be used per manufacturer's specifications"
  },
  {
    "front": "Vacuum Packaging Prohibition",
    "back": "Prohibited in retail food establishments unless special authorization from NYC Health Department"
  },
  {
    "front": "FIFO Method",
    "back": "First In First Out - first step is to date the products"
  },
  {
    "front": "Food Storage Height",
    "back": "All food items must be stored at least 6 inches off the floor per NYC Health Code"
  },
  {
    "front": "Raw vs Cooked Food Storage",
    "back": "Raw foods must be stored below cooked foods to prevent cross-contamination"
  },
  {
    "front": "Cold Food Temperature",
    "back": "All cold foods must be held at or below 41°F (except smoked fish at 38°F or below)"
  },
  {
    "front": "Dry Storage Requirements",
    "back": "Keep well-lit and ventilated; never store under wastewater lines"
  },
  {
    "front": "Food Container Requirements",
    "back": "Stored food must be covered and stored in vermin-proof containers"
  },
  {
    "front": "Ice for Human Consumption",
    "back": "Cannot be used for storing cans, bottles or other food products"
  },
  {
    "front": "Foods Stored in Ice",
    "back": "Water from ice must be drained constantly when foods are stored directly in ice"
  },
  {
    "front": "Required Posted Signs",
    "back": "First Aid Choking poster in eating areas, Alcohol & Pregnancy Warning (if serving alcohol), Wash Hands signs at sinks, No Smoking signs throughout facility"
  },
  {
    "front": "Three Main Health Hazards",
    "back": "Physical (foreign objects), Chemical (harmful chemicals), Biological (microorganisms)"
  },
  {
    "front": "Physical Hazard Example",
    "back": "Presence of foreign objects like glass fragments or pieces of metal in food"
  },
  {
    "front": "Chemical Hazard Example",
    "back": "Presence of harmful chemicals like pesticides, cleaning agents, or prescription medicine in food"
  },
  {
    "front": "Biological Hazard",
    "back": "Presence of microorganisms (bacteria, viruses, parasites, fungi) in food"
  },
  {
    "front": "Contaminated Food Appearance",
    "back": "Foods contaminated with harmful bacteria often show no change in appearance, taste, or smell"
  },
  {
    "front": "Bacterial Doubling Time",
    "back": "Under favorable conditions, bacteria can double every 20 to 30 minutes"
  },
  {
    "front": "Four Phases of Bacterial Growth",
    "back": "Lag, log, stationary, and death phases"
  },
  {
    "front": "Most Rapid Bacterial Growth",
    "back": "Takes place in the log phase"
  },
  {
    "front": "FATTOM Factors",
    "back": "Six factors affecting bacterial growth: Food, Acidity, Temperature, Time, Oxygen, Moisture"
  },
  {
    "front": "Virus Reproduction in Food",
    "back": "Viruses cannot reproduce in food but can be transmitted to people if they get into food"
  },
  {
    "front": "Common Food-borne Viruses",
    "back": "Hepatitis A and norovirus - transmitted through contaminated food/water with infected person's feces"
  },
  {
    "front": "Trichinella spiralis Prevention",
    "back": "Cook pork to 150°F for 15 seconds to prevent trichinosis"
  },
  {
    "front": "Anisakis simplex",
    "back": "Food-borne parasite typically found in marine fish"
  },
  {
    "front": "Salmonella enteritidis",
    "back": "Bacterium commonly found in raw poultry and raw shell eggs"
  },
  {
    "front": "Clostridium perfringens Control",
    "back": "Control growth by rapid cooling, rapid reheating, and avoiding advance food preparation"
  },
  {
    "front": "Staphylococcus aureus",
    "back": "Bacterium commonly carried by healthy humans - prevented by good hygiene and avoiding bare hand contact with ready-to-eat foods"
  },
  {
    "front": "Ill Food Workers",
    "back": "Workers with transmissible illness should not work until fully recovered"
  },
  {
    "front": "Ground Meat Cooking Temperature",
    "back": "Must be cooked to minimum 158°F to eliminate E. coli O157:H7"
  },
  {
    "front": "Clostridium botulinum",
    "back": "Causes botulism - associated with home-canned foods, smoked fish, garlic in oil, anaerobic environments"
  },
  {
    "front": "Scombroid Poisoning",
    "back": "From eating fish with high histamines (tuna, mackerel, bonito, mahi mahi, bluefish) due to time/temperature abuse"
  },
  {
    "front": "Hand Washing Requirements",
    "back": "Wash after: starting work, handling raw foods, using toilet, coughing, sneezing, smoking, eating, drinking, scratching"
  },
  {
    "front": "Hand Washing Sink Distance",
    "back": "Must be readily accessible within 25 feet of food prep areas and in/near all toilets"
  },
  {
    "front": "Hand Washing Sink Supplies",
    "back": "Must have soap, hot/cold running water, disposable towels or hand dryer, and 'Wash Hands' sign"
  },
  {
    "front": "Food Worker Attire Requirements",
    "back": "Proper hair restraints, clean aprons/garments, no jewelry on arms/hands (except wedding bands/medical bracelets), avoid makeup"
  },
  {
    "front": "Three Acceptable Thawing Methods",
    "back": "Refrigerating, placing under cold running water, or defrosting in microwave with continuous cooking"
  },
  {
    "front": "Cross Contamination",
    "back": "Occurs when bacteria from raw food get into cooked or ready-to-eat food"
  },
  {
    "front": "Poultry Cooking Temperature",
    "back": "Poultry, stuffed meat, and stuffing must be cooked to 165°F"
  },
  {
    "front": "Pork Cooking Temperature",
    "back": "Must be cooked to internal temperature of 150°F"
  },
  {
    "front": "Raw Shell Eggs Cooking",
    "back": "Must be cooked to minimum temperature of 145°F"
  },
  {
    "front": "Fish and Other Meats Cooking",
    "back": "Fish, shellfish, beef, lamb, and other meats must be cooked to minimum 140°F"
  },
  {
    "front": "Hot Holding Temperature",
    "back": "All hot foods in hot holding unit must be held at 140°F or higher"
  },
  {
    "front": "Rapid Cooling Methods",
    "back": "Ice-water bath with stirring, 1-2 inch deep in 4-inch pans, rapid chill unit, cutting into pieces 6 lbs or less"
  },
  {
    "front": "Covering Hot Foods for Cooling",
    "back": "Hot foods in refrigerator must be covered only after completely cooled to 41°F or below"
  },
  {
    "front": "Reheating Temperature",
    "back": "Previously cooked refrigerated foods must be rapidly reheated to 165°F using stove or oven, never hot holding unit"
  },
  {
    "front": "Ready-to-Eat Food Handling",
    "back": "Never use bare hands - always wear clean gloves or use tongs, spatula, deli paper, or serving spoon"
  },
  {
    "front": "Disposable Glove Usage",
    "back": "Change gloves often to prevent food contamination"
  },
  {
    "front": "Air Breaks Required",
    "back": "Must be provided in all culinary and pot/dish washing sinks"
  },
  {
    "front": "Atmospheric Vacuum Breakers (AVB)",
    "back": "Must be installed in equipment with direct potable water connection (ice machines, coffee machines, dishwashers)"
  },
  {
    "front": "Cross-Connection Prevention",
    "back": "Install hose bib vacuum breaker"
  },
  {
    "front": "Gas-Fired Water Heaters",
    "back": "Must be installed by licensed plumber and monitored for back draft"
  },
  {
    "front": "Grease Disposal",
    "back": "Illegal to dump grease in sink without proper grease interceptor"
  },
  {
    "front": "Manual Dishwashing Sequence",
    "back": "Wash, rinse, sanitize, and air-dry"
  },
  {
    "front": "Cutting Board Sanitation",
    "back": "Between each use, must be washed, rinsed, and sanitized"
  },
  {
    "front": "Hot-Water Sanitizing",
    "back": "Immerse utensils in 170°F water for at least 30 seconds"
  },
  {
    "front": "50 PPM Chlorine Solution",
    "back": "½ ounce bleach to 1 gallon water - for immersing utensils 1 minute"
  },
  {
    "front": "100 PPM Chlorine Solution",
    "back": "1 ounce bleach to 1 gallon water - for wiping, spraying, or pouring"
  },
  {
    "front": "Wiping Cloth Storage",
    "back": "Must be stored in 50 PPM sanitizing solution"
  },
  {
    "front": "Chemical Sanitization Testing",
    "back": "Chemical solution must be checked with test kit"
  },
  {
    "front": "Patron Bathroom Requirement",
    "back": "Must be provided when there are 20 or more seats in dining area"
  },
  {
    "front": "Integrated Pest Management Strategies",
    "back": "Three key strategies: starve them, build them out, destroy them"
  },
  {
    "front": "Mouse Control Method",
    "back": "When food is unavailable, mice will move out of restaurant"
  },
  {
    "front": "Rat Entry Point Size",
    "back": "Can enter buildings through openings as small as a quarter"
  },
  {
    "front": "Fresh Rat Droppings",
    "back": "Presence in food establishment is a critical violation"
  },
  {
    "front": "Pesticide Application",
    "back": "Insecticides and rodenticides can only be applied by licensed pest control officer"
  },
  {
    "front": "Best Fly and Roach Elimination",
    "back": "Proper cleaning and sanitizing"
  },
  {
    "front": "HACCP Definition",
    "back": "Hazard Analysis and Critical Control Point - system of food safety to control harmful microorganisms"
  },
  {
    "front": "Seven HACCP Principles",
    "back": "Identify hazards, determine CCPs, set critical limits, monitor CCPs, take corrective actions, verify system, keep records"
  },
  {
    "front": "Critical Control Point (CCP)",
    "back": "Any point in food flow where action must be taken to eliminate hazards"
  },
  {
    "front": "Temperature Danger Zone Time Limit",
    "back": "If PHFs left in danger zone more than 2 hours, food is unsafe and must be discarded"
  },
  {
    "front": "Cold Salad Best Practice",
    "back": "Pre-chill ingredients when making cold salads like tuna"
  },
  {
    "front": "Artificial Trans Fat",
    "back": "Increases LDL (bad cholesterol) leading to heart disease - banned from all restaurant foods"
  },
  {
    "front": "Self-Assessment Purpose",
    "back": "Routinely conduct to improve food safety, security, and general work practices"
  },
  {
    "front": "Common Restaurant Worker Injuries",
    "back": "Slips, trips, falls, cuts, lacerations, burns, muscle strains, sprains, electrocution"
  },
  {
    "front": "Slip Prevention",
    "back": "Food workers must wear slip-resistant shoes"
  }
]`;

const FlashcardApp = () => {
  const [mode, setMode] = useState('study'); // 'create', 'loading', 'study'
  const [topic, setTopic] = useState('');
  const [flashcards, setFlashcards] = useState(JSON.parse(FLASHCARD_DATA));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState('describe');
  const [animating, setAnimating] = useState(false);

  const generateFlashcards = async () => {
    if (!topic.trim()) return;
    
    setMode('loading');
    
    let prompt;
    
    if (activeTab === 'paste') {
      prompt = `You are tasked with extracting flashcard content from a given text chunk. Your goal is to identify key terms and their corresponding definitions or explanations that would be suitable for creating flashcards.

Here's the text chunk you need to analyze:
<text_chunk>
${topic}
</text_chunk>

Guidelines for extracting flashcard content:
1. Identify important terms, concepts, or phrases that are central to the text's topic.
2. For each term, find a corresponding definition, explanation, or key information from the text.
3. Ensure that the term and definition pairs are concise and clear.
4. Extract only the most relevant and significant information.
5. Aim for a balance between comprehensiveness and brevity.

Create between 3-10 flashcards based on the content available.

Please respond in ${locale} language.

Respond ONLY with a valid JSON array in this exact format:
[
  {
    "front": "Term or concept (keep concise, 1-5 words ideal)",
    "back": "Definition or explanation from the text (clear and educational, under 50 words)"
  }
]

DO NOT include any text outside the JSON array.`;
    } else {
      prompt = `You are tasked with creating educational flashcards about "${topic}". Your goal is to create concise, clear, and accurate flashcard pairs that would help someone learn this topic.

Guidelines for creating effective flashcards:
1. Each flashcard should have a clear term/concept on one side and a concise definition/explanation on the other
2. Terms should be specific and focused (ideally 1-5 words)
3. Definitions should be clear and brief (ideally under 50 words)
4. Focus on the most important concepts related to the topic
5. Make the content educational, accurate, and helpful for learning

Based on the topic, adapt your approach:
* For locations (countries, cities): Use the location as the term and key facts as the definition
* For historical subjects: Use events/people as terms and dates/significance as definitions
* For scientific topics: Use concepts/terms as the front and explanations as the back
* For language learning: Use words in one language as terms and translations as definitions

Please respond in ${locale} language.

Please provide exactly 10 flashcards in this JSON format - don't include any text outside the JSON:
[
  {
    "front": "Term or concept",
    "back": "Definition or explanation"
  }
]`;
    }
    
    try {
      const response = await window.claude.complete(prompt);
      const cards = JSON.parse(response);
      setFlashcards(cards);
      setCurrentIndex(0);
      setFlipped(false);
      setMode('study');
    } catch (error) {
      console.error('Error generating flashcards:', error);
      alert('Failed to generate flashcards. Please try again.');
      setMode('create');
    }
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1 && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setFlipped(false);
        setCurrentIndex(currentIndex + 1);
        setTimeout(() => setAnimating(false), 50);
      }, 150);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0 && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setFlipped(false);
        setCurrentIndex(currentIndex - 1);
        setTimeout(() => setAnimating(false), 50);
      }, 150);
    }
  };

  const handleKeyPress = (e) => {
    if (mode === 'study') {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        handleFlip();
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [mode, currentIndex, flashcards.length, flipped, animating]);

  if (mode === 'create') {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#6A9BCC' }}>
        <div className="w-full max-w-lg p-8">
          <h1 className="text-white text-4xl font-bold text-center mb-8">{t('createFlashcardsTitle')}</h1>
          
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-0.5 rounded-full inline-flex">
              <button
                onClick={() => setActiveTab('paste')}
                className={`px-6 py-2 rounded-full font-medium transition-all text-base ${
                  activeTab === 'paste' 
                    ? 'bg-white text-gray-700 shadow-md' 
                    : 'text-white hover:text-white/90'
                }`}
              >
                {t('pasteTextTab')}
              </button>
              <button
                onClick={() => setActiveTab('describe')}
                className={`px-6 py-2 rounded-full font-medium transition-all text-base ${
                  activeTab === 'describe' 
                    ? 'bg-white text-gray-700 shadow-md' 
                    : 'text-white hover:text-white/90'
                }`}
              >
                {t('describeTopicTab')}
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder={activeTab === 'describe' 
                ? t('describeTopicPlaceholder')
                : t('pasteTextPlaceholder')}
              className="w-full h-52 text-gray-900 placeholder-gray-400 resize-none focus:outline-none"
              style={{ fontSize: '18px', lineHeight: '1.6' }}
            />
          </div>
          
          <button
            onClick={generateFlashcards}
            className="w-full mt-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors text-lg"
          >
            {t('generateFlashcardsButton')}
          </button>
        </div>
      </div>
    );
  }

  if (mode === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#6A9BCC' }}>
        <div className="text-center">
          <h1 className="text-white text-4xl font-medium mb-4">{t('generatingTitle')}</h1>
          <p className="text-white/80 mb-8">{t('generatingSubtitle')}</p>
          <div className="flex justify-center">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'study') {
    const currentCard = flashcards[currentIndex];
    
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#6A9BCC' }}>
        <div className="w-full max-w-2xl px-8">
          <div className="relative" style={{ perspective: '1000px' }}>
            <div
              className={`relative w-full h-96 transition-all duration-700 transform-style-preserve-3d cursor-pointer ${
                flipped ? 'rotate-x-180' : ''
              } ${animating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
              onClick={handleFlip}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front of card */}
              <div 
                className="absolute inset-0 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 backface-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="text-center flex-1 flex items-center justify-center">
                  <h2 className="text-4xl font-medium text-gray-800">{currentCard.front}</h2>
                </div>
                <p className="text-gray-500 mt-auto">{t('flipInstruction')}</p>
              </div>
              
              {/* Back of card */}
              <div 
                className="absolute inset-0 bg-white rounded-3xl shadow-xl flex items-center justify-center p-8 rotate-x-180 backface-hidden"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateX(180deg)'
                }}
              >
                <div className="text-center">
                  <p className="text-xl text-gray-700 leading-relaxed">{currentCard.back}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full transition-all ${
                currentIndex === 0 
                  ? 'bg-white/20 text-white/50 cursor-not-allowed' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            
            <span className="mx-6 text-white text-lg font-medium">
              {currentIndex + 1} / {flashcards.length}
            </span>
            
            <button
              onClick={handleNext}
              disabled={currentIndex === flashcards.length - 1}
              className={`p-3 rounded-full transition-all ${
                currentIndex === flashcards.length - 1 
                  ? 'bg-white/20 text-white/50 cursor-not-allowed' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="text-center mt-6">
            <button
              onClick={() => {
                setMode('create');
                setTopic('');
                setFlashcards([]);
              }}
              className="text-white/70 hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              {t('createNewFlashcardsLink')}
            </button>
          </div>
        </div>
      </div>
    );
  }
};

// Add CSS for 3D flip animation
const style = document.createElement('style');
style.textContent = `
  .rotate-x-180 {
    transform: rotateX(180deg);
  }
  .backface-hidden {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .transform-style-preserve-3d {
    transform-style: preserve-3d;
  }
  @keyframes slideInFromRight {
    from {
      transform: translateX(20px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideInFromLeft {
    from {
      transform: translateX(-20px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

export default FlashcardApp;