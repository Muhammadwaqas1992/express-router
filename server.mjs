import express from 'express';
import cors from 'cors';
import path from 'path';

const __dirname = path.resolve();

import authRouter from './routes/auth.mjs';
import commentRouter from './routes/comment.mjs';
import feedRouter from './routes/feed.mjs';
import postRouter from './routes/post.mjs';

const app = express();
app.use(express.json()); // body parser
// app.use(cors());

app.use(authRouter);
app.use(commentRouter);
app.use(feedRouter);
app.use(postRouter);
//     /static/vscode_windows.exe
// app.use("/static", express.static(path.join(__dirname, 'static')))

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging purposes

  // You can customize the error response based on the specific error properties
  // or use a generic error message and status code.
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`);
});
