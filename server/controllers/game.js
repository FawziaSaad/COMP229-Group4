let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Game Model
let Game = require('../models/game');

module.exports.displayGameList = async (req, res, next)=>{
    try {
        res.render('surveys/landing', { title: 'Game List' })
    } catch (err){
        console.log(err);
    }
};

module.exports.displayAddPage = async (req, res, next)=>{
    try {
        res.render('surveys/create', 
        {title: 'Create survey',})
    } catch (err){
        console.log(err);
    }
};

module.exports.displayTakeSurveyPage = async (req, res, next) => {
    try {
        res.render('surveys/takesurvey',
            { title: 'Take Survey' })
    } catch (err) {
        console.log(err);
    }
};

module.exports.processAddPage = async (req, res, next) => {
    

    try {
        console.log(req.body.questions[0])
        // await newGame.save();
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