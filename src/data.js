import ukImg from './imgs/assets/about/desktop/illustration-uk.svg';
import caImg from './imgs/assets/about/desktop/illustration-canada.svg';
import auImg from './imgs/assets/about/desktop/illustration-australia.svg';

export const HEADQUARTERS = [
  {
    img: ukImg,
    country: 'United Kingdom',
    address: '68  Asfordby Rd',
    city: 'Alcaston',
    postcode: 'SY6 1YA',
    phone: '+44 1241 918425'
  },

  {
    img: caImg,
    country: 'Canada',
    address: '1528  Eglinton Avenue',
    city: 'Toronto',
    postcode: 'Ontario M4P 1A6',
    phone: '+1 416 485 2997'
  },

  {
    img: auImg,
    country: 'Australia',
    address: '36 Swanston Street',
    city: 'Kewell',
    postcode: 'Victoria',
    phone: '+61 4 9928 3629'
  }
];

export const PREFERENCES = [
    {
      id: 0,
      title: "Capsule",
      info: "Compatible with Nespresso systems and similar brewers"
    },

    {
      id: 1,
      title: "Filter",
      info: "For pour over or drip methods like Aeropress, Chemex, and V60"
    },

    {
      id: 2,
      title: "Espresso",
      info: "Dense and finely ground beans for an intense, flavorful experience"
    }
  ];

  export const BEANTYPE = [
  
    {
      id: 3,
      title: "Single Origin",
      info: "Distinct, high quality coffee from a specific family-owned farm"
    },
    {
      id: 4,
      title: "Decaf",
      info: "Just like regular coffee, except the caffeine has been removed"
    },
    {
      id: 5,
      title: "Blended",
      info: "Combination of two or three dark roasted beans of organic coffees"
    }
  ];

  export const AMOUNTS = [
    {
      id: 6,
      title: "250g",
      info: "Perfect for the solo drinker. Yields about 12 delicious cups.",
    },
    {
      id: 7,
      title: "500g",
      info: "Perfect option for a couple. Yields about 40 delectable cups."
    },
    {
      id: 8,
      title: "1000g",
      info: "Perfect for offices and events. Yields about 90 delightful cups."
    }
  ];

  export const GRINDTYPES = [
    {
      id: 9,
      title: "Wholebean",
      info: "Best choice if you cherish the full sensory experience."
    },
    {
      id: 10,
      title: "Filter",
      info: "For drip or pour-over coffee methods such as V60 or Aeropress."
    },
    {
      id: 11,
      title: "Cafetiére",
      info: "Course ground beans specially suited for french press coffee."
    }
  ];

  export const DELIVERYTIMES = [
    {
      id: 12,
      title: "Every week",
      info: "$7.20 per shipment. Includes free first-class shipping."
    },
    {
      id: 13,
      title: "Every 2 weeks",
      info: "$9.60 per shipment. Includes free priority shipping."
    },
    {
      id: 14,
      title: "Every month",
      info: "$12.00 per shipment. Includes free priority shipping."
    }
  ]