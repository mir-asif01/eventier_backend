const getHello = async (req, res) => {
  try {
    return res.send("Hello User")
  } catch (error) {
    console.log(error)
  }
}

export { getHello }
