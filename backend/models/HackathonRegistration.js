import mongoose from "mongoose";

const hackathonRegistrationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    college: {
      type: String,
      required: true,
    },

    course: {
      type: String,
      required: true,
    },

    branch: {
      type: String,
      required: true,
    },

    year: {
      type: String,
      required: true,
    },

    domain: {
      type: String,
      required: true,
    },

    projectName: {
      type: String,
      required: true,
      minlength: 5,
      trim: true,
    },

    pptLink: {
      type: String,
      required: true,
    },

    prototypeLink: {
      type: String,
      required: true,
    },

    demoVideoLink: {
      type: String,
      default: "",
    },

    teamSize: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    teamMembers: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },

        email: {
          type: String,
          required: true,
          lowercase: true,
          trim: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const HackathonRegistration = mongoose.model(
  "HackathonRegistration",
  hackathonRegistrationSchema
);

export default HackathonRegistration;