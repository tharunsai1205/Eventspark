import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const eventsData = {
  Hyderabad: [
    {
      id: 1,
      name: "Agam - Arrival of the ethereal",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyIEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00450046-xefztgzrrc-portrait.jpg",
      category: "Music",
      date: "Aug 2",
      fullDate: "Sat 2 Aug 2025",
      time: "7:30 PM",
      duration: "3 Hours",
      ageGroup: "All age groups",
      languages: "Hindi, English",
      genres: "Fusion, Rock, Indian Classical",
      venue: "Gachibowli Stadium",
      venueDetails: "Indoor Stadium with excellent acoustics and seating for 15,000 people",
      price: "₹1299 onwards",
      description: "Agam returns with their ethereal fusion of Indian classical and contemporary rock music. Experience a magical evening of soulful melodies and energetic performances that will transport you to another realm.",
      about: "Agam is a Bangalore-based contemporary Carnatic progressive rock band. The band was formed in 2003 and have been performing ever since. The band initially started as a simple three piece outfit, with just a guitar, drums and a violin.",
      highlights: [
        "Live fusion of Indian classical and rock",
        "Performance by renowned band Agam",
        "3 hours of non-stop entertainment",
        "Meet & greet opportunities"
      ],
      artists: [
        {
          name: "Harish Sivaramakrishnan",
          role: "Lead Vocals, Violin",
          image: "https://via.placeholder.com/150x150?text=Harish"
        }
      ],
      ticketTypes: [
        { type: "Bronze Standing", price: "₹1299", availability: "Available" },
        { type: "Silver Standing", price: "₹1899", availability: "Available" },
        { type: "Gold Seating", price: "₹2499", availability: "Few Left" },
        { type: "VIP Experience", price: "₹3999", availability: "Available" }
      ],
      seatingChart: "https://via.placeholder.com/800x600?text=Seating+Chart",
      interested: 1247,
      rules: [
        "No outside food and beverages allowed",
        "Age restriction: All ages welcome",
        "No smoking inside the venue",
        "Mobile photography allowed, no professional cameras"
      ]
    },
    {
      id: 4,
      name: "Armaan Malik Live",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00446350-krsynyaugt-portrait.jpg",
      category: "Music",
      date: "Oct 11",
      fullDate: "Sat 11 Oct 2025",
      time: "5:30 PM",
      duration: "5 Hours",
      ageGroup: "All age groups",
      languages: "Hindi, Telugu, Tamil, English",
      genres: "Bollywood, Fusion, Indian pop, Regional, Romantic",
      venue: "Boulder Hills: Hyderabad",
      venueDetails: "A 18 hole championship golf course in the heart of Hyderabad managed by BDMS! Also housing driving range, F&B banqueting and social club facilities!",
      price: "₹899 onwards",
      description: "Cardex Group presents an unforgettable night with Armaan Malik Live in Concert at Boulder Hills, Gachibowli! 🎤 Don't miss out on the soulful melodies and energetic performances! 🎵",
      about: "Armaan Malik is an Indian singer, songwriter, record producer, voice-over artist, and actor. He is known for his singing in multiple languages including Hindi, Telugu, English, Bengali, Kannada, Marathi, Tamil, Gujarati, Punjabi, Urdu and Malayalam.",
      highlights: [
        "Live performance by Armaan Malik",
        "Multi-language songs",
        "5 hours of continuous entertainment",
        "Beautiful outdoor venue setting"
      ],
      artists: [
        {
          name: "Armaan Malik",
          role: "Music, Voice",
          image: "https://via.placeholder.com/150x150?text=Armaan"
        }
      ],
      ticketTypes: [
        { type: "Bronze Standing", price: "₹899", availability: "Available" },
        { type: "Silver Standing", price: "₹1499", availability: "Available" },
        { type: "VIP Standing", price: "₹2499", availability: "Available" },
        { type: "MIP Seating", price: "₹3999", availability: "Few Left" },
        { type: "Diamond Fan Pit", price: "₹5999", availability: "Available" },
        { type: "Fan Pit", price: "₹7999", availability: "Available" }
      ],
      seatingChart: "https://via.placeholder.com/800x600?text=Armaan+Malik+Seating+Chart",
      interested: 564,
      rules: [
        "Contactless Ticketing & Fast-track Entry with M-ticket",
        "No outside food and beverages allowed",
        "Age restriction: All ages welcome",
        "Indoor Amphitheatre and Open Air Amphitheatre available"
      ]
    }
  ],
  Mumbai: [
    {
      id: 9,
      name: "Ab hai ABki Baari",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCA3IEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00453059-pznhckpydt-portrait.jpg",
      category: "Comedy",
      date: "Aug 7",
      fullDate: "Thu 7 Aug 2025",
      time: "8:00 PM",
      duration: "2 Hours",
      ageGroup: "18+ only",
      languages: "Hindi, English",
      genres: "Stand-up Comedy, Observational Humor",
      venue: "Comedy Store Mumbai",
      venueDetails: "Mumbai's premier comedy venue with intimate seating and great acoustics",
      price: "₹599 onwards",
      description: "Get ready for a hilarious evening as our comedian takes the stage for 'Ab hai ABki Baari' - a show filled with relatable humor and fresh perspectives on everyday life.",
      about: "A rising star in the Indian comedy circuit, known for observational humor and crowd interaction.",
      highlights: [
        "Fresh stand-up comedy content",
        "Interactive audience participation",
        "2 hours of non-stop laughter",
        "Intimate venue setting"
      ],
      artists: [
        {
          name: "Comedy Artist",
          role: "Stand-up Comedian",
          image: "https://via.placeholder.com/150x150?text=Comedian"
        }
      ],
      ticketTypes: [
        { type: "Regular Seating", price: "₹599", availability: "Available" },
        { type: "Premium Seating", price: "₹899", availability: "Available" },
        { type: "VIP Table", price: "₹1299", availability: "Few Left" }
      ],
      seatingChart: "https://via.placeholder.com/800x600?text=Comedy+Seating+Chart",
      interested: 342,
      rules: [
        "18+ age restriction strictly enforced",
        "No photography or recording during the show",
        "Light snacks and beverages available",
        "Show may contain adult content"
      ]
    }
  ]
};

