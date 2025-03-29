export const categories = [
  {
    id: 1,
    type: "repair",
    name: "Ремонт, монтаж, отделка",
    subcategories: [
      {
        id: 101,
        name: "Услуги электриков",
        parentType: "repair",
        subType: "electrician",
      },
      {
        id: 102,
        name: "Услуги маляров и штукатуров",
        parentType: "repair",
        subType: "painter_plasterer",
      },
      {
        id: 103,
        name: "Услуги сантехников",
        parentType: "repair",
        subType: "plumber",
      },
      {
        id: 104,
        name: "Укладка плитки",
        parentType: "repair",
        subType: "tile_laying",
      },
      {
        id: 105,
        name: "Ремонт квартир и домов",
        parentType: "repair",
        subType: "apartment_repair",
      },
      {
        id: 106,
        name: "Демонтажные работы",
        parentType: "repair",
        subType: "dismantling",
      },
      {
        id: 107,
        name: "Монтаж натяжных потолков",
        parentType: "repair",
        subType: "ceiling_installation",
      },
      {
        id: 108,
        name: "Утепление фасадов",
        parentType: "repair",
        subType: "facade_insulation",
      },
      {
        id: 109,
        name: "Ремонт полов",
        parentType: "repair",
        subType: "floor_repair",
      },
      {
        id: 110,
        name: "Сварочные работы",
        parentType: "repair",
        subType: "welding",
      },
    ],
  },
  {
    id: 2,
    type: "home_help",
    name: "Помощь по дому",
    subcategories: [
      {
        id: 201,
        name: "Уборка квартир и домов",
        parentType: "home_help",
        subType: "cleaning",
      },
      {
        id: 202,
        name: "Домработницы",
        parentType: "home_help",
        subType: "housekeeper",
      },
      {
        id: 203,
        name: "Чистка ковров и мебели",
        parentType: "home_help",
        subType: "carpet_cleaning",
      },
      {
        id: 204,
        name: "Глажка белья",
        parentType: "home_help",
        subType: "ironing",
      },
      {
        id: 205,
        name: "Мытьё окон",
        parentType: "home_help",
        subType: "window_cleaning",
      },
      {
        id: 206,
        name: "Генеральная уборка",
        parentType: "home_help",
        subType: "deep_cleaning",
      },
      {
        id: 207,
        name: "Вынос мусора",
        parentType: "home_help",
        subType: "garbage_disposal",
      },
      {
        id: 208,
        name: "Уход за садом и огородом",
        parentType: "home_help",
        subType: "garden_care",
      },
      {
        id: 209,
        name: "Услуги няни",
        parentType: "home_help",
        subType: "nanny",
      },
      {
        id: 210,
        name: "Услуги сиделки",
        parentType: "home_help",
        subType: "caregiver",
      },
    ],
  },
  {
    id: 3,
    type: "construction",
    name: "Строительство",
    subcategories: [
      {
        id: 301,
        name: "Строительство домов под ключ",
        parentType: "construction",
        subType: "house_building",
      },
      {
        id: 302,
        name: "Фундаментные работы",
        parentType: "construction",
        subType: "foundation",
      },
      {
        id: 303,
        name: "Кровельные работы",
        parentType: "construction",
        subType: "roofing",
      },
      {
        id: 304,
        name: "Монтаж вентиляции",
        parentType: "construction",
        subType: "ventilation",
      },
      {
        id: 305,
        name: "Укладка брусчатки",
        parentType: "construction",
        subType: "paving",
      },
      {
        id: 306,
        name: "Строительство заборов",
        parentType: "construction",
        subType: "fence_building",
      },
      {
        id: 307,
        name: "Ландшафтный дизайн",
        parentType: "construction",
        subType: "landscape_design",
      },
      {
        id: 308,
        name: "Монтаж лестниц",
        parentType: "construction",
        subType: "stair_installation",
      },
      {
        id: 309,
        name: "Кладка кирпича",
        parentType: "construction",
        subType: "bricklaying",
      },
      {
        id: 310,
        name: "Гипсокартонные работы",
        parentType: "construction",
        subType: "drywall",
      },
    ],
  },
];

