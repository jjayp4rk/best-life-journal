const express = require("express");
const router = express.Router();
const passport = require("passport");
const moment = require("moment");

// Load post model
const Journal = require("../../models/Journal");

// Load journal entry validator
const validateJournalInput = require("../../validation/journal");

// Load quotes json
const quotes = require("../quotes.json");

// @route   POST api/journal/
// @desc    Create a new journal
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const currentDate = moment().format("MM/DD/YYYY");

    const randomQuote =
      quotes.quotes[Math.floor(Math.random() * quotes.quotes.length + 1)];

    Journal.find({ user: req.user.id }).then(journals => {
      if (journals) {
        const existingJournal = journals.find(
          journal => moment(journal.date).format("MM/DD/YYYY") === currentDate
        );
        if (!existingJournal) {
          const newJournal = new Journal({
            user: req.user.id,
            quote: randomQuote
          });
          newJournal.save().then(journal => res.json(journal));
          console.log("New Journal created");
        }
      } else {
        console.log("New Journal!");
        const newJournal = new Journal({
          user: req.user.id
          // quote: randomQuote
        });
        newJournal.save().then(journal => res.json(journal));
      }
    });
  }
);

// @route   GET api/journal/
// @desc    Get all journals made by user
// @access  Private

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Journal.find({ user: req.user.id })
      .sort({ date: -1 })
      .then(journals => res.json(journals));
  }
);

// @route   GET api/journal/:id
// @desc    Get unique journal made by user
// @access  Private

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Journal.findById(req.params.id)
      .then(journal => res.json(journal))
      .catch(err => console.log(err));
  }
);

// @route   POST api/journals/morning/:id
// @desc    Add a morning gratefulness
// @access  Private
router.post(
  "/morning/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateJournalInput(req.body);
    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    Journal.findById(req.params.id)
      .then(journal => {
        const newGraditude = { graditude: req.body.graditude };
        if (journal.morning.length < 3) {
          journal.morning.unshift(newGraditude);
          journal.save().then(journal => res.json(journal));
          console.log("Successfully added morning graditude.");
        } else {
          return res.json(journal);
        }
      })
      .catch(err => res.status(400).json({ nojournal: "no journal found" }));
  }
);

// @route   DELETE api/journals/morning/:id/:morning_id
// @desc    Delete a morning gratefulness
// @access  Private
router.delete("/morning/:id/:morning_id", (req, res) => {
  Journal.findById(req.params.id)
    .then(journal => {
      // Check to see if morning exists
      if (
        journal.morning.filter(
          graditude => graditude._id.toString() === req.params.morning_id
        ).length === 0
      ) {
        return res
          .status(404)
          .json({ graditudenotexist: "Graditutde does not exist" });
      }
      // Get remove index
      const removeIndex = journal.morning
        .map(item => item._id.toString())
        .indexOf(req.params.morning_id);
      // Splice out of comments array
      journal.morning.splice(removeIndex, 1);
      journal.save().then(journal => res.json(journal));
    })
    .catch(err => res.status(400).json({ nojournal: "no journal found" }));
});

// @route   POST api/journals/goals/:id
// @desc    Add a goal
// @access  Private
router.post(
  "/goals/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Journal.findById(req.params.id)
      .then(journal => {
        const { errors, isValid } = validateJournalInput(req.body);
        // Check Validation
        if (!isValid) {
          // If any errors, send 400 with errors object
          return res.status(400).json(errors);
        }
        const newGoal = { goal: req.body.goal };
        if (journal.goals.length < 3) {
          journal.goals.unshift(newGoal);
          journal.save().then(journal => res.json(journal));
          console.log("Successfully added goal.");
        } else {
          return res.json(journal);
        }
      })
      .catch(err => res.status(400).json({ nojournal: "no journal found" }));
  }
);

// @route   DELETE api/journals/goals/:id/:goals_id
// @desc    Delete a goals gratefulness
// @access  Private
router.delete("/goals/:id/:goals_id", (req, res) => {
  Journal.findById(req.params.id)
    .then(journal => {
      // Check to see if goals exists
      if (
        journal.goals.filter(
          goal => goal._id.toString() === req.params.goals_id
        ).length === 0
      ) {
        return res.status(404).json({ goalnotexist: "Goal does not exist" });
      }
      // Get remove index
      const removeIndex = journal.goals
        .map(item => item._id.toString())
        .indexOf(req.params.goals_id);
      // Splice out of comments array
      journal.goals.splice(removeIndex, 1);
      journal.save().then(journal => res.json(journal));
    })
    .catch(err => res.status(400).json({ nojournal: "no journal found" }));
});

// @route   POST api/targets/goals/:id
// @desc    Add a target
// @access  Private
router.post(
  "/targets/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Journal.findById(req.params.id)
      .then(journal => {
        const { errors, isValid } = validateJournalInput(req.body);
        // Check Validation
        if (!isValid) {
          // If any errors, send 400 with errors object
          return res.status(400).json(errors);
        }
        const newTarget = { target: req.body.target };
        if (journal.targets.length < 3) {
          journal.targets.unshift(newTarget);
          journal.save().then(journal => res.json(journal));
          console.log("Successfully added target.");
        } else {
          return res.json(journal);
        }
      })
      .catch(err => res.status(400).json({ nojournal: "no journal found" }));
  }
);

