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

const METHODS = ["EditTransfer", "LoRWeB", "RelationAdapter", "VisualCloze", "SIA"];

export { METHODS };

const samples = [
  {
    id: "sample_01",
    a: "/sia_survey/images/sample_01/a.jpg",
    a_prime: "/sia_survey/images/sample_01/a_prime.jpg",
    b: "/sia_survey/images/sample_01/b.jpg",
    suppressed_edits: ["Add sunglasses", "Change hair color to blonde"],
    retained_edits: ["Add smile", "Change background to beach scene"],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_01/EditTransfer.jpg",
      LoRWeB: "/sia_survey/images/sample_01/LoRWeB.jpg",
      RelationAdapter: "/sia_survey/images/sample_01/RelationAdapter.jpg",
      VisualCloze: "/sia_survey/images/sample_01/VisualCloze.jpg",
      SIA: "/sia_survey/images/sample_01/SIA.jpg",
    },
  },
  {
    id: "sample_02",
    a: "/sia_survey/images/sample_02/a.jpg",
    a_prime: "/sia_survey/images/sample_02/a_prime.jpg",
    b: "/sia_survey/images/sample_02/b.jpg",
    suppressed_edits: ["Convert to oil painting style"],
    retained_edits: ["Add snow on the ground", "Make sky overcast"],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_02/EditTransfer.jpg",
      LoRWeB: "/sia_survey/images/sample_02/LoRWeB.jpg",
      RelationAdapter: "/sia_survey/images/sample_02/RelationAdapter.jpg",
      VisualCloze: "/sia_survey/images/sample_02/VisualCloze.jpg",
      SIA: "/sia_survey/images/sample_02/SIA.jpg",
    },
  },
  {
    id: "sample_03",
    a: "/sia_survey/images/sample_03/a.jpg",
    a_prime: "/sia_survey/images/sample_03/a_prime.jpg",
    b: "/sia_survey/images/sample_03/b.jpg",
    suppressed_edits: ["Add rain effect", "Add fog"],
    retained_edits: ["Make it night time", "Turn on street lights"],
    outputs: {
      EditTransfer: "/sia_survey/images/sample_03/EditTransfer.jpg",
      LoRWeB: "/sia_survey/images/sample_03/LoRWeB.jpg",
      RelationAdapter: "/sia_survey/images/sample_03/RelationAdapter.jpg",
      VisualCloze: "/sia_survey/images/sample_03/VisualCloze.jpg",
      SIA: "/sia_survey/images/sample_03/SIA.jpg",
    },
  },
];

export default samples;
