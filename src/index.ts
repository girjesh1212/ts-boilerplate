import app from "./server";

const PORT: number = Number(process.env.PORT) || 3005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode.`);
});