// asynceError Handle  chai higher-order function ho jun chai asynchronous function wrap garxa
const asyncErrorHandle = (fn) => {
  // yo function jun chai middleware function ho jun chai firta garxa ani express ko request rw response saga kam garxa
  return (req, res) => {
    // fn vanko chai original async function ho jun chai promise return garxa
    fn(req, res).catch((err) => {
      // fn(req,res) ma kunai error aayo vanni tati bal chai catch ma falxa
      res
        .status(500)
        .json({ message: "internal error", errorMessage: err.message });
    });
    return;
  };
};
module.exports = asyncErrorHandle;
