const getHello = async (req, res) => {
  try {
    return res.send("Hello Event")
  } catch (error) {
    console.log(error)
  }
}

export { getHello }
