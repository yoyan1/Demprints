const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "DATE", uid: "date", sortable: true},
  {name: "TIME", uid: "time", sortable: true},
  {name: "TRANSACTION NO.", uid: "transaction_no", sortable: true},
  {name: "ITEM NO", uid: "item_no"},
  {name: "ITEM NAME", uid: "item_name"},
  {name: "UNIT COST", uid: "unit_cost", sortable: true},
  {name: "QUANTITY", uid: "quantity", sortable: true},
  {name: "AMOUNT", uid: "amount", sortable: true},
  {name: "DISCOUNT", uid: "discount", sortable: true},
  {name: "TOTAL", uid: "total", sortable: true},
  {name: "CUSTOMER TYPE", uid: "customer_type", sortable: true},
  {name: "CUSTOMER NAME", uid: "customer_name", sortable: true},
  {name: "PAYMENT METHOD", uid: "payment_method", sortable: true},
  {name: "SALES PERSON", uid: "sales_person", sortable: true},
  {name: "REMARKS", uid: "remarks", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const users = [
  {
   id: 1,
    date: '10/15/2014',
    time: '08: 00 am',
    transaction_no: "0001",
    item_no: '0000',
    item_name: 'Tarpaulin',
    unit_cost: '640',
    quantity: '1',
    amount: '640',
    discount: '0',
    total: '640',
    customer_type: 'Walk in',
    customer_name: 'Roland',
    payment_method: 'Cash',
    sales_person: 'Christian',
    remarks: '',
  },
  {
   id: 1,
    date: '10/15/2014',
    time: '08: 00 am',
    transaction_no: "0001",
    item_no: '0000',
    item_name: 'Tarpaulin',
    unit_cost: '640',
    quantity: '1',
    amount: '640',
    discount: '0',
    total: '640',
    customer_type: 'Walk in',
    customer_name: 'Roland',
    payment_method: 'Cash',
    sales_person: 'Christian',
    remarks: '',
  },
  {
   id: 1,
    date: '10/15/2014',
    time: '08: 00 am',
    transaction_no: "0001",
    item_no: '0000',
    item_name: 'Tarpaulin',
    unit_cost: '640',
    quantity: '1',
    amount: '640',
    discount: '0',
    total: '640',
    customer_type: 'Walk in',
    customer_name: 'Roland',
    payment_method: 'Cash',
    sales_person: 'Christian',
    remarks: '',
  },
  {
   id: 1,
    date: '10/15/2014',
    time: '08: 00 am',
    transaction_no: "0001",
    item_no: '0000',
    item_name: 'Tarpaulin',
    unit_cost: '640',
    quantity: '1',
    amount: '640',
    discount: '0',
    total: '640',
    customer_type: 'Walk in',
    customer_name: 'Hansam',
    payment_method: 'Gcash',
    sales_person: 'Christian',
    remarks: '',
  },
  {
   id: 1,
    date: '10/15/2014',
    time: '08: 00 am',
    transaction_no: "0001",
    item_no: '0000',
    item_name: 'Tarpaulin',
    unit_cost: '640',
    quantity: '1',
    amount: '640',
    discount: '0',
    total: '640',
    customer_type: 'Walk in',
    customer_name: 'Hansam',
    payment_method: 'Gcash',
    sales_person: 'Christian',
    remarks: '',
  },
  {
   id: 1,
    date: '10/15/2014',
    time: '08: 00 am',
    transaction_no: "0001",
    item_no: '0000',
    item_name: 'Tarpaulin',
    unit_cost: '640',
    quantity: '1',
    amount: '640',
    discount: '0',
    total: '640',
    customer_type: 'Walk in',
    customer_name: 'Hansam',
    payment_method: 'Gcash',
    sales_person: 'Christian',
    remarks: '',
  },
  {
   id: 1,
    date: '10/15/2014',
    time: '08: 00 am',
    transaction_no: "0001",
    item_no: '0000',
    item_name: 'Tarpaulin',
    unit_cost: '640',
    quantity: '1',
    amount: '640',
    discount: '0',
    total: '640',
    customer_type: 'Walk in',
    customer_name: 'Hansam',
    payment_method: 'Gcash',
    sales_person: 'Christian',
    remarks: '',
  },
  {
   id: 1,
    date: '10/15/2014',
    time: '08: 00 am',
    transaction_no: "0001",
    item_no: '0000',
    item_name: 'Tarpaulin',
    unit_cost: '640',
    quantity: '1',
    amount: '640',
    discount: '0',
    total: '640',
    customer_type: 'Walk in',
    customer_name: 'Hansam',
    payment_method: 'Cash',
    sales_person: 'Christian',
    remarks: '',
  },
  {
   id: 1,
    date: '10/15/2014',
    time: '08: 00 am',
    transaction_no: "0001",
    item_no: '0000',
    item_name: 'Tarpaulin',
    unit_cost: '640',
    quantity: '1',
    amount: '640',
    discount: '0',
    total: '640',
    customer_type: 'Walk in',
    customer_name: 'Hansam',
    payment_method: 'Cash',
    sales_person: 'Christian',
    remarks: '',
  },
  {
   id: 1,
    date: '10/15/2014',
    time: '08: 00 am',
    transaction_no: "0001",
    item_no: '0000',
    item_name: 'Tarpaulin',
    unit_cost: '640',
    quantity: '1',
    amount: '640',
    discount: '0',
    total: '640',
    customer_type: 'Walk in',
    customer_name: 'Hansam',
    payment_method: 'Cash',
    sales_person: 'Christian',
    remarks: '',
  },
  {
   id: 1,
    date: '10/15/2014',
    time: '08: 00 am',
    transaction_no: "0001",
    item_no: '0000',
    item_name: 'Tarpaulin',
    unit_cost: '640',
    quantity: '1',
    amount: '640',
    discount: '0',
    total: '640',
    customer_type: 'Walk in',
    customer_name: 'Hansam',
    payment_method: 'Cash',
    sales_person: 'Christian',
    remarks: '',
  },
  {
   id: 1,
    date: '10/15/2014',
    time: '08: 00 am',
    transaction_no: "0001",
    item_no: '0000',
    item_name: 'Tarpaulin',
    unit_cost: '640',
    quantity: '1',
    amount: '640',
    discount: '0',
    total: '640',
    customer_type: 'Walk in',
    customer_name: 'Hansam',
    payment_method: 'Cash',
    sales_person: 'Christian',
    remarks: '',
  },
  {
    id: 1,
    date: "10/13/24",
    transaction: "1",
    item: "Tarpulin",
    quantity: "1",
    discount:'00.00',

    unitcost: "00.00",
    total: "00.00",
    costumertype: "Walkin",
    costumername: "Roland Clarion",
    paymentmetod: "Gcash",
    remark: "blabla",
  },
  
];
const transactions = [
  { key: "tarpulin", label: "Tarpulin" },
  { key: "printing p-shirt", label: "Printing T-shirt" },
  { key: "paper print", label: "Paper Print" },
  
];
const costumer_types = [
  {key:'Walkin', label:'Walk-in'},
  {key:'Online', label:'Online'}
]
export { columns, users, statusOptions, transactions , costumer_types};