export const users = [
  {
    id: 1,
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    fullName: "Иван Иванов",
    phoneNumber: "+996 700 000 001",
    description:
      "Всегда с полной ответственностью подхожу к каждому заданию и стараюсь их выполнить так, чтобы Вы не усомнились в выборе! Всегда нахожу компромисс при возникновении проблем. Качество, оперативность, пунктуальность — неотъемлемые факторы в моём деле! А также, отличное настроение всегда для Вас!",
    reviews: [
      {
        rating: 5,
        comment: "Отличный специалист, очень доволен его работой!",
        photo: [
          { url: "https://randomuser.me/api/portraits/men/2.jpg" },
          { url: "https://randomuser.me/api/portraits/men/3.jpg" },
        ],
      },
      {
        rating: 4,
        comment: "Хорошая работа, но были небольшие задержки.",
        photo: [{ url: "https://randomuser.me/api/portraits/men/3.jpg" }],
      },
    ],
    services: [
      {
        type: "repair",
        name: "Ремонт, монтаж, отделка",
      },
    ],
    subCategories: [
      {
        name: "Услуги электриков",
        parentType: "repair",
        subType: "electrician",
      },
      {
        name: "Услуги сантехников",
        parentType: "repair",
        subType: "plumber",
      },
      {
        name: "Ремонт полов",
        parentType: "repair",
        subType: "floor_repair",
      },
    ],
  },
  {
    id: 2,
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    fullName: "Мария Петрова",
    phoneNumber: "+996 700 000 002",
    reviews: [
      {
        rating: 5,
        comment: "Очень профессионально и быстро.",
        photo: [],
      },
    ],
    services: [
      {
        type: "home_help",
        name: "Помощь по дому",
      },
    ],
    subCategories: [
      {
        name: "Уборка квартир и домов",
        parentType: "home_help",
        subType: "cleaning",
      },
      {
        name: "Глажка белья",
        parentType: "home_help",
        subType: "ironing",
      },
      {
        name: "Вынос мусора",
        parentType: "home_help",
        subType: "garbage_disposal",
      },
    ],
  },
  {
    id: 3,
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    fullName: "Дмитрий Сидоров",
    phoneNumber: "+996 700 000 003",
    reviews: [
      {
        rating: 4,
        comment: "Хорошо, но не хватало коммуникации.",
        photo: [
          { url: "https://randomuser.me/api/portraits/men/4.jpg" },
          { url: "https://randomuser.me/api/portraits/men/5.jpg" },
        ],
      },
    ],
    services: [
      {
        type: "construction",
        name: "Строительство",
      },
    ],
    subCategories: [
      {
        name: "Строительство домов под ключ",
        parentType: "construction",
        subType: "house_building",
      },
      {
        name: "Кровельные работы",
        parentType: "construction",
        subType: "roofing",
      },
      {
        name: "Монтаж вентиляции",
        parentType: "construction",
        subType: "ventilation",
      },
    ],
  },
  {
    id: 4,
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    fullName: "Елена Васильева",
    phoneNumber: "+996 700 000 004",
    reviews: [
      {
        rating: 5,
        comment: "Лучший мастер по укладке плитки!",
        photo: [
          { url: "https://randomuser.me/api/portraits/men/4.jpg" },
          { url: "https://randomuser.me/api/portraits/men/5.jpg" },
        ],
      },
    ],
    services: [
      {
        type: "repair",
        name: "Ремонт, монтаж, отделка",
      },
    ],
    subCategories: [
      {
        name: "Укладка плитки",
        parentType: "repair",
        subType: "tile_laying",
      },
      {
        name: "Монтаж натяжных потолков",
        parentType: "repair",
        subType: "ceiling_installation",
      },
      {
        name: "Демонтажные работы",
        parentType: "repair",
        subType: "dismantling",
      },
    ],
  },
  {
    id: 5,
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    fullName: "Олег Борисов",
    phoneNumber: "+996 700 000 005",
    reviews: [
      {
        rating: 5,
        comment: "Отличная работа, рекомендую всем!",
        photo: [
          { url: "https://randomuser.me/api/portraits/men/6.jpg" },
          { url: "https://randomuser.me/api/portraits/men/7.jpg" },
        ],
      },
    ],
    services: [
      {
        type: "repair",
        name: "Ремонт, монтаж, отделка",
      },
    ],
    subCategories: [
      {
        name: "Услуги маляров и штукатуров",
        parentType: "repair",
        subType: "painter_plasterer",
      },
      {
        name: "Ремонт квартир и домов",
        parentType: "repair",
        subType: "apartment_repair",
      },
      {
        name: "Сварочные работы",
        parentType: "repair",
        subType: "welding",
      },
    ],
  },
  {
    id: 6,
    photo: "https://randomuser.me/api/portraits/men/7.jpg",
    fullName: "Максим Иванов",
    phoneNumber: "+996 700 000 006",
    reviews: [],
    services: [
      {
        type: "home_help",
        name: "Помощь по дому",
      },
    ],
    subCategories: [
      {
        name: "Чистка ковров и мебели",
        parentType: "home_help",
        subType: "carpet_cleaning",
      },
      {
        name: "Мытьё окон",
        parentType: "home_help",
        subType: "window_cleaning",
      },
      {
        name: "Генеральная уборка",
        parentType: "home_help",
        subType: "deep_cleaning",
      },
    ],
  },
  {
    id: 7,
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    fullName: "Анастасия Кузнецова",
    phoneNumber: "+996 700 000 007",
    reviews: [],
    services: [
      {
        type: "repair",
        name: "Ремонт, монтаж, отделка",
      },
    ],
    subCategories: [
      {
        name: "Услуги электриков",
        parentType: "repair",
        subType: "electrician",
      },
      {
        name: "Ремонт полов",
        parentType: "repair",
        subType: "floor_repair",
      },
      {
        name: "Демонтажные работы",
        parentType: "repair",
        subType: "dismantling",
      },
    ],
  },
  {
    id: 8,
    photo: "https://randomuser.me/api/portraits/men/9.jpg",
    fullName: "Роман Козлов",
    phoneNumber: "+996 700 000 008",
    reviews: [],
    services: [
      {
        type: "construction",
        name: "Строительство",
      },
    ],
    subCategories: [
      {
        name: "Строительство домов под ключ",
        parentType: "construction",
        subType: "house_building",
      },
      {
        name: "Фундаментные работы",
        parentType: "construction",
        subType: "foundation",
      },
      {
        name: "Монтаж лестниц",
        parentType: "construction",
        subType: "stair_installation",
      },
    ],
  },
  {
    id: 9,
    photo: "https://randomuser.me/api/portraits/women/7.jpg",
    fullName: "Виктория Смирнова",
    phoneNumber: "+996 700 000 009",
    reviews: [],
    services: [
      {
        type: "home_help",
        name: "Помощь по дому",
      },
    ],
    subCategories: [
      {
        name: "Услуги сиделки",
        parentType: "home_help",
        subType: "caregiver",
      },
      {
        name: "Уход за садом и огородом",
        parentType: "home_help",
        subType: "garden_care",
      },
      {
        name: "Генеральная уборка",
        parentType: "home_help",
        subType: "deep_cleaning",
      },
    ],
  },
  {
    id: 10,
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
    fullName: "Алексей Новиков",
    phoneNumber: "+996 700 000 010",
    reviews: [],
    services: [
      {
        type: "repair",
        name: "Ремонт, монтаж, отделка",
      },
    ],
    subCategories: [
      {
        name: "Услуги маляров и штукатуров",
        parentType: "repair",
        subType: "painter_plasterer",
      },
      {
        name: "Монтаж натяжных потолков",
        parentType: "repair",
        subType: "ceiling_installation",
      },
      {
        name: "Ремонт полов",
        parentType: "repair",
        subType: "floor_repair",
      },
    ],
  },
];
