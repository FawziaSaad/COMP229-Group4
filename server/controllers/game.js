let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Game Model
let Game = require('../models/game');

// TODO: Move survey list into the main page with full CRUD
// TODO: User can create and delete page (maybe not update for consistency?)
// -> get id, datetime, creater, questions and answers, count for users taking survey that will increment

// Turn this into the response report -> generate table from the responses list
module.exports.displayGameList = async (req, res, next)=>{
    try {
        let gameList = await Game.find();
        //console.log(gameList);

        res.render('game/list', 
            {title: 'Games', 
            GameList: gameList,
            displayName: req.user ? req.user.displayName : ''})
    } catch (err){
        console.log(err);
    }
};

module.exports.displayAddPage = async (req, res, next)=>{
    try {
        res.render('game/add', 
        {title: 'Add Game',
        displayName: req.user ? req.user.displayName : ''})
    } catch (err){
        console.log(err);
    }
};

module.exports.processAddPage = async (req, res, next) => {
    let newGame = new Game({
        "name": req.body.name,
        "developer": req.body.developer,
        "released": req.body.released,
        "description": req.body.description,
        "price": req.body.price
    });

    try {
        await newGame.save();
        res.redirect('/game-list')
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.displayEditPage = async (req, res, next) => {
    let id = req.params.id;

    try {
        let gameToEdit = await Game.findById(id);
        res.render('game/edit', 
        {title: 'Edit Game', 
        game: gameToEdit,
        displayName: req.user ? req.user.displayName : ''});
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.processEditPage = async (req, res, next) => {
    let id = req.params.id;

    let updatedGame = {
        "name": req.body.name,
        "developer": req.body.developer,
        "released": req.body.released,
        "description": req.body.description,
        "price": req.body.price
    };

    try {
        await Game.updateOne({_id: id}, updatedGame);
        res.redirect('/game-list');
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.performDelete = async (req, res, next) => {
    let id = req.params.id;

    try {
        await Game.findByIdAndRemove(id);
        res.redirect('/game-list');
    }catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};