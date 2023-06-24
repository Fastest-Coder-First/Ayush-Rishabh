fakeTransactions = [
    {
      "transactionId": "1",
      "currency": "USD",
      "amount": 100.50,
      "date": "2023-06-24",
      "description": "Purchase of goods",
      "sender": "John Doe",
      "recipient": "Jane Smith",
      "paymentMethod": "Credit Card"
    },
    {
      "transactionId": "2",
      "currency": "EUR",
      "amount": 75.20,
      "date": "2023-06-23",
      "description": "Monthly subscription",
      "sender": "Alice Johnson",
      "recipient": "Company XYZ",
      "paymentMethod": "Bank Transfer"
    },
    {
      "transactionId": "3",
      "currency": "GBP",
      "amount": 50.00,
      "date": "2023-06-22",
      "description": "Donation",
      "sender": "Robert Anderson",
      "recipient": "Charity ABC",
      "paymentMethod": "PayPal"
    }
  ]

exports.default = fakeTransactions;