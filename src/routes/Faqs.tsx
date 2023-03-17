/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

export default function Faqs() {
  return (
    <div className="faqs_container">
      <header className="faqs_header">
        <h1 className="faqs_title" id="faqs_title">
          Frequently Asked Questions
        </h1>
        <Link className="faqs_link_home" to="/">
          Back to Welcome Page
        </Link>
      </header>
      <div className="faqs_questions">
        <details className="faqs_question">
          <summary className="question">Who knew about the wedding??</summary>
          <p className="answer">
            Just our parents, our siblings and their partners.
          </p>
        </details>
        <details className="faqs_question">
          <summary className="question">
            Why are you doing it like this??
          </summary>
          <p className="answer">
            Because shizzz is expensive and we aren’t paying to feed y’all
            twice.
          </p>
        </details>
        <details className="faqs_question">
          <summary className="question">Is Devon pregnant?!</summary>
          <p className="answer">No, I just like food.</p>
        </details>
        <details className="faqs_question">
          <summary className="question">When are you having kids?</summary>
          <p className="answer">30 Feb 1867</p>
        </details>
        <details className="faqs_question">
          <summary className="question">How did David propose?</summary>
          <p className="answer" style={{ whiteSpace: "pre-wrap" }}>
            {"Dev: I was not expecting it. David asked me if I wanted to go for a beach clean up on the Saturday at the beginning of the week, nothing unusual. Later on in the week however the mangroves( our usual clean up spot) announced that they were sending out a petition because a corporation was trying to bash them down to put in a hotel. They had until that Sunday to get the signatures so I thought that the beach clean up would be packed with support. Saturday morning rolls around and I don’t care that I haven’t washed my hair in a week because I’m about to go pick up ocean rubbish for hours and DAVID SAYS NOTHING!!!! THAT is how little I suspected this. We drove into the mangrove entrance where there were only 2 other cars and I was DEVASTATED. “What is going on?? Where is everyone?? The Mangroves are gonna DIE?!?” David said “Ok hold on, let me see what's going on with the park officers”He comes back, “Don’t worry! Everything is fine, we are just early” “Ok, We will just start on our own.” very easily placated.\n\n" +
              "We start walking down the boardwalk and I notice that there is some sort of picnic set up in the nearby clearing up ahead. “Oh no! We are going to walk right into someone’s thing!” and I awkwardly try to backtrack/spin around trying to find another way even though I’m on a friggin bridge. At which point I notice that David has hit a 9.6 on the Richter Scale next to me and we are now close enough that I can make out that the signs say our names. He proceeds to say wonderful words that I am so glad were captured on video because I went into complete daze for the next few minutes and I don’t remember a thing. I was so focused on trying to comprehend what was happening that I didn't even notice my friend Mel who was 1m away the entire time taking photos! SHE WASN’T EVEN IN A BUSH! She was out in the open! And once I said “Yes” she said “yay” and my other friend, Emma, leaped out a bush screaming YAAAAAAYYYY!!!! Which snapped me back to reality and I was shocked to find that there were other people there.\n\n" +
              "Turns out the other car had belonged to Em’s dad because they knew I would recognise hers. When David had gotten out of the car to talk with the guards about the beach clean up, he was actually confirming that everything was ready and everyone was in on it and they all gave us a round of applause when we came back through. My friends had gotten up at 4am to get the set up done and they regaled me with stories about how many times they thought I had figured it out and how many close calls they had. How the Office Christmas Party was conveniently changed from something more adventurous to a “nail day” just a couple of days before the proposal and I was oblivious to the boxes of proposal decorations that had been delivered to the salon that day but Em had forgotten to remove from the room and had her sweating the entire time.\n\n" +
              "David had brought 3 outfit options for me to choose from, well done, good job and then Mel worked her fabulous photography skills and gave us an amazing engagement shoot right then and there."}
          </p>
        </details>
      </div>

      <a className="faqs_link_title" href="#">
        Back to Top
      </a>
    </div>
  );
}
