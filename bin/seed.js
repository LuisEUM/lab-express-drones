require('../config/db.config');
const Drone = require('../models/Drone.model');

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

Drone.create(drones)
    .then(()=>{ //esto funciona para verificar que hemos conectado bien
        console.log('drones.created')
    })
