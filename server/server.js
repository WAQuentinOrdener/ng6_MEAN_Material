import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Issue from './models/issue';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/MongoDBLearning');

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});

// Retrieving all issues
router.route('/issues').get((req, res) => {
  Issue.find((err, issues) => {
    if (err) console.log(err);
    res.json(issues);
  });
});

// Retrieving one issue by her ID
router.route('/issues/:id').get((req, res) => {
  Issue.findById(req.params.id, (err, issue) => {
    if (err) console.log(err);
    res.json(issue);
  });
});

// Adding a new issue
router.route('/issues/add').post((req, res) => {
  let issue = new Issue(req.body);
  issue
    .save()
    .then(issue => {
      res.status(200).json({ issue: 'Added successfully' });
    })
    .catch(err => {
      res.status(400).send('Failed to create nex record');
    });
});

// Update an issue
router.route('/issues/update/:id').post((req, res) => {
  Issue.findById(req.params.id, (err, issue) => {
    if (!issue) return next(new Error('Could not load document'));
    else {
      issue.title = req.body.title;
      issue.responsible = req.body.responsible;
      issue.description = req.body.description;
      issue.severity = req.body.severity;
      issue.status = req.body.status;

      issue
        .save()
        .then(issue => {
          res.json('Update done');
        })
        .catch(err => {
          res.status(400).send('Update failed');
        });
    }
  });
});

// Delete an issue
router.route('/issues/delete/:id').get((req, res) => {
  Issue.findByIdAndRemove({ _id: req.params.id }, (err, issue) => {
    if (err) console.log(err);
    res.json('Removed successfully');
  });
});

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
