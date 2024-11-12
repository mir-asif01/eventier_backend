const getHello = async (req, res) => {
  try {
    return res.send("Hello Organizer")
  } catch (error) {
    console.log(error)
  }
}

export { getHello }
