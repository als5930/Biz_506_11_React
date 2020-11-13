// ES 2015 이상의 문법
// import express from "express";
// 현재 nodejs가 지원하는 문법

const express = require("express");
const router = express.Router();
const { bbsDao } = require("../models");

router.get("/", (req, res) => {
  //   res.send("반갑습니다.");
  res.render("index", { date: "date" });
});

router.get("/bbsList", (req, res) => {
  const list = [
    { id: 0, writer: "홍길동", subject: "게시판" },
    { id: 1, writer: "이몽룡", subject: "게시판" },
    { id: 2, writer: "성춘향", subject: "게시판" },
  ];

  bbsDao.findAll({ order: ["b_date_time"] }).then((bbsList) => {
    res.json(bbsList);
  });

  // res.json(list);
});

router.get("/insert", (req, res) => {
  bbsDao
    .create({
      b_writer: req.query.writer || "이몽룡",
      b_date_time: Date().toString(),
      b_subject: "게시판 작성",
      b_content: "게시판 작성 꿈에 보일라",
    })
    .then((result) => {
      // res.json(result);
      res.redirect("/api/bbsList");
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
