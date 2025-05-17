// based on App.js from example

import "./Wheel.css";
import WheelComponent from "react-wheel-of-prizes";
import bg from './background.jpg';

export default function Wheel() {
//// old
//   const segments = [
//     "better luck next time",
//     "won 70",
//     "won 10",
//     "better luck next time",
//     "won 2",
//     "won uber pass"
//   ];

////new
// const segments = [
//     "🍔McDonald's🍟",
//     "🍗Popeyes Chicken🐔",
//     "🌮Taco Bell🔔",
//     "🥡Chinese Food🥢",
//     "🍕Tazo/Paisano🍕",
//     "🥪Subway🥪"
//   ];

const segments = [
    "🍔McDonald's🍟",
    "🍔Wendy's🍟",
    "🍔Burger King👑",
    "🍗Popeyes Chicken🐔",
    "🍗KFC Chicken🐔",
    "🌮Taco Bell🔔",
    "🌮Chipotle 🌶",
    "🥡Chinese Food🥢",
    "🍕Tazo🍕",
    "🍕Paisano🍕",
    "🥪Subway🥪"
  ];
const lanks = [
    "https://www.doordash.com/store/mcdonald's-woodbridge-657266/?cursor=eyJzdG9yZV92ZXJ0aWNhbF9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjp7InF1ZXJ5IjoiIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6IiIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSwxNzYsMTc3LDE3OF0sImlzX3NpYmxpbmciOmZhbHNlLCJmb3JjZV9zdG9yZV9hdmFpbGFiaWxpdHlfdjIiOmZhbHNlLCJidW5kbGVfZ2xvYmFsX3NlYXJjaF9jb250ZXh0IjpudWxsfQ==&pickup=false",
    "https://www.doordash.com/store/popeyes-louisiana-kitchen-woodbridge-1957745/?event_type=autocomplete&pickup=false",
    "tacbobell",
    "chinese",
    "https://www.doordash.com/store/tazo-pizza-woodbridge-24220324/?cursor=eyJzdG9yZV92ZXJ0aWNhbF9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjp7InF1ZXJ5IjoiIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6IiIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSwxNzVdLCJpc19zaWJsaW5nIjpmYWxzZSwiZm9yY2Vfc3RvcmVfYXZhaWxhYmlsaXR5X3YyIjpmYWxzZSwiYnVuZGxlX2dsb2JhbF9zZWFyY2hfY29udGV4dCI6bnVsbH0=&pickup=false",
    "https://www.doordash.com/store/paisano's-pizza-woodbridge-568376/?cursor=eyJzdG9yZV92ZXJ0aWNhbF9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjp7InF1ZXJ5IjoiIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6IiIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSwxNzZdLCJpc19zaWJsaW5nIjpmYWxzZSwiZm9yY2Vfc3RvcmVfYXZhaWxhYmlsaXR5X3YyIjpmYWxzZSwiYnVuZGxlX2dsb2JhbF9zZWFyY2hfY29udGV4dCI6bnVsbH0=&pickup=false",
    "https://www.doordash.com/store/subway-dumfries-579444/?cursor=eyJzdG9yZV92ZXJ0aWNhbF9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjp7InF1ZXJ5Ijoic3Vid2F5IiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6InN1YndheSIsInZlcnRpY2FsX2lkIjotOTk5LCJ2ZXJ0aWNhbF9uYW1lIjoiYWxsIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSwxNzYsMTc5XSwiaXNfc2libGluZyI6ZmFsc2UsImZvcmNlX3N0b3JlX2F2YWlsYWJpbGl0eV92MiI6ZmFsc2UsImJ1bmRsZV9nbG9iYWxfc2VhcmNoX2NvbnRleHQiOm51bGx9&pickup=false",
];
  const segColors = [
                    "#EE4040",  // red 
                    "#F0CF50", // yellow
                    "#815CD1", // purple
                    "#3DA5E0", // blue
                    "#34A24F", // green
                    "#EE4040",  // red 
                    "#F0CF50", // yellow
                    "#815CD1", // purple
                    "#3DA5E0", // blue
                    "#34A24F" // green
                ];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div className="Wheel">
        <div class="bg-image">
        ffsdfsdfsdf
      <h1>Hello Hungry Person</h1>

        </div>


      <div>
      <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={250}
          upDuration={500}
          downDuration={600}
          fontFamily="Fira Code iScript"
        />
      </div>
      <h2>Start eating to see some magic happen!</h2>
    </div>
  );
}
