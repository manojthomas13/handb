function wait(delayInMilliseconds) {
  return new Promise(resolve => setTimeout(resolve, delayInMilliseconds))
}

function randomInteger(max) {
  return Math.floor(Math.random() * max)
}

async function getProducts() {
  await wait(randomInteger(500))

  const products = [
    {
      id: '1f2da4ef-c1b7-4b4e-b172-59f19987e0be',
      title: 'Manuka Lab Multifloral Manuka Honey 40 MGO 500g',
      price: 14.99,
      image: 'https://images.hollandandbarrettimages.co.uk/productimages/HB/384/050489_A.jpg',
    },
    {
      id: '12737c5f-2d01-4c43-a0e7-f6f87608a6b2',
      title: 'Manuka Pharm Manuka Honey MGO 55 500g',
      price: 26.99,
      image: 'https://images.hollandandbarrettimages.co.uk/productimages/HB/384/048774_A.jpg',
    },
    {
      id: '4e579e07-59ac-451f-a843-60ad4aba16c4',
      title: 'Holland & Barrett Clear Blended Honey 907g',
      price: 5.99,
      image: 'https://images.hollandandbarrettimages.co.uk/productimages/HB/384/004386_A.jpg',
    },
    {
      id: '0157f7cb-ecfc-46aa-a89e-fb16d72e1e5b',
      title: 'Holland & Barrett Organic Wild Flower Clear Honey 340g',
      price: 3.99,
      image: 'https://images.hollandandbarrettimages.co.uk/productimages/HB/384/083952_A.jpg',
    },
    {
      id: 'ec2505ca-c09b-4c49-9322-0f57874f15c9',
      title: 'Orelia Honey Co. Raw Cut Comb in Acacia Honey 340g',
      price: 7.49,
      image: 'https://images.hollandandbarrettimages.co.uk/productimages/HB/384/008038_A.jpg',
    },
  ]

  return {
    products,
  }
}

export { getProducts }
