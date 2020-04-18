const products = [
  {
    id: 1,
    name: "Lona",
    price: 106,
    color: "#85a7f6",
    thumb: "http://dummyimage.com/100x100.png/dddddd/000000",
    images: [
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
    ],
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    category: "Van",
  },
  {
    id: 2,
    name: "Nariko",
    price: 853,
    color: "#20c11d",
    thumb: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    images: [
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
      "http://dummyimage.com/300x500.png/ff4444/ffffff",
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
    ],
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    category: "Bike",
  },
  {
    id: 3,
    name: "Moria",
    price: 509,
    color: "#b1b4ab",
    thumb: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    images: [
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/dddddd/000000",
      "http://dummyimage.com/300x500.png/dddddd/000000",
    ],
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    category: "Bike",
  },
  {
    id: 4,
    name: "Austina",
    price: 134,
    color: "#008428",
    thumb: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    images: [
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/dddddd/000000",
      "http://dummyimage.com/300x500.png/dddddd/000000",
    ],
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    category: "Car",
  },
  {
    id: 5,
    name: "Faunie",
    price: 484,
    color: "#847799",
    thumb: "http://dummyimage.com/100x100.png/dddddd/000000",
    images: [
      "http://dummyimage.com/300x500.png/dddddd/000000",
      "http://dummyimage.com/300x500.png/dddddd/000000",
      "http://dummyimage.com/300x500.png/dddddd/000000",
    ],
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    category: "Van",
  },
  {
    id: 6,
    name: "Gianna",
    price: 240,
    color: "#31f198",
    thumb: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    images: [
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
    ],
    description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    category: "Van",
  },
  {
    id: 7,
    name: "Kirstin",
    price: 724,
    color: "#c215ec",
    thumb: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    images: [
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
      "http://dummyimage.com/300x500.png/ff4444/ffffff",
    ],
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    category: "Car",
  },
  {
    id: 8,
    name: "Thorndike",
    price: 634,
    color: "#05b070",
    thumb: "http://dummyimage.com/100x100.png/dddddd/000000",
    images: [
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
    ],
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    category: "Bike",
  },
  {
    id: 9,
    name: "Austine",
    price: 159,
    color: "#9055cf",
    thumb: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    images: [
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/dddddd/000000",
    ],
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    category: "Car",
  },
  {
    id: 10,
    name: "Tyson",
    price: 856,
    color: "#aa2756",
    thumb: "http://dummyimage.com/100x100.png/dddddd/000000",
    images: [
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/ff4444/ffffff",
    ],
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    category: "Car",
  },
  {
    id: 11,
    name: "Pam",
    price: 209,
    color: "#60a2b8",
    thumb: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    images: [
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
      "http://dummyimage.com/300x500.png/dddddd/000000",
    ],
    description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    category: "Skateboard",
  },
  {
    id: 12,
    name: "Matti",
    price: 999,
    color: "#b7e4e9",
    thumb: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    images: [
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
    ],
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    category: "Skateboard",
  },
  {
    id: 13,
    name: "Sam",
    price: 83,
    color: "#3fcf4f",
    thumb: "http://dummyimage.com/100x100.png/dddddd/000000",
    images: [
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
    ],
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    category: "Skateboard",
  },
  {
    id: 14,
    name: "Bartholomew",
    price: 10,
    color: "#860f75",
    thumb: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    images: [
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/ff4444/ffffff",
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
    ],
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    category: "Van",
  },
  {
    id: 15,
    name: "Veradis",
    price: 527,
    color: "#ecf3cb",
    thumb: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    images: [
      "http://dummyimage.com/300x500.png/ff4444/ffffff",
      "http://dummyimage.com/300x500.png/dddddd/000000",
      "http://dummyimage.com/300x500.png/dddddd/000000",
    ],
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    category: "Car",
  },
  {
    id: 16,
    name: "Kimble",
    price: 905,
    color: "#f25bd0",
    thumb: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    images: [
      "http://dummyimage.com/300x500.png/ff4444/ffffff",
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
    ],
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    category: "Van",
  },
  {
    id: 17,
    name: "Scotti",
    price: 356,
    color: "#e431cb",
    thumb: "http://dummyimage.com/100x100.png/dddddd/000000",
    images: [
      "http://dummyimage.com/300x500.png/ff4444/ffffff",
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
    ],
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    category: "Skateboard",
  },
  {
    id: 18,
    name: "Chantalle",
    price: 437,
    color: "#462e4c",
    thumb: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    images: [
      "http://dummyimage.com/300x500.png/dddddd/000000",
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/dddddd/000000",
    ],
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    category: "Car",
  },
  {
    id: 19,
    name: "Brittney",
    price: 850,
    color: "#ed9450",
    thumb: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    images: [
      "http://dummyimage.com/300x500.png/dddddd/000000",
      "http://dummyimage.com/300x500.png/dddddd/000000",
      "http://dummyimage.com/300x500.png/dddddd/000000",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    category: "Van",
  },
  {
    id: 20,
    name: "Shanta",
    price: 931,
    color: "#2b8924",
    thumb: "http://dummyimage.com/100x100.png/dddddd/000000",
    images: [
      "http://dummyimage.com/300x500.png/ff4444/ffffff",
      "http://dummyimage.com/300x500.png/dddddd/000000",
      "http://dummyimage.com/300x500.png/dddddd/000000",
    ],
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    category: "Bike",
  },
  {
    id: 21,
    name: "Kathy",
    price: 451,
    color: "#e7b91b",
    thumb: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    images: [
      "http://dummyimage.com/300x500.png/ff4444/ffffff",
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
    ],
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    category: "Skateboard",
  },
  {
    id: 22,
    name: "Minor",
    price: 58,
    color: "#4c40cf",
    thumb: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    images: [
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/ff4444/ffffff",
    ],
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    category: "Car",
  },
  {
    id: 23,
    name: "Cathrin",
    price: 236,
    color: "#81bb7b",
    thumb: "http://dummyimage.com/100x100.png/dddddd/000000",
    images: [
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
      "http://dummyimage.com/300x500.png/dddddd/000000",
      "http://dummyimage.com/300x500.png/ff4444/ffffff",
    ],
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    category: "Bike",
  },
  {
    id: 24,
    name: "Kerrill",
    price: 681,
    color: "#68929f",
    thumb: "http://dummyimage.com/100x100.png/dddddd/000000",
    images: [
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/ff4444/ffffff",
    ],
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    category: "Skateboard",
  },
  {
    id: 25,
    name: "Barry",
    price: 636,
    color: "#2c2f6f",
    thumb: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    images: [
      "http://dummyimage.com/300x500.png/ff4444/ffffff",
      "http://dummyimage.com/300x500.png/cc0000/ffffff",
      "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
    ],
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    category: "Van",
  },
];
