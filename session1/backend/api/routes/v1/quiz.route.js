import express from "express";
import creators from "../../../data/quiz3.json";
let fs = require("fs");
let path = require("path");
const router = express.Router();

let quiz3Creators = creators;

const TAGS = [
  "mom",
  "baby",
  "child",
  "teenager",
  "adult",
  "senior",
  "model",
  "teacher",
  "actor",
  "actress",
  "singer",
  "musician",
  "painter",
];
const quiz4InfluencersBaseline = [];
for (let i = 0; i < 10000000; i++) {
  const randomTagIndex = Math.floor(Math.random() * TAGS.length);
  const influencer = {
    id: i,
    name: `name-${i}`,
    tag: TAGS[randomTagIndex],
  };

  quiz4InfluencersBaseline.push(influencer);
}
const quiz4Influencers = quiz4InfluencersBaseline.sort((a, b) => {
  return (a.tag > b.tag) ? 1 : ((b.tag > a.tag) ? -1 : 0)
})
/* Use the data in `quiz4InfluencersBaseline` and create an optimized data structure for `quiz4Influencers` */
// const quiz4Influencers = quiz4InfluencersBaseline.map(item => {
  
// });
router.route("/getQuiz3Creators").get((req, res) => {
  res.status(200).send(quiz3Creators);
});

router.route("/addNewQuiz3Creators").post((req, res) => {
  const { body } = req;
  const { params } = body || {};
  const { newCreator } = params
  /* Quiz #3 - 3. Handle the POST request sent from the client */
  /* Your code goes here */
  const arr = quiz3Creators
  arr.push(newCreator);
  res.status(200).send('ok');
});

router.route("/queryQuiz4CreatorsBaseline").get((req, res) => {
  const { query } = req;
  const { tag } = query || {};

  const start = new Date().getTime();

  const results = quiz4InfluencersBaseline.filter(
    (influencer) => influencer.tag === tag
  );
  const elapsed = new Date().getTime() - start;

  res.status(200).send({
    results,
    cost: `${elapsed}ms`,
  });
});

router.route("/queryQuiz4Creators").get((req, res) => {
  const { query } = req;
  const { tag } = query || {};

  const start = new Date().getTime();
  let startIndex = void 0;
  let endIndex = void 0;
  const results = [];
  let left = 0;
  let right = quiz4Influencers.length
  while(left++, right--) {
    if(quiz4Influencers[left].tag == tag) {
      startIndex = left;
      break
    }
    if(quiz4Influencers[right].tag == tag) {
      endIndex = right;
      break;
    }
  }

  if(startIndex) {
    for(let i = startIndex; i <quiz4Influencers.length; i++) {
      if(quiz4Influencers[i].tag !== tag) {
        break;
      }
      results.push(quiz4Influencers[i])
    }
  }

  if(endIndex) {
    for(let i = endIndex; i >=0; i--) {
      if(quiz4Influencers[i].tag !== tag) {
        break;
      }
      results.push(quiz4Influencers[i])
    }
  }
  /* Quiz #4 - Optimized the lookup */
  // 分页加载 和滚动加载
  const elapsed = new Date().getTime() - start;
  res.status(200).send({
    results,
    cost: `${elapsed}ms`,
  });
});

// This is an example of how to handle a POST request
router.route("/postExample").post((req, res) => {
  const { body } = req;
  const { params } = body || {};
  res.status(200).send("ok");
});

export default router;
