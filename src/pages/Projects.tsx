import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Projects = () => {
const projectYears = [
{
year: "RI Year 2024-2025",
projects: [
{
id: 1,
image: '/lovable-uploads/image1.png',
title: 'Pawsitivity'
},
{
id: 2,
image: '/lovable-uploads/image2.png',
title: 'Mind matters'
},
{
id: 3,
image: '/lovable-uploads/image3.png',
title: 'Project Disha felicitation'
},
{
id: 4,
image: '/lovable-uploads/image4.png',
title: 'Her stories'
},
{
id: 5,
image: '/lovable-uploads/image5.png',
title: 'Yes to access'
},
{
id: 6,
image: '/lovable-uploads/image6.png',
title: 'Rota hikes'
},
{
id: 7,
image: '/lovable-uploads/image7.png',
title: 'Project sanjeevani'
},
{
id: 7,
image: '/lovable-uploads/image8.png',
title: 'Walkathon'
},
{
id: 7,
image: '/lovable-uploads/image9.png',
title: 'Tech Mitra'
},
{
id: 7,
image: '/lovable-uploads/image10.png',
title: 'Snow Lit'
},
{
id: 7,
image: '/lovable-uploads/image14.png',
title: 'Prabodhan 3.0'
},
{
id: 7,
image: '/lovable-uploads/image12.png',
title: 'Secret Santa'
},
]
},
{
year: "RI Year 2023-2024",
projects: [
{
id: 7,
image: '/lovable-uploads/23-24/1.png',
title: 'Food for thought Phase 5'
},
{
id: 8,
image: '/lovable-uploads/23-24/2.png',
title: 'Book distribution drive'
},
{
id: 9,
image: '/lovable-uploads/23-24/3.png',
title: 'Food for thought Phase 6'
},
{
id: 10,
image: '/lovable-uploads/23-24/4.png',
title: 'Sense of belongings'
},
{
id: 11,
image: '/lovable-uploads/23-24/5.png',
title: 'Plant a tree with us'
},
{
id: 12,
image: '/lovable-uploads/23-24/6.png',
title: 'Joy of reading'
},
{
id: 13,
image: '/lovable-uploads/23-24/7.png',
title: 'Dengue awareness drive'
},
{
id: 14,
image: '/lovable-uploads/23-24/8.png',
title: 'Decyclers'
},
{
id: 15,
image: '/lovable-uploads/23-24/9.png',
title: 'Threads of kindness'
},
{
id: 16,
image: '/lovable-uploads/23-24/10.png',
title: 'Deepavali'
},
]
},
{
year: " RI Year 2022-2023",
projects: [
{
id: 11,
image: '/lovable-uploads/22-23/1.png',
title: 'Rota Fest'
},
{
id: 12,
image: '/lovable-uploads/22-23/2.png',
title: 'Educational Support'
},
{
id: 13,
image: '/lovable-uploads/22-23/3.png',
title: 'Food for thought'
},
{
id: 14,
image: '/lovable-uploads/22-23/4.png',
title: 'Pedal for health'
},
{
id: 15,
image: '/lovable-uploads/22-23/5.png',
title: 'Arram flood relief drive'
},
{
id: 16,
image: '/lovable-uploads/22-23/6.png',
title: 'Prabodhan'
},
{
id: 17,
image: '/lovable-uploads/22-23/7.png',
title: 'Saksham'
},
{
id: 18,
image: '/lovable-uploads/22-23/8.png',
title: 'Decyclers'
},
{
id: 19,
image: '/lovable-uploads/22-23/9.png',
title: 'Secret Santa'
},
{
id: 20,
image: '/lovable-uploads/22-23/10.png',
title: 'Book donation drive'
}
]
},
{
year: "RI Year 2020-2021",
projects: [
{
id: 21,
image: '/lovable-uploads/20-21/1.png',
title: 'Lets talk pride'
},
{
id: 22,
image: '/lovable-uploads/20-21/2.png',
title: 'Pratyahara'
},
{
id: 23,
image: '/lovable-uploads/20-21/3.png',
title: 'Organ donation pledge'
},
{
id: 24,
image: '/lovable-uploads/20-21/4.png',
title: 'Organ donation drive'
},
{
id: 25,
image: '/lovable-uploads/20-21/5.png',
title: 'Donate a pad'
},
{
id: 26,
image: '/lovable-uploads/20-21/6.png',
title: 'Blood donation camp'
},
{
id: 27,
image: '/lovable-uploads/20-21/7.png',
title: 'Home agro drive'
},
]
}
];

const ongoingProjects = [
  // --- July Events ---
  {
    id: 1,
    title: 'Charter Day Celebration',
    type: 'Standalone',
    images: [
      '/lovable-uploads/july-events/CharterDay_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/july-events/CharterDay_2.png'  // Placeholder for Image 2 from the document
    ],
    description: 'The Rotaract Club of BMS Yelahanka celebrated its 9th Charter Day at Miracle Manna Children’s Home. The event included fun games, singing with the children, distributing ration supplies, and making DIY cards for Rotarians, strengthening bonds through service and fellowship.'
  },
  {
    id: 2,
    title: 'Breast Cancer Screening (Health Camp by RBY)',
    type: 'Collaboration',
    images: [
      '/lovable-uploads/july-events/BreastCancerScreening_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/july-events/BreastCancerScreening_2.png'  // Placeholder for Image 2 from the document
    ],
    description: 'A medical drive focused on **breast cancer screening** for awareness and early detection for women around Yelahanka. This is a long-term initiative to conduct at least one health camp monthly, expanding to include ECG and other essential health services.'
  },
  // --- August Events ---
  {
    id: 3,
    title: '9th Installation of Office Bearers (AROHA)',
    type: 'Standalone',
    images: [
      '/lovable-uploads/august-events/Installation_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/august-events/Installation_2.png'  // Placeholder for Image 2 from the document
    ],
    description: 'The club’s 9th Installation, "AROHA," formally installed Rtr. Saanvi M S as President and her board. The event, graced by dignitaries, focused on **sustainability** by gifting saplings and crochet keychains, concluding with networking and a fellowship lunch.'
  },
  {
    id: 4,
    title: 'Plantation Drive',
    type: 'Collaboration',
    images: [
      '/lovable-uploads/august-events/PlantationDrive_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/august-events/PlantationDrive_2.png'  // Placeholder for Image 2 from the document
    ],
    description: 'A large-scale plantation drive at J B Kaval Tree Park in collaboration with Rotary, Lions Club, Forest Dept. of Karnataka, and IMA (Yelahanka). **Over 300 saplings were planted**, fostering environmental awareness and reinforcing collective responsibility towards sustainability.'
  },
  {
    id: 5,
    title: 'Pragathi Prothsaha 3.0 – 4th School Kit Distribution',
    type: 'Collaboration',
    images: [
      '/lovable-uploads/august-events/SchoolKitDistribution_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/august-events/SchoolKitDistribution_2.png'  // Placeholder for Image 2 from the document
    ],
    description: 'Part of an educational outreach, **215 school kits were distributed** to students at Netaji Higher Primary & High School. RAC BMSY contributed 15 kits in collaboration with RAC Vidyaranyapura, aiming to motivate students with essential academic resources.'
  },
  {
    id: 6,
    title: 'Pick Your Pride – Flag Disposal & Awareness Drive',
    type: 'Collaboration',
    images: [
      '/lovable-uploads/august-events/FlagDisposal_1.png', // Placeholder for Image 1 from the document
        // Placeholder for Image 2 from the document (Only one pic was available, second is placeholder)
    ],
    description: 'An initiative in collaboration with RAC United Ranchi (RID 3250) and other clubs to promote respectful National Flag disposal as per the Flag Code of India. Members collected discarded flags and disposed of them through dignified burning/burying, fostering **unity, patriotism, and awareness**.'
  },
  {
    id: 7,
    title: 'Rang-E-Azadi – Independence Day Art Competition',
    type: 'Standalone',
    images: [
      '/lovable-uploads/august-events/ArtCompetition_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/august-events/ArtCompetition_2.png'  // Placeholder for Image 2 from the document
    ],
    description: 'An art competition conducted at Sai Shankara Vidhya Shala for Classes 6–10 on the themes "India Through My Eyes" and "My Dream India". The event blended **patriotism with creativity**, providing a platform for self-expression.'
  },
  {
    id: 8,
    title: 'Ice Breaking Session',
    type: 'Standalone',
    images: [
      '/lovable-uploads/august-events/IceBreaking_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/august-events/IceBreaking_2.png'  // Placeholder for Image 2 from the document
    ],
    description: 'An online fellowship session for the Core Team and BoDs, organized by the Club Service Avenue. Games like Two Truths & a Lie and Guess the Song fostered **comfort, familiarity, and smoother collaboration** among the leadership team.'
  },
  {
    id: 9,
    title: '8th Eco-Friendly Clay Ganesha Making Workshop',
    type: 'Collaboration',
    images: [
      '/lovable-uploads/august-events/GaneshaWorkshop_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/august-events/GaneshaWorkshop_2.png'  // Placeholder for Image 2 from the document
    ],
    description: 'A hands-on workshop in collaboration with RAC Vidyaranyapura, where 14 RAC BMSY members learned to craft idols using eco-friendly clay, promoting **responsible and eco-conscious festive celebrations**.'
  },
  {
    id: 10,
    title: 'Wanderlust Wanderers',
    type: 'Collaboration',
    images: [
      '/lovable-uploads/august-events/WanderlustWanderers_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/august-events/WanderlustWanderers_2.png'  // Placeholder for Image 2 from the document
    ],
    description: 'A virtual cultural exchange event hosted with 18 clubs and over 100 participants. Members showcased travel destinations to highlight **cultural diversity, fellowship beyond borders, and inter-club collaboration**.'
  },
  {
    id: 11,
    title: 'Need Assessment Report – Chikkannahosahalli Village',
    type: 'Standalone',
    images: [
      '/lovable-uploads/august-events/NeedAssessment_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/august-events/NeedAssessment_2.png'  // Placeholder for Image 2 from the document (Only one pic was available, second is placeholder)
    ],
    description: 'A survey covering ~220 residents that highlighted gaps in **waste management, healthcare awareness, and menstrual hygiene practices**. The findings call for eco-friendly health initiatives, mentorship, and student support.'
  },
  {
    id: 12,
    title: 'Club Officials Learning Seminar (COLS)',
    type: 'Participatory',
    images: [
      '/lovable-uploads/august-events/COLS_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/august-events/COLS_2.png'  // Placeholder for Image 2 from the document (Only one pic was available, second is placeholder)
    ],
    description: 'Participation in COLS at AIMS Institute, a full-day training for club officials and BoDs of RY 2025–26. The seminar provided workshops and guidance on **leadership, teamwork, and club management**, boosting motivation for impactful service.'
  },
  // --- September Events ---
  {
    id: 13,
    title: 'Creating Safer Spaces: A POSH Awareness Workshop',
    type: 'Collaboration',
    images: [
      '/lovable-uploads/september-events/POSH_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/september-events/POSH_2.png'  // Placeholder for Image 2 from the document (Only one pic was available, second is placeholder)
    ],
    description: 'An online workshop on the **Prevention of Sexual Harassment (POSH) Act**, conducted by Adv. Yamina Rizvi. The session educated attendees on what constitutes harassment and mechanisms for reporting, fostering safer and more inclusive spaces.'
  },
  {
    id: 14,
    title: 'World Suicide Prevention Day Seminar',
    type: 'Standalone',
    images: [
      '/lovable-uploads/september-events/SuicidePrevention_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/september-events/SuicidePrevention_2.png'  // Placeholder for Image 2 from the document
    ],
    description: 'A seminar to mark **World Suicide Prevention Day** focused on raising mental health awareness and breaking stigma. Ms. Chethana Srinivas, the college’s counsellor, guided over 100 participants on understanding mental health and providing support.'
  },
  {
    id: 15,
    title: 'Career Catalyst 2.0',
    type: 'Standalone',
    images: [
      '/lovable-uploads/september-events/CareerCatalyst_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/september-events/CareerCatalyst_2.png'  // Placeholder for Image 2 from the document
    ],
    description: 'A LinkedIn-focused session for students by alumnus Shashwath Aiyappa, sharing insights on **leveraging LinkedIn for networking and career growth** and his journey in cybersecurity. About 100 participants attended.'
  },
  {
    id: 16,
    title: 'Rota Week Day 1 – Flashmob',
    type: 'Standalone',
    images: [
      '/lovable-uploads/september-events/Flashmob_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/september-events/Flashmob_2.png'  // Placeholder for Image 2 from the document
    ],
    description: 'Rota Week started with an energetic Flashmob, led by Tandava – the college dance club. The performance lasted about 15 minutes, attracting 100–200 students, successfully achieving its objective of **marketing and outreach**.'
  },
  {
    id: 17,
    title: 'Rota Week Day 2 & 5 – Book Donation Drive',
    type: 'Partnership',
    images: [
      '/lovable-uploads/september-events/BookDonation_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/september-events/BookDonation_2.png'  // Placeholder for Image 2 from the document
    ],
    description: 'A two-day drive that successfully collected around **750 books** from 191 participants. This impactful service project concluded Rota Week, reinforcing the club’s commitment to education and community development.'
  },
  {
    id: 18,
    title: 'Rota Week Day 3 – Jamming Session',
    type: 'Standalone',
    images: [
      '/lovable-uploads/september-events/JammingSession_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/september-events/JammingSession_2.png'  // Placeholder for Image 2 from the document
    ],
    description: 'A fun-filled fellowship activity organized in Kuteera with Rushang, the music club. The session drew a large crowd of students who enjoyed the lively music, encouraging **bonding and entertainment**.'
  },
  {
    id: 19,
    title: 'Rota Week Day 4 – GBM & Orientation',
    type: 'Standalone',
    images: [
      '/lovable-uploads/september-events/GBM_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/september-events/GBM_2.png'  // Placeholder for Image 2 from the document
    ],
    description: 'Featured an orientation by PP. Rtr. Rtn. Amogh Simha on Rotaract and leadership, followed by the **General Body Meeting (GBM)**. The session included the President’s Address, Secretary’s Report, and the formal installation of new Joint Treasurers.'
  },
  {
    id: 20,
    title: 'Unheard Voices: Nepal’s Reality',
    type: 'Collaboration',
    images: [
      '/lovable-uploads/september-events/UnheardVoices_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/september-events/UnheardVoices_2.png'  // Placeholder for Image 2 from the document
    ],
    description: 'A virtual cultural exchange event hosted to give friends from Nepal a platform to share the true story of their country’s current situation. The event fostered **empathy, cross-border understanding, and international fellowship** among 35+ participants.'
  },
  {
    id: 21,
    title: 'RCB Speaker Series – From Lens to Legacy',
    type: 'Collaboration',
    images: [
      '/lovable-uploads/september-events/SpeakerSeries_1.png', // Placeholder for Image 1 from the document
      '/lovable-uploads/september-events/SpeakerSeries_2.png'  // Placeholder for Image 2 from the document (Only one pic was available, second is placeholder)
    ],
    description: 'A virtual session featuring the founder of Khasak Films on **“Building a Creative Enterprise in Film & Media.”** The discussion highlighted the balance between creativity and business acumen, inspiring participants to pursue creative ventures.'
  },
];

return (
<div className="min-h-screen bg-black text-white font-sans">
<Header />

<div className="pt-24">
{/* Hero Section */}
<section className="py-20 bg-gradient-to-br from-black via-deep-base to-section-bg">
<div className="container mx-auto px-6 text-center">
<h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-purple-highlight to-button-active bg-clip-text text-transparent">
Our Projects
</h1>
<p className="text-xl text-gray-300 max-w-2xl mx-auto font-heading">
Discover the impactful initiatives we've undertaken to serve our community and create lasting positive change.
</p>
</div>
</section>

{/* Projects Tabs */}
<section className="py-20 bg-section-bg">
<div className="container mx-auto px-6">
<Tabs defaultValue="ongoing" className="w-full">
<TabsList className="grid w-full grid-cols-2 mb-12 bg-black/50 border border-purple-highlight/20">
<TabsTrigger
value="ongoing"
className="data-[state=active]:bg-purple-highlight data-[state=active]:text-white font-heading"
>
Projects of 2025-26
</TabsTrigger>
<TabsTrigger
value="previous"
className="data-[state=active]:bg-purple-highlight data-[state=active]:text-white font-heading"
>
Previous Projects
</TabsTrigger>
</TabsList>

<TabsContent value="ongoing">
<div className="space-y-12">
{ongoingProjects.map((project, index) => (
<div
key={project.id}
className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
>
{/* Images Section */}
<div className="w-full lg:w-1/2">
<div className="grid grid-cols-2 gap-4">
{project.images.slice(0, 4).map((image, imgIndex) => (
<div key={imgIndex} className="relative overflow-hidden rounded-lg group">
<img
src={image}
alt={`${project.title} ${imgIndex + 1}`}
className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
/>
</div>
))}
</div>
</div>

{/* Content Section */}
<div className="w-full lg:w-1/2 space-y-6">
<div className="flex items-center gap-4">
<Badge className="bg-purple-highlight text-white font-heading px-4 py-2">{project.type}</Badge>
</div>
<h3 className="text-3xl font-bold text-purple-highlight font-heading">
{project.title}
</h3>
<p className="text-gray-300 text-lg leading-relaxed font-sans">
{project.description}
</p>
</div>
</div>
))}
</div>
</TabsContent>

<TabsContent value="previous">
<div className="space-y-12">
{projectYears.map((yearData) => (
<div key={yearData.year}>
<h3 className="text-3xl font-bold text-center mb-8 text-purple-highlight font-heading">
{yearData.year}
</h3>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{yearData.projects.map((project) => (
<div
key={project.id}
className="group cursor-pointer"
>
<div className="relative overflow-hidden rounded-lg border-2 border-transparent hover:border-purple-highlight/50 transition-all duration-300">
<img
src={project.image}
alt={project.title}
className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<h4 className="text-white font-heading font-semibold text-center px-4">
{project.title}
</h4>
</div>
</div>
</div>
))}
</div>
</div>
))}
</div>
</TabsContent>
</Tabs>
</div>
</section>
</div>

<Footer />
</div>
);
};

export default Projects;