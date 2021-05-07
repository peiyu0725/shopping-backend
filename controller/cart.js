async function list (req, res, next) {
  let list = []
  const count = 5

  for (let i = 1; i <= count; i++) {
    list.push({
      id: i,
      image: `https://picsum.photos/id/${i}/250/150`,
      name: `Image ${i}`,
      price: i * 15
    })
  }

  res.json(list)
}

module.exports = {
  list
};