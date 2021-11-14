---
layout: portfolio
group: portfolio
image: botframework.png
label: Transit Bot
title: Transit Bot
subtitle: Getting from A to B from Skype, Slack, or Facebook
displayType: Chat bot
displayDate: May 2016
misc:
    name: Source
    text: github
    link: https://github.com/hoovercj/rejseplanenbot
technologies:
    Microsoft Bot Framework: https://dev.botframework.com/   
    Microsoft LUIS: http://luis.ai
---	
<!-- +++++ Projects Section +++++ -->	
Shortly after moving to Copenhagen, the local [Node.js Meetup](http://www.meetup.com/Copenhagen-Node-js-Hackathon/) had a bot-themed hack day. Microsoft had just recently announced a [bot framework](https://dev.botframework.com/) and I was still having trouble getting around the city so I thought I'd tackle both. The bot currently uses a local transit API from [rejseplanen](http://www.rejseplanen.dk/) and can accept natural language queries powered by a [LUIS](http://luis.ai) model that I've trained. That means you can ask the bot how to get between two points in Denmark the same way you would ask a person.

"How do I get from Kanalvej 2, Lyngby to Østerport Station?"

"When is the next train from Copenhagen Station to Aarhus?"

"Get me from Amelienborg Slot to Vesteport."

You don't have to take my word for it, though. Try it out below! And if it doesn't perfectly for you, don't worry, LUIS can learn from its mistakes. I also have several improvements in mind and I'm considering adding Google Directions API for increased flexibility. 

<iframe style="width: 100%; height: 500px" src='https://webchat.botframework.com/embed/rejseplanenbot?s=0oAiOrDjrKM.cwA.z_8.t4IHakApcIVGrfasUjT0jtGrdRPghLg26cVqCgrPQwA'></iframe>
