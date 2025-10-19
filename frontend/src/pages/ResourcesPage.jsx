import { useState } from "react";
import { BookOpenIcon, GlobeIcon, PlayIcon } from "lucide-react";

const ResourcesPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // Language learning resources data
  const languageResources = {
    English: [
      {
        title: "English Conversation Practice - Beginner",
        url: "https://youtu.be/oWjmNy9pmf8?si=M2_oTjIV4u0jGn3K",
        description: "Basic English conversations for beginners",
      },
      {
        title: "English Grammar Made Easy",
        url: "https://youtu.be/28vxXnY3PL4?si=MHfTor1V3-5KHqVe",
        description: "Learn English grammar step by step",
      },
      {
        title: "English Pronunciation Guide",
        url: "https://youtu.be/QxQUapA-2w4?si=q4oqWh82qEOclQ7t",
        description: "Master English pronunciation",
      },
      {
        title: "English Vocabulary Building",
        url: "https://youtu.be/Q5RhxOOCWiY?si=6EAqsH1lTcLmcdWt",
        description: "Expand your English vocabulary",
      },
      {
        title: "English Listening Practice",
        url: "https://youtu.be/QMD8kmZIECc?si=6wy3b0tsmmNI72Gh",
        description: "Improve your English listening skills",
      },
      {
        title: "English Writing Skills",
        url: "https://youtu.be/QMD8kmZIECc?si=6wy3b0tsmmNI72Gh",
        description: "Learn to write better in English",
      },
      {
        title: "English Idioms and Phrases",
        url: "https://youtu.be/HclqADvf35Y?si=P3ojmuUcy0AqZ-SE",
        description: "Common English idioms explained",
      },
      {
        title: "English for Business",
        url: "https://youtu.be/fm6PtyM4qMw?si=6--K_rdFrkX6s9np",
        description: "Professional English communication",
      },
      {
        title: "English Slang and Informal Language",
        url: "https://youtu.be/7fMKxYBNCfc?si=WZdfR1tSZWVJzHWy",
        description: "Learn casual English expressions",
      },
      {
        title: "English Test Preparation",
        url: "https://youtu.be/rtHQQIBAQ6U?si=Fi66fGX5EOYA4Yw3",
        description: "Prepare for English proficiency tests",
      },
    ],
    Spanish: [
      {
        title: "Spanish for Beginners - Complete Course",
        url: "https://youtube.com/playlist?list=PLv63dFTP4Sjq6knRsZQI-bTnRE38cZZoy&si=82L8D_dritrDyccV",
        description: "Learn Spanish from scratch",
      },
      {
        title: "Spanish Grammar Fundamentals",
        url: "https://youtu.be/Sh7MLrbxH2E?si=qCMKggSiipFVxfst",
        description: "Master Spanish grammar basics",
      },
      {
        title: "Spanish Pronunciation Guide",
        url: "https://youtu.be/kJQjXAVEWt0?si=1Q8IiYqb8lDJCzyh",
        description: "Perfect your Spanish pronunciation",
      },
      {
        title: "Spanish Vocabulary Builder",
        url: "https://youtu.be/6_5FnCLLYoA?si=XMiWWayk57ouE39r",
        description: "Expand your Spanish vocabulary",
      },
      {
        title: "Spanish Conversation Practice",
        url: "https://youtu.be/7OU9_C1JnFs?si=QBuG8mMbcac91aCk",
        description: "Practice speaking Spanish",
      },
      {
        title: "Spanish Listening Comprehension",
        url: "https://youtu.be/wHx49kSonBM?si=tQd2I4Pe-fhHSeVc",
        description: "Improve Spanish listening skills",
      },
      {
        title: "Spanish Verb Conjugations",
        url: "https://youtu.be/hezvnkU5KPY?si=gOTL7-Up05jq8RVS",
        description: "Learn Spanish verb forms",
      },
      {
        title: "Spanish Culture and Traditions",
        url: "https://youtu.be/5e9IHzfiipU?si=7bFUo1zSKgJveI38",
        description: "Explore Spanish culture",
      },
      {
        title: "Spanish for Travelers",
        url: "https://youtu.be/GaS0BiNhWFw?si=4UCjMjsiEFLhVoiW",
        description: "Essential Spanish for travel",
      },
      {
        title: "Spanish Slang and Expressions",
        url: "https://youtu.be/H30niCCo2zI?si=UQcGigt8n8TfE5wq",
        description: "Learn informal Spanish",
      },
    ],
    Hindi: [
      {
        title: "Hindi Learning for Beginners",
        url: "https://youtu.be/1lrz11BbqCA?si=XM5Yoh2aj6nKKAsl",
        description: "Start learning Hindi from basics",
      },
      {
        title: "Hindi Alphabet and Script",
        url: "https://www.youtube.com/playlist?list=PLt0oEzsnHGgL8Sncvj-CXnJhg5EvTcEyg",
        description: "Learn Devanagari script",
      },
      {
        title: "Hindi Grammar Essentials",
        url: "https://youtu.be/duBXkhay8wQ?si=9WspmPExs3hWR2gs",
        description: "Master Hindi grammar rules",
      },
      {
        title: "Hindi Vocabulary Building",
        url: "https://youtu.be/Kg1bs9soDW8?si=4ITqMpUXZJTk-1hh",
        description: "Build your Hindi vocabulary",
      },
      {
        title: "Hindi Conversation Practice",
        url: "https://youtu.be/58XLv3tZvM0?si=PnWOejv1ZGS5zd2C",
        description: "Practice speaking Hindi",
      },
      {
        title: "Hindi Pronunciation Guide",
        url: "https://youtu.be/yJHjjjWe0s4?si=KI_WAqqaJnez20ab",
        description: "Perfect Hindi pronunciation",
      },
      {
        title: "Hindi Listening Skills",
        url: "https://youtu.be/MRX0yV_jkyA?si=sSI-U9Y_u5hwW1nL",
        description: "Improve Hindi listening",
      },
      {
        title: "Hindi Writing Practice",
        url: "https://youtu.be/OipDSogRJcQ?si=NtCCHSUmJ5HbrWsi",
        description: "Learn to write in Hindi",
      },
      {
        title: "Hindi Culture and Traditions",
        url: "https://youtu.be/dmWeUL_J-oI?si=bURV8Ve9aakV1SPB",
        description: "Explore Indian culture",
      },
      {
        title: "Hindi for Daily Life",
        url: "https://youtu.be/T9lYpzO6nG0?si=vCjevfEkSd6G2g5A",
        description: "Common Hindi phrases",
      },
    ],
    French: [
      {
        title: "French for Beginners - Complete Course",
        url: "https://www.youtube.com/watch?v=Oe421EPjeBE",
        description: "Learn French from the beginning",
      },
      {
        title: "French Grammar Made Simple",
        url: "https://www.youtube.com/watch?v=L72fhGm1tfE",
        description: "Master French grammar",
      },
      {
        title: "French Pronunciation Mastery",
        url: "https://www.youtube.com/watch?v=pKd0Rpw7O48",
        description: "Perfect French pronunciation",
      },
      {
        title: "French Vocabulary Expansion",
        url: "https://www.youtube.com/watch?v=WDrU305J1yw",
        description: "Build your French vocabulary",
      },
      {
        title: "French Conversation Practice",
        url: "https://www.youtube.com/watch?v=Ud5xKCYQT4M",
        description: "Practice speaking French",
      },
      {
        title: "French Listening Comprehension",
        url: "https://www.youtube.com/watch?v=9QzmB1aFT54",
        description: "Improve French listening",
      },
      {
        title: "French Verb Conjugations",
        url: "https://www.youtube.com/watch?v=1BfCnjr_Vjg",
        description: "Learn French verb forms",
      },
      {
        title: "French Culture and Lifestyle",
        url: "https://www.youtube.com/watch?v=DyqVqaf1KnA",
        description: "Explore French culture",
      },
      {
        title: "French for Travel",
        url: "https://www.youtube.com/watch?v=7nafaH9SddU",
        description: "Essential French for travelers",
      },
      {
        title: "French Slang and Expressions",
        url: "https://www.youtube.com/watch?v=VShtPwEkDD0",
        description: "Learn informal French",
      },
    ],
    German: [
      {
        title: "German for Beginners - Full Course",
        url: "https://www.youtube.com/watch?v=eIrMbAQSU34",
        description: "Complete German learning course",
      },
      {
        title: "German Grammar Fundamentals",
        url: "https://www.youtube.com/watch?v=BtLqZ0QNfIk",
        description: "Learn German grammar basics",
      },
      {
        title: "German Pronunciation Guide",
        url: "https://www.youtube.com/watch?v=rzA7UJ-hQn4",
        description: "Master German pronunciation",
      },
      {
        title: "German Vocabulary Building",
        url: "https://www.youtube.com/watch?v=K_-3OLkXkzY",
        description: "Expand German vocabulary",
      },
      {
        title: "German Conversation Practice",
        url: "https://www.youtube.com/watch?v=TCd8QIX-6NI",
        description: "Practice speaking German",
      },
      {
        title: "German Listening Skills",
        url: "https://www.youtube.com/watch?v=t1-YZ6bF-g0",
        description: "Improve German listening",
      },
      {
        title: "German Cases and Articles",
        url: "https://www.youtube.com/watch?v=vtPkZShreXQ",
        description: "Learn German cases",
      },
      {
        title: "German Culture and History",
        url: "https://www.youtube.com/watch?v=9SGDpanrc8U",
        description: "Explore German culture",
      },
      {
        title: "German for Business",
        url: "https://www.youtube.com/watch?v=v9ejT8FO-7I",
        description: "Professional German",
      },
      {
        title: "German Idioms and Phrases",
        url: "https://www.youtube.com/watch?v=2i5t-SL2Vs8",
        description: "Common German expressions",
      },
    ],
    Japanese: [
      {
        title: "Japanese for Beginners - Complete Guide",
        url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
        description: "Learn Japanese from scratch",
      },
      {
        title: "Hiragana and Katakana Learning",
        url: "https://www.youtube.com/watch?v=2nZiB1JItbY",
        description: "Master Japanese alphabets",
      },
      {
        title: "Japanese Grammar Basics",
        url: "https://www.youtube.com/watch?v=WZQc7RUAg18",
        description: "Learn Japanese grammar",
      },
      {
        title: "Japanese Vocabulary Building",
        url: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
        description: "Expand Japanese vocabulary",
      },
      {
        title: "Japanese Conversation Practice",
        url: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        description: "Practice speaking Japanese",
      },
      {
        title: "Japanese Pronunciation Guide",
        url: "https://www.youtube.com/watch?v=3a0I8ICR1Vg",
        description: "Perfect Japanese pronunciation",
      },
      {
        title: "Japanese Listening Practice",
        url: "https://www.youtube.com/watch?v=R8rmfD9Y5-c",
        description: "Improve Japanese listening",
      },
      {
        title: "Japanese Culture and Etiquette",
        url: "https://www.youtube.com/watch?v=N8ap4k_1QEQ",
        description: "Learn Japanese culture",
      },
      {
        title: "Japanese for Travel",
        url: "https://www.youtube.com/watch?v=PFmuCDHHpwk",
        description: "Essential Japanese for travel",
      },
      {
        title: "Japanese Kanji Learning",
        url: "https://www.youtube.com/watch?v=23AOrSN-wmI",
        description: "Master Japanese characters",
      },
    ],
  };

  const languages = Object.keys(languageResources);

  return (
    <div className="min-h-screen bg-base-100">
      <div className="p-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <BookOpenIcon className="size-8 text-primary" />
            Language Learning Resources
          </h1>
          <p className="text-base-content/70 mt-2">
            Discover YouTube tutorials to help you learn new languages
          </p>
        </div>

        {/* Language Selection */}
        <div className="card bg-base-200 p-6 mb-8">
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                <GlobeIcon className="size-5 inline mr-2" />
                Select the language to learn
              </span>
            </label>
            <select
              className="select select-bordered w-full"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="">Choose a language...</option>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Resources Display */}
        {selectedLanguage && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold">
                {selectedLanguage} Learning Resources
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {languageResources[selectedLanguage].map((resource, index) => (
                <div
                  key={index}
                  className="card bg-base-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="card-body p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0">
                        <PlayIcon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg leading-tight">
                          {resource.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-base-content/70 mb-4">
                      {resource.description}
                    </p>

                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm w-full"
                    >
                      <PlayIcon className="size-4 mr-2" />
                      Watch Tutorial
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!selectedLanguage && (
          <div className="text-center py-16">
            <GlobeIcon className="size-16 mx-auto text-base-content/30 mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Choose a language to get started
            </h3>
            <p className="text-base-content/70">
              Select a language from the dropdown above to see available
              learning resources
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;
