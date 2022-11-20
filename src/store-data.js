const Data = require('./data-model')

const storeData = async (req, res, next) => {
  try {
    const { firstName, lastName, email } = req.body

    const newData = new Data({ firstName, lastName, email })
    await newData.save()

    res.send({ firstName, lastName, email })
  } catch (err) {
    next(err)
  }
}

module.exports = storeData
