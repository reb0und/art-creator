const config = {};

config.DEFAULT_IMAGES_PATH = "./images/";
config.DEFAULT_METADATA_PATH = "./metadata/";

// UPDATE THESE CONSTANTS BELOW WITH YOUR VALUES
config.IMAGES_BASE_URL = "https://base-url-to-my-nft-images.com/";
config.TOKEN_NAME_PREFIX = "My NFT #";
config.TOKEN_DESCRIPTION = "My NFT description.";
config.TOTAL_TOKENS = 5;

// UPDATE THIS ARRAY BELOW WITH YOUR TRAITS LIST
config.ORDERED_TRAITS_LIST = [
  {
    type: "Background",
    options: [
      {
        image: "./traits/0_background/background_0.png",
        value: "Baby Blue",
        weight: 1,
      },
      {
        image: "./traits/0_background/background_1.png",
        value: "Baby Pink",
        weight: 1,
      },
    ],
  },
  {
    type: "Skin",
    options: [
      {
        image: "./traits/1_skin/skin_0.png",
        value: "Light Brown",
        weight: 1,
      },
      {
        image: "./traits/1_skin/skin_1.png",
        value: "Dark Brown",
        weight: 1,
      },
    ],
  },
  {
    type: "Baseline",
    options: [
      {
        image: "./traits/2_baselineart/baselineart.png",
        value: "0",
        weight: 1,
      },
    ],
  },
  {
    type: "Face",
    options: [
      {
        image: "./traits/3_faceacc/faceacc_0.png",
        value: "Headphones",
        weight: 1,
      },
      {
        image: "./traits/3_faceacc/faceacc_1.png",
        value: "Mustache",
        weight: 1,
      },
      {
        image: "./traits/3_faceacc/faceacc_2.png",
        value: "Earring",
        weight: 1,
      }
    ],
  },
  {
    type: "Shirt",
    options: [
      {
        image: "./traits/4_shirt/shirt_0.png",
        value: "Pink",
        weight: 1,
      },
      {
        image: "./traits/4_shirt/shirt_1.png",
        value: "White",
        weight: 1,
      },
    ],
  },
  {
    type: "Hand",
    options: [
      {
        image: "./traits/5_handacc/handacc_0.png",
        value: "Fishing Rod",
        weight: 1,
      },
      {
        image: "./traits/5_handacc/handacc_1.png",
        value: "Balloon",
        weight: 1,
      },
    ],
  },
  {
    type: "Hat",
    options: [
      {
        image: "./traits/6_hat/hat_0.png",
        value: "Cap",
        weight: 1,
      },
      {
        image: "./traits/6_hat/hat_1.png",
        value: "Bucket",
        weight: 1,
      },
      {
        image: "./traits/6_hat/hat_2.png",
        value: "Party Hat",
        weight: 1,
      },
    ],
  },
  {
    type: "Face",
    options: [
      {
        image: "./traits/7_face/face_0.png",
        value: "Happy",
        weight: 1,
      },
      {
        image: "./traits/7_face/face_1.png",
        value: "Neutral",
        weight: 1,
      },
    ],
  },
];

module.exports = config;
