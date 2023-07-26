const { user, kelas } = require("../models");
const passport = require("../lib/passport");
const mail = require("nodemailer");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const regex = /^[A-Za-z0-9 ]+$/;

const hash = (password) => {
    return bcrypt.hashSync(password, 10);
};

function formatUser(user) {
    const { id, username } = user.dataValues;
    return user.generateToken(id, username);
}

function makeid(length) {
    let result = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
    }
    return result;
}

const transport = mail.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    sevice: "gmail",
    auth: {
        user: "jarotsetiawan2503@gmail.com",
        pass: "evfnflsbzgmnjsxl",
    },
});

module.exports = {
    postLogin: (req, res, next) => {
        const { username, password } = req.body;
        if (!regex.test(username) || !regex.test(password)) {
            res.json({
                message: "Dilarang Menggunakan Character Spesial!",
                success: false,
            });
        } else {
            user.authenticate(username, password)
                .then((status) => {
                    let token = formatUser(status);
                    res.json({
                        message: "Login Berhasil",
                        success: true,
                        data: { token },
                    });
                })
                .catch((err) => {
                    res.json({
                        message: err.message,
                        success: false,
                        data: {},
                    });
                });
        }
    },
    login: passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true,
    }),
    getWhoami: (req, res) => {
        res.json(req.user);
    },
    updateUser: (req, res) => {
        let { nama, nip, email } = req.body;
        user.update({ email, nama, nip }, { where: { id: req.user.id } })
            .then((result) => {
                res.json({
                    message: "Data sudah terganti",
                    success: true,
                });
            })
            .catch((err) => {
                res.json({
                    message: err.message,
                    success: false,
                });
            });
    },
    forgot: (req, res) => {
        let { username, email } = req.body;
        user.findOne({ where: { username, email } })
            .then((result) => {
                if (result.length < 1) {
                    res.json({
                        message:
                            "username dengan email tersebut tidak ditemukan",
                        success: false,
                    });
                }
                let key = makeid(25);
                user.update({ key }, { where: { username, email } }).then(
                    () => {
                        let mailOptions = {
                            from: "jarotsetiawan2503@gmail.com",
                            to: email,
                            subject: "test mailer",
                            html:
                                "<p>This is your token</p>\
                        <br>\
                        <h1>Dont send this link to any person</h1>\
                        <p>localhost:3000/forgot/" +
                                key +
                                "</p>",
                        };
                        console.log(mailOptions);
                        transport.sendMail(mailOptions, function (error, info) {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log(
                                    "email sent : " +
                                        JSON.stringify(info.envelope.to)
                                );
                            }
                        });
                        res.json({
                            message: "Silahkan cek email anda",
                            success: true,
                        });
                    }
                );
            })
            .catch((err) => {
                res.json({
                    message: "username dengan email tersebut tidak ditemukan",
                    success: false,
                });
            });
    },
    changeForgotPassword: (req, res) => {
        let { newPassword, key } = req.body;
        user.update(
            { password: hash(newPassword), key: "" },
            { where: { key } }
        )
            .then(() => {
                res.json({
                    message: "Password terganti, silahkan login",
                    success: true,
                });
            })
            .catch((err) => {
                res.json({
                    message: "something is wrong",
                    success: false,
                });
            });
    },
    getUserKey: (req, res) => {
        user.findOne({
            where: { key: req.params.key },
            attributes: ["username"],
        })
            .then((result) => {
                res.json({
                    message: "success get user",
                    success: true,
                    data: result,
                });
            })
            .catch((err) => {
                res.json({
                    message: err.message,
                    success: false,
                });
            });
    },
    getAllUser: (req, res) => {
        if (req.user.role == "admin") {
            user.findAll({
                where: { role: { [Op.eq]: "guru" } },
                attributes: ["id", "nama", "username", "nip", "email"],
                include: {
                    model: kelas,
                    as: "wali",
                    attributes: ["id", "nama", "rombel"],
                },
            })
                .then((result) => {
                    res.json({
                        message: "success get user",
                        success: true,
                        data: result,
                    });
                })
                .catch((err) => {
                    res.json({
                        message: err.message,
                        success: false,
                    });
                });
        }
    },
    getOneUser: (req, res) => {
        user.findAll({
            where: { username: req.params.username },
        })
            .then((result) => {
                res.json({
                    message: "success get user",
                    success: true,
                    data: result,
                });
            })
            .catch((err) => {
                res.json({
                    message: err.message,
                    success: false,
                });
            });
    },
    addUser: (req, res) => {
        let { username, password, email, nama, nip, kelas: kelasId } = req.body;
        user.create({ username, password, email, nama, nip, role: "guru" })
            .then((result) => {
                if (kelasId) {
                    kelas
                        .update(
                            { userId: result.id },
                            { where: { id: kelasId } }
                        )
                        .then(() => {
                            res.json({
                                message: "success tambah user",
                                success: true,
                                data: result,
                            });
                        })
                        .catch((err) => {
                            res.json({
                                message: err.message,
                                success: false,
                            });
                        });
                } else {
                    res.json({
                        message: "success tambah user",
                        success: true,
                        data: result,
                    });
                }
            })
            .catch((err) => {
                res.json({
                    message: err.message,
                    success: false,
                });
            });
    },
    deleteUser: (req, res) => {
        user.destroy({ where: { id: req.params.id } })
            .then(() => {
                res.json({
                    message: "success delete user",
                    success: true,
                });
            })
            .catch((err) => {
                res.json({
                    message: err.message,
                    success: false,
                });
            });
    },
    cekUsername: (req, res) => {
        let { username } = req.params;
        console.log(username);
        user.findOne({
            attributes: ["nama"],
            where: { username },
        }).then((response) => {
            if (response) {
                res.json({
                    message: "username Sudah dipakai",
                    success: false,
                    data: response,
                });
            } else {
                res.json({
                    message: "Username Kosong",
                    success: true,
                });
            }
        });
    },
    updatePassUser: (req, res) => {
        let { password, username } = req.body;
        user.update({ password: hash(password) }, { where: { username } })
            .then((response) => {
                res.json({
                    message: "password berhasil diupdate",
                    success: true,
                    data: response,
                });
            })
            .catch((err) => {
                res.json({
                    message: "something is wrong",
                    success: false,
                    data: err.message,
                });
            });
    },
};
