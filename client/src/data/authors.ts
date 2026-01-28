export interface Author {
    id: number;
    name: string;
    category: "NUEVO PENSAMIENTO" | "METAFÍSICA" | "ESPIRITUALIDAD" | "FILOSOFÍA" | "ÉXITO" | "MISTICISMO CRISTIANO";
    title: string;
    description: string;
    articles: number;
    image: string;
    about: string;
    featured: boolean;
    bibliography: { year: number; title: string }[];
    latestWorks: { title: string; date: string; type: "LIBRO" | "CONFERENCIA" | "ENSAYO"; snippet: string }[];
}

export const authors: Author[] = [
    {
        id: 1,
        name: "Neville Goddard",
        category: "NUEVO PENSAMIENTO",
        title: "Místico y Autor",
        description: "Maestro de la Ley de Asunción y el poder de la imaginación.",
        articles: 500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", // Placeholder
        about: "Neville Goddard fue un profeta, maestro profundamente influyente y autor. No se asoció con ningún 'ismo' o enseñanza del 'Nuevo Pensamiento' tal como se entiende comúnmente. Es mejor conocido por su concepto de 'La Ley' (la imaginación crea la realidad) y 'La Promesa'.",
        featured: true,
        bibliography: [
            { year: 1952, title: "El Poder de la Conciencia" },
            { year: 1941, title: "Tu Fe es Tu Fortuna" },
            { year: 1961, title: "La Ley y la Promesa" },
            { year: 1966, title: "Resurrección" },
            { year: 1954, title: "El Uso Creativo de la Imaginación" },
            { year: 1948, title: "Fuera de Este Mundo" }
        ],
        latestWorks: [
            { title: "El Poder de la Conciencia", date: "Clásico", type: "LIBRO", snippet: "Descubre cómo tu conciencia es la única realidad y cómo cambiarla para cambiar tu vida." },
            { title: "Sientelo Real", date: "Conferencia", type: "CONFERENCIA", snippet: "La técnica central de manifestación: asumir el sentimiento del deseo cumplido." },
            { title: "La Imaginación Crea la Realidad", date: "Conferencia", type: "CONFERENCIA", snippet: "Explorando el poder divino dentro del hombre para dar forma a su propio destino." }
        ]
    },
    {
        id: 99,
        name: "Germán González",
        category: "FILOSOFÍA",
        title: "Autor & Conferencista",
        description: "Explorando la creatividad y la consciencia.",
        articles: 12,
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        about: "Germán González explora la intersección entre la imaginación humana, la filosofía perenne y la práctica creativa moderna. Su trabajo busca desmitificar los procesos creativos y espirituales.",
        featured: true,
        bibliography: [
            { year: 2025, title: "El Arte de la Imaginación" },
            { year: 2024, title: "Ecos de lo Eterno" }
        ],
        latestWorks: [
            { title: "El Arte de la Imaginación", date: "Nov 2025", type: "LIBRO", snippet: "Una guía práctica para desbloquear el potencial creativo a través de la imaginación consciente." },
            { title: "Despertando al Soñador", date: "Oct 2025", type: "CONFERENCIA", snippet: "Charla magistral sobre los estados de conciencia y el despertar espiritual." },
            { title: "Laberintos de Borges", date: "Jun 2025", type: "ENSAYO", snippet: "Análisis profundo de la simbología en la obra de Jorge Luis Borges." }
        ]
    },
    {
        id: 100,
        name: "Neville Aggiornado",
        category: "NUEVO PENSAMIENTO",
        title: "La Enseñanza Viva",
        description: "Neville Goddard para el siglo XXI.",
        articles: 5,
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&q=80&w=800", // Abstract/Modern concept
        about: "Una reinterpretación contemporánea de las enseñanzas clásicas de Neville Goddard, adaptadas al lenguaje y los desafíos del mundo moderno. La esencia mística encuentra la práctica actual.",
        featured: true,
        bibliography: [
            { year: 2024, title: "Asunción 2.0" },
            { year: 2025, title: "La Imaginación Digital" }
        ],
        latestWorks: [
            { title: "El Algoritmo de la Fe", date: "Reciente", type: "ENSAYO", snippet: "Cómo navegar la era de la información manteniendo la dieta mental." },
            { title: "Imaginación en Tiempo Real", date: "Taller", type: "CONFERENCIA", snippet: "Aplicaciones instantáneas de la Ley en la vida urbana." },
            { title: "Revisionando el Pasado", date: "Guía", type: "LIBRO", snippet: "Técnicas de revisión para el trauma moderno." }
        ]
    },
    {
        id: 2,
        name: "Joseph Murphy",
        category: "METAFÍSICA",
        title: "Ministro de Ciencia Divina",
        description: "Autor de 'El Poder de la Mente Subconsciente'.",
        articles: 30,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        about: "Joseph Murphy fue un ministro de la Ciencia Divina y autor. Pasó una parte importante de su vida estudiando religiones orientales y fue un estudioso del I-Ching.",
        featured: true,
        bibliography: [
            { year: 1963, title: "El Poder de Tu Mente Subconsciente" },
            { year: 1958, title: "Los Milagros de Tu Mente" },
            { year: 1965, title: "Las Asombrosas Leyes del Poder de la Mente Cósmica" }
        ],
        latestWorks: [
            { title: "El Poder de la Mente Subconsciente", date: "Clásico", type: "LIBRO", snippet: "Desbloqueando el poder milagroso dentro de tu propia mente para sanar y prosperar." },
            { title: "Cómo Atraer el Dinero", date: "Guía", type: "LIBRO", snippet: "Técnicas prácticas para alinear tu mente con la riqueza y la abundancia." },
            { title: "Telepsíquica", date: "Libro", type: "LIBRO", snippet: "Usando el poder mágico del pensamiento perfecto para influir en los eventos." }
        ]
    },
    {
        id: 3,
        name: "Florence Scovel Shinn",
        category: "NUEVO PENSAMIENTO",
        title: "Maestra del Nuevo Pensamiento",
        description: "Conocida por 'El Juego de la Vida y Cómo Jugarlo'.",
        articles: 15,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
        about: "Florence Scovel Shinn fue una artista e ilustradora de libros estadounidense que se convirtió en maestra espiritual del Nuevo Pensamiento y escritora metafísica en sus años intermedios.",
        featured: true,
        bibliography: [
            { year: 1925, title: "El Juego de la Vida y Cómo Jugarlo" },
            { year: 1928, title: "Tu Palabra es Tu Varita Mágica" },
            { year: 1940, title: "La Puerta Secreta Hacia el Éxito" }
        ],
        latestWorks: [
            { title: "El Juego de la Vida y Cómo Jugarlo", date: "Clásico", type: "LIBRO", snippet: "Entendiendo la vida como un juego de bumeranes, donde los pensamientos y palabras regresan a nosotros." },
            { title: "Tu Palabra es Tu Varita Mágica", date: "Libro", type: "LIBRO", snippet: "El poder de la palabra hablada para dar forma a tu realidad." },
            { title: "La Puerta Secreta Hacia el Éxito", date: "Libro", type: "LIBRO", snippet: "Superando barreras para el éxito a través del entendimiento espiritual." }
        ]
    },
    {
        id: 4,
        name: "Emmet Fox",
        category: "NUEVO PENSAMIENTO",
        title: "Divine Science Minister",
        description: "Influential 20th-century spiritual leader.",
        articles: 40,
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        about: "Emmet Fox was a New Thought spiritual leader who influenced Alcoholics Anonymous co-founder Bill Wilson. His writings emphasize the power of constructive thinking.",
        featured: false,
        bibliography: [
            { year: 1934, title: "The Sermon on the Mount" },
            { year: 1932, title: "Find and Use Your Inner Power" },
            { year: 1940, title: "Power Through Constructive Thinking" }
        ],
        latestWorks: [
            { title: "El Sermón del Monte", date: "Classic", type: "LIBRO", snippet: "A key to scientific Christianity and the power of thought." },
            { title: "Encuentra y Usa tu Poder Interior", date: "Guide", type: "LIBRO", snippet: "Practical steps to tap into the divine power within." },
            { title: "Las Diez Llaves Doradas", date: "Essay", type: "ENSAYO", snippet: "Golden rules for harmonious living and spiritual success." }
        ]
    },
    {
        id: 5,
        name: "Charles Fillmore",
        category: "MISTICISMO CRISTIANO",
        title: "Co-founder of Unity",
        description: "American mystic and co-founder of the Unity Church.",
        articles: 55,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        about: "Charles Fillmore, with his wife Myrtle, founded Unity, a church within the New Thought movement. He was known for his metaphysical interpretations of the Bible.",
        featured: false,
        bibliography: [
            { year: 1936, title: "Prosperity" },
            { year: 1930, title: "The Twelve Powers of Man" },
            { year: 1909, title: "Christian Healing" }
        ],
        latestWorks: [
            { title: "Prosperidad", date: "Book", type: "LIBRO", snippet: "Spiritual laws governing supply and abundance." },
            { title: "Doce Poderes del Hombre", date: "Book", type: "LIBRO", snippet: "Developing the twelve fundamental faculties of the mind." },
            { title: "Metafísica Cristiana", date: "Book", type: "LIBRO", snippet: "Core teachings on the metaphysical aspects of Christianity." }
        ]
    },
    {
        id: 6,
        name: "Wallace Wattles",
        category: "ÉXITO",
        title: "New Thought Writer",
        description: "Pioneer of success literature.",
        articles: 10,
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
        about: "Wallace Delois Wattles was an American New Thought writer. He remains best known for his 1910 book 'The Science of Getting Rich'.",
        featured: true,
        bibliography: [
            { year: 1910, title: "The Science of Getting Rich" },
            { year: 1911, title: "The Science of Being Great" },
            { year: 1910, title: "The Science of Being Well" }
        ],
        latestWorks: [
            { title: "La Ciencia de Hacerse Rico", date: "Classic", type: "LIBRO", snippet: "The foundational text on wealth creation through creative thought." },
            { title: "La Ciencia de Ser Grande", date: "Book", type: "LIBRO", snippet: "How to harness the power of God to achieve greatness." },
            { title: "La Ciencia de Estar Bien", date: "Book", type: "LIBRO", snippet: "Applying the principle of health to the physical body." }
        ]
    },
    {
        id: 7,
        name: "Charles Haanel",
        category: "ÉXITO",
        title: "Author & Businessman",
        description: "Creator of 'The Master Key System'.",
        articles: 8,
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
        about: "Charles F. Haanel was an American New Thought author and businessman. He is best known for his contributions to the New Thought movement through his book The Master Key System.",
        featured: false,
        bibliography: [
            { year: 1912, title: "The Master Key System" },
            { year: 1928, title: "Mental Chemistry" }
        ],
        latestWorks: [
            { title: "El Sistema Llave Maestra", date: "Course", type: "LIBRO", snippet: "A 24-week course in constructive thinking and creative manifestation." },
            { title: "Prosperidad Mental", date: "Book", type: "LIBRO", snippet: "Understanding the chemistry of the mind for success." }
        ]
    },
    {
        id: 8,
        name: "Napoleon Hill",
        category: "ÉXITO",
        title: "Success Philosopher",
        description: "Author of 'Think and Grow Rich'.",
        articles: 25,
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
        about: "Napoleon Hill was an American self-help author. He is best known for his book Think and Grow Rich, which is among the 10 best selling self-help books of all time.",
        featured: true,
        bibliography: [
            { year: 1937, title: "Think and Grow Rich" },
            { year: 1928, title: "The Law of Success" },
            { year: 1938, title: "Outwitting the Devil" }
        ],
        latestWorks: [
            { title: "Piense y Hágase Rico", date: "Classic", type: "LIBRO", snippet: "The 13 steps to riches and personal achievement." },
            { title: "Más Astuto que el Diablo", date: "Book", type: "LIBRO", snippet: "Overcoming fear and procrastination." },
            { title: "La Actitud Mental Positiva", date: "Book", type: "LIBRO", snippet: "The science of personal achievement through positive thinking." }
        ]
    },
    {
        id: 9,
        name: "Thomas Troward",
        category: "METAFÍSICA",
        title: "Judge & Philosopher",
        description: "Influential thinker in Mental Science.",
        articles: 12,
        image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=400&fit=crop",
        about: "Thomas Troward was a divisional Judge in British-administered India. His writings profoundly influenced the New Thought movement and Mental Science.",
        featured: false,
        bibliography: [
            { year: 1904, title: "The Edinburgh Lectures on Mental Science" },
            { year: 1909, title: "The Dore Lectures on Mental Science" },
            { year: 1921, title: "The Hidden Power" }
        ],
        latestWorks: [
            { title: "Conferencias de Edimburgo sobre Ciencia Mental", date: "Lecture", type: "CONFERENCIA", snippet: "Foundational lectures on the nature of mental action and the law of cause and effect." },
            { title: "La Palabra de Dios es la Ley", date: "Book", type: "LIBRO", snippet: "Exploring the creative power of the word." }
        ]
    },
    {
        id: 10,
        name: "Ernest Holmes",
        category: "METAFÍSICA",
        title: "Founder of Religious Science",
        description: "Author of 'The Science of Mind'.",
        articles: 45,
        image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&h=400&fit=crop",
        about: "Ernest Shurtleff Holmes was an American New Thought writer, teacher, and leader. He was the founder of a spiritual movement known as Religious Science.",
        featured: true,
        bibliography: [
            { year: 1926, title: "The Science of Mind" },
            { year: 1953, title: "Creative Mind and Success" },
            { year: 1938, title: "This Thing Called You" }
        ],
        latestWorks: [
            { title: "La Ciencia de la Mente", date: "Textbook", type: "LIBRO", snippet: "The definitive textbook on religious science and spiritual psychology." },
            { title: "Ideas Creativas", date: "Book", type: "LIBRO", snippet: "Essays on how to use your mind to create a better life." },
            { title: "Palabras que Curan Hoy", date: "Book", type: "LIBRO", snippet: "Daily affirmations and healings." }
        ]
    },
    {
        id: 11,
        name: "Christian D. Larson",
        category: "NUEVO PENSAMIENTO",
        title: "Author & Teacher",
        description: "Known for 'The Optimist Creed'.",
        articles: 20,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        about: "Christian Daa Larson was an American New Thought leader and teacher, and a prolific author of metaphysical and New Thought books.",
        featured: false,
        bibliography: [
            { year: 1912, title: "Your Forces and How to Use Them" },
            { year: 1912, title: "The Ideal Made Real" }
        ],
        latestWorks: [
            { title: "Tu Fuerza y Cómo Usarla", date: "Book", type: "LIBRO", snippet: "Mastering the forces within for higher achievement." },
            { title: "El Camino Ideal", date: "Book", type: "LIBRO", snippet: "Living the ideal life through mental attitude." },
            { title: "La Grandeza de Tu Interior", date: "Book", type: "LIBRO", snippet: "Uncovering the greatness residing in every soul." }
        ]
    },
    {
        id: 12,
        name: "Prentice Mulford",
        category: "NUEVO PENSAMIENTO",
        title: "Pioneer of New Thought",
        description: "Author of the 'White Cross Library'.",
        articles: 28,
        image: "https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?w=400&h=400&fit=crop",
        about: "Prentice Mulford was a noted literary humorist and California author, who originated the term 'New Thought'.",
        featured: false,
        bibliography: [
            { year: 1889, title: "Thoughts are Things" },
            { year: 1888, title: "Your Forces and How to Use Them" }
        ],
        latestWorks: [
            { title: "Pensamientos Son Cosas", date: "Essay", type: "ENSAYO", snippet: "The material reality of thought energy and its impact." },
            { title: "Tus Fuerzas y Cómo Usarlas", date: "Book", type: "LIBRO", snippet: "A guide to personal power and mental forces." }
        ]
    },
    {
        id: 13,
        name: "Robert Collier",
        category: "ÉXITO",
        title: "Author",
        description: "Writer of 'The Secret of the Ages'.",
        articles: 17,
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop",
        about: "Robert Collier was an American author of self-help and New Thought metaphysical books. He was the nephew of Peter Fenelon Collier, founder of Collier's Weekly.",
        featured: false,
        bibliography: [
            { year: 1926, title: "The Secret of the Ages" },
            { year: 1949, title: "Riches Within Your Reach" }
        ],
        latestWorks: [
            { title: "El Secreto de las Edades", date: "Classic", type: "LIBRO", snippet: "Unlocking the hidden potential of the human mind." },
            { title: "La Carta de Ventas que Siempre Funciona", date: "Book", type: "LIBRO", snippet: "Applying psychological principles to persuasion and sales." }
        ]
    },
    {
        id: 14,
        name: "James Allen",
        category: "FILOSOFÍA",
        title: "Philosophical Writer",
        description: "Author of 'As a Man Thinketh'.",
        articles: 19,
        image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&h=400&fit=crop",
        about: "James Allen was a British philosophical writer known for his inspirational books and poetry and as a pioneer of the self-help movement.",
        featured: true,
        bibliography: [
            { year: 1903, title: "As a Man Thinketh" },
            { year: 1901, title: "From Poverty to Power" }
        ],
        latestWorks: [
            { title: "Como un Hombre Piensa, Así es Él", date: "Classic", type: "LIBRO", snippet: "The classic essay on the power of thought and character." },
            { title: "El Camino a la Prosperidad", date: "Book", type: "LIBRO", snippet: "Principles for achieving true prosperity and peace." },
            { title: "De la Pobreza al Poder", date: "Book", type: "LIBRO", snippet: "Transcending circumstances through inner strength." }
        ]
    },
    {
        id: 15,
        name: "William Walker Atkinson",
        category: "METAFÍSICA",
        title: "Occultist & Author",
        description: "Author of 'The Kybalion' (Three Initiates).",
        articles: 100,
        image: "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?w=400&h=400&fit=crop",
        about: "William Walker Atkinson was an attorney, merchant, publisher, and author, as well as an occultist and an American pioneer of the New Thought movement.",
        featured: true,
        bibliography: [
            { year: 1908, title: "The Kybalion" },
            { year: 1906, title: "Thought Vibration or the Law of Attraction in the Thought World" }
        ],
        latestWorks: [
            { title: "El Kybalion", date: "Classic", type: "LIBRO", snippet: "The seven Hermetic principles of the universe." },
            { title: "La Ley de la Atracción del Pensamiento", date: "Book", type: "LIBRO", snippet: "Understanding the magnetic power of thought." },
            { title: "Memoria y Concentración", date: "Book", type: "LIBRO", snippet: "Developing mental faculties." }
        ]
    },
    {
        id: 16,
        name: "Geneviève Behrend",
        category: "METAFÍSICA",
        title: "Student of Troward",
        description: "Only personal student of Thomas Troward.",
        articles: 5,
        image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?w=400&h=400&fit=crop",
        about: "Geneviève Behrend was a French-born author and teacher of Mental Science, a New Thought discipline advocated by Thomas Troward.",
        featured: false,
        bibliography: [
            { year: 1921, title: "Your Invisible Power" },
            { year: 1929, title: "Attaining Your Desires" }
        ],
        latestWorks: [
            { title: "Tu Poder Invisible", date: "Classic", type: "LIBRO", snippet: "A simple guide to visualization and manifestation." },
            { title: "Alcanza Tus Anhelos", date: "Book", type: "LIBRO", snippet: "How to get what you want through mental science." },
            { title: "La Riqueza Está Dentro de Ti", date: "Book", type: "LIBRO", snippet: "Realizing internal abundance." }
        ]
    },
    {
        id: 17,
        name: "H. Emilie Cady",
        category: "MISTICISMO CRISTIANO",
        title: "Homeopathic Physician",
        description: "Author of 'Lessons in Truth'.",
        articles: 12,
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop",
        about: "Harriette Emilie Cady was an American homeopathic physician and author of New Thought spiritual writings.",
        featured: false,
        bibliography: [
            { year: 1894, title: "Lessons in Truth" },
            { year: 1916, title: "God a Present Help" }
        ],
        latestWorks: [
            { title: "Lecciones de Verdad", date: "Textbook", type: "LIBRO", snippet: "Core teachings for Unity students and truth seekers." },
            { title: "Cómo Puedo Ser Curado", date: "Essay", type: "ENSAYO", snippet: "Spiritual principles of healing." },
            { title: "Dios es tu Salud", date: "Book", type: "LIBRO", snippet: "Affirming divine health." }
        ]
    },
    {
        id: 18,
        name: "Catherine Ponder",
        category: "ÉXITO",
        title: "Unity Minister",
        description: "Author of 'The Dynamic Laws of Prosperity'.",
        articles: 22,
        image: "https://images.unsplash.com/photo-1588516901344-71510901e74e?w=400&h=400&fit=crop",
        about: "Catherine Ponder is an American Unity Church minister and author of books on the theme of prosperity.",
        featured: false,
        bibliography: [
            { year: 1962, title: "The Dynamic Laws of Prosperity" },
            { year: 1971, title: "Open Your Mind to Prosperity" }
        ],
        latestWorks: [
            { title: "Las Leyes Dinámicas de la Prosperidad", date: "Classic", type: "LIBRO", snippet: "Ancient secrets for modern wealth." },
            { title: "Ábrele a la Prosperidad", date: "Book", type: "LIBRO", snippet: "Releasing blocks to abundance." }
        ]
    },
    {
        id: 19,
        name: "Joel Goldsmith",
        category: "ESPIRITUALIDAD",
        title: "Mystic & Author",
        description: "Founder of 'The Infinite Way'.",
        articles: 35,
        image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=400&fit=crop",
        about: "Joel Solomon Goldsmith was an American spiritual author, teacher, and mystic, founder of The Infinite Way movement.",
        featured: false,
        bibliography: [
            { year: 1947, title: "The Infinite Way" },
            { year: 1956, title: "The Art of Meditation" }
        ],
        latestWorks: [
            { title: "El Arte de la Meditación", date: "Guide", type: "LIBRO", snippet: "Deepening your connection with the divine." },
            { title: "El Infinito Camino", date: "Classic", type: "LIBRO", snippet: "Principles of spiritual living." },
            { title: "Vivir por Gracia", date: "Book", type: "LIBRO", snippet: "Living without struggle through spiritual realization." }
        ]
    },
    {
        id: 20,
        name: "Raymond Holliwell",
        category: "NUEVO PENSAMIENTO",
        title: "Minister & Author",
        description: "Author of 'Working with the Law'.",
        articles: 10,
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
        about: "Dr. Raymond Holliwell was a prominent New Thought minister and author. His book 'Working with the Law' is a classic study of 11 principles of success.",
        featured: false,
        bibliography: [
            { year: 1964, title: "Working with the Law" }
        ],
        latestWorks: [
            { title: "Las Leyes del Éxito", date: "Book", type: "LIBRO", snippet: "Understanding and applying universal laws." },
            { title: "Doce Leyes Universales", date: "Book", type: "LIBRO", snippet: "Mastering life through law." }
        ]
    },
    {
        id: 21,
        name: "U.S. Andersen",
        category: "METAFÍSICA",
        title: "Author & Football Player",
        description: "Author of 'Three Magic Words'.",
        articles: 14,
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
        about: "Uell Stanley Andersen was an American football player and self-help author. His philosophy focuses on the concept of the 'Universal Mind'.",
        featured: false,
        bibliography: [
            { year: 1954, title: "Three Magic Words" },
            { year: 1958, title: "The Secret of Secrets" }
        ],
        latestWorks: [
            { title: "Tres Palabras Mágicas", date: "Classic", type: "LIBRO", snippet: "The key to power, peace, and plenty." },
            { title: "El Secreto del Poder", date: "Book", type: "LIBRO", snippet: "Tapping into the universal mind." }
        ]
    },
    {
        id: 22,
        name: "Walter C. Lanyon",
        category: "ESPIRITUALIDAD",
        title: "Spiritual Writer",
        description: "Author of 'The Laughter of God'.",
        articles: 18,
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", // Reusing generic
        about: "Walter Clemow Lanyon was an author and spiritual teacher. His writings are known for their directness and revelation of the 'I AM'.",
        featured: false,
        bibliography: [
            { year: 1941, title: "The Laughter of God" },
            { year: 1930, title: "I Came" }
        ],
        latestWorks: [
            { title: "La Puerta de la Cámara del Tesorero", date: "Book", type: "LIBRO", snippet: "Opening the door to divine supply." },
            { title: "El Ojo que No Duerme", date: "Book", type: "LIBRO", snippet: "Spiritual vigilance and awareness." },
            { title: "El Mensaje del Silencio", date: "Book", type: "LIBRO", snippet: "Hearing the voice of God in stillness." }
        ]
    },
    {
        id: 23,
        name: "Frederick Bailes",
        category: "METAFÍSICA",
        title: "Medical Doctor & Minister",
        description: "Author of 'Your Mind Can Heal You'.",
        articles: 8,
        image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=400&h=400&fit=crop",
        about: "Dr. Frederick Bailes was a distinguished medical doctor and Science of Mind minister who taught how to apply mental principles for healing.",
        featured: false,
        bibliography: [
            { year: 1941, title: "Your Mind Can Heal You" },
            { year: 1957, title: "Hidden Power for Human Problems" }
        ],
        latestWorks: [
            { title: "Tu Mente Puede Sanarte", date: "Classic", type: "LIBRO", snippet: "Steps to physical and emotional healing through mental law." },
            { title: "El Poder Oculto para la Realización Humana", date: "Book", type: "LIBRO", snippet: "Solving human problems with spiritual power." }
        ]
    },
    {
        id: 24,
        name: "Orison Swett Marden",
        category: "ÉXITO",
        title: "Founder of Success Magazine",
        description: "Inspirational writer.",
        articles: 60,
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
        about: "Orison Swett Marden was an American inspirational author who wrote about achieving success in life and founded Success magazine in 1897.",
        featured: false,
        bibliography: [
            { year: 1894, title: "Pushing to the Front" },
            { year: 1917, title: "How to Get What You Want" }
        ],
        latestWorks: [
            { title: "El Poder del Pensamiento", date: "Book", type: "LIBRO", snippet: "Constructive thinking for a better life." },
            { title: "La Alegría de Vivir", date: "Book", type: "LIBRO", snippet: "Finding happiness and optimism." },
            { title: "Cómo Triunfar en la Vida", date: "Guide", type: "LIBRO", snippet: "Principles of personal success." }
        ]
    },
    {
        id: 25,
        name: "William George Jordan",
        category: "FILOSOFÍA",
        title: "Editor & Essayist",
        description: "Author of 'The Majesty of Calmness'.",
        articles: 10,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", // Reusing generic
        about: "William George Jordan was an American editor and essayist. His works focus on individual character, self-control, and the power of truth.",
        featured: false,
        bibliography: [
            { year: 1900, title: "The Majesty of Calmness" },
            { year: 1909, title: "The Crown of Individuality" }
        ],
        latestWorks: [
            { title: "El Reino de la Posibilidad", date: "Book", type: "LIBRO", snippet: "Exploring the potential within." },
            { title: "El Poder de la Verdad", date: "Book", type: "LIBRO", snippet: "Living a life of integrity and truth." },
            { title: "La Corona de la Individualidad", date: "Book", type: "LIBRO", snippet: "Developing strong character." }
        ]
    },
    {
        id: 26,
        name: "Ralph Waldo Trine",
        category: "NUEVO PENSAMIENTO",
        title: "Philosopher & Teacher",
        description: "Author of 'In Tune with the Infinite'.",
        articles: 22,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
        about: "Ralph Waldo Trine was an American philosopher, mystic, teacher, and author. He was a pioneer of the New Thought movement.",
        featured: true,
        bibliography: [
            { year: 1897, title: "In Tune with the Infinite" },
            { year: 1899, title: "The Greatest Thing Ever Known" }
        ],
        latestWorks: [
            { title: "En Sintonía con el Infinito", date: "Classic", type: "LIBRO", snippet: "Aligning yourself with the infinite power of the universe." },
            { title: "El Mayor Descubrimiento del Hombre", date: "Book", type: "LIBRO", snippet: "Realizing our divine nature." },
            { title: "El Carácter es el Destino", date: "Essay", type: "ENSAYO", snippet: "How our thoughts shape our destiny." }
        ]
    }
];
