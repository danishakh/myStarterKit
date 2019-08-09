const express = require("express");
const router = express.Router();

// Matches with '/api/users'
router
	//.route("/")
	.get("/", (req, res) => {
        const users = [
            {
                id: 1,
                firstname: 'Wayne',
                lastname: 'Rooney'
            },
            {
                id: 2,
                firstname: 'Paulo',
                lastname: 'Dybala'
            },
            {
                id: 3,
                firstname: 'Cristiano',
                lastname: 'Ronaldo'
            }
        ];

        res.json(users);
    });


module.exports = router;