import { Engine } from 'json-rules-engine';


const engine: Engine = new Engine();


engine.addRule({
    name: "Scheme-Eligibility",
    conditions: {
      any: [
        {
          all: [
            {
              fact: "age",
              operator: "greaterThanInclusive",
              value: 18,
            },
            {
              fact: "age",
              operator: "lessThanInclusive",
              value: 40,
            },
            {
              fact: "caste",
              operator: "in",
              value: ["sc", "st"],
            },
            { fact: "gender", operator: "equal", value: "female" },
          ],
        },
        {
          all: [
            {
              fact: "age",
              operator: "greaterThanInclusive",
              value: 30,
            },
            {
              fact: "age",
              operator: "lessThanInclusive",
              value: 50,
            },
            {
              fact: "caste",
              operator: "in",
              value: ["general"],
            },
            { fact: "gender", operator: "equal", value: "female" },
          ],
        },
      ],
    },
    event: {
      type: "eligibility",
      params: {
        message: "You are eligible for this scheme",
        bool: true,
      },
    },
  });


export default engine;