export const weddingConfig = {
  bride: {
    name: 'Софья',
    fullName: 'Софья',
  },
  groom: {
    name: 'Александр',
    fullName: 'Александр',
  },
  date: {
    weddingDate: new Date('2026-06-27T14:00:00'),
    ceremonyTime: '14:00',
    receptionTime: '18:00',
    registrationDate: new Date('2026-06-24T19:40:00'),
    registrationTime: '19:40',
  },
  venue: {
    name: 'Место проведения свадьбы',
    address: 'Санкт-Петербург, п. Парголово, ул. Ломоносова, д. 102',
    coordinates: {
      lat: 60.075488,
      lng: 30.293249,
    },
  },
  registrationVenue: {
    name: 'Место проведения росписи',
    address: 'Санкт-Петербург, Английская набережная, д. 28',
    coordinates: {
      lat: 59.933961,
      lng: 30.293878,
    },
  },
  contact: {
    email: 'wedding@example.com',
    phone: '+7 (999) 123-45-67',
  },
  googleForm: {
    enabled: false,
    url: '',
  },
  googleSheets: {
    enabled: true,
    webhookUrl: 'https://script.google.com/macros/s/AKfycbzUBtA6L_htqtU-Ac9KmCIsVqVwQ1p0ZWs59iIQpaaV-RFF-xHW3wBGv2jbjN32xXIo/exec',
  },
  message: 'Мы будем рады разделить с вами этот особенный день!',
}