// @route   DELETE api/journals/targets/:id/:targets_id
// @desc    Delete a targets gratefulness
// @access  Private
router.delete("/targets/:id/:targets_id", (req, res) => {
  Journal.findById(req.params.id)
    .then(journal => {
      // Check to see if targets exists
      if (
        journal.targets.filter(
          target => target._id.toString() === req.params.targets_id
        ).length === 0
      ) {
        return res.status(404).json({ goalnotexist: "Goal does not exist" });
      }
      // Get remove index
      const removeIndex = journal.targets
        .map(item => item._id.toString())
        .indexOf(req.params.targets_id);
      // Splice out of comments array
      journal.targets.splice(removeIndex, 1);
      journal.save().then(journal => res.json(journal));
    })
    .catch(err => res.status(400).json({ nojournal: "no journal found" }));
});

// @route   POST api/journals/lessons/:id
// @desc    Add a lesson
// @access  Private
router.post(
  "/lessons/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Journal.findById(req.params.id)
      .then(journal => {
        const { errors, isValid } = validateJournalInput(req.body);
        // Check Validation
        if (!isValid) {
          // If any errors, send 400 with errors object
          return res.status(400).json(errors);
        }
        const newLesson = { lesson: req.body.lesson };
        if (journal.lessons.length < 3) {
          journal.lessons.unshift(newLesson);
          journal.save().then(journal => res.json(journal));
          console.log("Successfully added lesson.");
        } else {
          return res.json(journal);
        }
      })
      .catch(err => res.status(400).json({ nojournal: "no journal found" }));
  }
);

// @route   DELETE api/journals/lessons/:id/:lessons_id
// @desc    Delete a lessons gratefulness
// @access  Private
router.delete("/lessons/:id/:lessons_id", (req, res) => {
  Journal.findById(req.params.id)
    .then(journal => {
      // Check to see if targets exists
      if (
        journal.lessons.filter(
          lesson => lesson._id.toString() === req.params.lessons_id
        ).length === 0
      ) {
        return res.status(404).json({ goalnotexist: "Goal does not exist" });
      }
      // Get remove index
      const removeIndex = journal.lessons
        .map(item => item._id.toString())
        .indexOf(req.params.lessons_id);
      // Splice out of comments array
      journal.lessons.splice(removeIndex, 1);
      journal.save().then(journal => res.json(journal));
    })
    .catch(err => res.status(400).json({ nojournal: "no journal found" }));
});

// @route   POST api/journals/wins/:id
// @desc    Add a win
// @access  Private
router.post(
  "/wins/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateJournalInput(req.body);
    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    Journal.findById(req.params.id)
      .then(journal => {
        const newWin = { win: req.body.win };
        if (journal.wins.length < 3) {
          journal.wins.unshift(newWin);
          journal.save().then(journal => res.json(journal));
          console.log("Successfully added win.");
        } else {
          return res.json(journal);
        }
      })
      .catch(err => res.status(400).json({ nojournal: "no journal found" }));
  }
);

// @route   DELETE api/journals/wins/:id/:wins_id
// @desc    Delete a wins gratefulness
// @access  Private
router.delete("/wins/:id/:wins_id", (req, res) => {
  Journal.findById(req.params.id)
    .then(journal => {
      // Check to see if targets exists
      if (
        journal.wins.filter(win => win._id.toString() === req.params.wins_id)
          .length === 0
      ) {
        return res.status(404).json({ goalnotexist: "Goal does not exist" });
      }
      // Get remove index
      const removeIndex = journal.wins
        .map(item => item._id.toString())
        .indexOf(req.params.wins_id);
      // Splice out of comments array
      journal.wins.splice(removeIndex, 1);
      journal.save().then(journal => res.json(journal));
    })
    .catch(err => res.status(400).json({ nojournal: "no journal found" }));
});

// @route   POST api/journals/tonights/:id
// @desc    Add a tonight
// @access  Private
router.post(
  "/tonights/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Journal.findById(req.params.id)
      .then(journal => {
        const { errors, isValid } = validateJournalInput(req.body);
        // Check Validation
        if (!isValid) {
          // If any errors, send 400 with errors object
          return res.status(400).json(errors);
        }
        const newTonight = { tonight: req.body.tonight };
        if (journal.tonights.length < 3) {
          journal.tonights.unshift(newTonight);
          journal.save().then(journal => res.json(journal));
          console.log("Successfully added evening graditude.");
        } else {
          return res.json(journal);
        }
      })
      .catch(err => res.status(400).json({ nojournal: "no journal found" }));
  }
);

// @route   DELETE api/journals/tonights/:id/:tonights_id
// @desc    Delete a tonights gratefulness
// @access  Private
router.delete("/tonights/:id/:tonights_id", (req, res) => {
  Journal.findById(req.params.id)
    .then(journal => {
      // Check to see if targets exists
      if (
        journal.tonights.filter(
          tonight => tonight._id.toString() === req.params.tonights_id
        ).length === 0
      ) {
        return res.status(404).json({ goalnotexist: "Goal does not exist" });
      }
      // Get remove index
      const removeIndex = journal.tonights
        .map(item => item._id.toString())
        .indexOf(req.params.tonights_id);
      // Splice out of comments array
      journal.tonights.splice(removeIndex, 1);
      journal.save().then(journal => res.json(journal));
    })
    .catch(err => res.status(400).json({ nojournal: "no journal found" }));
});

module.exports = router;
