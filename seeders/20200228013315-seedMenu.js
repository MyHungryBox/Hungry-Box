'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const menus = [
      {
        name: 'Nasi Ikan Bakar',
        description: 'Nasi + ikan bakar + sambal dabu dabu',
        price: 28000,
        menu_type: 'Fish',
        img_url: 'https://i.pinimg.com/564x/47/f0/95/47f09577b82e935353355e3234901e81.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nasi Campur',
        description: 'Nasi + ayam goreng + sayur + sate tempe',
        price: 28000,
        menu_type: 'Chicken',
        img_url: 'https://i.pinimg.com/564x/86/40/ce/8640ce902c4145888568aede7f051b57.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nasi Ikan Pepes',
        description: 'Nasi + ikan pepes tongkol + sayur bening',
        price: 28000,
        menu_type: 'Fish',
        img_url: 'https://i.pinimg.com/564x/85/8d/44/858d44f083f76179489fbc3525cbad1e.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nasi Ikan Kakap Asam Manis',
        description: 'Nasi + ikan kakap + saos asam manis',
        price: 28000,
        menu_type: 'Fish',
        img_url: 'https://i.pinimg.com/564x/67/bf/7a/67bf7a0e492f814bc52cc2f601f77e3d.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'nasi Ayam Telor Asin',
        description: 'Nasi putih + ayam telor asin + lalapan',
        price: 28000,
        menu_type: 'Chicken',
        img_url: 'https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=644&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nasi Soto Betawi',
        description: 'Nasi + soto daging khas betawi',
        price: 28000,
        menu_type: 'Meat',
        img_url: 'https://i.pinimg.com/564x/de/71/63/de7163e80b19390b5a5a786fa787be85.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nasi Semur Daging',
        description: 'Nasi + semur daging sapi',
        price: 28000,
        menu_type: 'Meat',
        img_url: 'https://i.pinimg.com/564x/2f/82/70/2f8270a48e7fec705f30e994779b949e.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nasi Kuning Komplit',
        description: 'Nasi kuning + ayam + telor + tempe + bakwan + urap',
        price: 28000,
        menu_type: 'Chicken',
        img_url: 'https://i.pinimg.com/564x/e4/6c/38/e46c38dc99a8d1c542a13615a97670d2.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sate Kambing',
        description: 'Sate kambing + bumbu kecap',
        price: 28000,
        menu_type: 'Meat',
        img_url: 'https://i.pinimg.com/564x/18/6a/24/186a24fbfb7224984901e65fc7728b9f.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nasi Goreng',
        description: 'Nasi goreng + irisan ayam + telor',
        price: 28000,
        menu_type: 'Chicken',
        img_url: 'https://i.pinimg.com/564x/d6/97/b0/d697b075eac89a60a5683b39c987c42e.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert('Menus', menus, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Menus', null, {});

  }
};
