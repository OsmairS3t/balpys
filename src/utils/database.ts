
export const categories = [
  { id: 'bar', name: 'Barra Recheada', icon: 'server' },
  { id: 'sugarplum', name: 'Bombom', icon: 'circle' },
  { id: 'egg', name: 'Ovo de Páscoa', icon: 'droplet' },
  { id: 'panettone', name: 'Panetone', icon: 'octagon' },
  { id: 'gingerbread', name: 'Pão de mel', icon: 'layers' },
];

export const products = [
  {
    id: '1',
    category: {
      id: 'bar', 
      name: 'Barra Recheada', 
      icon: 'server',
    },
    name: 'Amendoim',
    price: 6,
    photo: ''
  },
  {
    id: '2',
    category: {
      id: 'bar', 
      name: 'Barra Recheada', 
      icon: 'server',
    },
    name: 'Brigadeiro',
    price: 6,
    photo: ''
  },
  {
    id: '3',
    category: {
      id: 'sugarplum', 
      name: 'Bombom', 
      icon: 'circle',
    },
    name: 'Côco',
    price: 5,
    photo: ''
  },
  {
    id: '4',
    category: {
      id: 'sugarplum', 
      name: 'Bombom', 
      icon: 'circle',
    },
    name: 'Maracujá',
    price: 5,
    photo: ''
  },
];

export const clients = [
  {
    id: '1',
    name: 'Osmair',
    photo: ''
  },
  {
    id: '2',
    name: 'Wanessa',
    photo: ''
  },
  {
    id: '3',
    name: 'Raphael',
    photo: ''
  },
]

export const purchases = [
  {
    id: '1',
    name: 'Barras de Chocolate',
    amount: 5,
    price: 120,
  },
]

export const sales = [
  {
    client: {
      id: '2',
      name: 'Wanessa',
      photo: ''
    },
    product: {
      id: '2',
      category: {
        id: 'bar', 
        name: 'Barra Recheada', 
        icon: 'server',
      },
      name: 'Brigadeiro',
      price: 6,
      photo: ''
    },
    amount: 2,
    price: 12,
    isPaid: false,
    dateSale: '01/01/2024'
  },
  {
    client: {
      id: '2',
      name: 'Wanessa',
      photo: ''
    },
    product: {
      id: '3',
      category: {
        id: 'sugarplum', 
        name: 'Bombom', 
        icon: 'circle',
      },
      name: 'Côco',
      price: 5,
      photo: ''
    },
    amount: 1,
    price: 5,
    isPaid: false,
    dateSale: '01/02/2024'
  },
]

export const stocks = [ 
  {
    id: '1',
    product: {
      id: '1',
      category: {
        id: 'bar', 
        name: 'Barra Recheada', 
        icon: 'server',
      },
      name: 'Amendoim',
      price: 6,
      photo: ''
    },
    amount: 1,
    hasStock: true,
  },
  {
    id: '2',
    product: {
      id: '2',
      category: {
        id: 'bar', 
        name: 'Barra Recheada', 
        icon: 'server',
      },
      name: 'Brigadeiro',
      price: 6,
      photo: ''
    },
    amount: 5,
    hasStock: true,
  },
  {
    id: '3',
    product: {
      id: '3',
      category: {
        id: 'sugarplum', 
        name: 'Bombom', 
        icon: 'circle',
      },
      name: 'Côco',
      price: 5,
      photo: ''
    },
    amount: 2,
    hasStock: true,
  },
]

export const transactions = [
  {
    id: '',
    idTransactionType: '',
    description: 'Compra',
    modality: 'buy',
    modalityicon: '',
    datetransaction: '01/01/2024',
    amount: 0,
    price: 0,
    ispaid: false,
  }
]
