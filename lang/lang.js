const langArr = {
  lng_home_nav: {
    ru: "главная",
    en: "home",
  },
  lng_about_nav: {
    ru: "о нас",
    en: "about",
  },
  lng_token_nav: {
    ru: "токеномика",
    en: "tokenomics",
  },
  lng_roadmap_nav: {
    ru: "карта",
    en: "roadmap",
  },
  lng_team_nav: {
    ru: "команда",
    en: "team",
  },
  lng_contact_nav: {
    ru: "контакты",
    en: "contact",
  },
  lng_title_header: {
    ru: "бесконечность не предел",
    en: "to infinity and beyond",
  },
  lng_phrase_header: {
    ru: "Испытайте новое поколение токенов криптовалюты, которые<br /> автоматически вознаграждают вас за хранение",
    en: "experience the next generation cryptocurrency token<br /> that automatically reward you for holding",
  },
  lng_buy_header: { ru: "купить tzr", en: "buy tzr" },
  lng_swap_header: { ru: "обменять tzr", en: "swap tzr" },
  lng_join_header: { ru: "телеграмм чат", en: "join telegram" },
  lng_join_p: {
    ru: "Присоединяйся к нашему сообществу<br /> в телеграмм чате и получай свежие новости<br /> каждый день",
    en: "join our community on telegram<br /> to get fresh news every day",
  },
  lng_current_price: { ru: "текущая стоимость", en: "current price" },
  lng_holders: { ru: "держатели", en: "holders" },
  lng_supply: { ru: "объем", en: "supply" },
  lng_capitaliz: { ru: "капитализация", en: "market cap" },
  lang_community: { ru: "управление сообщества", en: "community driven" },

  lang_community_p: {
    ru: "управление сообщества и честный старт. команда разработчиков<br /> сожжет все свои токены на старте и будет на равных вместе со всеми.",
    en: "community driven & fair launch. the dev team burned all<br /> of their tokens and participated with everyone else.",
  },
  lang_automatic: { ru: "автоматизм", en: "automatic lp" },
  lang_automatic_p: {
    ru: "каждая торговая сделка будет генерировать ликвидность<br /> за счет распределения по пулам, используемых биржами.",
    en: "every trade contributes towards automatically generating<br /> liquidity that goes into multiple pools used by exchanges.",
  },
  lang_rfi: { ru: "пассивные награды", en: "rfi static rewards" },
  lang_rfi_p: {
    ru: "держатели будут получать пассивные награды за счёт<br /> распределения сборов с переводов и обменов, что позволит<br /> наблюдать за изменением баланса tzr кошелька бесконечно.",
    en: "holders earn passive rewards through static reflection<br /> as they watch their balace of tzr grow indefinitely.",
  },
  lang_tok_title: { ru: "Токеномика", en: "tokenomics" },
  lang_tok_p: {
    ru: "tzr - это токен тайного запуска, управляемого сообществом, запрограммированный токен defi<br /> вознаграждает держателей за счет беспрепятственного протокола доходности и генерирования ликвидности<br /> В контракте tzr жестко прописаны следующие токеномики:<br /> (мы не можем их изменить и полностью защищаем ваши интересы)",
    en: "tzr is a stealth launched, community driven, defi token programmed<br /> to reward holders through its frictionless yield and liquidity generation protocol<br /> hard-coded into the tzr contract are the following tokenomics,<br /> we are unable to change them and are fully rug-proof.",
  },
  lang_advantage_left: {
    ru: "10% сборов с<br /> каждой транзакции",
    en: "10% tax on every<br /> transaction",
  },
  lang_advantage_center: {
    ru: "15% из сборов<br /> с каждой транзакции<br /> перенаправляется в<br /> ликвидность",
    en: "15% from tax of<br /> each transaction<br /> is redirected to the liquidity",
  },
  lang_advantage_right: {
    ru: "распределение 15%<br /> со сборов между всеми<br /> держателями токена",
    en: " redistributed 15% of tax<br /> among all current<br /> token holders",
  },
  lng_team_title: { ru: "наша команда", en: "our team" },
  lng_team_walker: { ru: "исполнительный директор", en: "executive Director" },
  lng_team_koom: { ru: "стратегический директор", en: "strategy Director" },
  lng_team_peters: { ru: "маркетинговый директор", en: "marketing Director" },
  lng_team_ito: { ru: "креативный директор", en: "creative Director" },
  lng_team_bell: { ru: "директор по соц.сецям", en: "social Media Director" },
  lng_team_alex: { ru: "веб-разработчик", en: "web developer" },
  lng_init_title: { ru: "первый шаг", en: "INITIAL EXPOSURE" },
  lng_init_p: {
    ru: "реклама, маркетинговый толчок с лидерами мнений",
    en: "advertising, influencers marketing push",
  },
  lng_com_title: { ru: "сообщество 65%", en: "COMMUNITY 65%" },
  lng_com_p: {
    ru: "Скептики и люди пришедшие за моментальной выгодой<br /> вскоре начнут уходить от скуки и сообщество окрепнет",
    en: "Fudders and people that came for a quick buck are<br /> starting to leave out of boredom, wholesome community is building",
  },
  lng_fur_title: { ru: "дальнейшее продвижение", en: "FURTHER EXPOSURE" },
  lng_fur_p: {
    ru: "подготовка ко второму маркетинговому рывку",
    en: "We are preparing soon for a second marketing push",
  },
  lng_star_title: { ru: "к звездам!", en: "TO THE STARS" },
  lng_star_p: { ru: "только вперед!", en: "Much more to come!" },
  lang_red_title: { ru: "запуск!", en: "launch" },
  lang_red_p: {
    ru: "tzr запускается и путешествие начинается.",
    en: "tzr is born and a new journey start.",
  },
  lang_core_title: {
    ru: "создание основной команды",
    en: "CORE TEAM BUILDING",
  },
  lang_core_p: {
    ru: "сейчас мы имеем 50% команды и ищем новые лица.",
    en: "We are at 50% at the moment and looking for some new members",
  },
  lang_prod_title: {
    ru: "разработка продукта 40%",
    en: "PRODUCT DEVELOPMENT 40%",
  },
  lang_prod_p: {
    ru: "мы разрабатываем новый сайт и разговариваем с разработчиками о добавлении dApp и NFT магазинов",
    en: "We are working on a new website, talking with a dev to bring a dAppand NFT shop",
  },
  lang_part_title: { ru: "партнерство 30%", en: "PARTNERSHIPS 30%" },
  lang_part_p: {
    ru: "мы ведем переговоры с двумя крупными проектами<br /> для	дальнейшей коллаборации с ними, что позволит нам<br /> сделать огромный рывок и подняться выше чем cmc и cg в топе",
    en: "We are in the talks with 2 big projects to collaborate with, thiswill boost us even more than cmc and cg listing",
  },
  ng_footer_title: { ru: "tzr протокол", en: "tzr protocol" },
  lng_footer_p: {
    ru: "протокол tzr контролируется сообществом, что делает запуск defi токена честным. три простые функции входящие в каждую сделку: распределение, укрепление, сжигание.",
    en: "the tzr protocol is a community driven, fair launched defi token. three simple function occur during each trade: lp acquisition, reflection, burn.",
  },
};
