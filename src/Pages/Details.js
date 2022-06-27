import React, { createContext, useState } from 'react'

export const store = createContext()

const Details = (props) => {
  const [details,setDetails] = useState([
    {
      "id": 1,
      "title": "Squid Game season 2 officially announced by Netflix, director Hwang Dong-hyuk shares details",
      "Image": "https://www.5dariyanews.com/Uploads/2022/06/13/en-news-12222418-Squid-Game-Season-2-large.jpg",
      "category": "mix",
      "description":"The second season of Squid Game was announced on Sunday by Netflix on Twitter.The first season of the Korean show released last year and went on to be a monumental global success."
    },
    {
      "id": 1,
      "title": "Squid Game season 2 officially announced by Netflix, director Hwang Dong-hyuk shares details",
      "Image": "https://www.5dariyanews.com/Uploads/2022/06/13/en-news-12222418-Squid-Game-Season-2-large.jpg",
      "category": "Movies",
      "description":"The second season of Squid Game was announced on Sunday by Netflix on Twitter.The first season of the Korean show released last year and went on to be a monumental global success."
    },
   
    {
      "id": 2,
      "title": "Ante Sundaraniki OTT Release Date, Where & When to Watch?",
      "Image": "https://jbt-en-images.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/06/10115110/ante-sundaraniki-collection-day-1.jpg",
      "category": "Movies",
      "description":"Nani and Nazriya Nazim starrer rom-com, as decided by its makers, had a summer release on June 10, 2022. Apart from the original (Telugu) version, the film was also dubbed in Tamil as Adade Sundara while in Malayalam under the title Aha Sundara.Despite being under-performed at BO, the film Ante Sundaraniki earned a lot of praise with lots of appreciation for the lead stars cast. Now it is reported that leading OTT platform Netflix has acquired the OTT rights of the film."
    },
    {
      "id": 61,
      "title": "Ante Sundaraniki OTT Release Date, Where & When to Watch?",
      "Image": "https://jbt-en-images.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/06/10115110/ante-sundaraniki-collection-day-1.jpg",
      "category": "footer1",
      "description":"Nani and Nazriya Nazim starrer rom-com, as decided by its makers, had a summer release on June 10, 2022. Apart from the original (Telugu) version, the film was also dubbed in Tamil as Adade Sundara while in Malayalam under the title Aha Sundara.Despite being under-performed at BO, the film Ante Sundaraniki earned a lot of praise with lots of appreciation for the lead stars cast. Now it is reported that leading OTT platform Netflix has acquired the OTT rights of the film."
    },
    
    {
      "id": 4,
      "title": "Prabhas's picture with Amitabh Bachchan, Prashanth Neel, Nani and Dulquer Salman goes viral",
      "Image": "https://static.toiimg.com/thumb/msid-92488450,imgsize-80576,width-800,height-600,resizemode-75/92488450.jpg",
      "category": "Movies",
      "description": "Pan-India star Prabhas is currently one of the most sought-after actors in Indian cinema with several highly budgeted flicks lined up back to back. The actor was recently shooting for ‘Project K’ with Amitabh Bachchan in Hyderabad under the direction of Nag Ashwin and the film has reportedly wrapped up its schedule in Hyderabad now.A picture of Prabhas with Veteran director Raghavendra Rao, Amitabh Bachchan, ‘Salaar’ director Prashanth Neel, Nani, and Dulquer Salman is going viral on social media. The pic was taken during ‘Project K’s opening ceremony at GachiBowli in Hyderabad and fans are making the picture viral on the internet asking for more updates on the film."
    },
    {
      "id": 3,
      "title": "South Korean show All of Us Are Dead to return with Season 2 on Netflix",
      "Image": "https://kdramadiary.com/wp-content/uploads/2022/01/All-of-us-are-dead-a_kdramadiary.png",
      "category": "movies",
      "description":"Netflix Korea made a big announcement on June 6, declaring the return of their series All of Us are Dead for Season 2. They dropped the poster with a caption that read, ‘Can we survive again? Hyosan High School friends’ fierce zombie survival period begins. ‘All of Us Are Dead’ season 2, only on Netflix.”"
    },
   
  {
    "id": 10,
    "title": "777 Charlie box office collection; Rakshit Shetty starrer Blockbuster nears 50 crores in Karnataka ",
    "Image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/777-charlie-et00077150-31-05-2022-11-46-42.jpg",
    "category": "Movies",
    "description": "Aishwarya Rai Bachchan, Abhishek Bachchan and daughter Aaradhya returned to Mumbai today after ringing in 2019 abroad. Abhishek and Aishwarya shared photos from their New Year getaway as the family basked in the sun. At the airport, daughter Aaradhya was engaged in a conversation with her parents and looked cute as a button in a pink dress."
  },
  {
    "id": 11,
    "title": "Araku Valley ",
    "Image": "https://www.trawell.in/admin/images/thumbs/249844316Araku_Main_thumb.jpg",
    "category": "Tourism",
    "description":"At a distance of 112 km from Vizag, 432 km from Vijayawada, 85 km from Vizianagaram, 26 km from Anantagiri and 635 km from Hyderabad, Araku Valley, popularly known as Araku, is a scenic hill station in the Vishakhapatnam district of Andhra Pradesh. Often referred to as Andhra Ooty, it is one of the most famous places to experince Andhra Pradesh tourism"
  },
  {
    "id": 11,
    "title": "Araku Valley ",
    "Image": "https://www.trawell.in/admin/images/thumbs/249844316Araku_Main_thumb.jpg",
    "category": "technology",
    "description":"At a distance of 112 km from Vizag, 432 km from Vijayawada, 85 km from Vizianagaram, 26 km from Anantagiri and 635 km from Hyderabad, Araku Valley, popularly known as Araku, is a scenic hill station in the Vishakhapatnam district of Andhra Pradesh. Often referred to as Andhra Ooty, it is one of the most famous places to experince Andhra Pradesh tourism"
  },
  {
    "id": 55,
    "title": "Vijayawada",
    "Image": "https://www.trawell.in/admin/images/thumbs/249844254Vijayawada_Main_thumb.jpg",
    "category": "mix",
    "description":"At a distance of 37 km from Guntur, 273 km from Hyderabad, 354 km from Vizag, 453 km from Chennai and 643 km from Bangalore, Vijayawada, also known as Bezawada, is the second largest city in Andhra Pradesh State and also one of the top Places to visit in Andhra Pradesh. It is located on the banks of the Krishna River to the South, Budameru River on the north and the Indrakiladri Hills on the west. This is the largest railway junction of the South Central Railway, situated along the Chennai-Howrah and Chennai-Delhi rail route."
  },
  {
    "id": 5,
    "title": "Vijayawada",
    "Image": "https://www.trawell.in/admin/images/thumbs/249844254Vijayawada_Main_thumb.jpg",
    "category": "Tourism",
    "description":"At a distance of 37 km from Guntur, 273 km from Hyderabad, 354 km from Vizag, 453 km from Chennai and 643 km from Bangalore, Vijayawada, also known as Bezawada, is the second largest city in Andhra Pradesh State and also one of the top Places to visit in Andhra Pradesh. It is located on the banks of the Krishna River to the South, Budameru River on the north and the Indrakiladri Hills on the west. This is the largest railway junction of the South Central Railway, situated along the Chennai-Howrah and Chennai-Delhi rail route."
  },
  {
    "id": 12,
    "title": "Rajahmundry:Lake of Backwater",
    "Image": "https://www.trawell.in/admin/images/thumbs/609085648Rajahmundry_Main_thumb.jpg",
    "category": "Tourism",
    "description":"At a distance of 154 km from Vijayawada, 207 km from Vizag, 186 km from Guntur, 64 km from Kakinada, 151 km from Machilipatnam and 430 km from Hyderabad, Rajahmundry, formerly called as Rajamahendravaram, is a beautiful city located on the banks of Godavari River in Andhra Pradesh. It is also known as the 'cultural capital' of Andhra Pradesh and is one of the popular Tourist places in Andhra Pradesh. It is the birth place of Adikavi Nannayya who developed script for Telugu language."
  },
  {
    "id": 12,
    "title": "Rajahmundry:Lake of Backwater",
    "Image": "https://www.trawell.in/admin/images/thumbs/609085648Rajahmundry_Main_thumb.jpg",
    "category": "footer2",
    "description":"At a distance of 154 km from Vijayawada, 207 km from Vizag, 186 km from Guntur, 64 km from Kakinada, 151 km from Machilipatnam and 430 km from Hyderabad, Rajahmundry, formerly called as Rajamahendravaram, is a beautiful city located on the banks of Godavari River in Andhra Pradesh. It is also known as the 'cultural capital' of Andhra Pradesh and is one of the popular Tourist places in Andhra Pradesh. It is the birth place of Adikavi Nannayya who developed script for Telugu language."
  },
  {
    "id": 13,
    "title": "Talakona Waterfalls ",
    "Image":"https://www.trawell.in/admin/images/thumbs/049130937Talakona_Main_thumb.jpg",
    "category": "Tourism",
    "description":"At a distance of 49 km from Bakarapet, 64 km from Tirupati, 120 km from Horsley Hills, 192 km from Chennai, 241 km from Bangalore and 89 km from Chittoor, Talakona Falls are situated in Sri Venkateswara National Park near Nerabailu Village of Yerravari Mandal of Chittoor district in Andhra Pradesh."
  },
  {
    "id": 22,
    "title": "A face search engine anyone can use is alarmingly accurate ",
    "Image": "https://images.indianexpress.com/2022/05/Facial-search-engine-featured.jpg",
    "category": "Technology",
    "description": "For $29.99 a month, a website called PimEyes offers a potentially dangerous superpower from the world of science fiction: the ability to search for a face, finding obscure photos that would otherwise have been as safe as the proverbial needle in the vast digital haystack of the internet.A search takes mere seconds. You upload a photo of a face, check a box agreeing to the terms of service and then get a grid of photos of faces deemed similar, with links to where they appear on the internet. The New York Times used PimEyes on the faces of a dozen Times journalists, with their consent, to test its powers.PimEyes found photos of every person, some that the journalists had never seen before, even when they were wearing sunglasses or a mask, or their face was turned away from the camera, in the image used to conduct the search. PimEyes found one reporter dancing at an art museum event a decade ago, and crying after being proposed to, a photo that she didn’t particularly like but that the photographer had decided to use to advertise his business on Yelp. A tech reporter’s younger self was spotted in an awkward crush of fans at the Coachella music festival in 2011. A foreign correspondent appeared in countless wedding photos, evidently the life of every party, and in the blurry background of a photo taken of someone else at a Greek airport in 2019. A journalist’s past life in a rock band was unearthed, as was another’s preferred summer camp getaway."
  },
  {
    "id": 63,
    "title": "A face search engine anyone can use is alarmingly accurate ",
    "Image": "https://images.indianexpress.com/2022/05/Facial-search-engine-featured.jpg",
    "category": "footer3",
    "description": "For $29.99 a month, a website called PimEyes offers a potentially dangerous superpower from the world of science fiction: the ability to search for a face, finding obscure photos that would otherwise have been as safe as the proverbial needle in the vast digital haystack of the internet.A search takes mere seconds. You upload a photo of a face, check a box agreeing to the terms of service and then get a grid of photos of faces deemed similar, with links to where they appear on the internet. The New York Times used PimEyes on the faces of a dozen Times journalists, with their consent, to test its powers.PimEyes found photos of every person, some that the journalists had never seen before, even when they were wearing sunglasses or a mask, or their face was turned away from the camera, in the image used to conduct the search. PimEyes found one reporter dancing at an art museum event a decade ago, and crying after being proposed to, a photo that she didn’t particularly like but that the photographer had decided to use to advertise his business on Yelp. A tech reporter’s younger self was spotted in an awkward crush of fans at the Coachella music festival in 2011. A foreign correspondent appeared in countless wedding photos, evidently the life of every party, and in the blurry background of a photo taken of someone else at a Greek airport in 2019. A journalist’s past life in a rock band was unearthed, as was another’s preferred summer camp getaway."
  },
  
  {
    "id": 23,
    "title": "Ather responds to fire incident in Chennai showroom; blames service error ",
    "Image": "https://images.indianexpress.com/2022/05/Ather-Energy-showroom-fire-factory-hosur.jpg",
    "category": "Technology",
    "description": "Indian electric two-wheeler manufacturer Ather Energy has given an official statement about the fire that happened in one of its showrooms in Chennai on May 27. Shortly after the incident was reported, Ather’s official Twitter handle confirmed the fire while saying that no employee was harmed during the incident.According to a statement issued by the company later, the incident happened due to a vehicle that was brought into the showroom for servicing after it had an accident. Since there was a lot of dust and mud on the vehicle, the staff at the service centre reportedly used a high-pressure water wash to clean the vehicle before inspecting it.Ather says that the service team discovered some cracks in the top casing of the battery pack. But by then, water had entered the battery casing due to the high-pressure wash. The company says that letting in water into the battery is an “impossible to solve scenario,” and that the scooter was “moved to a safer area,” as soon as this was observed."
  },
  {
    "id": 24,
    "title": "Russia opens cases against Google, other foreign tech over data storage ",
    "Image": "https://images.indianexpress.com/2022/05/Google-AP.jpg",
    "category": "Technology",
    "description": "Russia’s communications regulator Roskomnadzor said on Friday it had opened administrative cases against Alphabet Inc’s Google and six other foreign technology companies for alleged violations of personal data legislation.Moscow has clashed with Big Tech over content, censorship, data and local representation in a simmering dispute that has erupted into a full-on information battle since Russia sent tens of thousands of troops into Ukraine on Feb. 24.Russia fined Google 3 million roubles ($46,540) last year for not storing the personal data of Russian users in databases on Russian territory, and on Friday said it had opened a new case over what it called Google’s repeated failure to comply with Russian legislation.The regulator also said it had opened cases against six other companies – Airbnb, Pinterest, Likeme, Twitch, Apple and United Parcel Service – for alleged first-time offences carrying a potential fine of 1-6 million roubles."
  },

  {
    "id": 29,
    "title": " Google hit with fresh UK investigation over ad tech dominance",
    "Image": "https://images.indianexpress.com/2022/05/Google-reuters-1.jpg",
    "category": "Technology",
    "description": "The UK’s antitrust watchdog started a new investigation of Alphabet Inc.’s Google, over suspicions it may have abused its dominant position across its ad tech that goes to the heart of the tech giant’s business model.The move by the Competition and Markets Authority opens a fresh front in its regulatory tussle with Google. The CMA said it was concerned Google sought to illegally favor its own ad exchange services, while taking steps to exclude the services offered by rivals.“Weakening competition in this area could reduce the ad revenues of publishers, who may be forced to compromise the quality of their content to cut costs or put their content behind pay walls,” said Andrea Coscelli, the CMA’s Chief Executive Officer.Watchdogs around the world have started to home in on the huge power that firms such as Google and Meta’s Facebook wield over ad markets — striking at the heart of the tech giants’ money making machines. Google faces a separate probe by the CMA into possible collusion over the way it operates online display advertising services.The CMA has been examining the way Google buys and sells advertising since at least 2020, saying that its advertising stack is a potential conflict of interest. It’s called for powers that would even allow for a structural changes."
  },
 
  {
    "id": 31,
    "title": "Tips to do a perfect headstand",
    "Image": "https://media1.popsugar-assets.com/files/thumbor/M4wOdHcoDRflWHCBTMYzKWjBkB8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/09/27/480/n/1922729/3b7598d3_Headstand-facing-wall/i/Bound-Headstand.jpg",
    "category": "Fitness",
    "description": "Referred to as the ‘king’ of asanas, headstand is an advanced yoga inversion. For beginners, it might seem that a headstand turns the world upside down. However, Anshuka Parwani, the celebrity yoga trainer, shared an Instagram post saying, “It looks intimidating, but once you build up to it, it becomes so easy. If you have never done one before, please make sure you practice with a certified teacher first. The procedure, as laid down by the yoga trainer is as follows Start with Vajrasana (diamond pose) and grab opposite elbows.Interlock your fingers and reduce the space between your elbows.Make sure your shoulders are nice and protracted and raise your knees.Activate your core, walk in and raise one knee to your chest and then the other and hold this position.Stay for a few seconds and build your strength.Extend one leg all the way to the top.When you feel more confident, extend the other leg.”"
  },
  
  {
    "id": 33,
    "title": " Asanas and breathing exercises to enhance mood, boost energy levels",
    "Image": "https://images.indianexpress.com/2022/04/GettyImages-yoga-breathing-1200.jpg",
    "category": "Fitness",
    "description": "Stress has become a part of life, but instead of living with it, we must find the tools with which to combat it. Yoga is one such tool that can deal with physical, emotional and mental issues caused by stress, and give you a better perspective of life.According to Samiksha Shetty, a certified yoga educator and the founder of Moon Village Cafe, yoga postures (asanas), breathwork (Pranayama) and meditation induce a sense of calm and relaxation from within, and if you are looking for how you can de-stress, this is what you need to know.According to Samiksha Shetty, a certified yoga educator and the founder of Moon Village Cafe, yoga postures (asanas), breathwork (Pranayama) and meditation induce a sense of calm and relaxation from within, and if you are looking for how you can de-stress, this is what you need to know.“In yoga, we use movement and breath to release stuck energy along the spine and throughout the body. The mind-body connection created in yoga facilitates change at a cellular level. Our nervous systems can rewire by retraining psychological or emotional triggers that set off our flight-or-fight response,” she explains."
  },
  
  {
    "id": 35,
    "title": "Should yoga be done on an empty stomach? Here’s what experts say ",
    "Image": "https://images.indianexpress.com/2022/04/GettyImages-yoga-1200.jpg",
    "category": "Fitness",
    "description": "o one will understand you or your body the way you do so make sure you listen to it, protect it, do good things for it and celebrate it,” they saidYoga is now the preferred choice of many, to stay fit, active and agile. It helps in numerous ways, be it in improving flexibility, strength and posture, or reducing stress and providing a sense of calm. Nutrition and diet are an important part of fitness along with physical exercise. On that account, it becomes necessary to understand whether yoga should be done on an empty stomach or notAnshuka Parwani, a yoga expert, and Pooja Makhija, a nutritionist took to Instagram to talk about this dilemma that many face.Pooja believes that it’s important to have something before starting with your exercise in the morning. It should be quite light and not too heavy to kickstart your metabolism.While both have contrasting opinions, they strongly agreed and upheld the point that you know your body better than anyone else. Hence, it’s important to observe and understand what your body is trying to tell you and do as one may deem fit. They said, if practising yoga on an empty stomach is suiting you better, do that. On the other hand, if it feels like you need something to get a better start, follow that as a part of your routine.    "
  },
  {
    "id": 37,
    "title": "Should yoga be done on an empty stomach? Here’s what experts say ",
    "Image": "https://images.indianexpress.com/2022/04/GettyImages-yoga-1200.jpg",
    "category": "mix",
    "description": "o one will understand you or your body the way you do so make sure you listen to it, protect it, do good things for it and celebrate it,” they saidYoga is now the preferred choice of many, to stay fit, active and agile. It helps in numerous ways, be it in improving flexibility, strength and posture, or reducing stress and providing a sense of calm. Nutrition and diet are an important part of fitness along with physical exercise. On that account, it becomes necessary to understand whether yoga should be done on an empty stomach or notAnshuka Parwani, a yoga expert, and Pooja Makhija, a nutritionist took to Instagram to talk about this dilemma that many face.Pooja believes that it’s important to have something before starting with your exercise in the morning. It should be quite light and not too heavy to kickstart your metabolism.While both have contrasting opinions, they strongly agreed and upheld the point that you know your body better than anyone else. Hence, it’s important to observe and understand what your body is trying to tell you and do as one may deem fit. They said, if practising yoga on an empty stomach is suiting you better, do that. On the other hand, if it feels like you need something to get a better start, follow that as a part of your routine.    "
  },
  {
    "id": 39,
    "title": "Exercise Improves Brain Fitness as You Age ",
    "Image": "https://www.verywellfit.com/thmb/GO6ZNMAt2wgFWBBrMP3sYzN8F3o=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-726775975-e35ebd2a79b34c52891e89151988aa02.jpeg",
    "category": "Fitness",
    "description": "Researchers recruited 105 men and women aged 70 to 77 and split them into three groups. The first performed supervised exercise twice a week with high-intensity interval training (HIIT) at a 90% peak heart rate. The second did moderate-intensity training at 70% peak heart rate. The third, a control group, did at least 30 minutes of daily activity, but at a low intensity and didn't have heart rate measured.There was one major aspect of improvement that wasn't related to heart rate or cortical thickness, Dr. Haberg adds—it was whether the participants felt control over their choices. For example, those who were able to choose their activity, where they exercised, and whether they exercised alone or with a training buddy tended to have more beneficial outcomes.rforming an activity chosen by the individual is key to better brain health, says Haberg. Also, diligently following physical activity guidelines provides a significant cardiorespiratory effect in healthy older adults. That type of control also can be part of maintaining a regular fitness routine, previous research suggests, because it can lead to greater enjoyment with exercise. For example, one study notes that about 50% of participants in exercise programs drop out in the first 6 months, but that those who feel positive emotions tend to have significantly higher levels of program adherence"
  },
  
  {
    "id": 41,
    "title": "Mirchi Bajji | Mirapakaya Bajji",
    "Image": "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Andhra_Style_Mirapakaya_bajji_Recipe_Stuffed_Chili_Recipe_.jpg",
    "category": "Food",
    "description": "Mirapakaya bajji is a street food from Andhra Pradesh and Karnataka. These delicious bajjis are also known as mirapakaya bajji in Andhra and is a well known street food there. there is another version of mirchi bajji sold in Andhra Pradesh – Cut mirchi bajji which is also equally tasty."
  },
  {
    "id": 42,
    "title": "Masala Dosa",
    "Image": "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
    "category": "food",
    "description": "A traditional southern Indian dish known as masala dosa is popular throughout the country, made from a batter of soaked rice and lentils that is baked into a thin pancake and usually stuffed with potatoes, onions, and mustard seeds. The dish is often garnished with grated coconut and chopped coriander."
  },
  {
    "id": 2,
    "title": "Masala Dosa",
    "Image": "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
    "category": "Food",
    "description": "A traditional southern Indian dish known as masala dosa is popular throughout the country, made from a batter of soaked rice and lentils that is baked into a thin pancake and usually stuffed with potatoes, onions, and mustard seeds. The dish is often garnished with grated coconut and chopped coriander."
  },
 
  {
    "id": 44,
    "title": "Excessive Consumption of Ginger can Lead to These Side Effects",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/05/ginger-16521781103x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "Ginger is a very common Indian household ingredient, which is well known for its amazing flavour. For many, morning tea is incomplete without crushing ginger in it. Not only as spices, but ginger has been a traditional remedy in many cultures for thousands of years. After all, it is loaded with impeccable health benefits. While we have been told time and again that ginger carries innumerable nutritious benefits, it’s rarely discussed that this magical ingredient can also cause side effects.Although the side effects usually happen after excessive intake of ginger, several cases have been witnessed where it aggravates the health issues. So let’s learn more about the side effects.As ginger carries antiplatelet properties, excessive intake of ginger may cause bleeding. Not just this, but if it is consumed with clove or garlic, it further increases the risk of excessive bleeding.The most common symptoms of basic side effects caused by excessive ginger intake are skin rashes, eye redness, dyspnea, itching, swollen lips, itchy eyes, and throat discomfort. In such circumstances, it is advised to immediately seek medical attention.Consuming ginger beyond the prescribed limit of 1500 mg per day may even lead to the risk of miscarriage. Therefore it is advised to avoid too much ginger during pregnancy and intake it only after consulting the doctor"
  },
  {
    "id": 50,
    "title": "Biryanis",
    "Image": "https://assets.thehansindia.com/h-upload/2020/02/05/260294-biryani.webp",
    "category": "Food",
    "description":"Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat or in some cases without any meat, and sometimes, in addition, eggs and potatoes"
  },
  {
    "id": 50,
    "title": "Biryanis",
    "Image": "https://assets.thehansindia.com/h-upload/2020/02/05/260294-biryani.webp",
    "category": "mix",
    "description":"Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat or in some cases without any meat, and sometimes, in addition, eggs and potatoes"
  },
  
  ]);
  return (
    <div>
      <store.Provider value={[details, setDetails]}>

        {props.children}


      </store.Provider>
    </div>
  )
}

export default Details