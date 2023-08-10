const postFav = (req, res) => {
    myFavorites.push(req.body)

    return res.status(201).json(myFavorites);
};

module.exports = postFav;