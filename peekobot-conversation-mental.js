const chat = {
    1: {
        text: "Hello there! I'm Holi, your virtual coach!",
        options: [
            {
                text: "Hello Holi!",
                next: 2
            },
            {
                text: "Nice to e-meet you!",
                next: 2
            }
        ]
    },
    2: {
        text: "Here we will be working towards your <b>best mental health</b>😉",
        options: [
            {
                text: "Let's start a FREE service",
                next: 3
            },
            {
                text: "Tell me more about you, Holi!",
                next: 4
            },
            {
                text: "Tell me more about Holistic Health",
                next: 5
            }
        ]
    },
    3: {
        text: "Yes, sure!",
        next: 18
    },
    4: {
        text: "Sure! I'm happy that you asked! 🤩",
        next: 6
    },
    6: {
        text: "As a coach, I'll ask you the <b>right questions</b> to help you notice what's going on in your mind and body. 🧠💪",
        next: 7
    },
    7: {
        text: "Also, <b>I'm here to help you</b> deal with any potential difficulties you may be having.",
        options: [
            {
                text: "I understand Holi",
                next: 8
            },
            {
                text: "Give me some examples, Holi",
                next: 9
            }
        ]
    },
    8: {
        text: "Let's move on!",
        next: 18
    },
    9: {
        text: "For example, if you are here to work on your stress coping skills, I would ask you:<br>✔️ When was the last time you felt relaxed and at peace?<br>✔️ What did you do differently that time than normally?<br>✔️ How can you work towards that state of mind again?",
        options: [
            {
                text: "Those are good questions!",
                next: 10
            },
            {
                text: "I like the idea!",
                next: 11
            },
            {
                text: "I'm not sure yet!",
                next: 12
            }
        ]
    },
    10: {
        text: "I'm happy you think so! 😄",
        next: 8
    },
    11: {
        text: "I'm happy about that 😄",
        next: 8
    },
    12: {
        text: "Don't worry! This approach may take some time to set in and I'm always here for you during the process. 😉",
        options: [
            {
                text: "Sounds good!",
                next: 8
            },
            {
                text: "I will give it a try, HoIi!",
                next: 8
            }
        ]
    },
    5: {
        text: "Glad you asked!",
        next:13
    },
    13: {
        text: "<b>Holistic health</b> recognizes that the human being consists of <b>body, mind, and spirit</b> in a dynamic interaction within itself, with others, and with the environment. 🌿",
        options: [
            {
                text: "Let's go to the services!",
                next: 18
            },
            {
                text: "Tell me more!",
                next: 14
            }
          ]
    },
    14: {
        text: "I like that you are curious!",
        next: 15
    },
    15: {
        text: "I'm also very curious!",
        next: 16
    },
    16: {
        text: "For me, you are a <b>whole person with a unique set of characteristics –</b> internal and external – that are intrinsically connected.",
        next: 17
    },
    17: {
        text: "Having said that, let's go to our free services!",
        options: [
            {
                text: "Yes, please!",
                next: 18
            }
          ]
    },
    18: {
        text: "We have many <b>mental health topics for you.</b>",
        next: 19
    },
    19: {
        text: "Take your pick 👇",
        options: [
            {
                text: "Managing Stress and Burnout",
                next: 20
            },
            {
                text: "Cultivating a Mind-Body Connection",
                next: 21
            },
            {
                text: "Coping with Grief and Loss",
                next: 22
            },
            {
                text: "Achieving Peak Performance",
                next: 23
            }
          ]
    },
    20: {
        text: "Managing stress and burnout is such a useful tool! Let's go for it! 💪",
        options: [
            {
                text: "Sounds good, Holi!",
                next: 24
            }
          ]
    },
    21: {
        text: "Working on your mind-body connection is certainly amazing!",
        next: 26
    },
    22: {
        text: "Loss is in many cases inevitable, and learning how to cope with it will make you stronger, for sure! 💪 💗",
        options: [
            {
                text: "Sounds good, Holi!",
                next: 28
            }
          ]
    },
    23: {
        text: "I'm happy you choose this! Your peak performance is within your reach!",
        options: [
            {
                text: "Sounds good, Holi!",
                next: 30
            }
          ]
    },
    24: {
        text: "I prepared a very interesting conversation for us in our Holisticly environment.",
        next: 25
    },
    25: {
        text: "Afterwards, please feel free to explore our holistic world of services!",
        options: [
            {
                text: "Sounds good, Holi!",
                url: "https://app.holisticly.io/communicate/chat/chatbot?serviceid=e2002105-ebcf-4b98-9732-51d23c243705"
            }
          ]
    },
    26: {
        text: "I prepared a very interesting conversation for us in our Holisticly environment.",
        next: 27
    },
    27: {
        text: "Afterwards, please feel free to explore our holistic world of services!",
        options: [
            {
                text: "Sounds good, Holi!",
                url: "https://app.holisticly.io/communicate/chat/chatbot?serviceid=232bd448-6a80-4980-b071-9115810cc550"
            }
          ]
    },
    28: {
        text: "I prepared a very interesting conversation for us in our Holisticly environment.",
        next: 29
    },
    29: {
        text: "Afterwards, please feel free to explore our holistic world of services!",
        options: [
            {
                text: "Sounds good, Holi!",
                url: "https://app.holisticly.io/communicate/chat/chatbot?serviceid=e3af318a-b9b6-4495-bff0-bf6c2c225099"
            }
          ]
    },
    30: {
        text: "I prepared a very interesting conversation for us in our Holisticly environment.",
        next: 31
    },
    31: {
        text: "Afterwards, please feel free to explore our holistic world of services!",
        options: [
            {
                text: "Sounds good, Holi!",
                url: "https://app.holisticly.io/communicate/chat/chatbot?serviceid=07bada56-f623-4d9d-a144-5c07f49c86bc"
            }
          ]
    }
};
