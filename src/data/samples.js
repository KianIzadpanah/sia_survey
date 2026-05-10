/**
 * Survey samples configuration.
 *
 * HOW TO ADD YOUR REAL IMAGES:
 * 1. For each sample, create a folder under public/images/ (e.g. public/images/sample_01/)
 * 2. Place these files inside: a.jpg, a_prime.jpg, b.jpg,
 *    EditTransfer.jpg, LoRWeB.jpg, RelationAdapter.jpg, VisualCloze.jpg, SIA.jpg
 * 3. Update the fields below to match your actual edit descriptions.
 *
 * Image paths are relative to the /public directory (served at the root URL).
 */

const METHODS = [
  "EditTransfer",
  "LoRWeB",
  "RelationAdapter",
  "VisualCloze",
  "SIA",
];

export { METHODS };

const samples = [
  {
    id: "sample_01",
    a: "/sia_survey/images/sample_01/img_a.png",
    a_prime: "/sia_survey/images/sample_01/img_a_prime.png",
    b: "/sia_survey/images/sample_01/img_b.png",
    suppressed_edits: ["add star sunglasses"],
    retained_edits: ["laugh expression"],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_01/EditTransfer.png",
      LoRWeB: "/sia_survey/images/sample_01/LoRWeB.png",
      RelationAdapter: "/sia_survey/images/sample_01/RelationAdapter.png",
      VisualCloze: "/sia_survey/images/sample_01/VisualCloze.png",
      SIA: "/sia_survey/images/sample_01/SIA.png",
    },
  },

  {
    id: "sample_02",
    a: "/sia_survey/images/sample_02/img_a.png",
    a_prime: "/sia_survey/images/sample_02/img_a_prime.png",
    b: "/sia_survey/images/sample_02/img_b.png",
    suppressed_edits: ["pencil-sketch black and white style"],
    retained_edits: ["surprised expression"],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_02/EditTransfer.png",
      LoRWeB: "/sia_survey/images/sample_02/LoRWeB.png",
      RelationAdapter: "/sia_survey/images/sample_02/RelationAdapter.png",
      VisualCloze: "/sia_survey/images/sample_02/VisualCloze.png",
      SIA: "/sia_survey/images/sample_02/SIA.png",
    },
  },

  {
    id: "sample_03",
    a: "/sia_survey/images/sample_03/img_a.png",
    a_prime: "/sia_survey/images/sample_03/img_a_prime.png",
    b: "/sia_survey/images/sample_03/img_b.png",
    suppressed_edits: ["angry expression"],
    retained_edits: ["add a beard"],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_03/EditTransfer.png",
      LoRWeB: "/sia_survey/images/sample_03/LoRWeB.png",
      RelationAdapter: "/sia_survey/images/sample_03/RelationAdapter.png",
      VisualCloze: "/sia_survey/images/sample_03/VisualCloze.png",
      SIA: "/sia_survey/images/sample_03/SIA.png",
    },
  },

  {
    id: "sample_04",
    a: "/sia_survey/images/sample_04/img_a.png",
    a_prime: "/sia_survey/images/sample_04/img_a_prime.png",
    b: "/sia_survey/images/sample_04/img_b.png",
    suppressed_edits: ["lipstick"],
    retained_edits: ["necklace"],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_04/EditTransfer.png",
      LoRWeB: "/sia_survey/images/sample_04/LoRWeB.png",
      RelationAdapter: "/sia_survey/images/sample_04/RelationAdapter.png",
      VisualCloze: "/sia_survey/images/sample_04/VisualCloze.png",
      SIA: "/sia_survey/images/sample_04/SIA.png",
    },
  },

  {
    id: "sample_12",
    a: "/sia_survey/images/sample_12/img_a.png",
    a_prime: "/sia_survey/images/sample_12/img_a_prime.png",
    b: "/sia_survey/images/sample_12/img_b.png",
    suppressed_edits: ["black and white pencil style"],
    retained_edits: [
      "add carved Halloween texture",
      "table with spooky candles with dark background.",
    ],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_12/EditTransfer.png",
      LoRWeB: "/sia_survey/images/sample_12/LoRWeB.png",
      RelationAdapter: "/sia_survey/images/sample_12/RelationAdapter.png",
      VisualCloze: "/sia_survey/images/sample_12/VisualCloze.png",
      SIA: "/sia_survey/images/sample_12/SIA.png",
    },
  },

  {
    id: "sample_05",
    a: "/sia_survey/images/sample_05/img_a.png",
    a_prime: "/sia_survey/images/sample_05/img_a_prime.png",
    b: "/sia_survey/images/sample_05/img_b.png",
    suppressed_edits: ["sunglasses"],
    retained_edits: ["armor"],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_05/EditTransfer.png",
      LoRWeB: "/sia_survey/images/sample_05/LoRWeB.png",
      RelationAdapter: "/sia_survey/images/sample_05/RelationAdapter.png",
      VisualCloze: "/sia_survey/images/sample_05/VisualCloze.png",
      SIA: "/sia_survey/images/sample_05/SIA.png",
    },
  },

  {
    id: "sample_07",
    a: "/sia_survey/images/sample_07/img_a.png",
    a_prime: "/sia_survey/images/sample_07/img_a_prime.png",
    b: "/sia_survey/images/sample_07/img_b.png",
    suppressed_edits: ["raise arms behind head"],
    retained_edits: ["looks like a happy clown"],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_07/EditTransfer.png",
      LoRWeB: "/sia_survey/images/sample_07/LoRWeB.png",
      RelationAdapter: "/sia_survey/images/sample_07/RelationAdapter.png",
      VisualCloze: "/sia_survey/images/sample_07/VisualCloze.png",
      SIA: "/sia_survey/images/sample_07/SIA.png",
    },
  },

  {
    id: "sample_14",
    a: "/sia_survey/images/sample_14/img_a.png",
    a_prime: "/sia_survey/images/sample_14/img_a_prime.png",
    b: "/sia_survey/images/sample_14/img_b.png",
    suppressed_edits: ["open the car's door"],
    retained_edits: [
      "add golden star logo to car's hood",
      "change car's color to red",
    ],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_14/EditTransfer.png",
      LoRWeB: "/sia_survey/images/sample_14/LoRWeB.png",
      RelationAdapter: "/sia_survey/images/sample_14/RelationAdapter.png",
      VisualCloze: "/sia_survey/images/sample_14/VisualCloze.png",
      SIA: "/sia_survey/images/sample_14/SIA.png",
    },
  },

  {
    id: "sample_08",
    a: "/sia_survey/images/sample_08/img_a.png",
    a_prime: "/sia_survey/images/sample_08/img_a_prime.png",
    b: "/sia_survey/images/sample_08/img_b.png",
    suppressed_edits: ["sad expression"],
    retained_edits: ["sunny wildflower meadow background", "sunglasses"],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_08/EditTransfer.png",
      LoRWeB: "/sia_survey/images/sample_08/LoRWeB.png",
      RelationAdapter: "/sia_survey/images/sample_08/RelationAdapter.png",
      VisualCloze: "/sia_survey/images/sample_08/VisualCloze.png",
      SIA: "/sia_survey/images/sample_08/SIA.png",
    },
  },

  {
    id: "sample_13",
    a: "/sia_survey/images/sample_13/img_a.png",
    a_prime: "/sia_survey/images/sample_13/img_a_prime.png",
    b: "/sia_survey/images/sample_13/img_b.png",
    suppressed_edits: ["blond long hair"],
    retained_edits: [
      "add open-top crown",
      "Italian street background",
      "Van Gogh style",
    ],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_13/EditTransfer.png",
      LoRWeB: "/sia_survey/images/sample_13/LoRWeB.png",
      RelationAdapter: "/sia_survey/images/sample_13/RelationAdapter.png",
      VisualCloze: "/sia_survey/images/sample_13/VisualCloze.png",
      SIA: "/sia_survey/images/sample_13/SIA.png",
    },
  },

  {
    id: "sample_09",
    a: "/sia_survey/images/sample_09/img_a.png",
    a_prime: "/sia_survey/images/sample_09/img_a_prime.png",
    b: "/sia_survey/images/sample_09/img_b.png",
    suppressed_edits: ["necklace"],
    retained_edits: ["angry expression", "add open-top crown"],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_09/EditTransfer.png",
      LoRWeB: "/sia_survey/images/sample_09/LoRWeB.png",
      RelationAdapter: "/sia_survey/images/sample_09/RelationAdapter.png",
      VisualCloze: "/sia_survey/images/sample_09/VisualCloze.png",
      SIA: "/sia_survey/images/sample_09/SIA.png",
    },
  },

  {
    id: "sample_06",
    a: "/sia_survey/images/sample_06/img_a.png",
    a_prime: "/sia_survey/images/sample_06/img_a_prime.png",
    b: "/sia_survey/images/sample_06/img_b.png",
    suppressed_edits: ["sitting pose"],
    retained_edits: ["blue dog"],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_06/EditTransfer.png",
      LoRWeB: "/sia_survey/images/sample_06/LoRWeB.png",
      RelationAdapter: "/sia_survey/images/sample_06/RelationAdapter.png",
      VisualCloze: "/sia_survey/images/sample_06/VisualCloze.png",
      SIA: "/sia_survey/images/sample_06/SIA.png",
    },
  },

  {
    id: "sample_10",
    a: "/sia_survey/images/sample_10/img_a.png",
    a_prime: "/sia_survey/images/sample_10/img_a_prime.png",
    b: "/sia_survey/images/sample_10/img_b.png",
    suppressed_edits: ["happy expression"],
    retained_edits: ["mountain with blue sky background", "add earrings"],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_10/EditTransfer.png",
      LoRWeB: "/sia_survey/images/sample_10/LoRWeB.png",
      RelationAdapter: "/sia_survey/images/sample_10/RelationAdapter.png",
      VisualCloze: "/sia_survey/images/sample_10/VisualCloze.png",
      SIA: "/sia_survey/images/sample_10/SIA.png",
    },
  },

  {
    id: "sample_11",
    a: "/sia_survey/images/sample_11/img_a.png",
    a_prime: "/sia_survey/images/sample_11/img_a_prime.png",
    b: "/sia_survey/images/sample_11/img_b.png",
    suppressed_edits: ["Italian street background"],
    retained_edits: ["happy expression", "add a beard"],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_11/EditTransfer.png",
      LoRWeB: "/sia_survey/images/sample_11/LoRWeB.png",
      RelationAdapter: "/sia_survey/images/sample_11/RelationAdapter.png",
      VisualCloze: "/sia_survey/images/sample_11/VisualCloze.png",
      SIA: "/sia_survey/images/sample_11/SIA.png",
    },
  },

  {
    id: "sample_15",
    a: "/sia_survey/images/sample_15/img_a.png",
    a_prime: "/sia_survey/images/sample_15/img_a_prime.png",
    b: "/sia_survey/images/sample_15/img_b.png",
    suppressed_edits: ["old oil painting style"],
    retained_edits: ["add bed lamp", "add moss"],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_15/EditTransfer.png",
      LoRWeB: "/sia_survey/images/sample_15/LoRWeB.png",
      RelationAdapter: "/sia_survey/images/sample_15/RelationAdapter.png",
      VisualCloze: "/sia_survey/images/sample_15/VisualCloze.png",
      SIA: "/sia_survey/images/sample_15/SIA.png",
    },
  },
];

export default samples;
