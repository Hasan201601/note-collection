const asyncHandler = require("express-async-handler");
const getNotes = asyncHandler(() => {
  return null;
});

module.exports = { getNotes };