const EventDetailPage = () => {
  const { city, eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showSeatingChart, setShowSeatingChart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const cityEvents = eventsData[city] || [];
    const foundEvent = cityEvents.find(e => e.id === parseInt(eventId));
    
    setTimeout(() => {
      setEvent(foundEvent);
      setIsLoading(false);
    }, 1000);
  }, [city, eventId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">The event you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate(-1)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
    
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Events</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
      
        <div className="mb-8 animate-[fadeInUp_0.8s_ease-out]">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {event.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         
          <div className="lg:col-span-2 space-y-8">
          
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-[fadeInUp_0.8s_ease-out] animation-delay-200ms">
              <img 
                src={event.image} 
                alt={event.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-800">
                  {event.category}
                </span>
                <div className="flex items-center text-white">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="font-medium">{event.interested} interested</span>
                </div>
              </div>
            </div>

            
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-[fadeInUp_0.8s_ease-out] animation-delay-400ms">
              <div className="space-y-8">
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About The Event</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">{event.description}</p>
                  <p className="text-gray-600">{event.about}</p>
                </div>

                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Event Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

             
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Artists</h3>
                  <div className="flex items-center space-x-4">
                    {event.artists.map((artist, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <img 
                          src={artist.image} 
                          alt={artist.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
                        />
                        <div>
                          <p className="font-bold text-gray-900">{artist.name}</p>
                          <p className="text-sm text-gray-600">{artist.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

             
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">About The Venue</h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{event.venue}</h4>
                    <p className="text-gray-700">{event.venueDetails}</p>
                  </div>
                </div>

               
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Seating Chart</h3>
                    <button 
                      onClick={() => setShowSeatingChart(!showSeatingChart)}
                      className="text-purple-600 hover:text-purple-800 font-medium"
                    >
                      {showSeatingChart ? 'Hide Chart' : 'View Chart'}
                    </button>
                  </div>
                  {showSeatingChart && (
                    <div className="bg-gray-100 rounded-xl p-4">
                      <img 
                        src={event.seatingChart} 
                        alt="Seating Chart"
                        className="w-full rounded-lg"
                      />
                    </div>
                  )}
                </div>

                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Terms & Conditions</h3>
                  <div className="space-y-2">
                    {event.rules.map((rule, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 animate-[fadeInUp_0.8s_ease-out] animation-delay-600ms">
           
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">{event.fullDate}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{event.time}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{event.duration}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">{event.venue}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-gray-700">{event.ageGroup}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4v10a2 2 0 002 2h6a2 2 0 002-2V8M9 8h6" />
                  </svg>
                  <span className="text-gray-700">{event.languages}</span>
                </div>
              </div>

             
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Select Tickets</h3>
                <div className="space-y-3">
                  {event.ticketTypes.map((ticket, index) => (
                    <div 
                      key={index}
                      className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                        selectedTicket === index 
                          ? 'border-purple-500 bg-purple-50' 
                          : 'border-gray-200 hover:border-purple-300'
                      } ${ticket.availability === 'Few Left' ? 'border-orange-200 bg-orange-50' : ''}`}
                      onClick={() => setSelectedTicket(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">{ticket.type}</p>
                          <p className="text-2xl font-bold text-purple-600">{ticket.price}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            ticket.availability === 'Available' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {ticket.availability}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

             
              <button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={selectedTicket === null}
              >
                {selectedTicket !== null ? 'Book Now' : 'Select a Ticket'}
              </button>

             
              <button className="w-full mt-3 border-2 border-purple-600 text-purple-600 py-3 rounded-xl font-medium hover:bg-purple-50 transition-colors duration-300">
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span>I'm Interested</span>
                </div>
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                {event.interested} people are interested in this event
              </p>
            </div>
          </div>
        </div>
      </div>

  
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animation-delay-200ms {
          animation-delay: 200ms;
        }
        
        .animation-delay-400ms {
          animation-delay: 400ms;
        }
        
        .animation-delay-600ms {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
};

export default EventDetailPage;