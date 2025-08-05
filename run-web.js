const { run } = require("turbo");

run(["run", "dev", "--filter=web"])
  .then(() => {
    console.log("Turbo web dev started!");
  })
  .catch((err) => {
    console.error("Failed to start web:", err);
  });
