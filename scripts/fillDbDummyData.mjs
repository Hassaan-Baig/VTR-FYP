import axios from 'axios';

const fillDbWithDummyData = async () => {
  const dummyProductData = [
    {
      title: `Men's Ultra Cotton T-Shirt`,
      slug: 't-shirt1',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/tshirt.jpg',
      category: 't-shirts',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'black',
    },
    {
      title: `Men's Hoodie (Yellow)`,
      slug: 'h1',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/h1.jpeg',
      category: 'hoodie',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'yellow',
    },
    {
      title: `Men's Hoodie (Black)`,
      slug: 'h2',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/h2.jpeg',
      category: 'hoodie',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'black',
    },
    {
      title: `Men's Hoodie (lime)`,
      slug: 'h3',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/h3.jpeg',
      category: 'hoodie',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'lime',
    },
    {
      title: `Men's Hoodie (blue)`,
      slug: 'h4',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/h4.jpeg',
      category: 'hoodie',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'blue',
    },
    {
      title: `Men's Pant (skin)`,
      slug: 'p1',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/p1.jpg',
      category: 'pant',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'skin',
    },
    {
      title: `Men's Pant (silver)`,
      slug: 'p2',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/p2.jpg',
      category: 'pant',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'silver',
    },
    {
      title: `Men's Pant (offwhite)`,
      slug: 'p3',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/p3.jpg',
      category: 'pant',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'offwhite',
    },
    {
      title: `Men's Pant (blue)`,
      slug: 'p4',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/p4.jpeg',
      category: 'pant',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'blue',
    },
    {
      title: `Men's Pant (red)`,
      slug: 'p5',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/p5.jpeg',
      category: 'pant',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'red',
    },
    {
      title: `Women's Shirt (Purple)`,
      slug: 'w2',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/w2.jpg',
      category: 't-shirts',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'purple',
    },
    {
      title: `Women's Shirt (Black-white)`,
      slug: 'w3',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/w3.jpg',
      category: 't-shirts',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'bw',
    },
    {
      title: `Women's Shirt (flower)`,
      slug: 'w5',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/w5.jpg',
      category: 't-shirts',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'flower',
    },
    {
      title: `Women's Shirt (red)`,
      slug: 'w6',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/w6.jpg',
      category: 't-shirts',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'red',
    },
  ];

  try {
    const response = await axios({
      url: 'http://localhost:3000/api/addproduct',
      method: 'post',
      data: dummyProductData,
    });

    console.log('DB FILL SCRIPT SUCCESS');
    return response.data;
  } catch (error) {
    console.log('FILL SCRIPT FAILED -->', error);
  }
};

fillDbWithDummyData();
