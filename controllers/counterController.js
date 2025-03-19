import Counter from "../models/counter.js";

// get counters GET
const getCounters = async (req, res) => {
  const contacts = await Counter.find();
  res.status(200).json(contacts);
};

// create counter POST
const createCounter = async (req, res) => {
  console.log("The request body is:", req.body);
  const { title, count } = req.body;
  if (!title || !count) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const counter = await Counter.create({ title, count });
  res.status(201).json({ message: "Counter Created Successfully" });
};

// Increment counter - PUT
const incrementCounter = async (req, res) => {
  const { id } = req.params;
  try {
    const counter = await Counter.findById(id);
    if (!counter) {
      return res.status(404).json({ message: "Counter not found" });
    }

    counter.count += 1;
    await counter.save();

    res.status(200).json({ message: "Counter incremented", counter });
  } catch (error) {
    res.status(500).json({ message: "Error incrementing counter", error });
  }
};

export { createCounter, getCounters, incrementCounter };
