export const PORTFOLIO_DATA = {
  person: {
    firstName: 'Вячеслав',
    lastName: 'Викторович',
    surName: 'Кузнецов',
    city: 'Саранск',
    contacts: [
      {
        name: "Телефон",
        value: '79176932484',
        logo: "images/logo/phone.svg"
      },
      {
        name: "email",
        value: 'mailto:dev.vvk@yandex.ru',
        logo: "images/logo/yandex-mail.svg"
      },
      {
        name: "github",
        value: "https://github.com/vvk2020",
        logo: "images/logo/github.svg",
      },
      {
        name: "msteams",
        value: "https://teams.live.com/meet/9342139911991?p=l79OCMaWVNhs0y4jeE",
        logo: "images/logo/ms-teams.svg"
      },
    ]
  },
  position: 'Angular-разработчик',
  education: [
    {
      speciality: 'Фронтенд-разработка',
      organization: 'АНО ДПО «Образовательные технологии Яндекса»',
      qualification: 'фронтенд-разработчик'
    },
    {
      speciality: '05.13.18 Математическое моделирование, численные методы и комплексы программ',
      organization: 'Мордовский госуниверситет',
      qualification: 'кандидат технических наук'
    },
    {
      speciality: 'Инженер-механик',
      organization: 'Мордовский госуниверситет',
      qualification: 'специалист'
    },
  ],

  experience: [
    {
      position: 'Программист',
      company: 'MedPoint, фриланс',
      options: [
        "разработка модулей клиент-серверного приложения MedPoint для управления медицинской организацией"
      ],
      achievements: [
        {
          description: "официальный сайт MedPoint",
          url: "http://medpoint.online/",
        }
      ]
    },
    {
      position: 'Преподаватель',
      company: 'Мордовский госуниверситет',
      options: [
        "разработка и поддержка первой версии сайта лаборатории кафедры",
        "разработка алгоритмов решения научно-исследовательских задач",
        "разработка и чтение курсов учебных дисциплин в области информационных технологий"
      ],
      achievement: [
        "разработана первая (статическая) версия сайта лаборатории (HTML/CSS)",
        "разработана архитектура и подготовлен Figma-макет второй версии сайта лаборатории"
      ],
      achievements: [
        {
          description: "официальный сайт лаборатории",
          url: "https://estprm.mrsu.ru/",
        }
      ],
    },
    {
      position: 'Программист',
      company: 'ФГБУ «Государственный центр агрохимической службы «Мордовский»',
      options: [
        "Разработка и поддержка приложения «КОРМА» для анализа состава образцов почв Республики Мордовия"
      ],
      achievement: [
        "разработано и внедрено клиент-серверное приложение «КОРМА» для анализа образцов почв (ООП, SQL, СУБД Firebird)",
      ],
    }
  ],
  hardSkills: [
    'ООП, DOM, BOM, MVC/MVP-архитектура',
    "HTML, CSS / SCSS, PostCSS, Flexbox, Grid, Figma / Pixel Perfect",
    "JavaScript (ES6+), TypeScript, Angular",
    "REST-API",
    "SQL (Firebird, IBExpert), NoSQL(MongoDB, MongoDBCompass)",
    "C++, STL, Pascal (Delphi), FIB, Fortran",
    "Git, Bash",
    "точная верстка по Figma-макетам с учетом семантики тегов",
    "разработка клиент-серверных СУБД",
    "понимание Agile-принципов и опыт работы в командах, их реализующих",
    "разработка систем управления оборудованием, машинами и приборами",
    "разработка компьютерных моделей процессов",
  ],
  softSkills: [
    "Стремление к саморазвитию",
    "Ответственность",
    "Коммуникабельность",
    "Стрессоустойчивость",
    "Умение работать в команде",
  ]
};
