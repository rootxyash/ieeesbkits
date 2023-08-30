import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  {
    question: "What is IEEE SB-KITS?",
    answer:
      "The Institute of Electrical and Electronics Engineers (IEEE) is an active forum present in a KITS, Ramtek.",
  },
  {
    question: "What are the Dates and Timings of each event?",
    answer:
      "Dates and Timings related details are given in event section",
  },
  {
    question: "How can I participate in the event?",
    answer:
      "Explore various events on the IEEE SB-KITS website and register for the same",
  },
  {
    question: "Will there be any entry fees for the events?",
    answer:
      "No, there is not any entry fee to explore and to know more about forum but to participate in some events you have to pay registration fee.",
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => {
          return (
            <div className={classes.single} onClick={() => toggle(i)}>
              <div className={classes.question}>{ques.question}</div>
              <div
                className={`${
                  clicked === i ? classes.answer : classes.noAnswer
                }`}
              >
                {ques.answer}
              </div>
              <span className={classes.btn}>+</span>
            </div>
          );
        })}

        {/* <div className={classes.single}>
                <div className={classes.question}>How are you?</div>
                <div className={classes.answer}>I am fine</div>
                <span className={classes.btn}>+</span>
            </div> */}
      </div>
    </section>
  );
};

export default Faq;
