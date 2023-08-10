const deleteFav = (req, res) => {
    const { id } = req.params;
    
    myFavorites = myFavorites.filter(char => char.id != id);

    return res.status(201).json(myFavorites);
};

module.exports = deleteFav;